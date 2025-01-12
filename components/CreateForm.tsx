"use client"
// import { useState } from "react"
import { toast } from "sonner"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Check, ChevronsUpDown } from "lucide-react"
import { languages } from "@/constants/languages"
import { useRouter } from 'next/navigation';

const formSchema = z.object({
  title: z.string().min(10).max(40),
  description: z.string().min(10).max(2200),
  language: z.string(),
  code: z.string().min(10).max(2200)
});

export default function MyForm({ID} : {ID: string}) {
  const router = useRouter();
  const form = useForm < z.infer < typeof formSchema >> ({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      language: "",
      code: ""
    },
  })
  async function onSubmit(values: z.infer < typeof formSchema > ) {
    try { 
      // const session = await auth();
      const newPost = {
        creator: ID,
        title: values.title,
        description: values.description,
        language: values.language,
        code: values.code,
        views: 0
      }
      
      await fetch('/api/post/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPost),
      });

      toast(
        "Snipp created successfully!",
      );
      router.push('/feed')
    } catch (error) {
      console.error("Form submission error", error);
      toast.error("Failed to submit the form. Please try again.");
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 max-w-3xl mx-auto py-10 font-sans">
        
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input 
                placeholder=""
                className="widths input "
                type="text"
                {...field} />
              </FormControl>
              <div className="flex justify-between">
                <FormDescription>This is the title of your snippet.</FormDescription>
                <div className="text-xs text-muted-foreground">{field.value.length} / 40</div>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder=""
                  className="input h-[300px]"
                  {...field}
                />
              </FormControl>
              <div className="flex justify-between">
                <FormDescription>Explain your code&apos;s functionality here.</FormDescription>
                <div className="text-xs text-muted-foreground">{field.value.length} / 2200</div>
              </div> 
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="language"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Language</FormLabel>
              <Popover >
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      className={cn(
                        "justify-between widths  text-white ",
                        !field.value && "text-muted-foreground"
                      )}
                      
                    >
                      {field.value
                        ? languages.find(
                            (language) => language.value === field.value
                          )?.label
                        : "Select language"}
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50 text-right" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="widths p-2">
                  <Command className="">
                    <CommandInput placeholder="Search languages..." className=""/>
                    <CommandList>
                      <CommandEmpty>No language found.</CommandEmpty>
                      <CommandGroup className="max-h-[200px] widths   overflow-y-auto overflow-x-hidden">
                        {languages.map((language) => (
                          <CommandItem
                            value={language.label}
                            key={language.value}
                            
                            onSelect={() => {
                              form.setValue("language", language.value);
                            }} 
                          >
                            <Check
                              className={cn(
                                "mr-2 h-4 w-4",
                                language.value === field.value
                                  ? "opacity-100"
                                  : "opacity-0"
                              )}
                            />
                            {language.label}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
              
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="code"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Code</FormLabel>
              <FormControl>
                <Textarea
                  placeholder=""
                  className="input  text-white h-[300px] font-mono"
                  maxLength={2200}
                  {...field}
                />
              </FormControl>
              <div className="flex justify-between">
                <FormDescription>Type (or paste) your code here.</FormDescription>
                <div className="text-xs text-muted-foreground">{field.value.length} / 2200</div>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex flex-row-reverse">
          <Button type="submit"  className=" rounded-xl p-6">Create</Button>
        </div>
      </form>
    </Form>
  )
}