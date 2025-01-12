"use client"
import CodeBlock from "@/components/CodeBlock";
import { IPost } from "@/models/post";
import { useEffect, useState } from "react";
import Loading from "@/app/(root)/loading";
import Link from "next/link";
import { ButtonSwitch, ButtonSwitchContent } from "@/components/button-switcher";

export default function Page({ params } : { params: Promise<{ id: string }> }) {
  const [post, setPost] = useState<IPost>()
  const [loading, setLoading] = useState<boolean>(true);
  
  useEffect(() => {
    async function fetchPost() {
      setLoading(true);
      const postId = (await params).id;
      const getPost = await fetch(`/api/post/${postId}`); 
      const data = await getPost.json();
      setPost(data);
      setLoading(false);
    }
      fetchPost();
  },[params])

  if (loading) {
    return (
      <Loading/>
    );
  }

  return (
    <section className="flex flex-col justify-center p-2 w-[550px] max-sm:w-[350px]  min-h-fit rounded-xl mb-4">
    <ButtonSwitch
      options={[
        { value: "post", label: "Post" },
        { value: "code", label: "Code" },
      ]}
    >
      <div className="bg-zinc-800 h-[0.1px] relative -top-[16.6px] max-w-[600px] -z-10"></div>
      <ButtonSwitchContent value="post" >
        <div className="mx-4 py-4">
        <h1 className="text-2xl font-semibold">
          {post?.title}
        </h1>
        <p className="bg-zinc-700 cursor-pointer hover:bg-zinc-800 border-zinc-800 border-[0.1px] my-2 w-fit p-2 py-1   text-[12px] rounded-[1rem] font-bold">{post?.language}</p>
        <span className="block my-2 mx-2 text-muted-foreground">
          A snipp by <Link href={`https://github.com/${post?.creator?.username}`} className="hover:underline">{post?.creator?.username}</Link>
        </span>
        <p>
          {post?.description}
        </p>
        </div>
      </ButtonSwitchContent>

      <ButtonSwitchContent value="code">
        <CodeBlock code={post?.code as string} language={post?.language as string} />
      </ButtonSwitchContent>
    
    </ButtonSwitch>
    </section>
  )
}