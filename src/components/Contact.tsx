import React, { useState } from "react";
import Section from "./Section";
import { leaningOnCar } from "../assets";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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
import CyberButton from "./Shared/CyberButton";
import { Textarea } from "./ui/textarea";

const formSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: "Name must be at least 2 characters.",
    })
    .max(50),
  email: z.string().email(),
  message: z
    .string()
    .min(5, {
      message: "Message must be at least 5 characters.",
    })
    .max(500),
});

const Contact = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setIsLoading] = useState(false);

  return (
    <Section crosses id="contact">
      <div className="container lg:flex ">
        <div className="md: mr-8 lg:mr-12">
          <h2 className="h2 mb-4 md:mb-6">Contact Rob-O-Cop</h2>
          <h4 className="body-2 mb-8 text-n-4 md:mb-12 lg:mb-16 ">
            Fill out the form below to contact cybernetic justice or email
            Rob-O-Cop at{" "}
            <a href="mailto:rob@rob-o-cop.com" className="underline text-n-10">
              rob@rob-o-cop.com
            </a>
          </h4>
          <ContactForm />
        </div>
        <div className="max-w-[46rem] lg:ml-auto">
          <div className=" mb-10 md:mb-14 ">
            <img
              src={leaningOnCar}
              alt="leaning on car"
              // className=""
              width={1200}
              height={675}
              className="mt-5 aspect-[16/9] rounded-md"
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

const ContactForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("onSubmit", values);
  }

  return (
    <Form {...form}>
      <form
        data-static-form-name="contact"
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-slate-200">Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter your name" {...field} />
              </FormControl>
              {/* <FormDescription>Please enter your name.</FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-slate-200">Email</FormLabel>
              <FormControl>
                <Input placeholder="Enter your email address" {...field} />
              </FormControl>
              {/* <FormDescription>Please enter your name.</FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-slate-200">Message</FormLabel>
              <FormControl>
                <Textarea className="resize-none" {...field} />
              </FormControl>
              <FormDescription>
                Enter your call for help or words of inspiration for Rob-O-Cop.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <CyberButton submit onClick={() => console.log("submitted")}>
          {/* <Button type="submit">Send It</Button> */}
          Send It
        </CyberButton>
        {/* <Button type="submit">Submit</Button> */}
      </form>
    </Form>
  );
};

export default Contact;
