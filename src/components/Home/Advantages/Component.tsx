"use client";
import { Environment } from "@/shared/Config";
import { Icons, Illustrations } from "@/shared/Constant/Assets";
import { Button, Card, Text, Image } from "@chakra-ui/react";
import { ReactNode, useState } from "react";
import NewestCollection from "../NewestCollection";

interface Advantages {
  image: string;
  title: string;
  description: string;
}

const ADVANTAGES_DATA: Advantages[] = [
  {
    image: Illustrations.HomeBanner,
    title: "Uniquely Handcrafted",
    description:
      "Each bouquet is a one-of-a-kind masterpiece, made with precision and care.",
  },
  {
    image: Illustrations.HomeBanner,
    title: "Timeless Beauty",
    description: "Our crochet flowers exude a classic charm that never fades",
  },
  {
    image: Illustrations.HomeBanner,
    title: "Eco-Friendly",
    description: "Embrace sustainability with flowers that last a lifetime.",
  },
];

export default function Advantages(): ReactNode {
  return (
    <div className="flex flex-col justify-between my-10 md:flex-row gap-10">
      {ADVANTAGES_DATA.map((e) => (
        <div
          key={e.title}
          className=" bg-primary flex flex-col gap-3 p-10 rounded-xl w-full"
        >
          <div className="text-3xl font-bold text-white">{e.title}</div>
          <div className="text-lg text-white">{e.description}</div>
        </div>
      ))}
    </div>
  );
}
