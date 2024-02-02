import React from "react";
import { ExportVideoPanel } from "./ResourcePanels/ExportVideoPanel";
import { AnimationsPanel } from "./ResourcePanels/AnimationsPanel";
import { FillPanel } from "./ResourcePanels/FillPanel";
import { EffectsPanel } from "./ResourcePanels/EffectPanel";
import { TextResourcesPanel } from "./ResourcePanels/TextResourcePanel";
import { AudioResourcesPanel } from "./ResourcePanels/AudioResourcesPanel";
import { useVideoContext } from "@/context/video";

const Resources = () => {
  const { selectedMenuOption } = useVideoContext();

  return (
    <>
      {selectedMenuOption === "Text" ? <TextResourcesPanel /> : null}
      {selectedMenuOption === "Export" ? <ExportVideoPanel /> : null}
      {selectedMenuOption === "Animation" ? <AnimationsPanel /> : null}
      {selectedMenuOption === "Effects" ? <EffectsPanel /> : null}
      {selectedMenuOption === "Fill" ? <FillPanel /> : null}
      {selectedMenuOption === "Audio" ? <AudioResourcesPanel /> : null}
    </>
  );
};

export default Resources;
