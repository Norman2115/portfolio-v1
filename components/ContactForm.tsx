"use client";
import React from "react";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { formSchema } from "@/lib/contactFormSchema";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";
import { contact } from "@/constants/contact";
import {
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaMedium,
} from "react-icons/fa";

function ContactForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div className="min-h-screen flex justify-center">
      <div className="w-full max-w-[1200px] flex flex-col items-center px-10">
        <h1 className="font-extrabold text-center text-3xl md:text-4xl mt-24">
          Contact Me
        </h1>
        <div className="mt-7 grid grid-cols-1 md:grid-cols-2 w-full border-2 border-green-400 bg-dark-gray">
          <div className="flex flex-col justify-center items-center md:items-start border-2 border-red-500 p-4">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <div className="flex flex-row space-x-2">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormLabel>First Name</FormLabel>
                        <Input placeholder="First Name" {...field} className="" />
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormLabel>Last Name</FormLabel>
                        <Input placeholder="Last Name" {...field} className="" />
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <Input placeholder="Email" {...field} />
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
                      <Textarea
                        placeholder="Message"
                        className="resize-none"
                        {...field}
                      />
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </form>
            </Form>
          </div>
          <div className="flex flex-col space-y-6 items-end justify-center border-2 border-blue-400 p-4">
            <div className="flex flex-col space-y-1 items-end">
              <h2 className="text-lg md:text-xl font-medium">Email</h2>
              <p className="text-base md:text-lg text-medium-light-grey">
                {contact.email}
              </p>
            </div>
            <div className="flex flex-col space-y-1 items-end">
              <h2 className="text-lg md:text-xl font-medium">Address</h2>
              <p className="text-base md:text-lg text-medium-light-grey">
                {contact.address}
              </p>
            </div>
            <div className="flex flex-col space-y-2 items-end">
              <h2 className="text-lg md:text-xl font-medium">Social</h2>
              <div className="flex flex-row space-x-3 text-medium-light-grey">
                <Link
                  href={contact.instagram}
                  target="_blank"
                  aria-label="Instagram"
                >
                  <FaInstagram size={30} />
                </Link>
                <Link href={contact.medium} target="_blank" aria-label="Medium">
                  <FaMedium size={30} />
                </Link>
                <Link href={contact.github} target="_blank" aria-label="Github">
                  <FaGithub size={30} />
                </Link>
                <Link
                  href={contact.linkedin}
                  target="_blank"
                  aria-label="Linkedin"
                >
                  <FaLinkedin size={30} />
                </Link>
                <Link href="/" target="_blank" aria-label="Twitter">
                  <FaTwitter size={30} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
