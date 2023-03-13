"use client";
import React from "react";

export default function SectionWrapper({ children }: { children: any }) {
  return <div className="h-fit w-max">{children}</div>;
}
