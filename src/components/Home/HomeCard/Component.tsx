"use client";
import { Images } from "@/shared/Constant/Assets";
import { Text } from "@chakra-ui/react";
import Image from "next/image";
import { ReactNode } from "react";

export default function HomeCard(): ReactNode {
  return (
    <div className="gap-10 flex flex-col">
      <div className="flex w-full space-x-4 gap-6 items-center justify-between flex-col-reverse md:flex-row my-6">
        <div className="flex md:w-1/2 flex-col gap-6">
          <Text className="text-8xl font-bold hidden lg:block">Greetings!</Text>
          <Text className="text-8xl font-bold lg:hidden">Hi!</Text>
          <Text className="text-2xl text-gray-300 text-justify">
            I&apos;m Adrianto Wijaya, but you can just call me Awe!😊. I&apos;m
            currently a Fullstack Programmer at Bina Nusantara IT Division and
            I&apos;m really interested on Frontend and Fullstack Development.
          </Text>
        </div>
        <div className="flex md:w-1/2 justify-center">
          <div className="relative">
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
    </div>
  );
}
