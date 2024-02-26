import React, { createContext, useReducer, useContext, useMemo } from "react";

interface State {
  name: string;
  about: string;
  email: string;
  phoneNumber: string;
  website: string;
  github: string;
  linkedin: string;
}

const initialState: State = {
  name: "",
  email: "",
  phoneNumber: "",
  about: "",
  website: "",
  github: "",
  linkedin: "",
};

// Define the actions
type Action =
  | { type: "SET_NAME"; payload: string }
  | { type: "SET_ABOUT"; payload: string }
  | { type: "SET_EMAIL"; payload: string }
  | { type: "SET_PHONENUMBER"; payload: string }
  | { type: "SET_WEBSITE"; payload: string }
  | { type: "SET_GITHUB"; payload: string }
  | { type: "SET_LINKEDIN"; payload: string };

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
  setName: (name: string) => void;
  setAbout: (about: string) => void;
  setEmail: (email: string) => void;
  setPhoneNumber: (phone: string) => void;
  setWebsite: (website: string) => void;
  setGithub: (github: string) => void;
  setLinkedin: (linkedin: string) => void;
}

const ResumeContext = createContext<ContextProps | undefined>(undefined);

// Create the context provider
const ResumeContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { name, about, email, phoneNumber, website, github, linkedin } = state;

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
      setName,
      setAbout,
      setEmail,
      setPhoneNumber,
      setWebsite,
      setGithub,
      setLinkedin,
    }),
    [
      state,
      dispatch,
      name,
      about,
      email,
      phoneNumber,
      website,
      github,
      linkedin,
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
