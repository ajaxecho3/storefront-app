import { Image as ImageType } from "@/types";
import React from "react";
import { Tab } from "@headlessui/react";
import Image from "next/image";
import { cn } from "@/lib/utils";

type GalleryTabProps = {
  image: ImageType;
};

const GalleryTab = ({ image }: GalleryTabProps) => {
  return (
    <Tab
      className={
        "relative flex aspect-square cursor-pointer items-center bg-white justify-center rounded-md "
      }
    >
      {({ selected }) => (
        <div>
          <span className=" absolute h-full w-full aspect-square inset-0 overflow-hidden rounded-md">
            <Image
              fill
              src={image.url}
              alt="Image"
              className=" object-cover object-center"
            />
          </span>
          <span
            className={cn(
              "absolute inset-0 rounded-md ring-2 ring-offset-2",
              selected ? "ring-black" : "ring-transparent",
            )}
          />
        </div>
      )}
    </Tab>
  );
};

export default GalleryTab;
