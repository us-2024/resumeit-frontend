import { Typography } from "@/components";
import React from "react";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";
import { Preview } from "../Preview";

export const RightPane = () => {
  return (
    <div className="px-8 py-5 bg-gray-300 max-h-screen overflow-auto">
      <Typography className="mb-8" variant="h1">
        Preview
      </Typography>

      <TransformWrapper>
        {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
          <React.Fragment>
            <div className="tools">
              <button onClick={() => zoomIn()}>+</button>
              <button onClick={() => zoomOut()}>-</button>
              <button onClick={() => resetTransform()}>x</button>
            </div>
            <TransformComponent
              wrapperStyle={{
                width: "100%",
                height: "100%",
              }}
            >
              <Preview />
            </TransformComponent>
          </React.Fragment>
        )}
      </TransformWrapper>
    </div>
  );
};
