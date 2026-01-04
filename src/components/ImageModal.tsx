"use client";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Image from "next/image";
import { useState } from "react";
import { Skeleton } from "./ui/skeleton";



interface ImageModalProps {
  src: string
  alt?: string
  thumbClassName?: string; // optional: control thumb size via props
  name: string
  type: string
}

export default function ImageModal({ src, alt = "image", thumbClassName, name, type }: ImageModalProps) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <div className="flex flex-col justify-center items-center font-pirate object-cover">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover rounded-lg"
          />
          <p>{name}</p>
        </div>


      </DialogTrigger>
      <DialogContent className={`p-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-none 
        flex justify-center items-center ${type === 'portrait' ? "max-w-[38%]" : "max-w-4xl"}`}>
        {src == null ? (
          <div>Null</div>
        ) : (
          <div className="relative w-full flex justify-center items-center object-cover">
            {/* Shimmer until loaded */}
            {loading && <Skeleton className="absolute w-full h-full rounded-lg" />}

            <Image
              src={src}
              alt={alt}
              width={1500}
              height={1000}
              onLoadingComplete={() => setLoading(false)}
              className={`rounded-lg object-contain ${type === "portrait"
                ? "max-w-[98%] max-h-[90%]"
                : " "
                }`}
            />
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

