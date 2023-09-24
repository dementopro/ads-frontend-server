import { GeneImageContext } from '@/context/generate'; // Importing the GeneImageContext from context
import { getScaledSize } from '@/lib/getScaledSize'; // Importing a utility function to calculate scaled size
import { ImageSegment, getOutput } from '@/lib/imageSegmentation'; // Importing functions for image segmentation
import { ImageSegmentation } from '@/types/generate'; // Importing types related to image segmentation
import React, { useContext, useEffect, useState } from 'react'; // Importing React and necessary hooks

// Define the props for the ImageSegmentationCanvasView component
type ImageSegmentationCanvasProps = {
  imgSrc: string; // Source URL of the image
  imgSegmentation: ImageSegmentation[]; // Image segmentation data
};

// ImageSegmentationCanvasView component
const ImageSegmentationCanvasView = ({ imgSrc, imgSegmentation }: ImageSegmentationCanvasProps) => {
  // Create a ref for the canvas element
  const canvas = React.useRef<HTMLCanvasElement>(null);
  // State variables for canvas width, height, image output, and animation duration
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [output, setOutput] = useState<ImageSegment[]>([]);
  const [startTs, setStartTs] = useState<DOMHighResTimeStamp>(performance.now());
  const animDuration = 200; // Animation duration in milliseconds

  // Access the label from the GeneImageContext using the useContext hook
  const { label } = useContext(GeneImageContext);

  // useEffect to handle image drawing and updates
  useEffect(() => {
    draw();
  }, [imgSrc, output, label]);

  // useEffect to calculate the image segmentation output
  useEffect(() => {
    async function run() {
      // Filter and calculate the image segmentation output based on labels
      const filteredOutput = await getOutput(
        imgSegmentation.filter(item => ['Face', 'Background'].includes(item.label)),
        width,
        height
      );
      setOutput(filteredOutput);
    }
    // Check if there is image segmentation data, width, and height available
    if (!!imgSegmentation.length && width && height) {
      run();
    }
  }, [imgSegmentation, width, height]);

  // Function to draw the image on the canvas
  async function draw() {
    if (!canvas.current) return;

    // Create a new Image element and set its source URL
    const img = new Image();
    img.src = imgSrc;
    await new Promise((resolve) => {
      img.onload = () => {
        resolve(true);
      };
    });

    // Calculate the scaled width and height of the image
    let [scaledWidth, scaledHeight] = getScaledSize(img.width, img.height, 340);
    setWidth(scaledWidth);
    setHeight(scaledHeight);

    // Set the start timestamp for animation
    setStartTs(performance.now());
    // Start drawing the image
    drawHelper(img);
  }

  // Function to help with drawing on the canvas
  function drawHelper(img: HTMLImageElement) {
    const ctx = canvas.current?.getContext('2d');
    if (!ctx) return;

    // Filter masks to draw based on the label
    const maskToDraw = output.reduce((arr, o, i) => {
      const mask = o?.bitmap;
      if (mask && label === o.label) {
        arr.push(mask);
      }
      return arr;
    }, [] as ImageBitmap[]);

    // Calculate the animation duration
    const duration = performance.now() - startTs;
    ctx.globalAlpha = Math.min(duration, animDuration) / animDuration;
    ctx.clearRect(0, 0, width, height); // Clear the canvas
    for (const mask of maskToDraw) {
      ctx.drawImage(mask, 0, 0, width, height); // Draw each mask on the canvas
    }
    if (duration < animDuration) {
      // Use requestAnimationFrame for smooth animations
      window.requestAnimationFrame(() => drawHelper(img));
    }
  }

  // Render the component
  return (
    <div className='w-full h-full flex items-center justify-center'>
      <canvas
        ref={canvas}
        width={width}
        height={height}
        className='cursor-pointer transition-all'
      />
    </div>
  );
};

// Export the ImageSegmentationCanvasView component
export default ImageSegmentationCanvasView;