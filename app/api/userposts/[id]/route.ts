import { NextResponse } from "next/server";
import Post from "@/models/post";
import { connectToDB } from "@/lib/dbconnect";

export async function GET({ params }: { params: { id: string } }) {
  try {
    await connectToDB();
    const  id  = (await params).id; // Destructure id properly from params
    const posts = await Post.find({creator : id }).populate("creator").sort({ views: -1 });
    return NextResponse.json(posts, { status: 200 });
  } catch (error) {
    console.error("Error fetching posts:", error);
    return NextResponse.json(
      { error: "Failed to fetch posts" },
      { status: 500 }
    );
  }
}
