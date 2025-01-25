import { Separator } from "@/components/ui/separator";
import { ChatSidebarHeader } from "./chat-sidebar-header";
import { ChatSidebarMessages } from "./chat-sidebar-messages";

export function ChatSidebar() {
  return (
    <div className="hidden min-w-[350px] flex-col border-r bg-background p-4 lg:flex">
      <ChatSidebarHeader />
      <Separator className="my-6" />
      <ChatSidebarMessages />
    </div>
  );
}
