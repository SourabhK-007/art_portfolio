"use client";
import React, { useEffect, useRef, useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getPostsByType, } from '@/actions/post.action';
import Image from 'next/image';
import { ImageCarouselDialog } from './ImageCarouselDailog';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faMountainSun, faYinYang } from "@fortawesome/free-solid-svg-icons";

const CarouselMenu = () => {
    const [artType, setArtType] = useState("landscapes");
    const [posts, setPosts] = useState<any[]>([]);
    const triggerRef = useRef<HTMLDivElement>(null);
    const [showOverlay, setShowOverlay] = useState(false);
    const topRef = useRef<HTMLDivElement>(null);
    const bottomRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        getPostsByType(artType).then(setPosts);
    }, [artType]);

    useEffect(() => {
        const handleScroll = () => {
            if (!topRef.current || !bottomRef.current) return;

            const top = topRef.current.getBoundingClientRect().top;
            const bottom = bottomRef.current.getBoundingClientRect().top;

            // Tabs are stuck AND we're still inside CarouselMenu
            const isInStickyZone = top <= 0 && bottom > 0;

            setShowOverlay(isInStickyZone);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // run once on mount

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);



    return (
        <div className="relative w-screen flex flex-col items-center gap-10 mt-[200px]">



            <h1 className="font-pirate text-5xl text-center">
                A Glimpse of My Art Categories
            </h1>
            {/* 🔼 Top sentinel */}
            <div ref={topRef} className="h-[2px] -mt-[2px]" />

            {/* Sticky Tabs */}
            <div className="sticky top-0 z-40 bg-white w-full flex justify-center">
                <Tabs value={artType} onValueChange={setArtType} className="w-[300px] py-3">
                    <TabsList className="grid grid-cols-3 w-full">
                        <TabsTrigger value="portrait">Portrait</TabsTrigger>
                        <TabsTrigger value="landscapes">Landscape</TabsTrigger>
                        <TabsTrigger value="negative">Negative</TabsTrigger>
                    </TabsList>
                </Tabs>
            </div>

            {/* Content */}
            <div className="w-[95%] flex justify-center pt-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-8">
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
                                    <p className="font-pirate text-center">{img.name}</p>
                                </div>
                            }
                        />
                    ))}
                </div>
            </div>

            {/* 🔽 Bottom sentinel */}
            <div ref={bottomRef} className="h-[2px]" />

            {/* Overlay */}

            <div className={`fixed bottom-4 left-1/2 -translate-x-1/2 w-[80%] sm:w-[60%] lg:w-[40%]  rounded-2xl bg-slate-500 z-50 flex items-center justify-center transition-all duration-500 ease-out ${showOverlay
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4 pointer-events-none"} `}
            >



                <Tabs value={artType} onValueChange={setArtType} className="w-full">
                    <TabsList className="flex justify-around items-center w-full h-full">
                        <TabsTrigger className="flex items-center justify-center" value="portrait">
                            <FontAwesomeIcon icon={faUser} className="h-5 w-5" />
                        </TabsTrigger>

                        <TabsTrigger className="flex items-center justify-center" value="landscapes">
                            <FontAwesomeIcon icon={faMountainSun} className="h-5 w-5" />
                        </TabsTrigger>

                        <TabsTrigger className="flex items-center justify-center" value="negative">
                            <FontAwesomeIcon icon={faYinYang} className="h-5 w-5" />
                        </TabsTrigger>
                    </TabsList>
                </Tabs>

            </div>

        </div>

    );
};

export default CarouselMenu;