"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import siteInfo from "@/config/site-info";
import { zodResolver } from "@hookform/resolvers/zod";
import { Check, Copy, Mail, MessageSquare, Send } from "lucide-react";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const services = [
  "Web Development",
  "UI/UX Design",
  "SaaS Platform",
  "Mobile App",
  "Consulting / General",
];

const formSchema = z.object({
  name: z.string().min(1, { message: "Name is required." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  service: z.string().min(1, { message: "Please select a service." }),
  message: z
    .string()
    .min(5, { message: "Message must be at least 5 characters long." }),
});

type FormData = z.infer<typeof formSchema>;

export const ContactForm = () => {
  const [copied, setCopied] = useState(false);
  const targetEmail =
    siteInfo.companyInfo?.emails?.[0] || "synthkofficial@gmail.com";

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      service: "Web Development",
      message: "",
    },
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const subject = encodeURIComponent(
        `[Project Inquiry: ${data.service}] From ${data.name}`,
      );
      const body = encodeURIComponent(
        `Hello ${siteInfo.name} Team,\n\n${data.message}\n\n---\nClient Details:\nName: ${data.name}\nEmail: ${data.email}\nService Interested: ${data.service}`,
      );

      const mailtoUrl = `mailto:${targetEmail}?subject=${subject}&body=${body}`;

      toast.success("Opening your email client to send message!", {
        description: `Directly reaching out to ${targetEmail}`,
      });

      // Launch email client
      window.location.href = mailtoUrl;
    } catch (error) {
      console.error("Error formatting email:", error);
      toast.error("Could not open email client automatically.");
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(targetEmail);
    setCopied(true);
    toast.success("Email copied to clipboard!", {
      description: targetEmail,
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Card className="w-full border shadow-sm bg-card/90 backdrop-blur-sm">
      <CardHeader className="space-y-1 pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl sm:text-2xl font-bold">
            Send Us a Message
          </CardTitle>
        </div>
        <CardDescription className="text-sm">
          Fill in your project details below to compose a direct message to our
          engineering team.
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-5">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs font-medium">
                      Your Name
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs font-medium">
                      Your Email
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="service"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xs font-medium">
                    Topic / Service
                  </FormLabel>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {services.map((service) => {
                      const isSelected = field.value === service;
                      return (
                        <button
                          key={service}
                          type="button"
                          onClick={() => field.onChange(service)}
                          className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
                            isSelected
                              ? "bg-primary text-primary-foreground border-primary font-medium"
                              : "bg-secondary/60 hover:bg-secondary border-border text-muted-foreground"
                          }`}
                        >
                          {service}
                        </button>
                      );
                    })}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xs font-medium">
                    Project Overview / Message
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      rows={4}
                      placeholder="Tell us about your project, timeline, or requirements..."
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" size="lg" className="w-full font-medium">
              <Send className="w-4 h-4 mr-2" />
              Compose & Send Email
            </Button>
          </form>
        </Form>

        {/* Alternative Direct Channels */}
        <div className="pt-3 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <button
            type="button"
            onClick={copyEmail}
            className="flex items-center gap-1.5 hover:text-foreground transition-colors font-medium"
          >
            {copied ? (
              <Check className="w-3.5 h-3.5 text-green-500" />
            ) : (
              <Copy className="w-3.5 h-3.5" />
            )}
            <span>{copied ? "Copied to Clipboard!" : targetEmail}</span>
          </button>
        </div>
      </CardContent>
    </Card>
  );
};
