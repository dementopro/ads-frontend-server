import { createContext, useContext, useEffect, useState } from "react";
import { fabric } from "fabric";
import anime from 'animejs';
import { getUid } from "@/utils";
import { FabricUitls, isHtmlVideoElement } from "@/utils/video";

export type EditorElementBase<T extends string, P> = {
  readonly id: string;
  fabricObject?: fabric.Object;
  name: string;
  readonly type: T;
  placement: Placement;
  timeFrame: TimeFrame;
  properties: P;
};
export type VideoEditorElement = EditorElementBase<
  "video",
  { src: string; elementId: string; imageObject?: fabric.Image, effect: Effect }
>;
export type ImageEditorElement = EditorElementBase<
  "image",
  { src: string; elementId: string; imageObject?: fabric.Object, effect: Effect }
>;

export type AudioEditorElement = EditorElementBase<
  "audio",
  { src: string; elementId: string }
>;
export type TextEditorElement = EditorElementBase<
  "text",
  {
    text: string;
    fontSize: number;
    fontWeight: number;
    splittedTexts: fabric.Text[];
  }
>;

export type EditorElement =
  | VideoEditorElement
  | ImageEditorElement
  | AudioEditorElement
  | TextEditorElement;

export type Placement = {
  x: number;
  y: number;
  width: number;
  height: number;
  rotation: number;
  scaleX: number;
  scaleY: number;
};

export type TimeFrame = {
  start: number;
  end: number;
};

export type EffectBase<T extends string> = {
  type: T;
}

export type BlackAndWhiteEffect = EffectBase<"none"> |
  EffectBase<"blackAndWhite"> |
  EffectBase<"sepia"> |
  EffectBase<"invert"> |
  EffectBase<"saturate">;
export type Effect = BlackAndWhiteEffect;
export type EffecType = Effect["type"];

export type AnimationBase<T, P = {}> = {
  id: string;
  targetId: string;
  duration: number;
  type: T;
  properties: P;
}

export type FadeInAnimation = AnimationBase<"fadeIn">;
export type FadeOutAnimation = AnimationBase<"fadeOut">;

export type BreatheAnimation = AnimationBase<"breathe">

export type SlideDirection = "left" | "right" | "top" | "bottom";
export type SlideTextType = 'none' | 'character';
export type SlideInAnimation = AnimationBase<"slideIn", {
  direction: SlideDirection,
  useClipPath: boolean,
  textType: 'none' | 'character'
}>;

export type SlideOutAnimation = AnimationBase<"slideOut", {
  direction: SlideDirection,
  useClipPath: boolean,
  textType: SlideTextType,
}>;

export type Animation =
  FadeInAnimation
  | FadeOutAnimation
  | SlideInAnimation
  | SlideOutAnimation
  | BreatheAnimation;

export type MenuOption =
  | "Video"
  | "Audio"
  | "Text"
  | "Image"
  | "Export"
  | "Animation"
  | "Effect"
  | "Fill";

