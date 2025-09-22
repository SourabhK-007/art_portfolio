"use client"
import { useUser } from "@clerk/nextjs";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ImageIcon, Loader2Icon, SendIcon } from "lucide-react";
import { createPost } from "@/actions/post.action";

import ImageUpload from "./ImageUpload";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import toast from "react-hot-toast";
function CreatePost() {
    const { user } = useUser();


    const [name, setName] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [type, setType] = useState("portrait");
    const [isPosting, setIsPosting] = useState(false);
    const [showImageUpload, setShowImageUpload] = useState(false);

    const handleSubmit = async () => {
        if (!name.trim() && !imageUrl) return

        setIsPosting(true);
        try {
            const res = await createPost(name, imageUrl, type);
            // console.log("Post response:", res)
            if (res?.success) {
                toast.success("Post Created!");
                setName("");
                setImageUrl("");
                setShowImageUpload(false);

            }

        } catch (error) {
            console.error("Failed to create post", error);
            toast.error("Failed to create post")
        } finally {
            setIsPosting(false);

        }

    }



    return (
        <Card className="w-[500px]">
            <CardContent className="pt-5">
                <div className="space-y-4">
                    <div className="flex space-x-4">
                        <Avatar className="w-10 h-10">
                            <AvatarImage src={user?.imageUrl || "/avatar.png"} />

                        </Avatar>
                        <Textarea
                            placeholder="Got something on your mind?"
                            className="min-h-[100px] resize-none border-none focus-visible:ring-0 p-0 text-base"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            disabled={isPosting}
                        />

                        <Select onValueChange={setType} defaultValue="portrait">
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Type" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="portrait">Portrait</SelectItem>
                                <SelectItem value="landscapes">Landscape</SelectItem>
                                <SelectItem value="negative">Negative</SelectItem>
                            </SelectContent>
                        </Select>

                    </div>
                    {/* handle image upload */}

                    {(showImageUpload || imageUrl) && (
                        <div className="border rounded-lg p-4">
                            <ImageUpload
                                endpoint="postImage"
                                value={imageUrl}
                                onChange={(url) => {
                                    setImageUrl(url);
                                    if (!url) setShowImageUpload(false);

                                }}
                            />
                        </div>
                    )}

                    <div className="flex items-center justify-between border-t pt-4">
                        <div className="flex space-x-2">
                            <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                className="text-muted-foreground hover:text-primary"
                                onClick={() => setShowImageUpload(!showImageUpload)}
                                disabled={isPosting}
                            >
                                <ImageIcon className="size-10 mr-2" />
                                Photo
                            </Button>
                        </div>
                        <Button
                            className="flex items-center"
                            onClick={handleSubmit}
                            disabled={(!name.trim() && !imageUrl) || isPosting}
                        >
                            {isPosting ? (
                                <>
                                    <Loader2Icon className="size-4 mr-2 animate-spin" />
                                    Posting...
                                </>
                            ) : (
                                <>
                                    <SendIcon className="size-4 mr-2" />
                                    Post
                                </>
                            )}
                        </Button>
                    </div>
            
                </div>
            </CardContent>
        </Card>
    )
}

export default CreatePost