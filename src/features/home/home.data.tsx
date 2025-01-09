import Icons from "@/components/icons";
import {
  FaBell,
  FaDollarSign,
  FaHeadset,
  FaHeart,
  FaLock,
  FaPlane,
  FaRedoAlt,
  FaRegCalendarAlt,
} from "react-icons/fa";

export const perks = [
  {
    icon: Icons.auth,
    title: "Sign Up",
    info: "Create your free account to get started with Astra.",
  },
  {
    icon: Icons.customize,
    title: "Customize",
    info: "Choose a template and customize it to fit your needs.",
  },
  {
    icon: Icons.launch,
    title: "Launch",
    info: "Publish your website and share it with the world.",
  },
];

export const discover_data = [
  {
    icon: Icons.bolt,
    title: "Fast Setup",
    info: "Get your website up and running in minutes with our intuitive AI-powered builder.",
  },
  {
    icon: Icons.palette,
    title: "Customizable Templates",
    info: "Choose from a variety of stunning templates and customize them to suit your brand.",
  },
  {
    icon: Icons.seo,
    title: "SEO Optimized",
    info: "Built-in SEO features ensure your website ranks well on search engines.",
  },
  {
    icon: Icons.monitor,
    title: "Responsive Design",
    info: "Your website will look great on any device, from desktops to mobile phones.",
  },
  {
    icon: Icons.shop,
    title: "E-Commerce Ready",
    info: "Start selling online with our e-commerce features and integrations.",
  },
  {
    icon: Icons.server,
    title: "Secure Hosting",
    info: "Enjoy peace of mind with secure and reliable hosting for your website.",
  },
];

export const what_we_offer = [
  {
    title: "Comprehensive Services",
    description:
      "A one-stop solution offering a wide range of services to meet all your needs.",
    icon: <FaPlane size={24} />,
  },
  {
    title: "Affordable Pricing",
    description:
      "Get the best value for your money with competitive and transparent pricing.",
    icon: <FaDollarSign size={24} />,
  },
  {
    title: "Effortless Process",
    description:
      "Experience a smooth and hassle-free service process tailored for your convenience.",
    icon: <FaRegCalendarAlt size={24} />,
  },
  {
    title: "Dedicated Support",
    description:
      "Our team is available around the clock to assist and support you at every step.",
    icon: <FaHeadset size={24} />,
  },
  {
    title: "Secure Transactions",
    description:
      "Enjoy peace of mind with robust security measures ensuring safe transactions.",
    icon: <FaLock size={24} />,
  },
  {
    title: "Flexible Policies",
    description:
      "Benefit from flexible options designed to adapt to your changing needs.",
    icon: <FaRedoAlt size={24} />,
  },
  {
    title: "Real-Time Updates",
    description:
      "Stay informed with instant notifications and updates relevant to your services.",
    icon: <FaBell size={24} />,
  },
  {
    title: "Rewards and Benefits",
    description:
      "Take advantage of loyalty programs and exclusive rewards for using our services.",
    icon: <FaHeart size={24} />,
  },
];

export const services = [
  {
    icon: "bolt",
    title: "Fast IT Support",
    description: "Get quick and efficient IT support for your business needs.",
    price: 99,
    duration: "24/7 Support",
  },
  {
    icon: "server",
    title: "Cloud Solutions",
    description: "Secure and scalable cloud infrastructure for your company.",
    price: 199,
    duration: "Monthly",
  },
  {
    icon: "shield",
    title: "Cybersecurity",
    description: "Protect your business with advanced cybersecurity measures.",
    price: 299,
    duration: "Annual Plan",
  },
  {
    icon: "monitor",
    title: "Network Management",
    description: "Efficient management and optimization of your network.",
    price: 149,
    duration: "Monthly",
  },
  {
    icon: "database",
    title: "Data Analytics",
    description: "Harness the power of your data with advanced analytics.",
    price: 399,
    duration: "Quarterly",
  },
  {
    icon: "code",
    title: "Custom Software",
    description: "Tailored software solutions for your unique business needs.",
    price: 999,
    duration: "Per Project",
  },
];

export const pricingCards = [
  {
    title: "Starter",
    description: "Perfect for trying out plura",
    price: "Free",
    duration: "",
    highlight: "Key features",
    buttonText: "Start for free",
    features: ["Limited projects", "1 Team member", "Basic features"],
    priceId: "",
  },
  {
    title: "Unlimited Saas",
    description: "The ultimate agency kit",
    price: "$199",
    duration: "month",
    highlight: "Key features",
    buttonText: "Upgrade to Pro",
    features: [
      "Unlimited projects",
      "5 Team members",
      "Advanced design tools",
      "Customizable domain",
    ],
    priceId: "price_1OYxkqFj9oKEERu1KfJGWxgN",
  },
  {
    title: "Enterprise",
    description: "For serious agency owners",
    price: "$399",
    duration: "month",
    highlight: "Everything in Starter, plus",
    buttonText: "Upgrade to Enterprise",
    features: [
      "Unlimited projects",
      "Unlimited Team members",
      "Custom branding",
      "Priority support (24/7)",
    ],
    priceId: "price_1OYxkqFj9oKEERu1NbKUxXxN",
  },
];

export const bentoCards = [
  {
    title: "Start with Inspiration",
    info: "Browse our vast library of pre-designed templates or upload your own images.",
    imgSrc: "/assets/bento-1.svg", // Lightbulb or Inspiration icon
    alt: "Inspiration for website creation",
  },
  {
    title: "AI Assists Your Vision",
    info: "Our intelligent AI tailors suggestions and functionalities based on your goals.",
    imgSrc: "/assets/bento1.svg", // AI Assistant icon
    alt: "AI website building assistant",
  },
  {
    title: "Drag & Drop Customization",
    info: "Effortlessly personalize your website with our intuitive drag-and-drop editor.",
    imgSrc: "/assets/bento1.svg", // Drag and Drop icon or hand editing a website
    alt: "Website customization with drag and drop",
  },
  {
    title: "Launch & Shine Online",
    info: "Publish your website with a single click and take your brand to the world.",
    imgSrc: "/assets/bento1.svg", // Rocket launching or website going live
    alt: "Website launch and publication",
  },
];

export const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
  },
];
