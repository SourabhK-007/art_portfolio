"use server";
import { prisma } from "../lib/prisma";

export async function createTestimony(name: string, email: string, context: string, imgUrl: string) {
    try {
        const testimony = await prisma.testimony.create({
            data: {
                fullname: name,
                email,
                textimony: context,
                imgUrl
            }
        })
        return { success: true, testimony }
    } catch (err) {
        console.error("error creating testimony ", err)
    }
}

export async function getAllTestimony() {
    try {
        const testimonies = await prisma.testimony.findMany({
            orderBy: {
                createdAt: "desc"
            }
        })
        // console.log(testimonies)
        return { success: true, testimonies }
    } catch (err) {
        console.error("error fetching testimony ", err)
    }
}

export async function checkTestimony(email: string) {
    console.log("the email",email)
    try {
        const res = await prisma.testimony.findMany({
            where: {
                email: email
            }
        })
        return {success:true,res}
    } catch (err) {
        console.log("error testing", err)
    }
}