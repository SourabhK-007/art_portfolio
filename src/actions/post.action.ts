"use server";
import { revalidatePath } from "next/cache";

import { prisma } from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";
import { Post } from "@prisma/client";


export async function createPost(name: string, imageUrl: string, type: string) {
    try {
        const user = await currentUser();
        if (user?.privateMetadata?.role != 'admin') return;
        const post = await prisma.post.create({
            data: {
                name,
                imageUrl,
                type
            }
        })
        revalidatePath("/"); //purge cache for the home page
        return { success: true, post }
    } catch (error) {
        console.error("Failed to create post", error);
        return { success: false, error: "Failed To Create Posts " }
    }
}
export async function getPosts() {
    try {
        const posts = await prisma.post.findMany({
            orderBy: {
                createdAt: "desc",
            },
        });
        return posts;
    } catch (err) {
        console.log("Error in getting posts", err);
        return [];
    }
}
export async function getPostsByType(type:string | null ) {
    try {
        const posts = await prisma.post.findMany({
           where: {
                type:type
            }
        });
        return posts;
    } catch (err) {
        console.log("Error in getting posts", err);
        return [];
    }
}

var Posts:Array<Post> = [];

export async function updatePostsArray(res:Array<Post>){
    try{
        if(res.length==0){
            return "Arry is empty"
        }
    Posts=res;
    // console.log("updated posts",Posts)
    }catch(error){
        console.log("Error updating Array of images",error)
    }
}
export async function getPostsArray(){
    try {
        // console.log(Posts)
        return Posts
    } catch (error) {
        console.error("Error returning posts",error)
    }
}

