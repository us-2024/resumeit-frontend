import React, { createContext, useReducer, useContext, useMemo } from "react";

type Experience = {
  role: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date;
  description: string;
  isCurrent: boolean;
};

type Education = {
  institution: string;
  location: string;
  degree: string;
  startDate: Date;
  endDate: Date;
  description: string;
};

type Skill = {
  category: string;
  skills: string[];
};

interface State {
  name: string;
  about: string;
  email: string;
  phoneNumber: string;
  website: string;
  github: string;
  linkedin: string;
  experience: Experience[];
  education: Education[];
  skills: Skill[];
}

const initialState: State = {
  name: "Subin S K",
  email: "subinsk284@gmail.com",
  phoneNumber: "+91 8094774065",
  about:
    "Experienced MERN Stack Developer adept at designing, implementing, and maintaining scalable web applications. Proficient in using MongoDB, Express.js, React.js, and Node.js to develop full-stack solutions. Skilled in leveraging modern development tools and libraries to optimize performance and enhance user experience. Proven track record of collaborating with cross-functional teams to deliver high-quality software products on time and within budget.",
  website: "https://subinsk.me",
  github: "https://github.com/subinsk",
  linkedin: "https://linkedin.com/in/subinsk",
  experience: [
    {
      role: "Software Engineer",
      company: "Google",
      location: "Mountain View, CA",
      startDate: new Date("2019-01-01"),
      endDate: new Date("2021-01-01"),
      description:
        "Worked on the Google Search team to develop new features and improve the overall search experience for users. Collaborated with a team of engineers to design and implement new features and improve existing ones. Developed and maintained scalable and efficient code for various components of the search engine.",
      isCurrent: true,
    },
    {
      role: "Software Engineer",
      company: "Facebook",
      location: "Menlo Park, CA",
      startDate: new Date("2017-01-01"),
      endDate: new Date("2019-01-01"),
      description:
        "Worked on the Facebook Ads team to develop new features and improve the overall ad creation experience for advertisers. Collaborated with a team of engineers to design and implement new features and improve existing ones. Developed and maintained scalable and efficient code for various components of the ad creation process.",
      isCurrent: false,
    },
    {
      role: "Software Engineer",
      company: "Microsoft",
      location: "Redmond, WA",
      startDate: new Date("2015-01-01"),
      endDate: new Date("2017-01-01"),
      description:
        "Worked on the Microsoft Office team to develop new features and improve the overall user experience for Office applications. Collaborated with a team of engineers to design and implement new features and improve existing ones. Developed and maintained scalable and efficient code for various components of Office applications.",
      isCurrent: false,
    },
  ],
  education: [
    {
      institution: "Stanford University",
      location: "Stanford, CA",
      degree: "Master of Science in Computer Science",
      startDate: new Date("2013-01-01"),
      endDate: new Date("2015-01-01"),
      description:
        "Studied computer science with a focus on machine learning and artificial intelligence. Completed a master's thesis on the topic of deep learning for computer vision.",
    },
    {
      institution: "University of California, Berkeley",
      location: "Berkeley, CA",
      degree:
        "Bachelor of Science in Electrical Engineering and Computer Science",
      startDate: new Date("2009-01-01"),
      endDate: new Date("2013-01-01"),
      description:
        "Studied electrical engineering and computer science. Completed a senior project on the topic of real-time embedded systems.",
    },
  ],
  skills: [
    {
      category: "Technical Skills",
      skills: [
        "C++",
        "React",
        "JavaScript",
        "TypeScript",
        "Python",
        "Java",
        "C#",
      ],
    },
    {
      category: "Languages",
      skills: ["English", "Spanish", "French"],
    },
  ],
};

// Define the actions
type Action =
  | { type: "SET_NAME"; payload: string }
  | { type: "SET_ABOUT"; payload: string }
  | { type: "SET_EMAIL"; payload: string }
  | { type: "SET_PHONENUMBER"; payload: string }
  | { type: "SET_WEBSITE"; payload: string }
  | { type: "SET_GITHUB"; payload: string }
  | { type: "SET_LINKEDIN"; payload: string }
  | { type: "SET_EXPERIENCE"; payload: any }
  | { type: "SET_EDUCATION"; payload: any }
  | { type: "ADD_EXPERIENCE"; payload: any }
  | { type: "ADD_EDUCATION"; payload: any }
  | { type: "ADD_SKILL"; payload: any }
  | { type: "SET_SKILLS"; payload: any };

