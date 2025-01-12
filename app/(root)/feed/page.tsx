"use client"

import FeedCard from "@/components/FeedCard";
import { IPost } from "@/models/post";
import { useEffect, useState } from "react";
import Loading from "@/app/(root)/loading";

const Page = () => {
  
  const [posts, setPosts] = useState<IPost[]>()
  const [loading, setLoading] = useState<boolean>(true);

  async function fetchPosts() {
    setLoading(true);
    const posts = await fetch("/api/post");
    const data = await posts.json();  
    setPosts(data);
    setLoading(false);
  }

  useEffect(() => {
    fetchPosts();
  },[])
  if (loading) {
    return (
      <Loading/>
    );
  }
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-row justify-center items-center flex-wrap">

      {posts && posts.map((post) => (
        <FeedCard
        avatar = {"/favicon.ico"}
        key={post._id as string}
        id = {post._id as string}
        title={post.title}
        description={post.description}
        language={post.language}
        creator={post.creator.username}
        
        />
      ))}
      </div>
    </div>
  )
}

export default Page