// Create a context for managing user account-related data
export const VideoContext = createContext<{
  videos: string[],
  images: string[],
  audios: string[],
  editorElements: EditorElement[],
  backgroundColor: string,
  maxTime: number,
  playing: boolean,
  currentKeyFrame: number,
  selectedElement: EditorElement | null,
  fps: number,
  animations: Animation[],
  animationTimeLine: anime.AnimeTimelineInstance,
  selectedMenuOption: string,
  selectedVideoFormat: string,
  // setCanvas: (value: fabric.Canvas | null) => void,
  setVideos: (value: string[]) => void,
  setImages: (value: string[]) => void,
  setAudios: (value: string[]) => void,
  setEditorElements: (value: EditorElement[]) => void,
  setBackgroundColor: (value: string) => void,
  setMaxTime: (value: number) => void,
  setPlaying: (value: boolean) => void,
  setCurrentKeyFrame: (value: number) => void,
  setSelectedElement1: (value: EditorElement | null) => void,
  setFps: (value: number) => void,
  setAnimations: (value: Animation[]) => void,
  setAnimationTimeLine: (value: anime.AnimeTimelineInstance) => void,
  setSelectedMenuOption: (value: string) => void,
  setSelectedVideoFormat: (value: string) => void,
  addText: (options: {
    text: string,
    fontSize: number,
    fontWeight: number,
  }) => void;
  setCanvas1: (canvas: fabric.Canvas | null) => void,
  addVideoResource: (value: string) => void,
  addVideo: (value: number) => void,
  refreshElements: () => void,
  removeEditorElement: (value: string) => void,
  currentTimeInMs: number,
  handleSeek: (value: number) => void,
  updateEditorElementTimeFrame: (editorElement: EditorElement, value: Partial<TimeFrame>) => void,
}>({
  videos: [],
  images: [],
  audios: [],
  editorElements: [],
  backgroundColor: '#111111',
  maxTime: 30 * 1000,
  playing: false,
  currentKeyFrame: 0,
  selectedElement: null,
  fps: 60,
  animations: [],
  animationTimeLine: anime.timeline(),
  selectedMenuOption: 'Video',
  selectedVideoFormat: 'mp4',
  setCanvas1: () => { },
  setVideos: () => { },
  setImages: () => { },
  setAudios: () => { },
  setEditorElements: () => { },
  setBackgroundColor: () => { },
  setMaxTime: () => { },
  setPlaying: () => { },
  setCurrentKeyFrame: () => { },
  setSelectedElement1: () => { },
  setFps: () => { },
  setAnimations: () => { },
  setAnimationTimeLine: () => { },
  setSelectedMenuOption: () => { },
  setSelectedVideoFormat: () => { },
  addText: () => { },
  addVideoResource: () => { },
  addVideo: () => { },
  refreshElements: () => { },
  removeEditorElement: () => { },
  currentTimeInMs: 0,
  handleSeek: () => {},
  updateEditorElementTimeFrame: () => {}
});

export const useVideoContext = () => useContext(VideoContext);

