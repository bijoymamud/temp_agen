"use client";
import { Button } from "@/components/ui/button";
import { IconMailPlus, IconUserPlus } from "@tabler/icons-react";
import { useUsers } from "../context/users-context";

export function UsersPrimaryButtons() {
  const { setOpen } = useUsers();
  return (
    <div className="flex gap-2">
      <Button
        size={"sm"}
        variant="outline"
        className="space-x-1"
        onClick={() => setOpen("invite")}
      >
        <span>Invite User</span> <IconMailPlus size={18} />
      </Button>
      <Button size={"sm"} className="space-x-1" onClick={() => setOpen("add")}>
        <span>Add User</span> <IconUserPlus size={18} />
      </Button>
    </div>
  );
}
