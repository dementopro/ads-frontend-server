import { useDebounceEffect } from '@/app/generate/remixTool/useDebounceEffect';
import { DragEvent, useRef, useState } from 'react';
import ReactCrop, { PixelCrop, type Crop, centerCrop, makeAspectCrop } from 'react-image-crop';
import { canvasPreview } from './canvasPreview';
import 'react-image-crop/dist/ReactCrop.css';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import Rotate from '@/app/generate/remixTool/Rotate';
import Scale from '@/app/generate/remixTool/Scale';
import Aspect from '@/app/generate/remixTool/Aspect';

const Crop = () => {
  // State for the crop
  const [crop, setCrop] = useState<Crop>();
  // State for the image source
  const [imgSrc, setImgSrc] = useState('');
  // State for the completed crop
  const [completedCrop, setCompletedCrop] = useState<PixelCrop>();
  // Reference to the preview canvas element
  const previewCanvasRef = useRef<HTMLCanvasElement>(null);
  // State for the scale
  const [scale, setScale] = useState(1);
  // State for the rotation angle
  const [rotate, setRotate] = useState(0);
  // State for the aspect ratio
  const [aspect, setAspect] = useState<number | undefined>(1 / 1);
  // Reference to the image element
  const imgRef = useRef<HTMLImageElement>(null);
  // Reference to a hidden anchor element for downloading
  const blobUrlRef = useRef('');
  // Reference to a hidden anchor element for downloading
  const hiddenAnchorRef = useRef<HTMLAnchorElement>(null);
  // State to keep track of change times
  const [changeTimes, setChangeTimes] = useState(0);

  // Function to handle file selection
  function onSelectFile(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files.length > 0) {
      setCrop(undefined); // Makes crop preview update between images.
      const reader = new FileReader();
      reader.addEventListener('load', () =>
        setImgSrc(reader.result?.toString() || '')
      );
      reader.readAsDataURL(e.target.files[0]);
    }
  }

  // Function to handle image load
  function onImageLoad(e: React.SyntheticEvent<HTMLImageElement>) {
    if (aspect) {
      const { width, height } = e.currentTarget;
      setCrop(centerAspectCrop(width, height, aspect));
    }
  }

  // Function to center aspect crop
  function centerAspectCrop(
    mediaWidth: number,
    mediaHeight: number,
    aspect: number
  ) {
    return centerCrop(
      makeAspectCrop(
        {
          unit: '%',
          width: 90,
        },
        aspect,
        mediaWidth,
        mediaHeight
      ),
      mediaWidth,
      mediaHeight
    );
  }

  // Function to handle drag events (prevents default)
  function handleDrag(e: DragEvent<HTMLDivElement>) {
    e.preventDefault();
  }

  // Function to handle download click
  function onDownloadCropClick() {
    if (!previewCanvasRef.current) {
      throw new Error('Crop canvas does not exist');
    }

    previewCanvasRef.current.toBlob((blob) => {
      if (!blob) {
        throw new Error('Failed to create blob');
      }
      if (blobUrlRef.current) {
        URL.revokeObjectURL(blobUrlRef.current);
      }
      blobUrlRef.current = URL.createObjectURL(blob);
      hiddenAnchorRef.current!.href = blobUrlRef.current;
      hiddenAnchorRef.current!.click();
    });
  }

  // Function to handle reset configurations click
  function onResetConfigsClick() {
    setScale(1);
    setRotate(0);
    setAspect(1 / 1);
  }

  // Use debounce effect to update canvas preview
  useDebounceEffect(
    async () => {
      if (
        completedCrop?.width &&
        completedCrop?.height &&
        imgRef.current &&
        previewCanvasRef.current
      ) {
        // We use canvasPreview as it's much faster than imgPreview.
        canvasPreview(
          imgRef.current,
          previewCanvasRef.current,
          completedCrop,
          scale,
          rotate
        );
        setChangeTimes((changeTimes) => changeTimes + 1);
      }
    },
    100,
    [completedCrop, scale, rotate]
  );

  return (
    <>
      <div className='flex flex-row justify-between'>
        <div className='flex gap-3'>
          <div className='flex flex-col'>
            <Aspect aspect={aspect} setAspect={setAspect} />
            <Rotate rotate={rotate} setRotate={setRotate} />
            <Scale scale={scale} setScale={setScale} />
          </div>
          {/* {
            !!previewCanvasRef.current && (
              <WatermarkImage
                canvas={previewCanvasRef.current!}
                changeTimes={changeTimes}
              />
            )
          } */}
        </div>
        {
          !!imgSrc && (
            <div className='flex flex-col items-center gap-3 mt-4'>
              <div className='relative flex w-min hover:opacity-80'>
                <div className='bg-primary-purple text-white py-2 rounded-lg min-w-[200px] flex items-center justify-center gap-2'>
                  <Icon icon="mdi:upload" width={20} height={20} />
                  <span>Change Image</span>
                </div>
                <input
                  type='file'
                  accept='image/*'
                  className='absolute top-0 left-0 right-0 bottom-0 w-full h-full z-2 opacity-0 cursor-pointer'
                  onChange={onSelectFile}
                />
              </div>
              <button
                onClick={onResetConfigsClick}
                className='bg-primary-purple text-white py-2 rounded-lg hover:opacity-80 min-w-[200px] flex items-center justify-center gap-2'
              >
                <Icon icon="mdi:refresh" width={20} height={20} />
                <span>Reset Configs</span>
              </button>
              <button
                onClick={onDownloadCropClick}
                className='bg-primary-purple text-white py-2 rounded-lg hover:opacity-80 min-w-[200px] flex items-center justify-center gap-2'
              >
                <Icon icon="mdi:download" width={20} height={20} />
                <span>Download Image</span>
              </button>
              <a
                ref={hiddenAnchorRef}
                download
                style={{
                  position: 'absolute',
                  top: '-200vh',
                  visibility: 'hidden',
                }}
              >
                Hidden download
              </a>
            </div>
          )
        }
      </div>
      {
        !imgSrc && (
          <div
            onDrag={handleDrag}
            className={`mt-8 rounded-lg bg-[#1B1C21] border-[1.5px] border-dashed w-[640px] h-[300px] flex flex-col items-center justify-center relative overflow-hidden group cursor-pointer border-primary-purple`}
          >
            <div className='absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-white/10 z-1 hidden group-hover:flex' />
            <div className='flex flex-col items-center justify-center'>
              <Image
                alt='upload'
                width={44}
                height={44}
                src={'/images/admin/upload-image.svg'}
              />
              <div className='text-primary-purple mt-1'>
                Click to upload
              </div>
              <p className='text-primary-gray text-center font-medium w-[296px] mt-2'>
                Or drag and drop image files directly into this area
              </p>
              <p className='text-[#878A92] text-center text-xs w-[302px] mt-9'>
                Size not more than 10MB, aspect ratio less than 2, format does not support gif format
              </p>
            </div>
            <input
              type='file'
              accept='image/*'
              className='absolute top-0 left-0 right-0 bottom-0 w-full h-full z-2 opacity-0 cursor-pointer'
              onChange={onSelectFile}
            />
          </div>
        )
      }
      {
        !!imgSrc && (
          <div className='mt-4 flex justify-center gap-8 h-min'>
            <div className='flex-1 flex items-center justify-center'>
              <div className='flex flex-col'>
                <div className='mb-4 italic'>Input:</div>
                <ReactCrop
                  className='w-full h-full mx-auto bg-[#1B1C21]'
                  crop={crop}
                  onChange={(_, percentCrop) => setCrop(percentCrop)}
                  onComplete={(c) => setCompletedCrop(c)}
                  aspect={aspect}
                >
                  <img
                    ref={imgRef}
                    alt="Crop me"
                    src={imgSrc}
                    style={{ transform: `scale(${scale}) rotate(${rotate}deg)` }}
                    onLoad={onImageLoad}
                  />
                </ReactCrop>
              </div>
            </div>
            <div className='flex-1 flex flex-col h-full'>
              <div className='mb-4 italic'>Output:</div>
              <div className={`flex-1 flex items-center justify-center bg-[#1B1C21] rounded-lg h-full`}>
                {!!completedCrop && (
                  <>
                    <canvas
                      ref={previewCanvasRef}
                      style={{
                        border: '1px solid black',
                        background: 'black',
                        objectFit: 'contain',
                        width: completedCrop.width,
                        height: completedCrop.height,
                      }}
                    />
                  </>
                )}
              </div>
            </div>
          </div>
        )
      }
    </>
  );
};

export default Crop;