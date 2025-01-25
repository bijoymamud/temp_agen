import { Main } from "@/components/main";
import { Chat } from "@/features/chat/components/chat";
import { ChatHeader } from "@/features/chat/components/chat-header";
import { ChatInput } from "@/features/chat/components/chat-input";
import { ChatSidebar } from "@/features/chat/components/chat-sidebar";

const page = () => {
  const messages = [
    {
      sender: "@miajohnson",
      message: "Hey! How was your weekend?",
      timestamp: new Date(),
    },
    {
      sender: "@me",
      message: "It was great! I went hiking. How about you?",
      timestamp: new Date(),
    },
    {
      sender: "@miajohnson",
      message:
        "Nice! I just relaxed at home. Check out this photo from my garden.",
      image: "/placeholder.svg",
      timestamp: new Date(),
    },
    {
      sender: "@me",
      message: "Wow, your garden looks amazing! I need to get some tips.",
      timestamp: new Date(),
    },
    {
      sender: "@miajohnson",
      message: "Sure! I can send you my gardening guide.",
      file: {
        name: "gardening_guide.pdf",
        type: "application/pdf",
        url: "/placeholder.svg",
        size: 2.3,
        pages: 12,
      },
      timestamp: new Date(),
    },
    {
      sender: "@me",
      message: "That would be awesome! Thanks!",
      timestamp: new Date(),
    },
    {
      sender: "@miajohnson",
      message: "By the way, did you watch the game last night?",
      timestamp: new Date(),
    },
    {
      sender: "@me",
      message:
        "Yes! It was intense! I can't believe they won in the last minute.",
      timestamp: new Date(),
    },
    {
      sender: "@miajohnson",
      message: "I know, right? Let me send you the highlights.",
      link: "https://example.com/highlights",
      timestamp: new Date(),
    },
    {
      sender: "@me",
      message: "Perfect! I can't wait to watch them.",
      timestamp: new Date(),
    },
  ];

  return (
    <div className="flex h-screen flex-1 peer-[.header-fixed]/header:mt-16 overflow-hidden">
      <ChatSidebar />
      <Main fixed className="px-0">
        <ChatHeader />
        <Chat messages={messages} />
        <ChatInput />
      </Main>
    </div>
  );
};

export default page;
