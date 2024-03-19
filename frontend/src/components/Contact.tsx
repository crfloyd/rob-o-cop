import React, { useCallback, useEffect, useState } from "react";
import Section from "./Section";
import { leaningOnCar, twitter } from "../assets";
import { string, z } from "zod";
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
import Autoplay from "embla-carousel-autoplay";
import { Input } from "@/components/ui/input";
import CyberButton from "./Shared/CyberButton";
import { Textarea } from "./ui/textarea";
import useMessages, { Message } from "@/hooks/useMessages";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import SectionSvg from "@/assets/svg/SectionSvg";
import { ScrollParallax } from "react-just-parallax";

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

  const { messages, isLoading, addMessage } = useMessages();
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  // const [messages, setMessages] = useState<
  //   { email: string | null; name: string | null; message: string | null }[]
  // >([]);

  // const fetchData = useCallback(async () => {
  //   console.log("fetching messages");
  //   const resp = await queryMessagesAsync();
  //   const data = resp.map((m) => {
  //     return {
  //       email: m.email,
  //       name: m.name,
  //       message: m.body,
  //     };
  //   });
  //   console.log("messages:", data);
  //   // setMessages(data);
  // }, []);

  // useEffect(() => {
  //   setIsLoading(true);
  //   queryMessagesAsync()
  //     .then(() => setIsLoading(false))
  //     .catch(console.error);
  // }, []);

  useEffect(() => {
    console.log("messages updated:", messages);
  }, [messages]);

  const handleFormSubmit = async (message: Message) => {
    try {
      await addMessage(message);
      setIsFormSubmitted(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Section crosses id="contact">
      <div className="container lg:flex mt-10 lg:mt-[-3.5rem]">
        <div className="md:mr-8 lg:mr-12">
          <h2 className="h2 mb-4 md:mb-6">Contact Rob-O-Cop</h2>
          <h4 className="body-2 mb-8 text-n-4 md:mb-12 lg:mb-16 ">
            Fill out the form below to contact cybernetic justice or email
            Rob-O-Cop at{" "}
            <a href="mailto:rob@rob-o-cop.com" className="underline text-n-10">
              rob@rob-o-cop.com
            </a>
          </h4>
          {!isFormSubmitted ? (
            <ContactForm addMessage={handleFormSubmit} />
          ) : (
            <div className="text-center text-lg text-n-1">
              Thanks for commenting!
            </div>
          )}
        </div>
        <div className="container mt-10 md:mt-12 md:ml-1  lg:ml-[13rem] -lg:mt-5 max-w-[30rem] md:max-w-[30rem]">
          <h4 className="text-center h6 md:h4 ">Recent Messages</h4>
          <Carousel
            plugins={[plugin.current]}
            className=" w-full "
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent className="mt-8">
              {/* <div className="flex mt-10 gap-2"> */}
              {!isLoading &&
                messages.map((message) => (
                  <CarouselItem className="lg:pl-4">
                    <div className="lg:p-1">
                      <Card>
                        <CardContent className="flex flex-col gap-10 aspect-square items-center justify-center p-6">
                          <span className="text-3xl font-semibold flex-wrap text-n-1">
                            {message.body.slice(0, 30)}
                            {message.body.length > 30 ? "..." : ""}
                          </span>
                          <span className="text-xl text-n-2">
                            - {message.name.slice(0, 10)}
                            {message.name.length > 10 ? "..." : ""}
                          </span>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              {/* </div> */}
            </CarouselContent>
            <CarouselPrevious className="" />
            <CarouselNext />
          </Carousel>
        </div>
      </div>

      <ScrollParallax>
        <div className="hidden container px-0 lg:flex items-center justify-center mt-12 lg:mt-[10rem] ">
          {/* <div className=" mb-10 md:mb-14 "> */}
          <img
            src={leaningOnCar}
            alt="leaning on car"
            // className=""
            width={1200}
            height={675}
            className="mt-5 aspect-[16/9] rounded-lg"
          />
        </div>
      </ScrollParallax>
      {/* </div> */}
    </Section>
  );
};

const ContactForm = ({
  addMessage,
}: {
  addMessage: (message: Message) => void;
}) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    addMessage({
      name: values.name,
      email: values.email,
      body: values.message,
      createdAt: new Date(),
    });
  };

  // function handleMessageSubmit(): void {
  //   throw new Error("Function not implemented.");
  // }

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
