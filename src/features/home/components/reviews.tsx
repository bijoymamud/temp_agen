import {
  Section,
  SectionContent,
  SectionDescription,
  SectionHeader,
  SectionTitle,
} from "@/components/section";
import Marquee from "@/components/ui/marquee";
import { cn } from "@/lib/utils";
import Image from "next/image";

const reviews = [
  {
    name: "Marcus Vance",
    username: "@marcus_vance",
    body: "Superb execution on our cloud infrastructure and web app. Scalable, secure, and delivered well ahead of schedule.",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=256&h=256&auto=format&fit=crop",
  },
  {
    name: "Nusrat Jahan",
    username: "@nusrat_jahan",
    body: "The team transformed our product UI/UX into a modern, intuitive experience. User engagement doubled within weeks of launch.",
    img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=256&h=256&auto=format&fit=crop",
  },
  {
    name: "Elena Rostova",
    username: "@elena_rostova",
    body: "Their attention to detail and proactive communication made a complex system migration feel effortless. Highly recommended!",
    img: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?q=80&w=256&h=256&auto=format&fit=crop",
  },

  {
    name: "Anika Tabassum",
    username: "@anika_tabassum",
    body: "From strategy to deployment, their technical depth and creative vision completely elevated our brand presence and customer trust.",
    img: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=256&h=256&auto=format&fit=crop",
  },
  {
    name: "Sarah Jenkins",
    username: "@sarah_jenkins",
    body: "The final product exceeded our expectations across all performance metrics. They are our go-to digital partner for all future builds.",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=256&h=256&auto=format&fit=crop",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        {/* <Image
          src={img}
          alt={name}
          width={32}
          height={32}
          className="h-8 w-8 rounded-full object-cover"
          sizes="32px"
        /> */}
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function Reviews() {
  return (
    <Section>
      <SectionHeader>
        <SectionTitle>What Our Customers Are Saying</SectionTitle>

        <SectionDescription>
          Don&apos;t just take our word for it. Here&apos;s what our amazing
          customers have to say about their experience with our product.
        </SectionDescription>
      </SectionHeader>
      <SectionContent>
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background to-transparent"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background to-transparent"></div>
      </SectionContent>
    </Section>
  );
}
