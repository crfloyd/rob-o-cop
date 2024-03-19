import { queryMessagesAsync, addMessageAsync } from "@/sanity/client";
import { useCallback, useEffect, useState } from "react";

export interface Message {
  email: string;
  name: string;
  body: string;
  createdAt: Date;
}

const useMessages = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchMessages = useCallback(async () => {
    console.log("fetching messages");
    setIsLoading(true);
    const resp = await queryMessagesAsync();
    const data: Message[] = resp.map(
      (m: {
        email: string | null;
        name: string | null;
        body: string | null;
        _createdAt: string;
      }) => {
        return {
          email: m.email ?? "",
          name: m.name ?? "",
          body: m.body ?? "",
          createdAt: new Date(m._createdAt),
        };
      }
    );
    // console.log("messages:", data);
    setMessages(data);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMessages().catch((e) => {
      console.error(e);
      setIsLoading(false);
    });
  }, []);

  const addMessage = async (message: Message) => {
    try {
      const resp = await addMessageAsync(message);
      console.log("added message:", resp);
      //   let slicedMessages = [message, ...messages];
      //   if (slicedMessages.length >= 5) {
      //     slicedMessages = [...slicedMessages.slice(0, 4)];
      //   }
      setMessages((prev) => [message, ...prev]);
      //   setMessages(slicedMessages);
    } catch (error) {
      console.error(error);
    }
  };

  return { messages, addMessage, isLoading };
};

export default useMessages;
