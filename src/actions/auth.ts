import { auth, currentUser } from "@clerk/nextjs/server";

export async function getClerkUserId(){
const {userId}=await auth();
const user= await currentUser();
// console.log("role: ",user?.privateMetadata?.role);
return [userId, user?.privateMetadata?.role]
}

export async function isAdmin() {
    const user= await currentUser();
    return user?.privateMetadata?.role;
}