import React, { useContext } from "react";
// import { formatTimeToMinSec } from "@/utils";
import { VideoContext } from '@/context/video';

export type EditorElementBase<T extends string, P> = {
  readonly id: string;
  fabricObject?: fabric.Object;
  name: string;
  readonly type: T;
  placement: Placement;
  timeFrame: TimeFrame;
  properties: P;
};

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

export type VideoEditorElement = EditorElementBase<
  "video",
  { src: string; elementId: string; imageObject?: fabric.Image, effect: Effect }
>;

export type ImageEditorElement = EditorElementBase<
  "image",
  { src: string; elementId: string; imageObject?: fabric.Object, effect: Effect }
>;

export type EffecType = Effect["type"];
export type EffectBase<T extends string> = {
  type: T;
}

export type BlackAndWhiteEffect = EffectBase<"none"> |
  EffectBase<"blackAndWhite"> |
  EffectBase<"sepia"> |
  EffectBase<"invert"> |
  EffectBase<"saturate">;
export type Effect = BlackAndWhiteEffect;

const EFFECT_TYPE_TO_LABEL: Record<string, string> = {
  blackAndWhite: "Black and White",
  none: "None",
  saturate: "Saturate",
  sepia: "Sepia",
  invert: "Invert",
};
type EffectResourceProps = {
  editorElement: VideoEditorElement | ImageEditorElement;
};
const EffectResource = ((props: EffectResourceProps) => {
  const { updateEffect } = useContext(VideoContext);

  return (
    <div className="rounded-lg overflow-hidden items-center bg-slate-800 m-[15px] flex flex-col relative min-h-[100px] p-2">
      <div className="flex flex-row justify-between w-full">
        <div className="text-white py-1 text-base text-left w-full">
          {EFFECT_TYPE_TO_LABEL[props.editorElement.properties.effect.type]}
        </div>
      </div>
      {/* Select effect from drop down */}
      <select
        className="bg-slate-100 text-black rounded-lg px-2 py-1 ml-2 w-16 text-xs"
        value={props.editorElement.properties.effect.type}
        onChange={(e) => {
          const type = e.target.value;
          updateEffect(props.editorElement.id, {
            type: type as EffecType,
          });
        }}
      >
        {Object.keys(EFFECT_TYPE_TO_LABEL).map((type) => {
          return (
            <option key={type} value={type}>
              {EFFECT_TYPE_TO_LABEL[type]}
            </option>
          );
        })}
      </select>
    </div>
  );
});

export default EffectResource
