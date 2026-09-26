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
    const { name, email, message, newsletter } = data;

    form.reset();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-5">
        <div className="space-y-2">
          <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-700">
            Contact
          </span>
          <h1
            className={`text-3xl font-bold text-slate-900 ${ibmPlexSans.className}`}
          >
            Let’s Build Something Great
          </h1>
        </div>

        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-medium text-slate-700">
                Full Name
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="John Doe"
                  className="h-12 rounded-xl border-slate-200 bg-slate-50 px-4 text-slate-700 placeholder:text-slate-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                  {...field}
                />
              </FormControl>
              <FormDescription className="text-xs text-slate-500">
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
              <FormLabel className="text-sm font-medium text-slate-700">
                Email
              </FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="john@example.com"
                  className="h-12 rounded-xl border-slate-200 bg-slate-50 px-4 text-slate-700 placeholder:text-slate-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                  {...field}
                />
              </FormControl>
              <FormDescription className="text-xs text-slate-500">
                Your email so we can reach you.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-medium text-slate-700">
                Message
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Write your message..."
                  className="min-h-[130px] rounded-xl border-slate-200 bg-slate-50 px-4 py-3 text-slate-700 placeholder:text-slate-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                  {...field}
                />
              </FormControl>
              <FormDescription className="text-xs text-slate-500">
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
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-2xl border border-slate-200 bg-slate-50/80 p-4">
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  className="data-[state=checked]:bg-blue-600"
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel className="text-sm font-medium text-slate-700">
                  Subscribe to newsletter
                </FormLabel>
                <FormDescription className="text-xs text-slate-500">
                  Get updates about our latest news and offers.
                </FormDescription>
              </div>
            </FormItem>
          )}
        />

        <Button
          type="submit"
          disabled={form.formState.isSubmitting}
          className="h-12 w-full rounded-xl bg-slate-900 text-sm font-semibold text-white transition hover:bg-slate-700"
        >
          {form.formState.isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </Form>
  );
}

export default function ContactUs() {
  return (
    <div
      id="contact"
      className={cn(
        section,
        "bg-[radial-gradient(circle_at_top,#f8fbff_0%,#eff6ff_45%,#f8fafc_100%)]"
      )}
    >
      <div className={cn(container, "relative")}>
        <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_24px_60px_rgba(15,23,42,0.08)] md:grid md:grid-cols-2">
          <div className="flex items-center p-6 sm:p-8 lg:p-10">
            <ContactForm />
          </div>

          <div className="relative min-h-[260px] bg-slate-900">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#60a5fa_0%,rgba(96,165,250,0.1)_28%,transparent_48%)]" />
            <Image
              className="h-full w-full object-cover opacity-90"
              src="/Pograming.jpg"
              width={800}
              height={900}
              alt="Developer working at desk"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-900/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-blue-200">
                Available for work
              </p>
              <h2
                className={`mt-2 text-2xl font-semibold text-white ${getInter.className}`}
              >
                Let’s create something impactful.
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
