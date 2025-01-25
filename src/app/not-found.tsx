"use client";
import { Illustration } from "@/components/illustration";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="relative flex flex-col justify-center min-h-svh gap-6 bg-background p-6 md:p-10 max-w-5xl mx-auto">
      <div className="relative">
        <Illustration className="absolute inset-0 opacity-75 text-muted" />
        <div className="relative text-center z-[1] pt-48">
          <h1 className="mt-4 text-balance text-5xl font-semibold tracking-tight text-primary sm:text-7xl">
            Page not found
          </h1>
          <p className="mt-6 text-pretty text-lg font-medium text-muted-foreground sm:text-xl/8">
            Lost, this page is. In another system, it may be.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-y-3 sm:space-x-2 mx-auto sm:max-w-sm">
            <div className="relative w-full">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search" className="pl-8" />
            </div>
            <Button variant="outline">Search</Button>
          </div>
          <div className="mt-10 flex flex-col sm:flex-row sm:items-center sm:justify-center gap-y-3 gap-x-6">
            <Button variant="secondary" asChild>
              <a href="#">
                <span aria-hidden="true">&larr;</span> Go back
              </a>
            </Button>
            <Button className="-order-1 sm:order-none" asChild>
              <Link href="/">Take me home</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
