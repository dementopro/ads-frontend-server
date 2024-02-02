import React from "react";
import { AnimationResource } from "../Entity/AnimationResource";
import { useVideoContext } from '@/context/video';
import { getUid } from "@/utils";

export const AnimationsPanel = (() => {
  const { selectedElement, animations, addAnimation} = useVideoContext()
  const selectedElementAnimations = animations.filter((animation) => {
    return animation.targetId === selectedElement?.id;
  });
  const hasFadeInAnimation = selectedElementAnimations.some((animation) => {
    return animation.type === "fadeIn";
  });
  const hasFadeOutAnimation = selectedElementAnimations.some((animation) => {
    return animation.type === "fadeOut";
  });

  const hasSlideInAnimation = selectedElementAnimations.some((animation) => {
    return animation.type === "slideIn";
  });
  const hasSlideOutAnimation = selectedElementAnimations.some((animation) => {
    return animation.type === "slideOut";
  });

  const hasConsantAnimation = selectedElementAnimations.some((animation) => {
    return animation.type === "breathe";
  });

  return (
    <>
      <div className="text-sm px-[16px] pt-[16px] pb-[8px] font-semibold">
        Animations
      </div>
      {selectedElement && !hasFadeInAnimation ? (
        <div
          className="text-sm px-[16px] py-[8px] font-semibold hover:bg-slate-700 hover:text-white cursor-pointer"
          onClick={() => {
            addAnimation({
              id: getUid(),
              type: "fadeIn",
              targetId: selectedElement?.id ?? "",
              duration: 1000,
              properties: {},
            });
          }}
        >
          Add Fade In
        </div>
      ) : null}
      {selectedElement && !hasFadeOutAnimation ? (
        <div
          className="text-sm px-[16px] py-[8px] font-semibold hover:bg-slate-700 hover:text-white cursor-pointer"
          onClick={() => {
            addAnimation({
              id: getUid(),
              type: "fadeOut",
              targetId: selectedElement?.id ?? "",
              duration: 1000,
              properties: {},
            });
          }}
        >
          Add Fade Out
        </div>
      ) : null}
      {selectedElement && !hasSlideInAnimation ? (
        <div
          className="text-sm px-[16px] py-[8px] font-semibold hover:bg-slate-700 hover:text-white cursor-pointer"
          onClick={() => {
            addAnimation({
              id: getUid(),
              type: "slideIn",
              targetId: selectedElement?.id ?? "",
              duration: 1000,
              properties: {
                direction: "left",
                useClipPath: false,
                textType: "none",
              },
            });
          }}
        >
          Add Slide In
        </div>
      ) : null}
      {selectedElement && !hasSlideOutAnimation ? (
        <div
          className="text-sm px-[16px] py-[8px] font-semibold hover:bg-slate-700 hover:text-white cursor-pointer"
          onClick={() => {
            addAnimation({
              id: getUid(),
              type: "slideOut",
              targetId: selectedElement?.id ?? "",
              duration: 1000,
              properties: {
                direction: "right",
                useClipPath: false,
                textType: "none",
              },
            });
          }}
        >
          Add Slide Out
        </div>
      ) : null}
      {selectedElement && !hasConsantAnimation ? (
        <div
          className="text-sm px-[16px] py-[8px] font-semibold hover:bg-slate-700 hover:text-white cursor-pointer"
          onClick={() => {
            addAnimation({
              id: getUid(),
              type: "breathe",
              targetId: selectedElement?.id ?? "",
              duration: 1000,
              properties: {},
            });
          }}
        >
          Add Breathing
        </div>
      ) : null}
      {selectedElementAnimations.map((animation) => {
        return <AnimationResource key={animation.id} animation={animation} />;
      })}
    </>
  );
});
