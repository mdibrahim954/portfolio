"use client";
import { container, section } from "@/lib/settings";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useForm } from "react-hook-form";

import { Switch } from "./ui/switch";

import { Button } from "./ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";

import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { IBM_Plex_Sans, Inter } from "next/font/google";

const getInter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-ibm-plex-sans",
  weight: ["400", "500", "600", "700"],
});

// Schema validation with Zod
const contactFormSchema = z.object({
  name: z.string().min(2, "Enter your full name"),
  email: z.string().email("Enter a valid email"),
  message: z.string().min(5, "Enter your message"),
  newsletter: z.boolean(),
});

export function ContactForm() {
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      newsletter: false,
    },
  });

  const onSubmit = (data: z.infer<typeof contactFormSchema>) => {
    console.log("Form Data:", data);
    // Add your submission logic here (API call, email, etc.)
    form.reset();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-full">
        <h1 className={`font-bold text-[25px] ${ibmPlexSans.className}`}>
          Let’s Build Something Great
        </h1>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} />
              </FormControl>
              <FormDescription>
                Your full name for correspondence.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="john@example.com" {...field} />
              </FormControl>
              <FormDescription>Your email so we can reach you.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Write your message..."
                  className="min-h-[120px]"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Tell us what you need help with.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="newsletter"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>Subscribe to newsletter</FormLabel>
                <FormDescription>
                  Get updates about our latest news and offers.
                </FormDescription>
              </div>
            </FormItem>
          )}
        />

        <Button type="submit" disabled={form.formState.isSubmitting}>
          {form.formState.isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </Form>
  );
}

export default function ContactUs() {
  return (
    <>
      <div className={cn(section)}>
        <div
          className={cn(
            container,
            `flex flex-row p-[0px] shadow-sm w-3/5 rounded-lg overflow-hidden`
          )}
        >
          <div className={cn(`w-1/2 p-[30px] flex items-center`)}>
            <ContactForm />
          </div>
          <div className={cn(`w-1/2`)}>
            <Image
              className={`w-full h-[100%] object-fit-cover`}
              src={`/Pograming.jpg`}
              width={500}
              height={700}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}
