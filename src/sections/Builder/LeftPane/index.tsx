import { Typography } from "@/components";
import Profile from "./Profile";

export const LeftPane = () => {
  return (
    <div className="px-8 py-5">
      <Typography className="mb-8" variant="h1">
        Builder
      </Typography>
      <Profile />
    </div>
  );
};
