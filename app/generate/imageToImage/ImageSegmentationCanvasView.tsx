import { GeneImageContext } from '@/context/generate'
import { getScaledSize } from '@/lib/getScaledSize'
import { ImageSegment, getOutput } from '@/lib/imageSegmentation'
import { ImageSegmentation } from '@/types/generate'
import React, { useContext, useEffect, useState } from 'react'

type ImageSegmentationCanvasProps = {
  imgSrc: string
  imgSegmentation: ImageSegmentation[]
}

const ImageSegmentationCanvasView = ({ imgSrc, imgSegmentation }: ImageSegmentationCanvasProps) => {

  const canvas = React.useRef<HTMLCanvasElement>(null)
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)
  const [output, setOutput] = useState<ImageSegment[]>([])
  const [startTs, setStartTs] = useState<DOMHighResTimeStamp>(performance.now())
  const animDuration = 200;

  const { label } = useContext(GeneImageContext)

  useEffect(() => {
    draw()
  }, [imgSrc, output, label])

  useEffect(() => {
    async function run() {
      const output = await getOutput(imgSegmentation.filter(item => ['Face', 'Background'].includes(item.label)), width, height);
      setOutput(output)
    }
    if (!!imgSegmentation.length && width && height) {
      run()
    }
  }, [imgSegmentation, width, height])

  async function draw() {
    if (!canvas.current) return

    const img = new Image()
    img.src = imgSrc
    await new Promise((resolve) => {
      img.onload = () => {
        resolve(true)
      }
    })

    let [width, height] = getScaledSize(img.width, img.height, 340)
    setWidth(width)
    setHeight(height)

    setStartTs(performance.now())
    drawHelper(img)
  }

  function drawHelper(img: HTMLImageElement) {
    const ctx = canvas.current?.getContext('2d')
    if (!ctx) return

    const maskToDraw = output.reduce((arr, o, i) => {
      const mask = o?.bitmap;
      if (mask && label === o.label) {
        arr.push(mask);
      }
      return arr;
    }, [] as ImageBitmap[]);


    const duration = performance.now() - startTs;
    ctx.globalAlpha = Math.min(duration, animDuration) / animDuration;
    ctx.clearRect(0, 0, width, height)
    for (const mask of maskToDraw) {
      ctx.drawImage(mask, 0, 0, width, height);
    }
    if (duration < animDuration) {
      // when using canvas, prefer to use requestAnimationFrame over setTimeout & setInterval
      // https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
      window.requestAnimationFrame(() => drawHelper(img));
    }
  }


  return (
    <div className='w-full h-full flex items-center justify-center'>
      <canvas
        ref={canvas} width={width} height={height}
        className='cursor-pointer transition-all' />
    </div>
  )
}

export default ImageSegmentationCanvasView
