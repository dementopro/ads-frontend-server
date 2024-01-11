import React from "react";
// import { ExportVideoPanel } from "./panels/ExportVideoPanel";
// import { AnimationsPanel } from "./panels/AnimationsPanel";
// import { FillPanel } from "./panels/FillPanel";
// import { EffectsPanel } from "./panels/EffectsPanel";
import { TextResourcesPanel } from "./ResourcePanels/TextResourcePanel";

const Resources = ({ selectedMenuOption }: { selectedMenuOption: string }) => {
  return (
    <>
      {selectedMenuOption === "Text" ? <TextResourcesPanel /> : null}
      {/* {selectedMenuOption === "Animation" ? <AnimationsPanel /> : null}
      {selectedMenuOption === "Effect" ? <EffectsPanel /> : null}
      {selectedMenuOption === "Export" ? <ExportVideoPanel /> : null}
      {selectedMenuOption === "Fill" ? <FillPanel /> : null} */}
    </>
  );
};

export default Resources;
