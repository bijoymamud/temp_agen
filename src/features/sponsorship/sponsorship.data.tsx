import {
  Calendar,
  CheckCircle,
  Clock,
  FileText,
  Gift,
  Globe,
  HandshakeIcon,
  MessageCircle,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

//? become-sponsor.tsx data
export const sponsorshipTiers = [
  {
    name: "Silver",
    icon: Zap,
    benefits: [
      "Logo on our website",
      "Social media shoutouts",
      "1 guest post on our blog",
      "Access to attendee list",
      "Booth space at our annual conference",
    ],
    price: "Talk",
    color: "bg-accent hover:bg-accent/80",
  },
  {
    name: "Gold",
    icon: Globe,
    benefits: [
      "All Silver benefits",
      "Sponsored webinar",
      "Logo on event banners",
      "2 VIP passes to our annual conference",
      "Featured in our monthly newsletter",
    ],
    price: "Talk",
    color: "bg-accent hover:bg-accent/80",
  },
  {
    name: "Platinum",
    icon: Users,
    benefits: [
      "All Gold benefits",
      "Keynote speaking opportunity",
      "VIP networking events",
      "Exclusive roundtable with industry leaders",
      "Custom content collaboration",
    ],
    price: "Talk",
    color: "bg-accent hover:bg-accent/80",
  },
];
export const whySponsorCards = [
  {
    icon: Globe,
    title: "Global Reach",
    description:
      "Access our worldwide network of IT professionals and decision-makers.",
    stats: "100K+ Members",
    bgPattern: (
      <svg
        className="absolute inset-0 w-full h-full text-primary/10"
        xmlns="http://www.w3.org/2000/svg"
      >
        <pattern
          id="globe-pattern"
          x="0"
          y="0"
          width="20"
          height="20"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="10" cy="10" r="1.5" fill="currentColor" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#globe-pattern)" />
      </svg>
    ),
  },
  {
    icon: Calendar,
    title: "Year-Round Exposure",
    description:
      "Benefit from continuous visibility through our events and platforms.",
    stats: "50+ Annual Events",
    bgPattern: (
      <svg
        className="absolute inset-0 w-full h-full text-primary/10"
        xmlns="http://www.w3.org/2000/svg"
      >
        <pattern
          id="calendar-pattern"
          x="0"
          y="0"
          width="20"
          height="20"
          patternUnits="userSpaceOnUse"
        >
          <path d="M0 0h10v10H0zm10 10h10v10H10z" fill="currentColor" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#calendar-pattern)" />
      </svg>
    ),
  },
  {
    icon: Gift,
    title: "Exclusive Opportunities",
    description:
      "Gain access to unique collaboration and co-creation possibilities.",
    stats: "10+ Exclusive Perks",
    bgPattern: (
      <svg
        className="absolute inset-0 w-full h-full text-primary/10"
        xmlns="http://www.w3.org/2000/svg"
      >
        <pattern
          id="gift-pattern"
          x="0"
          y="0"
          width="20"
          height="20"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M0 0l5 5l-5 5l5 5l-5 5m20 0l-5 -5l5 -5l-5 -5l5 -5"
            stroke="currentColor"
            strokeWidth="0.5"
            fill="none"
          />
        </pattern>
        <rect width="100%" height="100%" fill="url(#gift-pattern)" />
      </svg>
    ),
  },
];

//! benefits.tsx data
export const benefits = [
  {
    title: "Global Exposure",
    description:
      "Reach a worldwide audience of IT professionals and decision-makers.",
    icon: Globe,
    color: "bg-blue-500 dark:bg-blue-600",
  },
  {
    title: "Networking Opportunities",
    description:
      "Connect with industry leaders and potential clients at our events.",
    icon: Users,
    color: "bg-green-500 dark:bg-green-600",
  },
  {
    title: "Brand Recognition",
    description: "Increase your brand visibility within the IT community.",
    icon: Zap,
    color: "bg-yellow-500 dark:bg-yellow-600",
  },
  {
    title: "Thought Leadership",
    description: "Showcase your expertise through speaking engagements.",
    icon: TrendingUp,
    color: "bg-purple-500 dark:bg-purple-600",
  },
];

//! faq.tsx data
export const faqs = [
  {
    question: "What are the benefits of sponsoring?",
    answer:
      "Sponsoring offers numerous benefits including increased brand visibility, networking opportunities with industry leaders, access to our events and platforms, and the chance to showcase your expertise to a targeted audience in the IT sector.",
  },
  {
    question: "How long does a sponsorship last?",
    answer:
      "Our standard sponsorship packages are annual, but we also offer custom durations to fit your specific needs and goals. We can discuss options ranging from single-event sponsorships to multi-year partnerships.",
  },
  {
    question: "Can we customize a sponsorship package?",
    answer:
      "While we offer standard tiers, we understand that each sponsor has unique objectives. We're happy to work with you to create a tailored sponsorship package that aligns with your specific goals and budget.",
  },
  {
    question: "How do we measure the ROI of our sponsorship?",
    answer:
      "We provide regular reports on key metrics such as brand exposure, lead generation, and event participation. We also work closely with our sponsors to establish specific KPIs at the outset of the partnership to ensure we're tracking the most relevant data for your objectives.",
  },
];

//! process.tsx data
export const steps = [
  {
    title: "Initial Consultation",
    description: "We'll discuss your goals and find the right sponsorship fit.",
    icon: MessageCircle,
    color: "bg-blue-500",
  },
  {
    title: "Proposal",
    description:
      "We'll provide a detailed sponsorship proposal tailored to your needs.",
    icon: FileText,
    color: "bg-green-500",
  },
  {
    title: "Agreement",
    description:
      "Once terms are agreed, we'll finalize the sponsorship contract.",
    icon: HandshakeIcon,
    color: "bg-yellow-500",
  },
  {
    title: "Activation",
    description:
      "We'll work together to implement and activate your sponsorship benefits.",
    icon: TrendingUp,
    color: "bg-purple-500",
  },
  {
    title: "Ongoing Support",
    description:
      "Our team will provide continuous support throughout the sponsorship period.",
    icon: Clock,
    color: "bg-red-500",
  },
  {
    title: "Evaluation",
    description:
      "We'll regularly assess the partnership and discuss potential improvements.",
    icon: CheckCircle,
    color: "bg-indigo-500",
  },
];
