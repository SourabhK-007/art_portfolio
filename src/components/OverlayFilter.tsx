"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import Categories from "./Categories";
import { useEffect, useState } from "react";
import { getPostsByType } from "@/actions/post.action";
import { useTheme } from "next-themes";

const OverlayAnimation = () => {

    const [artType, setArtType] = useState("landscapes");
    const [posts, setPosts] = useState<any[]>([]);
    const { theme } = useTheme();
    useEffect(() => {
        getPostsByType(artType).then(setPosts);
    }, [artType]);

    return (
        <div className="flex justify-center w-full">
            <Tabs
                value={artType}
                defaultValue="portrait"
                onValueChange={setArtType}
                className="w-[300px] py-3"
            >
                {/* Tabs header */}
                <TabsList
                    className={`
    grid grid-cols-3 w-full rounded-xl p-1
    ${theme === "dark" ? "bg-gray-100" : "bg-black"}
  `}
                >
                    <TabsTrigger
                        value="portrait"
                        className={`
      py-2 rounded-lg transition-all
      ${theme === "dark" ? "text-black" : "text-white"}
      data-[state=active]:bg-white
      data-[state=active]:text-black
      data-[state=active]:shadow
    `}
                    >
                        Portrait
                    </TabsTrigger>

                    <TabsTrigger
                        value="landscapes"
                        className={`
      py-2 rounded-lg transition-all
      ${theme === "dark" ? "text-black" : "text-white"}
      data-[state=active]:bg-white
      data-[state=active]:text-black
      data-[state=active]:shadow
    `}
                    >
                        Landscape
                    </TabsTrigger>

                    <TabsTrigger
                        value="negative"
                        className={`
      py-2 rounded-lg transition-all
      ${theme === "dark" ? "text-black" : "text-white"}
      data-[state=active]:bg-white
      data-[state=active]:text-black
      data-[state=active]:shadow
    `}
                    >
                        Negative
                    </TabsTrigger>
                </TabsList>


                {/* Tabs content */}
                <TabsContent value="portrait">
                    <Categories maskedImg="masked-img" mainImg="/images/img2.jpeg" type={artType} />
                </TabsContent>
                <TabsContent value="landscapes">
                    <Categories maskedImg="masked-img-2" mainImg="/images/img3.jpeg" type={artType} />
                </TabsContent>
                <TabsContent value="negative">
                    <Categories maskedImg="masked-img-3" mainImg="/images/hritik.jpeg" type={artType} />
                </TabsContent>
            </Tabs>
        </div>

    );
};

export default OverlayAnimation;