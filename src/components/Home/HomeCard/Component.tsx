"use client";
import { Images } from "@/shared/Constant/Assets";
import { Text } from "@chakra-ui/react";
import Image from "next/image";
import { ReactNode } from "react";
import { Projects, WhoAmI } from "..";

export default function HomeCard(): ReactNode {
  return (
    <div className="flex flex-col">
      <div className="flex space-x-4 gap-6 items-center justify-between flex-col-reverse md:flex-row m-2 p-2 md:m-7 md:p-7 md:pb-0 md:mb-0">
        <div className="flex md:w-1/2 flex-col gap-6">
          <Text className="text-8xl font-bold hidden lg:block">Greetings!</Text>
          <Text className="text-8xl font-bold lg:hidden text-center md:text-start">
            Hi!
          </Text>
          <Text className="text-xl text-gray-300 text-justify">
            I&apos;m Adrianto Wijaya, but you can just call me Awe!😊. I&apos;m
            a proud Binusian 23, a Zillenial developer that currently works as a
            Fullstack Programmer at Bina Nusantara IT Division and I&apos;m
            really interested on Frontend and Fullstack Development.
          </Text>
        </div>
        <div className="flex md:w-1/2 justify-center">
          <div className="relative rounded-full md:rounded-none bg-white md:bg-transparent">
            <Image
              alt="#"
              height={600}
              width={600}
              src={Images.MyPhotoHome}
              priority={true}
            />
          </div>
        </div>
      </div>
      <WhoAmI />
      <div id="projects">
        <Projects />
      </div>
    </div>
  );
}
