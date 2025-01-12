import BottomBar from "@/components/BottomBar";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export default function Layout({children}: Readonly<{children: React.ReactNode}>) {  
  return (
  <main className="font-poppins -z-10 ">
    <Navbar/>
    <section className="flex ">
      <div className="max-sm:hidden w-[200px] max-md:w-fit h-[calc(100vh-71px)] sticky top-[71px] border-r-[0.1px] border-gray-800 bg-[#0A0A0A]">
        <Sidebar/>
      </div>
      <div className="flex flex-col w-full items-center justify-center border-r-[0.1px] border-gray-800">
      {children}
      </div>
    </section>
    <BottomBar/>
  </main>
 )
}