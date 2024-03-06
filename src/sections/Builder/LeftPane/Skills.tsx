import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Input,
  Stack,
} from "@/components";
import { useResumeContext } from "@/context/resume-provider";
import { useState } from "react";
import { TagsInput } from "react-tag-input-component";

export default function Skills() {
  // states
  const [selected, setSelected] = useState([
    "C++",
    "React",
    "JavaScript",
    "TypeScript",
    "Python",
    "Java",
    "C#",
  ]);

  // hooks
  const { skills, addSkill, setSkills } = useResumeContext();

  const onChangeHandler = (category: string, value: string) => {
    setSkills(
      skills.map((skill) =>
        skill.category === category ? { ...skill, category: value } : skill
      )
    );
  };

  console.log("skills", skills);

  return (
    <AccordionItem value="Skills">
      <AccordionTrigger>Skills</AccordionTrigger>
      <AccordionContent>
        <Stack direction="col">
          {skills.map((skill, index) => (
            <Stack
              key={`index-${index}`}
              direction="row"
              align="center"
              gap={8}
            >
              <Input
                name={skill.category}
                value={skill.category}
                onChange={(e) =>
                  onChangeHandler(skill.category, e.target.value)
                }
              />
              <TagsInput
                value={skill.skills}
                onChange={(tags) => {
                  setSkills(
                    skills.map((s) =>
                      s.category === skill.category ? { ...s, skills: tags } : s
                    )
                  );
                }}
                name={`${skill}-tags`}
                placeHolder="Enter Skill and Press Enter"
              />
            </Stack>
          ))}
        </Stack>
      </AccordionContent>
    </AccordionItem>
  );
}
