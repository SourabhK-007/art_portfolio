import Link from 'next/link'
import React from 'react'
import DesktopNavbar from './DesktopNav'
import { auth, currentUser } from '@clerk/nextjs/server';
import { syncUser } from '@/actions/user.action';

async function Nav() {
  const user = await currentUser();
  if (user) await syncUser();


  return (
    <nav className="sticky top-0 w-full border-b bg-background/95 backdrop-blur  z-50">
      <div className="px-4 mx-auto ">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-moderna font-bold text-primary tracking-wider">
             KALAVIDA
            </Link>
          </div>

          <DesktopNavbar />

        </div>
      </div>
    </nav>
  )
}

export default Nav