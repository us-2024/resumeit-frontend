import { Accordion, Stack, Typography } from "@/components";
import Profile from "./Profile";
import Experience from "./Experience";
import Skills from "./Skills";

export const LeftPane = () => {
  return (
    <div className="px-8 py-5 h-screen overflow-auto">
      <Typography className="mb-8" variant="h1">
        Builder
      </Typography>
      <Accordion
        defaultValue={["profile", "experience"]}
        type="multiple"
        className="w-full space-y-10"
      >
        <Profile />
        <Experience />
        <Skills />
      </Accordion>
    </div>
  );
};
