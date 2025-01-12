import { NextResponse } from "next/server";
import { connectToDB } from "@/lib/dbconnect";
import User from "@/models/user";

export async function GET({ params }: { params: { id: string } }) {
  try {
    await connectToDB();
    const  id  = (await params).id; // Destructure id properly from params
    const user = await User.findById(id); // Fix findById usage
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    console.error("Error fetching post:", error);
    return NextResponse.json(
      { error: "Failed to fetch post", details: error },
      { status: 500 }
    );
  }
}
