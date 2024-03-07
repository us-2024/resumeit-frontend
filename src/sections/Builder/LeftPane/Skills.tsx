import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Grid,
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
            <div key={`skill-${index}`} className="grid grid-cols-7 gap-3">
              <div className="col-span-2">
                <Input
                  name={skill.category}
                  value={skill.category}
                  onChange={(e) =>
                    onChangeHandler(skill.category, e.target.value)
                  }
                />
              </div>
              <div className="col-span-5">
                <TagsInput
                  value={skill.skills}
                  onChange={(tags) => {
                    setSkills(
                      skills.map((s) =>
                        s.category === skill.category
                          ? { ...s, skills: tags }
                          : s
                      )
                    );
                  }}
                  name={`${skill}-tags`}
                  placeHolder="Enter Skill and Press Enter"
                />
              </div>
            </div>
          ))}
        </Stack>
      </AccordionContent>
    </AccordionItem>
  );
}
