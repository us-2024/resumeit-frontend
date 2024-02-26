"use client";

import { ResumeContextProvider } from "@/context/resume-provider";
import { LeftPane } from "./LeftPane";
import { RightPane } from "./RightPane";

export const BuilderView = () => {
  return (
    <ResumeContextProvider>
      <div className="h-screen grid grid-cols-2 gap-3">
        <LeftPane />
        <RightPane />
      </div>
    </ResumeContextProvider>
  );
};
