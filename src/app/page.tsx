

import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Hero from '../components/Hero'
import Art from "@/components/Art";

export default function Home() {
  return (
    <div>
      <Hero />
      <Art/>
    </div>

  );
}
