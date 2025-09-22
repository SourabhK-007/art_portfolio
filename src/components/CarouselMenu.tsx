"use client";
import React, { useEffect, useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Categories from './Categories';
import { getPosts, getPostsByType, updatePostsArray, } from '@/actions/post.action';
import { Dialog, DialogContent, DialogTrigger } from './ui/dialog';
import Image from 'next/image';
import ImageModal from './ImageModel';
import { ImageCarouselDialog } from './ImageCarouselDailog';

const CarouselMenu = () => {
    const [artType, setArtType] = useState("landscapes");
    const [posts, setPosts] = useState<any[]>([]);

    useEffect(() => {
        async function fetchPosts() {
            const res = await getPostsByType(artType); // calls server action
            setPosts(res);
            console.log(res);

        }
        fetchPosts();
    }, [artType]);



    console.log("Art type", artType);
    return (
        <div className='w-screen flex flex-col justify-center items-center '>
            <div className="flex justify-center my-20">
                <h1 className="font-pirate text-5xl text-center">
                    A Glimpse of My Art Categories
                </h1>
            </div>
            {/* category tabs*/}
            <div className='flex justify-center '>
                <Tabs value={artType} defaultValue='portrait' onValueChange={setArtType} className='w-[300px]'>
                    <TabsList className="grid grid-cols-3 w-full mb-10">
                        <TabsTrigger value="portrait">Portrait</TabsTrigger>
                        <TabsTrigger value="landscapes">Landscape</TabsTrigger>
                        <TabsTrigger value="negative">Negative</TabsTrigger>
                    </TabsList>


                    <TabsContent value="portrait" >
                        <Categories maskedImg="masked-img" mainImg="/images/img2.jpeg" type={artType} />
                    </TabsContent>
                    <TabsContent value="landscapes">
                        <Categories maskedImg="masked-img-2" mainImg="/images/img3.jpeg" type={artType}/>
                    </TabsContent>
                    <TabsContent value="negative">
                        <Categories maskedImg="masked-img-3" mainImg="/images/hritik.jpeg" type={artType}/>
                    </TabsContent>
                </Tabs>
            </div>
            
            <div className="w-[95%] flex justify-center pt-10">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-x-4 gap-y-8">
                    {posts.map((img, idx) => (
                        <ImageCarouselDialog
                            key={img.id ?? idx}
                            images={posts.map(p => ({
                                id: p.id,
                                src: p.imageUrl,
                                alt: p.alt,
                                type: p.type,
                                name: p.name,
                            }))}
                            startIndex={idx}
                            trigger={
                                <div>
                                       <Image
                                    src={img.imageUrl}
                                    alt={img.alt ?? `thumb-${idx}`}
                                    width={400}
                                    height={300}
                                    className="rounded-lg cursor-pointer object-cover w-[350px] h-[270px]"
                                />
                                <p className='font-pirate text-center'>{img.name}</p>
                                </div>
                             
                            }
                        />
                    ))}
                </div>
            </div>


        </div>
    )
}

export default CarouselMenu