import { Metadata } from "next";
import { BuilderView } from "@/sections";

export const metadata: Metadata = {
  title: "Builder | Resume it",
  description: "Builder | Resume it",
};

export default function Builder() {
  return <BuilderView />;
}
