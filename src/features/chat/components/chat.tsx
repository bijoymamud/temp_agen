import { ScrollArea } from "@/components/ui/scroll-area";
import { Message } from "./message";

type Message = {
  sender: string;
  message: string;
  timestamp: Date;
  image?: string;
  file?: {
    name: string;
    type: string;
    size: number;
    pages: number;
    url: string;
  };
  link?: string;
};

interface ChatProps {
  messages: Message[];
}

export function Chat({ messages }: ChatProps) {
  return (
    <ScrollArea className="flex flex-1 flex-col gap-4 space-y-4 p-6">
      {messages.map((message, index) => (
        <Message key={index} message={message} />
      ))}
    </ScrollArea>
  );
}
