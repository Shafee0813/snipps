import { NextResponse } from "next/server";
import Post from "@/models/post";
import { connectToDB } from "@/lib/dbconnect";

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    await connectToDB();
    const  id  = (await params).id; // Destructure id properly from params
    const post = await Post.findById(id).populate("creator"); // Fix findById usage
    if (!post) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }
    return NextResponse.json(post, { status: 200 });
  } catch (error) {
    console.error("Error fetching post:", error);
    return NextResponse.json(
      { error: "Failed to fetch post", details: error },
      { status: 500 }
    );
  }
}
