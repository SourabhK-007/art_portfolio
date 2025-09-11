import Link from 'next/link'
import React from 'react'
import DesktopNavbar from './DesktopNav'

async function Nav() {


  return (
    <nav className="sticky top-0 w-full border-b bg-background/95 backdrop-blur  z-50">
      <div className="px-4 mx-auto ">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-primary font-mono tracking-wider">
              Socially
            </Link>
          </div>

          <DesktopNavbar />

        </div>
      </div>
    </nav>
  )
}

export default Nav