// Define the reducer
function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.payload };
    case "SET_ABOUT":
      return { ...state, about: action.payload };
    case "SET_EMAIL":
      return { ...state, email: action.payload };
    case "SET_PHONENUMBER":
      return { ...state, phoneNumber: action.payload };
    case "SET_WEBSITE":
      return { ...state, website: action.payload };
    case "SET_GITHUB":
      return { ...state, github: action.payload };
    case "SET_LINKEDIN":
      return { ...state, linkedin: action.payload };
    case "ADD_EXPERIENCE":
      return { ...state, experience: [...state.experience, action.payload] };
    case "ADD_EDUCATION":
      return { ...state, education: [...state.education, action.payload] };
    case "SET_EXPERIENCE":
      return { ...state, experience: action.payload };
    case "SET_EDUCATION":
      return { ...state, education: action.payload };
    case "ADD_SKILL":
      const { category, skill } = action.payload;
      const _skills = state.skills.map((s) => {
        if (s.category === category) {
          s.skills.push(skill);
        }
        return s;
      });
      return { ...state, skills: _skills };
    case "SET_SKILLS":
      return { ...state, skills: action.payload };

    default:
      return state;
  }
}

// Create the context
interface ContextProps {
  state: State;
  dispatch: React.Dispatch<Action>;
  name: string;
  about: string;
  email: string;
  phoneNumber: string;
  website: string;
  github: string;
  linkedin: string;
  experience: Experience[];
  education: Education[];
  skills: Skill[];

  setName: (name: string) => void;
  setAbout: (about: string) => void;
  setEmail: (email: string) => void;
  setPhoneNumber: (phone: string) => void;
  setWebsite: (website: string) => void;
  setGithub: (github: string) => void;
  setLinkedin: (linkedin: string) => void;
  setExperience: (experience: any) => void;
  setEducation: (education: any) => void;
  addExperience: (experience: any) => void;
  addEducation: (education: any) => void;
  addSkill: (category: string, skill: string) => void;
  setSkills: (skills: Skill[]) => void;
}

const ResumeContext = createContext<ContextProps | undefined>(undefined);

// Create the context provider
const ResumeContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const {
    name,
    about,
    email,
    phoneNumber,
    website,
    github,
    linkedin,
    experience,
    education,
    skills,
  } = state;

  const setName = (name: string) =>
    dispatch({ type: "SET_NAME", payload: name });
  const setAbout = (about: string) =>
    dispatch({ type: "SET_ABOUT", payload: about });
  const setEmail = (email: string) =>
    dispatch({ type: "SET_EMAIL", payload: email });
  const setPhoneNumber = (phoneNumber: string) =>
    dispatch({ type: "SET_PHONENUMBER", payload: phoneNumber });
  const setWebsite = (website: string) =>
    dispatch({ type: "SET_WEBSITE", payload: website });
  const setGithub = (github: string) =>
    dispatch({ type: "SET_GITHUB", payload: github });
  const setLinkedin = (linkedin: string) =>
    dispatch({ type: "SET_LINKEDIN", payload: linkedin });
  const addExperience = (experience: any) =>
    dispatch({ type: "ADD_EXPERIENCE", payload: experience });
  const addEducation = (education: any) =>
    dispatch({ type: "ADD_EDUCATION", payload: education });
  const setExperience = (experience: any) =>
    dispatch({ type: "SET_EXPERIENCE", payload: experience });
  const setEducation = (education: any) =>
    dispatch({ type: "SET_EDUCATION", payload: education });
  const addSkill = (category: string, skill: string) =>
    dispatch({ type: "ADD_SKILL", payload: { category, skill } });
  const setSkills = (skills: Skill[]) =>
    dispatch({ type: "SET_SKILLS", payload: skills });

  const memoizedValue = useMemo(
    () => ({
      state,
      dispatch,
      name,
      about,
      email,
      phoneNumber,
      website,
      github,
      linkedin,
      experience,
      education,
      skills,
      setName,
      setAbout,
      setEmail,
      setPhoneNumber,
      setWebsite,
      setGithub,
      setLinkedin,
      setExperience,
      setEducation,
      addExperience,
      addEducation,
      addSkill,
      setSkills,
    }),
    [
      state,
      name,
      about,
      email,
      phoneNumber,
      website,
      github,
      linkedin,
      experience,
      education,
      skills,
    ]
  );

  return (
    <ResumeContext.Provider value={memoizedValue}>
      {children}
    </ResumeContext.Provider>
  );
};

// Custom hook to access the context
function useResumeContext() {
  const context = useContext(ResumeContext);
  if (!context) {
    throw new Error(
      "useResumeContext must be used within a ResumeContextProvider"
    );
  }
  return context;
}

export { ResumeContextProvider, useResumeContext };
