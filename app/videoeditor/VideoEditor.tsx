"use client"
import React, { useEffect, memo } from 'react'
import { fabric } from "fabric";
import Resources from './Components/Resources'
import Menu from './Components/Menu';
import { useVideoContext } from '@/context/video';
import { ElementsPanel } from './Components/ElementsPanel';
import { TimeLine } from './Components/TimeLine';

const VideoEditor = () => {
  const { setSelectedElement1, setCanvas1, videos, addVideo } = useVideoContext()

  useEffect(() => {
    const canvas = new fabric.Canvas("canvas", {
      height: 500,
      width: 800,
      backgroundColor: "#ededed",
    });
    fabric.Object.prototype.transparentCorners = false;
    fabric.Object.prototype.cornerColor = "#00a0f5";
    fabric.Object.prototype.cornerStyle = "circle";
    fabric.Object.prototype.cornerStrokeColor = "#0063d8";
    fabric.Object.prototype.cornerSize = 10;
    // canvas mouse down without target should deselect active object
    canvas.on("mouse:down", function (e) {
      if (!e.target) {
        setSelectedElement1(null);
      }
    });

    setCanvas1(canvas);
    setTimeout(() => {
      addVideo(0)
    }, 3000)
    fabric.util.requestAnimFrame(function render() {
      canvas.renderAll();
      fabric.util.requestAnimFrame(render);
    });
  }, []);

  return (
    <div className="grid grid-cols-12 w-full">
      <div className="col-span-1 flex flex-col">
        <Menu />
      </div>
      <div className="col-span-2 flex flex-col overflow-auto">
        <Resources />
      </div>
      <div className='col-span-9 flex flex-col'>
        <div className='flex gap-1'>
          <canvas id="canvas" className="h-[500px] w-[800px]" />
          <video width={320} height={240} src={videos[0]} id="video-0" className='hidden'></video>
          <ElementsPanel />
        </div>
        <div className="col-start-3 row-start-3 col-span-2 relative overflow-scroll px-[10px] py-[4px]">
          <TimeLine />
        </div>
      </div>
    </div>
  )
}

export default VideoEditor