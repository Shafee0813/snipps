"use client"

import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { redirect } from "next/navigation";
import { Suspense } from "react";
import Loading from "@/app/(root)/loading";

export default function Layout({children}: Readonly<{children: React.ReactNode}>) {  
  return (
  <section className="flex justify-center m-auto min-h-[calc(100vh-116px)]">
    <div>
    <Button  className="flex items-center bg-transparent hover:bg-neutral-700 p-4 py-6 my-1 rounded-full " onClick={() => {redirect('/feed')}}>
      <ArrowLeft className="w-4 h-4 text-white"/>
    </Button >
    <Suspense fallback={<Loading/>}>
    {children}
    </Suspense>

    </div>
  </section>
 )
}