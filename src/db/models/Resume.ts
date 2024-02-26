import mongoose, { Schema, Document } from "mongoose";

interface IResume extends Document {
  name: string;
  email: string;
  phone: string;
  website: string;
  linkedin: string;
  github: string;
  experience: {
    company: string;
    position: string;
    startDate: Date;
    endDate: Date;
    description: string;
  };
  education: {
    school: string;
    degree: string;
    startDate: Date;
    endDate: Date;
    description: string;
  };
  skills_map: {
    title: string;
    skills: string[];
  }[];
}

const ResumeSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  website: { type: String, required: true },
  linkedin: { type: String, required: true },
  github: { type: String, required: true },
  experience: {
    company: { type: String, required: true },
    position: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    description: { type: String, required: true },
  },
  education: {
    school: { type: String, required: true },
    degree: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    description: { type: String, required: true },
  },
  skills_map: [
    {
      title: { type: String, required: true },
      skills: { type: [String], required: true },
    },
  ],
});

const ResumeModel = mongoose.model<IResume>("Resume", ResumeSchema);

export default ResumeModel;
