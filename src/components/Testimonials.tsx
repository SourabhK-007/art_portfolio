"use client";
import React, { useEffect, useRef, useState } from 'react'
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import Image from 'next/image';
import gsap from "gsap"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { ScrollTrigger } from 'gsap/all';
import { useTheme } from 'next-themes';
import { Card } from './ui/card';
import { Input } from "@/components/ui/input"
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { SignInButton, useUser } from '@clerk/nextjs';
import { Fullscreen, LogInIcon } from 'lucide-react';
import { createTestimony, getAllTestimony } from '@/actions/testimony';
import { Testimony } from '@prisma/client';


const Testimonials = () => {

  const { user } = useUser();
  // console.log("User ", user);
  // console.log("email", user?.emailAddresses[0].emailAddress)
  // console.log("hi there")
  const { theme } = useTheme()
  const [context, setContext] = useState("");
  const [testimonies, setTestimonies] = useState<any[]>([]);


  useEffect(() => {
    const fetchTestimonies = async () => {
      const t = await getAllTestimony();
      setTestimonies(t?.testimonies ?? [])
    }
    fetchTestimonies();
  }, [])


  const handleSubmit = async () => {

    try {
      const res = await createTestimony(user?.fullName ?? "", user?.emailAddresses[0].emailAddress ?? "", context, user?.imageUrl ?? "")
      if (res?.success) {
        console.log(" Testimony created successfully")
      }
      console.log(res)
    } catch (error) {
      console.log("Error creating testimony", error)
    }
  }

  
  const mid = Math.floor(testimonies.length / 2);
  const f = testimonies.slice(0, mid);
  const s = testimonies.slice(mid);
  // console.log("first", f.length);
  // console.log("sec", s.length)
  return (
    <div className='w-full h-auto flex flex-col justify-center items-center my-10'>
      <div className='font-pirate flex flex-col items-center py-10 text-center'>
        <h1 className='text-5xl'>Testimonials</h1>
        <p className='text-2xl'>Expressions from those moved by my works</p>
      </div>
      <ScrollArea className="w-[72%] rounded-md overflow-x-auto overflow-y-hidden whitespace-nowrap pb-2   no-scrollbar">
        <div >
          <div className="flex w-max space-x-4 p-1">
            {f.map((artwork) => (
              <div key={artwork.id} className="shrink-0">
                <div className={`w-[350px] h-[200px] overflow-hidden rounded-xl border-2 font-mono
                 flex flex-col p-5  justify-between ${theme === 'dark' ? 'text-black bg-white' : 'text-white bg-black'}`}>
                  <div className='flex items-center gap-4'>
                    <Image
                      src={artwork.imgUrl}
                      alt={`Photo by ${artwork.fullname}`}
                      className=" w-[50px] h-[50px] rounded-[100%]"
                      width={300}
                      height={400}
                    />
                    <p>{artwork.fullname}</p>
                  </div>
                  <div className='w-[85%] text-wrap line-clamp-4 leading-tight'>
                    <p className='text-[14px]'>{artwork.textimony}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='flex '>
          <div className='w-[250px] h-[200px]' >

          </div>
          <div className="flex w-max space-x-4 p-1">
            {s.map((artwork) => (
              <div key={artwork.id} className="shrink-0">
                <div className={`w-[350px] h-[200px] overflow-hidden rounded-xl border-2 font-mono
                 flex flex-col p-5  justify-between ${theme === 'dark' ? 'text-black bg-white' : 'text-white bg-black'}`}>
                  <div className='flex items-center gap-4'>
                    <Image
                      src={artwork.imgUrl}
                      alt={`Photo by ${artwork.fullname}`}
                      className=" w-[50px] h-[50px] rounded-[100%]"
                      width={300}
                      height={400}
                    />
                    <p>{artwork.fullname}</p>
                  </div>
                  <div className='w-[85%] text-wrap line-clamp-4 leading-tight'>
                    <p className='text-[14px]'>{artwork.textimony}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      <div className='mt-10 min-w-[250px] md:min-w-[350px] lg:min-w-[700px] space-y-2'>

        <div className='font-pirate w-full text-2xl flex flex-col items-center'>
          <h1>Share what my art speaks to you</h1>
        </div>
        <Card className='p-5 sm:flex sm:flex-row flex-col justify-end h-auto'>


          <Textarea
            placeholder="Got something on your mind?"
            className="min-h-[100px] resize-none border-none focus-visible:ring-0  text-base"
            onChange={(e) => setContext(e.target.value)}
            value={context}
          />
          <div className='h-[100] flex flex-col justify-end '>
            {user ? (
              <Button onClick={handleSubmit}>
                Post
              </Button>
            ) : (

              <SignInButton mode="modal">
                <Button variant="outline" className="gap-2">
                  <LogInIcon className="size-4" />
                  Sign in to Post
                </Button>
              </SignInButton>

            )

            }

          </div>

        </Card>
      </div>
    </div>

  )
}

export default Testimonials