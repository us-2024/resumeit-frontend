import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
  DatePicker,
  Input,
  Label,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
  Stack,
  Checkbox,
  Editor,
} from "@/components";
import { useResumeContext } from "@/context/resume-provider";
import { Dispatch, SetStateAction, useState } from "react";

const AddExperienceDialog = ({
  open,
  setOpen,
  addExperience,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  addExperience: (experience: any) => void;
}) => {
  // states
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(new Date());
  const [companyName, setCompanyName] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [role, setRole] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [isCurrent, setIsCurrent] = useState<boolean>(false);

  // functions
  const handleAddExperience = () => {
    addExperience({
      startDate,
      endDate,
      companyName,
      location,
      role,
      description,
      isCurrent,
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" onClick={() => setOpen(true)}>
          Add Experience
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl h-[80%] overflow-auto">
        <DialogHeader>
          <DialogTitle>Add Experience</DialogTitle>
          <DialogDescription>
            Add your professional experience
          </DialogDescription>
        </DialogHeader>
        <Stack className="w-full" direction="col" align="start">
          <div className="grid grid-cols-2 gap-8 w-full">
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="startDate">Start Date</Label>
              <DatePicker
                name="startDate"
                value={startDate}
                setValue={setStartDate}
              />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="endDate">End Date</Label>
              <DatePicker
                name="endDate"
                value={endDate}
                setValue={setEndDate}
              />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="companyName">Company Name</Label>
              <Input
                name="companyName"
                placeholder="Company Name"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
              />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="location">Location</Label>
              <Input
                name="location"
                placeholder="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="role">Role</Label>
              <Input
                name="role"
                placeholder="Role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              />
            </div>
            <div className="col-span-2 grid w-full  items-center gap-1.5">
              <Label htmlFor="description">Description</Label>
              <Editor
                id="description"
                value={description}
                onChange={setDescription}
              />
            </div>
            <div className="flex w-full items-center gap-1.5">
              <Label htmlFor="isCurrent">Is Current?</Label>
              <Checkbox
                name="isCurrent"
                checked={isCurrent}
                onCheckedChange={(value) => {
                  if (value === "indeterminate") {
                    setIsCurrent(false);
                  } else {
                    setIsCurrent(value);
                  }
                }}
              />
            </div>
          </div>
        </Stack>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button onClick={handleAddExperience} variant="secondary">
              Add
            </Button>
          </DialogClose>
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default function Experience() {
  // states
  const { experience, setExperience, addExperience } = useResumeContext();
  const [addExperienceOpen, setAddExperienceOpen] = useState(false);

  // functions
  const setStartDate = (date: Date, index: number) => {
    const newExperience = [...experience];
    newExperience[index].startDate = date;
    setExperience(newExperience);
  };

  const setEndDate = (date: Date, index: number) => {
    const newExperience = [...experience];
    newExperience[index].endDate = date;
    setExperience(newExperience);
  };

  const setCompany = (value: string, index: number) => {
    const newExperience = [...experience];
    newExperience[index].company = value;
    setExperience(newExperience);
  };

  const setLocation = (value: string, index: number) => {
    const newExperience = [...experience];
    newExperience[index].location = value;
    setExperience(newExperience);
  };

  const setRole = (value: string, index: number) => {
    const newExperience = [...experience];
    newExperience[index].role = value;
    setExperience(newExperience);
  };

  const setDescription = (value: string, index: number) => {
    const newExperience = [...experience];
    newExperience[index].description = value;
    setExperience(newExperience);
  };

  const setIsCurrent = (value: boolean, index: number) => {
    const newExperience = [...experience];
    newExperience[index].isCurrent = value;
    setExperience(newExperience);
  };

  console.log(experience);

  return (
    <AccordionItem value="experience">
      <AccordionTrigger>Experience</AccordionTrigger>
      <AccordionContent>
        <AddExperienceDialog
          open={addExperienceOpen}
          setOpen={setAddExperienceOpen}
          addExperience={addExperience}
        />
        <Stack direction="col" gap={8} className="py-8" align="start">
          {experience.map((item, index) => (
            <div
              key={`${index + 1}`}
              className="grid grid-cols-2 gap-8 border-b py-3"
            >
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="startDate">Start Date</Label>
                <DatePicker
                  name="startDate"
                  value={item.startDate}
                  setValue={(date) => setStartDate(date, index)}
                />
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="endDate">End Date</Label>
                <DatePicker
                  name="endDate"
                  value={item.endDate}
                  setValue={(date) => setEndDate(date, index)}
                />
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="company">Company Name</Label>
                <Input
                  name="company"
                  placeholder="Company Name"
                  value={item.company}
                  onChange={(e) => setCompany(e.target.value, index)}
                />
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="location">Location</Label>
                <Input
                  name="location"
                  placeholder="Location"
                  value={item.location}
                  onChange={(e) => setLocation(e.target.value, index)}
                />
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="role">Role</Label>
                <Input
                  name="role"
                  placeholder="Role"
                  value={item.role}
                  onChange={(e) => setRole(e.target.value, index)}
                />
              </div>
              <div className="grid col-span-2 w-full items-center gap-1.5">
                <Label htmlFor="description">Description</Label>
                <Editor
                  id={`description-${index}`}
                  value={item.description}
                  onChange={(value) => setDescription(value, index)}
                />
              </div>
              <div className="flex w-full items-center gap-1.5">
                <Label htmlFor="isCurrent">Is Current?</Label>
                <Checkbox
                  name="isCurrent"
                  checked={item.isCurrent}
                  onCheckedChange={(value) => {
                    if (value === "indeterminate") {
                      setIsCurrent(false, index);
                    } else {
                      setIsCurrent(value, index);
                    }
                  }}
                />
              </div>
            </div>
          ))}
        </Stack>
      </AccordionContent>
    </AccordionItem>
  );
}
