
import { auth, currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import {prisma} from '../lib/prisma'

export async function syncUser() {
    console.log("running sync")
    try {
        const { userId } = await auth();
        const user = await currentUser();
        // console.log(userId);
        // console.log(user)

        if (!userId || !user) return;
        //check user exists
        const existingUser = await prisma.user.findUnique({
            where: {
                clerkId: userId
            }
        });

        if (existingUser) return existingUser;

        const dbUser = await prisma.user.create({
            data: {
                clerkId: userId,
                name: `${user.firstName || ""} ${user.lastName || ""}`,
                email: user.emailAddresses[0].emailAddress,
                image: user.imageUrl,
                role: (user.privateMetadata?.role as string) || "user"
            }
        })
        if(dbUser){
            console.log("created user")
        }
        return dbUser;
    } catch (error) {
        // console.log(error)
        console.log("Error in sync user",error);
    }
}