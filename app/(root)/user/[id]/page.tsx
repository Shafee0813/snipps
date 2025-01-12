"use client"
import { useEffect, useState } from "react";
import Loading from "@/app/(root)/loading";
import { IUser } from "@/models/user";
import Image from "next/image";
import { IPost } from "@/models/post";
import Link from "next/link";
import FeedCard from "@/components/FeedCard";

export default function Page({ params } : { params: Promise<{ id: string }> }) {
  const [profile, setProfile] = useState<IUser>()
  const [loading, setLoading] = useState<boolean>(true);
  const [posts, setPosts] = useState<IPost[]>()
  
  
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const userId = (await params).id;
      const getProfile = await fetch(`/api/users/${userId}`); 
      const profileDdata = await getProfile.json();
      setProfile(profileDdata);
      const getPosts = await fetch(`/api/userposts/${userId}`); 
      const postsData = await getPosts.json();
      setPosts(postsData);
      setLoading(false);
    }
    fetchData();
  },[params])

  if (loading) {
    return (
      <Loading/>
    );
  }
  return (
    <section className="flex flex-col items-center  max-w-[600px] max-md:min-w-[300px]   min-h-[calc(100vh-80px)]  p-4">
      <div className="flex  items-start justify-around w-full gap-3">
      <Image src={profile?.image || ""} alt="profile" width={160} height={160}  className="rounded-full max-md:w-[100px]" />
      <div className="flex flex-col items-start justify-around h-full text-xl max-md:text-base">
        <h1>{profile?.username}</h1>
        <Link href={`https://github.com/${profile?.username}`} className="hover:underline text-sm text-neutral-300">Visit {profile?.username}&apos;s Github</Link>
        </div>
      </div>
      <div className="flex flex-col items-start justify-around w-full gap-3">
        <div className="h-[1px] w-full bg-neutral-600 m-2 mt-4"></div>
      <p className="ml-4 m-2">{profile?.username}&apos;s Posts : </p>
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
    </section>
  )
}