// Create an VideoProvider component
export const VideoProvider = ({ children }: { children: React.ReactNode }) => {

  // Define state variables to manage user account data
  const [canvas, setCanvas] = useState<fabric.Canvas | null>(null)
  const [videos, setVideos] = useState<string[]>([])
  const [images, setImages] = useState<string[]>([])
  const [audios, setAudios] = useState<string[]>([])
  const [editorElements, setEditorElements] = useState<EditorElement[]>([])
  const [backgroundColor, setBackgroundColor] = useState<string>('#111111')
  const [maxTime, setMaxTime] = useState<number>(30 * 1000)
  const [playing, setPlaying] = useState<boolean>(false)
  const [currentKeyFrame, setCurrentKeyFrame] = useState<number>(0)
  const [selectedElement, setSelectedElement] = useState<EditorElement | null>(null)
  const [fps, setFps] = useState<number>(60)
  const [animations, setAnimations] = useState<Animation[]>([])
  const [animationTimeLine, setAnimationTimeLine] = useState<anime.AnimeTimelineInstance>(anime.timeline())
  const [selectedMenuOption, setSelectedMenuOption] = useState<string>("Video")
  const [selectedVideoFormat, setSelectedVideoFormat] = useState<string>('mp4')
  const [currentTimeInMs, setCurrentTimeInMs] = useState<number>(0)

  const updateVideoElements = () => {
    editorElements.filter(
      (element): element is VideoEditorElement =>
        element.type === "video"
    )
      .forEach((element) => {
        const video = document.getElementById(element.properties.elementId);
        if (isHtmlVideoElement(video)) {
          const videoTime = (currentTimeInMs - element.timeFrame.start) / 1000;
          video.currentTime = videoTime;
          if (playing) {
            video.play();
          } else {
            video.pause();
          }
        }
      })
  }

  let startedTime = 0;
  let startedTimePlay = 0;

  const playFrames = () => {
    if (!playing) {
      return;
    }
    const elapsedTime = Date.now() - startedTime;
    const newTime = startedTimePlay + elapsedTime;
    updateTimeTo(newTime);
    if (newTime > maxTime) {
      setCurrentKeyFrame(0)
      setPlaying(false);
    } else {
      requestAnimationFrame(() => {
        playFrames();
      });
    }
  }

  const setPlaying1 = (playing: boolean) => {
    setPlaying(playing)
    updateVideoElements();
    if (playing) {
      startedTime = Date.now();
      startedTimePlay = currentTimeInMs
      requestAnimationFrame(() => {
        playFrames();
      });
    }
  }

  const handleSeek = (seek: number) => {
    if (playing) {
      setPlaying1(false);
    }
    updateTimeTo(seek);
    updateVideoElements();
  }

  const refreshAnimations = () => {
    anime.remove(animationTimeLine);
    setAnimationTimeLine(anime.timeline({
      duration: maxTime,
      autoplay: false,
    }));
    for (let i = 0; i < animations.length; i++) {
      const animation = animations[i];
      const editorElement = editorElements.find((element) => element.id === animation.targetId);
      const fabricObject = editorElement?.fabricObject;
      if (!editorElement || !fabricObject) {
        continue;
      }
      fabricObject.clipPath = undefined;
      switch (animation.type) {
        case "fadeIn": {
          animationTimeLine.add({
            opacity: [0, 1],
            duration: animation.duration,
            targets: fabricObject,
            easing: 'linear',
          }, editorElement.timeFrame.start);
          break;
        }
        case "fadeOut": {
          animationTimeLine.add({
            opacity: [1, 0],
            duration: animation.duration,
            targets: fabricObject,
            easing: 'linear',
          }, editorElement.timeFrame.end - animation.duration);
          break
        }
        case "slideIn": {
          const direction = animation.properties.direction;
          const targetPosition = {
            left: editorElement.placement.x,
            top: editorElement.placement.y,
          }
          const startPosition = {
            left: (direction === "left" ? - editorElement.placement.width : direction === "right" ? canvas?.width : editorElement.placement.x),
            top: (direction === "top" ? - editorElement.placement.height : direction === "bottom" ? canvas?.height : editorElement.placement.y),
          }
          if (animation.properties.useClipPath) {
            const clipRectangle = FabricUitls.getClipMaskRect(editorElement, 50);
            fabricObject.set('clipPath', clipRectangle)
          }
          if (editorElement.type === "text" && animation.properties.textType === "character") {
            canvas?.remove(...editorElement.properties.splittedTexts)
            // @ts-ignore
            editorElement.properties.splittedTexts = getTextObjectsPartitionedByCharacters(editorElement.fabricObject, editorElement);
            editorElement.properties.splittedTexts.forEach((textObject) => {
              canvas!.add(textObject);
            })
            const duration = animation.duration / 2;
            const delay = duration / editorElement.properties.splittedTexts.length;
            for (let i = 0; i < editorElement.properties.splittedTexts.length; i++) {
              const splittedText = editorElement.properties.splittedTexts[i];
              const offset = {
                left: splittedText.left! - editorElement.placement.x,
                top: splittedText.top! - editorElement.placement.y
              }
              animationTimeLine.add({
                left: [startPosition.left! + offset.left, targetPosition.left + offset.left],
                top: [startPosition.top! + offset.top, targetPosition.top + offset.top],
                delay: i * delay,
                duration: duration,
                targets: splittedText,
              }, editorElement.timeFrame.start);
            }
            animationTimeLine.add({
              opacity: [1, 0],
              duration: 1,
              targets: fabricObject,
              easing: 'linear',
            }, editorElement.timeFrame.start);
            animationTimeLine.add({
              opacity: [0, 1],
              duration: 1,
              targets: fabricObject,
              easing: 'linear',
            }, editorElement.timeFrame.start + animation.duration);

            animationTimeLine.add({
              opacity: [0, 1],
              duration: 1,
              targets: editorElement.properties.splittedTexts,
              easing: 'linear',
            }, editorElement.timeFrame.start);
            animationTimeLine.add({
              opacity: [1, 0],
              duration: 1,
              targets: editorElement.properties.splittedTexts,
              easing: 'linear',
            }, editorElement.timeFrame.start + animation.duration);
          }
          animationTimeLine.add({
            left: [startPosition.left, targetPosition.left],
            top: [startPosition.top, targetPosition.top],
            duration: animation.duration,
            targets: fabricObject,
            easing: 'linear',
          }, editorElement.timeFrame.start);
          break
        }
        case "slideOut": {
          const direction = animation.properties.direction;
          const startPosition = {
            left: editorElement.placement.x,
            top: editorElement.placement.y,
          }
          const targetPosition = {
            left: (direction === "left" ? - editorElement.placement.width : direction === "right" ? canvas?.width : editorElement.placement.x),
            top: (direction === "top" ? -100 - editorElement.placement.height : direction === "bottom" ? canvas?.height : editorElement.placement.y),
          }
          if (animation.properties.useClipPath) {
            const clipRectangle = FabricUitls.getClipMaskRect(editorElement, 50);
            fabricObject.set('clipPath', clipRectangle)
          }
          animationTimeLine.add({
            left: [startPosition.left, targetPosition.left],
            top: [startPosition.top, targetPosition.top],
            duration: animation.duration,
            targets: fabricObject,
            easing: 'linear',
          }, editorElement.timeFrame.end - animation.duration);
          break
        }
        case "breathe": {
          const itsSlideInAnimation = animations.find((a) => a.targetId === animation.targetId && (a.type === "slideIn"));
          const itsSlideOutAnimation = animations.find((a) => a.targetId === animation.targetId && (a.type === "slideOut"));
          const timeEndOfSlideIn = itsSlideInAnimation ? editorElement.timeFrame.start + itsSlideInAnimation.duration : editorElement.timeFrame.start;
          const timeStartOfSlideOut = itsSlideOutAnimation ? editorElement.timeFrame.end - itsSlideOutAnimation.duration : editorElement.timeFrame.end;
          if (timeEndOfSlideIn > timeStartOfSlideOut) {
            continue;
          }
          const duration = timeStartOfSlideOut - timeEndOfSlideIn;
          const easeFactor = 4;
          const suitableTimeForHeartbeat = 1000 * 60 / 72 * easeFactor
          const upScale = 1.05;
          const currentScaleX = fabricObject.scaleX ?? 1;
          const currentScaleY = fabricObject.scaleY ?? 1;
          const finalScaleX = currentScaleX * upScale;
          const finalScaleY = currentScaleY * upScale;
          const totalHeartbeats = Math.floor(duration / suitableTimeForHeartbeat);
          if (totalHeartbeats < 1) {
            continue;
          }
          const keyframes = [];
          for (let i = 0; i < totalHeartbeats; i++) {
            keyframes.push({ scaleX: finalScaleX, scaleY: finalScaleY });
            keyframes.push({ scaleX: currentScaleX, scaleY: currentScaleY });
          }

          animationTimeLine.add({
            duration: duration,
            targets: fabricObject,
            keyframes,
            easing: 'linear',
            loop: true
          }, timeEndOfSlideIn);

          break
        }
      }
    }
  }

  const updateEditorElement = (editorElement: EditorElement) => {
    setEditorElements1(editorElements.map((element) =>
      element.id === editorElement.id ? editorElement : element
    ));
  }

  const refreshElements = () => {
    if (!canvas) return;
    canvas.remove(...canvas.getObjects());
    for (let index = 0; index < editorElements.length; index++) {
      const element = editorElements[index];
      switch (element.type) {
        case "video": {
          console.log("elementid", element.properties.elementId);
          if (document.getElementById(element.properties.elementId) == null)
            continue;
          const videoElement = document.getElementById(
            element.properties.elementId
          );
          if (!isHtmlVideoElement(videoElement)) continue;
          // const filters = [];
          // if (element.properties.effect?.type === "blackAndWhite") {
          //   filters.push(new fabric.Image.filters.Grayscale());
          // }
          const videoObject = new fabric.CoverVideo(videoElement, {
            name: element.id,
            left: element.placement.x,
            top: element.placement.y,
            width: element.placement.width,
            height: element.placement.height,
            scaleX: element.placement.scaleX,
            scaleY: element.placement.scaleY,
            angle: element.placement.rotation,
            objectCaching: false,
            selectable: true,
            lockUniScaling: true,
            // filters: filters,
            // @ts-ignore
            customFilter: element.properties.effect.type,
          });

          element.fabricObject = videoObject;
          element.properties.imageObject = videoObject;
          videoElement.width = 100;
          videoElement.height =
            (videoElement.videoHeight * 100) / videoElement.videoWidth;
          canvas.add(videoObject);
          canvas.on("object:modified", function (e) {
            if (!e.target) return;
            const target = e.target;
            if (target != videoObject) return;
            const placement = element.placement;
            const newPlacement: Placement = {
              ...placement,
              x: target.left ?? placement.x,
              y: target.top ?? placement.y,
              rotation: target.angle ?? placement.rotation,
              width:
                target.width && target.scaleX
                  ? target.width * target.scaleX
                  : placement.width,
              height:
                target.height && target.scaleY
                  ? target.height * target.scaleY
                  : placement.height,
              scaleX: 1,
              scaleY: 1,
            };
            const newElement = {
              ...element,
              placement: newPlacement,
            };
            updateEditorElement(newElement);
          });
          break;
        }
        case "text": {
          const textObject = new fabric.Textbox(element.properties.text, {
            name: element.id,
            left: element.placement.x,
            top: element.placement.y,
            scaleX: element.placement.scaleX,
            scaleY: element.placement.scaleY,
            width: element.placement.width,
            height: element.placement.height,
            angle: element.placement.rotation,
            fontSize: element.properties.fontSize,
            fontWeight: element.properties.fontWeight,
            objectCaching: false,
            selectable: true,
            lockUniScaling: true,
            fill: "#ffffff",
          });
          element.fabricObject = textObject;
          canvas.add(textObject);
          canvas.on("object:modified", function (e) {
            if (!e.target) return;
            const target = e.target;
            if (target != textObject) return;
            const placement = element.placement;
            const newPlacement: Placement = {
              ...placement,
              x: target.left ?? placement.x,
              y: target.top ?? placement.y,
              rotation: target.angle ?? placement.rotation,
              width: target.width ?? placement.width,
              height: target.height ?? placement.height,
              scaleX: target.scaleX ?? placement.scaleX,
              scaleY: target.scaleY ?? placement.scaleY,
            };
            const newElement = {
              ...element,
              placement: newPlacement,
              properties: {
                ...element.properties,
                //@ts-ignore
                text: target.text!,
              },
            };
            updateEditorElement(newElement);
          });
          break;
        }
        default: {
          throw new Error("Not implemented");
        }
      }
      if (element.fabricObject) {
        element.fabricObject.on("selected", function (e) {
          setSelectedElement1(element);
        });
      }
    }
    const selectedEditorElement = selectedElement;
    if (selectedEditorElement && selectedEditorElement.fabricObject) {
      canvas!.setActiveObject(selectedEditorElement.fabricObject);
    }
    refreshAnimations();
    updateTimeTo(currentTimeInMs);
    canvas.renderAll();
  }

  const updateTimeTo = (newTime: number) => {
    setCurrentTimeInMs(newTime);
    animationTimeLine.seek(newTime);
    if (canvas) {
      canvas.backgroundColor = backgroundColor;
    }
    editorElements.forEach(
      e => {
        if (!e.fabricObject) return;
        const isInside = e.timeFrame.start <= newTime && newTime <= e.timeFrame.end;
        e.fabricObject.visible = isInside;
      }
    )
  }

  useEffect(() => {
    setCurrentTimeInMs(currentKeyFrame * 1000 / fps);
  }, [currentKeyFrame, fps])

  const updateSelectedElement = (selectedElement: EditorElement) => {
    setSelectedElement(selectedElement)
  }

  const setEditorElements1 = (editorElements: EditorElement[]) => {
    setEditorElements(editorElements)
    updateSelectedElement(editorElements[editorElements.length - 1]);
    // refreshElements();
  }

  const setSelectedElement1 = (selectedElement: EditorElement | null) => {
    setSelectedElement(selectedElement);
    if (canvas) {
      if (selectedElement?.fabricObject)
        canvas.setActiveObject(selectedElement.fabricObject);
      else
        canvas.discardActiveObject();
    }
  }

  const addEditorElement = (editorElement: EditorElement) => {
    const tempEditorElements = [...editorElements];
    tempEditorElements.push(editorElement);
    setEditorElements1([...editorElements, editorElement]);
    refreshElements();
    setSelectedElement1(tempEditorElements[tempEditorElements.length - 2]);
  }

  const addText = (options: {
    text: string,
    fontSize: number,
    fontWeight: number,
  }) => {
    const id = getUid();
    const index = editorElements.length;
    addEditorElement(
      {
        id,
        name: `Text ${index + 1}`,
        type: "text",
        placement: {
          x: 0,
          y: 0,
          width: 100,
          height: 100,
          rotation: 0,
          scaleX: 1,
          scaleY: 1,
        },
        timeFrame: {
          start: 0,
          end: maxTime,
        },
        properties: {
          text: options.text,
          fontSize: options.fontSize,
          fontWeight: options.fontWeight,
          splittedTexts: [],
        },
      },
    );
  }

  const setCanvas1 = (canvas: fabric.Canvas | null) => {
    canvas!.backgroundColor = backgroundColor;
    setCanvas(canvas)
  }

  const addVideoResource = (video: string) => {
    const tVidoes = [...videos]
    tVidoes.push(video)
    setVideos(tVidoes)
  }

  const addVideo = (index: number) => {
    const videoElement = document.getElementById(`video-${index}`)
    if (!isHtmlVideoElement(videoElement)) {
      return;
    }
    const videoDurationMs = videoElement.duration * 1000;
    const aspectRatio = videoElement.videoWidth / videoElement.videoHeight;
    const id = getUid();
    addEditorElement(
      {
        id,
        name: `Media(video) ${index + 1}`,
        type: "video",
        placement: {
          x: 0,
          y: 0,
          width: 100 * aspectRatio,
          height: 100,
          rotation: 0,
          scaleX: 1,
          scaleY: 1,
        },
        timeFrame: {
          start: 0,
          end: videoDurationMs,
        },
        properties: {
          elementId: `video-${id}`,
          src: videoElement.src,
          effect: {
            type: "none",
          }
        },
      },
    );
  }

  const removeEditorElement = (id: string) => {
    setEditorElements1(editorElements.filter(
      (editorElement) => editorElement.id !== id
    ));
    refreshElements();
  }

  const updateEditorElementTimeFrame = (editorElement: EditorElement, timeFrame: Partial<TimeFrame>) => {
    if (timeFrame.start != undefined && timeFrame.start < 0) {
      timeFrame.start = 0;
    }
    if (timeFrame.end != undefined && timeFrame.end > maxTime) {
      timeFrame.end = maxTime;
    }
    const newEditorElement = {
      ...editorElement,
      timeFrame: {
        ...editorElement.timeFrame,
        ...timeFrame,
      }
    }
    updateVideoElements();
    updateEditorElement(newEditorElement);
    refreshAnimations();
  }

  // Provide the video data through the context to child components
  return (
    <VideoContext.Provider value={{
      videos,
      images,
      audios,
      editorElements,
      backgroundColor,
      maxTime,
      playing,
      currentKeyFrame,
      selectedElement,
      fps,
      animations,
      animationTimeLine,
      selectedMenuOption,
      selectedVideoFormat,
      setCanvas1,
      setVideos,
      setImages,
      setAudios,
      setEditorElements,
      setBackgroundColor,
      setMaxTime,
      setPlaying,
      setCurrentKeyFrame,
      setSelectedElement1,
      setFps,
      setAnimations,
      setAnimationTimeLine,
      setSelectedMenuOption,
      setSelectedVideoFormat,
      addText,
      addVideoResource,
      addVideo,
      refreshElements,
      removeEditorElement,
      currentTimeInMs,
      handleSeek,
      updateEditorElementTimeFrame
    }}>
      {children}
    </VideoContext.Provider>
  )
}
