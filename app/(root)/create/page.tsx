import { auth } from "@/auth"
import CreateForm from "@/components/CreateForm";
import { redirect } from "next/navigation";
import React from "react";

const page = async () => {
  const session = await auth();
  if(!session) return redirect('/');
  return (
    <main className="w-fit flex flex-col items-center justify-center ">

    
    <h1 className="font-montserrat font-extrabold heading-text m-10"> Create your own Snipp!</h1>
    <CreateForm ID = {session?.user?.id as string}/>
    </main>

  )
}


export default page