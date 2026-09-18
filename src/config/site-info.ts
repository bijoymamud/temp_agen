const siteInfo = {
  name: "Synth-ko",
  description: "A modern design system for your new app",
  startYear: 2024,
  companyInfo: {
    emails: ["synthkofficial@gmail.com"],
    phones: ["01959843534"],
    whatsapp: "01779901142",
    address: "Dhaka, Bangladesh",
    facebook: "https://www.facebook.com/info.mdshakeeb/",
    twitter: "https://x.com/info_mdshakeeb",
    instagram: "https://www.instagram.com/info.mdshakeeb/",
    linkedin: "https://www.linkedin.com/in/mdshakeeb/",
    location:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233668.06396683332!2d90.25487776270597!3d23.78075303186913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1733192729753!5m2!1sen!2sbd",
  },
  contactInfo: {
    emails: ["synthkofficial@gmail.com"],
    phones: ["01959843534"],
    whatsapp: "01779901142",
    address: "Dhaka, Bangladesh",
    facebook: "https://www.facebook.com/info.mdshakeeb/",
    twitter: "https://x.com/info_mdshakeeb",
    instagram: "https://www.instagram.com/info.mdshakeeb/",
    linkedin: "https://www.linkedin.com/in/mdshakeeb/",
  },
} as const;

export default siteInfo;

export const siteConfig = {
  name: "Synth-ko",
  shortName: "Synth-ko",
  url: "https://synth-ko.com",
  logo: "/logo.png",
  ogImage: "/logo.png",
  description: "A modern design system for your new website",
  creator: "info-mdshakeeb",
  xHandle: "@info_mdshakeeb",
  keywords: [
    "IT services",
    "software development",
    "web development",
    "technology solutions",
    "IT consulting",
  ],
  links: {
    twitter: "https://x.com/info_mdshakeeb",
    github: "https://github.com/info-mdshakeeb",
  },
} as const;

export type SiteConfig = typeof siteConfig;

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#070d19",
} as const;
