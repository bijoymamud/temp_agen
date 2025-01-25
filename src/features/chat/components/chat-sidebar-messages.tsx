import { PencilLineIcon } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

export function ChatSidebarMessages() {
  return (
    <div className="flex flex-1 flex-col space-y-6 overflow-hidden">
      <div className="flex shrink-0 items-center justify-between">
        <div className="flex items-center gap-2">
          <h2 className="font-medium">Messages</h2>
          <Badge variant="secondary" className="px-1.5">
            40
          </Badge>
        </div>
        <Button
          variant="outline"
          size="icon"
          className="size-8"
          aria-label="Create a new message"
        >
          <PencilLineIcon size={16} strokeWidth={1.5} aria-hidden="true" />
        </Button>
      </div>

      <ScrollArea className="flex-1">
        <div className="mr-5 space-y-4">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="flex cursor-pointer gap-4 rounded-lg p-2 transition-colors duration-200 ease-in-out hover:bg-accent"
            >
              <Avatar className="rounded-lg">
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback className="rounded-lg">U</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <div className="flex items-start justify-between">
                  <div className="flex flex-col space-y-1">
                    <p className="text-[15px] font-medium leading-none">
                      Phoenix Baker
                    </p>
                    <p className="text-sm text-muted-foreground">@phoenix</p>
                  </div>
                  <span className="text-xs text-muted-foreground">
                    5min ago
                  </span>
                </div>
                <p className="w-full max-w-[220px] truncate text-sm text-muted-foreground">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Commodi non quaerat quas beatae maiores voluptatem alias
                  dolores quo repellat cumque!
                </p>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
