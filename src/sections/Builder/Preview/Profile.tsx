import { Stack, Typography } from "@/components";
import { useResumeContext } from "@/context/resume-provider";

export default function Profile() {
  const { name, email, phoneNumber, website, linkedin, github } =
    useResumeContext();
  return (
    <Stack>
      <Typography variant="h1" className="mx-auto">
        {name}
      </Typography>

      <Stack direction="row">
        <Typography variant="p">{phoneNumber}</Typography>
        <Typography variant="p">{email}</Typography>
        <Typography variant="p">{website}</Typography>
        <Typography variant="p">{linkedin}</Typography>
        <Typography variant="p">{github}</Typography>
      </Stack>
    </Stack>
  );
}
