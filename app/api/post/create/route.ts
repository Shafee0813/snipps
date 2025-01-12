import { NextResponse } from "next/server";
import Post, { IPost } from "@/models/post";
import { connectToDB } from "@/lib/dbconnect";

export async function POST(req: Request) {
  try {
    await connectToDB();
    
    const body = await req.json(); // Parse the JSON body
    const { creator, title, description, language, code, views } = body;

    const newPost = new Post<IPost>({
      creator,
      title,
      description,
      language,
      code,
      views,
    });

    await newPost.save();
    return NextResponse.json(newPost, { status: 201 });
  } catch (error) {
    console.error("Error creating post:", error);
    return NextResponse.json({ error: "Failed to create post" }, { status: 500 });
  }
}
