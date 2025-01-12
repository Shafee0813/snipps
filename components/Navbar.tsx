
import { auth, signIn, signOut,} from "@/auth";
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ArrowRight, LogOut } from "lucide-react";


const Navbar = async () => {
  const session = await auth();
  
  return (
    <header className="font-sans px-5 py-2 border-b-[0.1px] border-gray-600 sticky top-0 bg-[#0A0A0A] z-50">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <Image src = "/logo.png" alt = "logo" width = {120} height = {40} />      
        </Link>
        <div className={cn(session &&"hidden")}>
          <form action={async () => {
            "use server"
            await signIn("github")
            }}>
              <button type="submit" className=" bg-neutral-200 p-2 py-1 rounded-[5px] hover:bg-neutral-300 transition-colors duration-300 text-sm text-neutral-800"> Sign In with Github
            </button>
          </form>      
        </div>
        <div className={cn(!session && "hidden", "mr-5")}>
        <DropdownMenu>
          <DropdownMenuTrigger>{session && <Image src= {session?.user?.image || ""} alt = "user" width = {30} height = {30} className="rounded-full"/>}</DropdownMenuTrigger>
          <DropdownMenuContent className="">
            <DropdownMenuLabel>{session?.user?.name}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem > <Link href={`/user/${session?.user?.id}`} className="flex justify-between w-full items-center"><span>My posts</span> <ArrowRight className="w-4 h-4"/></Link></DropdownMenuItem>
            <DropdownMenuItem className="bg-red-800 !hover:bg-red-500 w-full"> 
            <form action={async () => {
              "use server"
              await signOut();              
            }}
            className="w-full">
              <button type="submit" className="flex justify-between w-full items-center bg-transparent hover:bg-transparent text-white "><span>Log out </span> <LogOut className="w-4 h-4"/></button>
              </form>
                </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        </div>
      </nav>
    </header>
  )
}

export default Navbar