

import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Hero from '../components/Hero'
import Art from "@/components/Art";
import { auth, currentUser } from "@clerk/nextjs/server";
import { getClerkUserId } from "@/actions/auth";
import CarouselMenu from "@/components/CarouselMenu";
import StickyVideo from "@/components/Testimonials";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import { useState } from "react";
import OverlayButton from "@/components/OverlayFilter";



export default async function Home() {
  const a = await getClerkUserId();

  // console.log("userId",a[0]);
  // console.log("user",a[1]);
  // console.log("hey there")
  return (

    <div>
     
      <Hero />
      <Art />
      <CarouselMenu/>
      <Testimonials/>
      <Footer/>
 
    </div>

  );
}
