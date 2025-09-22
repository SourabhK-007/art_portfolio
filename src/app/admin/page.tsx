"use server"
import CreatePost from '@/components/CreatePost'
import { currentUser } from '@clerk/nextjs/server'
import React from 'react'

const page = async() => {

    const user =await currentUser();
    if(user?.privateMetadata?.role !== 'admin'){
        return(
            <div>
                Not admin
            </div>
        )
    }
  return (

    <div className='w-screen flex justify-center'>

        <CreatePost/>
    </div>
  )
}

export default page