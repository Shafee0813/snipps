"use client"

import Link from "next/link"
import { CirclePlus, House, Info } from "lucide-react"
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const sideBarLinks = [
  {
    link: "/about",
    label: "About",
    icon: Info
  }, 
  {
    link: "/feed",
    label: "Feed",
    icon: House
  },
  {
    link: "/create",
    label: "Create",
    icon: CirclePlus
  }
]

const BottomBar = () => {

  const pathname = usePathname();

  return (
    <footer className="hidden max-sm:flex flex-row justify-around items-center sticky bottom-0 bg-[#0A0A0A] border-t-[0.1px]  py-1">
      {sideBarLinks.map((link) => ( 
        <Link key={link.link} href={link.link} 
        className={cn(pathname === link.link && "bg-neutral-800 rounded-full","p-2")} 
        >
          <link.icon className="w-5 h-5" strokeWidth={pathname === link.link ? 3 : 1.5} id = "icon"/>
        </Link>
      ))}
    </footer>
  )
}

export default BottomBar