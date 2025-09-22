"use client"

import * as React from "react"
import Image from "next/image"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

interface ImageCarouselDialogProps {
  images: { id?: string | number; src: string; alt?: string; type?: string; name?: string }[]
  startIndex?: number
  trigger?: React.ReactNode
}

export function ImageCarouselDialog({ images, startIndex = 0, trigger }: ImageCarouselDialogProps) {
  const [open, setOpen] = React.useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}

      <DialogContent
        className={`p-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-none 
          flex justify-center items-center max-w-6xl max-h-4xl`}
      >
        <Carousel className="w-full" opts={{ startIndex, loop: true }}>
          <CarouselContent className="h-[80dvh] object-contain">
            {images.map((img, idx) => (
              <CarouselItem key={img.id ?? idx} className="flex justify-center items-center">
                <div className="relative flex justify-center items-center w-[80%] h-[30%]">
                  <Image
                    src={img.src}
                    alt={img.alt ?? `image-${idx}`}
                    width={1500}
                    height={1000}
                    className={`rounded-lg h-[80dvh] object-contain`}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </DialogContent>
    </Dialog>
  )
}
