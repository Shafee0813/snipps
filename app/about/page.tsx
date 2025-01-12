
import Navbar from '@/components/Navbar'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import React from 'react'
import { TextShimmer } from '@/components/ui/text-shimmer'
import GridBackgroundWrapper from '@/components/ui/grid-background-wrapper'
import { BorderTrail } from '@/components/ui/border-trail'
import { NextJsIcon , MongoDBIcon , NodeJsIcon , ShadCnIcon , TailwindCSSIcon , TypeScriptIcon } from '@/public/svg/index'
import Image from 'next/image'
import { ArrowRight, Circle, GithubIcon, Terminal } from 'lucide-react'
import Link from 'next/link'
import {  buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const page = () => {
  return (
    <section className='max-w-screen  relative bg-black'>
      <Navbar/>
      <div className='flex flex-col font-montserrat text-center justify-center items-center py-16 m-5 min-h-[calc(100vh-100px)] '>
        <h1  className='text-5xl pb-3 font-bold max-md:text-2xl block  motion-preset-slide-right-lg motion-opacity-in-[0%] motion-delay-800'>Introducing Snipps</h1> 
        <h1 className='text-4xl font-bold max-md:text-xl block  pb-5 motion-preset-slide-left-lg motion-opacity-in-[0%] motion-delay-800'> A code snippet sharing platform</h1>
        <h1 className='text-xl text-neutral-400 font-sans motion-preset-slide-left-lg motion-opacity-in-[0%] motion-delay-800'>The perfect platform sharing short and reusable code.</h1>
      
        <Accordion type="single" collapsible className='widths  mt-10 text-left motion-preset-slide-right-lg motion-opacity-in-[0%] motion-delay-1000'>
        <AccordionItem value="item-1">
            <AccordionTrigger className='font-semibold'>What does Snipps exactly do?</AccordionTrigger>
            <AccordionContent>
              <p >Snipps is a platform where you can share code snippets with the world. It&apos;s a great way to share your knowledge and help others, while making your code more reaccessible.</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className='font-semibold'>Aren&apos;t there better alternatives like gists?</AccordionTrigger>
            <AccordionContent>
              <p>Indeed, gists cover the same function, but they lack syntax highlighting and a proper description for respective gists. This app covers both weaknesses.</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className='font-semibold'>Who made it and why?</AccordionTrigger>
            <AccordionContent>
              I am <TextShimmer className='[--base-color:theme(colors.neutral.300)] [--base-gradient-color:theme(colors.neutral.500)]'> Shafee</TextShimmer>, a developer from India, and the dev behind this project. I made it not only to hone my web development skills but to also solve a realistic issue I faced while coding, albeit small.
              
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Link href="/feed" className={cn(buttonVariants({ variant: "default" }), "rounded-xl mt-10 motion-preset-slide-right-lg motion-delay-1000")} > Get started <ArrowRight /> </Link>

      </div>
      <div className='flex flex-col gap-5 justify-center motion-preset-slide-right-lg motion-delay-1000 items-center p-5 mb-10 max-md:mb-32'>
        <Alert className='widths p-5'>
          <Terminal className="h-4 w-4" />
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription>
            The app has a lot of room for development, please keep that in mind :)
          </AlertDescription>
        </Alert>
        </div>
      <GridBackgroundWrapper className='bg-transparent motion-preset-slide-right-sm motion-delay-1000' >
      <div className='min-h-screen flex flex-col gap-5 justify-center items-center'>
        <h1 className='text-5xl pb-3 font-bold max-md:text-2xl block font-montserrat'>
          The tech stack :
        </h1>
        <section className='flex flex-wrap justify-center items-center gap-5 p-5'>
        <div className='relative bg-[rgba(100,100,100,0.1)] text-white w-48 h-48 m-4 rounded-xl flex justify-center items-center'>
            <div className='flex flex-col gap-5 justify-center items-center rounded-xl'>
              <BorderTrail className='bg-white '/>
                <Image width={80} height={80} src = {NextJsIcon} priority alt='nextjs'/>
                <h1 className='text-2xl font-bold font-montserrat'>Next.js</h1>              
            </div>
          </div>
          <div className='relative bg-[rgba(100,100,100,0.1)] text-white w-48 h-48 m-4 rounded-xl flex justify-center items-center'>
            <div className='flex flex-col gap-5 justify-center items-center rounded-xl'>
              <BorderTrail className='bg-white '/>
                <Image width={80} height={80} src = {TypeScriptIcon} priority alt='nextjs'/>
                <h1 className='text-2xl font-bold font-montserrat'>TypeScript</h1>              
            </div>
          </div>
          <div className='relative bg-[rgba(100,100,100,0.1)] text-white w-48 h-48 m-4 rounded-xl flex justify-center items-center'>
            <div className='flex flex-col gap-5 justify-center items-center rounded-xl'>
              <BorderTrail className='bg-white '/>
                <Image width={40} height={40} src = {MongoDBIcon} priority alt='nextjs'/>
                <h1 className='text-2xl font-bold font-montserrat'>MongoDB</h1>              
            </div>
          </div>
          <div className='relative bg-[rgba(100,100,100,0.1)] text-white w-48 h-48 m-4 rounded-xl flex text-center justify-center items-center'>
            <div className='flex flex-col gap-8 justify-center items-center rounded-xl'>
              <BorderTrail className='bg-white '/>
                <Image width={80} height={80} src = {TailwindCSSIcon} priority alt='nextjs'/>
                <h1 className='text-2xl font-bold font-montserrat'>Tailwind CSS</h1>              
            </div>
          </div>
          <div className='relative bg-[rgba(100,100,100,0.1)] text-white w-48 h-48 m-4 rounded-xl flex justify-center items-center'>
            <div className='flex flex-col gap-5 justify-between items-center rounded-xl'>
              <BorderTrail className='bg-white '/>
                <Image width={80} height={80} src = {ShadCnIcon} priority alt='nextjs'/>
                <h1 className='text-2xl font-bold font-montserrat'>ShadCn UI</h1>              
            </div>
          </div>
          <div className='relative bg-[rgba(100,100,100,0.1)] text-white w-48 h-48 m-4 rounded-xl flex justify-center items-center'>
            <div className='flex flex-col gap-5 justify-center items-center rounded-xl'>
              <BorderTrail className='bg-white '/>
                <Image width={80} height={80} src = {NodeJsIcon} priority alt='nextjs'/>
                <h1 className='text-2xl font-bold font-montserrat'>Node.js</h1>              
            </div>
          </div>
        </section>    
        
      </div>
      </GridBackgroundWrapper>
      <section className='flex flex-col gap-5 justify-center items-center p-5 motion-preset-slide-right-sm motion-delay-1000'>
          <h1 className='text-2xl font-bold font-sans max-md:mt-20'> Some additional information :</h1>
          <section className='widths flex flex-col '>
             
            <ul className='flex flex-col gap-5 justify-center items-start p-5'>
              <li className='flex gap-2 items-center '>
                <Circle fill='white' className='w-2 h-2 mt-1' strokeWidth={2}/> <p><b className='underline'>Authenticaion</b> was done using AuthJs.</p>
             </li>
             <li className='flex gap-2 items-center '>
                <Circle fill='white' className='w-2 h-2 mt-1' strokeWidth={2}/> <p><b className='underline'>Lucide </b> and <b className='underline'>Radix </b> were used for icons.</p>
             </li>
             <li className='flex gap-2 items-center '>
               <Circle fill='white' className='w-2 h-2 mt-1' strokeWidth={2}/> <p><b className='underline'>Motion-primitives</b> was used for styling some components of this page.</p>
             </li>
             <li className='flex gap-2 items-center '>
                <Circle fill='white' className='w-2 h-2 mt-1' strokeWidth={2}/> <p><b className='underline'>Zod</b> and <b className='underline'>React hook form</b> were used for form handling.</p>
             </li>
            </ul>  
          </section>
      </section>
      <footer>
        <section className='flex gap-5 justify-between items-center px-10 py-6 text-neutral-400 border-t-[0.1px] max-md:px-3'>
          <p>This project was made by <b className='underline'>Shafee </b></p>
          <Link href = "https://github.com/Shafee0813/snipps" className='bg-neutral-800 hover:bg-neutral-700 transition-colors duration-300 p-2 rounded-full'><GithubIcon/></Link>
          </section>
      </footer>
    </section>
    
  )
}

export default page