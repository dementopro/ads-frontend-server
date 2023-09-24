// Importing necessary dependencies and modules
import { GeneImageContext } from '@/context/generate'; // Importing GeneImageContext from context
import { getScaledSize } from '@/lib/getScaledSize'; // Importing getScaledSize utility
import { ImageSegment, clamp, getOutput } from '@/lib/imageSegmentation'; // Importing image segmentation utilities
import { ImageSegmentation } from '@/types/generate'; // Importing ImageSegmentation type
import React, { MouseEvent, useContext, useEffect, useState } from 'react'; // Importing React and related hooks

// Define the props for the ImageSegmentationCanvas component
type ImageSegmentationCanvasProps = {
  imgSrc: string; // Source URL for the image
  imgSegmentation: ImageSegmentation[]; // Array of image segmentations
}

// ImageSegmentationCanvas component
const ImageSegmentationCanvas = ({ imgSrc, imgSegmentation }: ImageSegmentationCanvasProps) => {
  // Refs to access DOM elements
  const containerEl = React.useRef<HTMLDivElement>(null);
  const canvas = React.useRef<HTMLCanvasElement>(null);

  // State variables
  const [width, setWidth] = useState(0); // Width of the canvas
  const [height, setHeight] = useState(0); // Height of the canvas
  const [output, setOutput] = useState<ImageSegment[]>([]); // Image segmentations to display
  const [highlightIndex, setHighlightIndex] = useState(-1); // Index of the highlighted segment
  const [startTs, setStartTs] = useState<DOMHighResTimeStamp>(performance.now()); // Timestamp for animation start
  const animDuration = 200; // Animation duration in milliseconds

  // Accessing data from GeneImageContext using the useContext hook
  const { label, updateLabel } = useContext(GeneImageContext);

  // useEffect to handle initial rendering and updates
  useEffect(() => {
    draw(); // Call the draw function
  }, [imgSrc, highlightIndex, output, label]); // Dependencies for the effect

  // useEffect to compute image segmentations when data changes
  useEffect(() => {
    async function run() {
      const output = await getOutput(
        imgSegmentation.filter(item => ['Face', 'Background'].includes(item.label)),
        width,
        height
      );
      setOutput(output);
    }
    if (!!imgSegmentation.length && width && height) {
      run();
    }
  }, [imgSegmentation, width, height]); // Dependencies for the effect

  // Function to draw the image and segmentations
  async function draw() {
    if (!canvas.current) return;

    const img = new Image();
    img.src = imgSrc;
    await new Promise((resolve) => {
      img.onload = () => {
        resolve(true);
      }
    });

    let [width, height] = getScaledSize(img.width, img.height);
    setWidth(width);
    setHeight(height);

    setStartTs(performance.now());
    drawHelper(img);
  }

  // Helper function for drawing
  function drawHelper(img: HTMLImageElement) {
    const ctx = canvas.current?.getContext('2d');
    if (!ctx) return;

    const maskToDraw = output.reduce((arr, o, i) => {
      const mask = o?.bitmap;
      if (mask && (i === highlightIndex || label === o.label)) {
        arr.push(mask);
      }
      return arr;
    }, [] as ImageBitmap[]);

    const duration = performance.now() - startTs;
    ctx.globalAlpha = Math.min(duration, animDuration) / animDuration;
    ctx.drawImage(img, 0, 0, width, height);
    for (const mask of maskToDraw) {
      ctx.drawImage(mask, 0, 0, width, height);
    }
    if (duration < animDuration) {
      window.requestAnimationFrame(() => drawHelper(img));
    }
  }

  // Function to handle mouseout event
  function mouseout() {
    setHighlightIndex(-1);
  }

  // Function to get the index of the mouse pointer
  function getIndexOfMouse(event: MouseEvent<HTMLCanvasElement>) {
    const canvasW = canvas.current?.offsetWidth || 0;
    const canvasH = canvas.current?.offsetHeight || 0;
    const imgW = canvas.current?.width || 0;
    const imgH = canvas.current?.height || 0;
    let layerX = event.nativeEvent.offsetX;
    let layerY = event.nativeEvent.offsetY;
    layerX = clamp(layerX, 0, canvasW);
    layerY = clamp(layerY, 0, canvasH);
    const row = Math.floor((layerX / canvasH) * imgH);
    const col = Math.floor((layerY / canvasW) * imgW);
    const index = (imgW * col + row) * 4;
    return index;
  }

  // Function to handle click event
  function onClick(event: MouseEvent<HTMLCanvasElement>) {
    const index = getIndexOfMouse(event);
    for (const [i, o] of output.entries()) {
      const pixel = o.imgData?.data[index];
      if (pixel && pixel > 0) {
        updateLabel(o.label as any);
     
