"use client"
import Link from "next/link"
import { CirclePlus, House, Info } from "lucide-react"
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";


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


const Sidebar = () => {
    const pathname = usePathname();
  
  return (
    <section className="flex flex-col items-start justify-center w-full p-4 gap-3 ">
      {sideBarLinks.map((link) => (
        <Link key={link.link} href={link.link} className={cn(pathname === link.link && " font-bold bg-neutral-800","flex justify-start w-full p-3  hover:bg-[#1a1a1a] rounded-xl transition-colors duration-300 items-center  gap-2")} >
          <link.icon className="" strokeWidth={pathname === link.link ? 3 : 1.5}/>
          <span className="max-md:hidden text-sm">{link.label}</span>
        </Link>
      ))}
    </section>
  )
}

export default Sidebar