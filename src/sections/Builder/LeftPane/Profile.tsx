"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Input,
  Label,
  Stack,
  Textarea,
} from "@/components";
import { useResumeContext } from "@/context/resume-provider";
import { useState } from "react";

export default function Profile() {
  const {
    name,
    setName,
    email,
    setEmail,
    phoneNumber,
    setPhoneNumber,
    website,
    setWebsite,
    about,
    setAbout,
  } = useResumeContext();

  return (
    <AccordionItem value="profile">
      <AccordionTrigger>Profile</AccordionTrigger>
      <AccordionContent>
        <div className="grid grid-cols-2 gap-4">
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="name">Name</Label>
            <Input
              name="name"
              type="text"
              placeholder="e.g. Subin S K"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="email">Email</Label>
            <Input
              name="email"
              type="email"
              placeholder="e.g. subinsk284@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              name="phone"
              type="text"
              placeholder="e.g. +91 8094774065"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="website">Website</Label>
            <Input
              name="website"
              type="text"
              placeholder="e.g. https://subinsk.me"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
            />
          </div>
          <div className="grid col-span-2 w-full gap-1.5">
            <Label htmlFor="about">Your About</Label>
            <Textarea
              placeholder="Type something about yourself..."
              id="about"
              value={about}
              rows={8}
              onChange={(e) => setAbout(e.target.value)}
            />
          </div>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}
