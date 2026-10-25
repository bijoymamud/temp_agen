"use client";

import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";
import { BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { CgFacebook } from "react-icons/cg";
import { Animate } from "../animated";
import { Section, SectionBackground, SectionContent } from "../section";

interface FooterLink {
  title: string;
  items: { label: string; href: string }[];
}

interface FooterSectionProps {
  title: string;
  items: { label: string; href: string }[];
}

interface SocialIconProps {
  Icon: IconType;
  href: string;
}

interface FooterLinkProps {
  children: React.ReactNode;
  href: string;
}

const footerLinks: FooterLink[] = [
  {
    title: "About Us",
    items: [
      { label: "Our Team", href: "/about-us#team" },
      { label: "Projects & Portfolio", href: "/projects" },
      { label: "Careers", href: "/careers" },
      { label: "Why Choose Us", href: "/about-us#why-us" },
    ],
  },
  {
    title: "Services",
    items: [
      { label: "Web Development", href: "/services/web-development" },
      { label: "UI/UX Design", href: "/services/ui-ux" },
      { label: "SaaS Development", href: "/services/saas-development" },
      { label: "Cross-platform Apps", href: "/services/cross-platform" },
      { label: "Consulting", href: "/services/consulting" },
    ],
  },
  {
    title: "Resources",
    items: [
      { label: "Blog", href: "/resources/blog" },
      { label: "Guides", href: "/resources/guides" },
      // { label: "FAQ", href: "/resources/faq" },
    ],
  },
];

const Footer: React.FC = () => {
  return (
    <Section className="mb-0 pb-4 border-t">
      <SectionBackground>
        <svg
          className="absolute top-0 right-0 w-48 h-48 text-primary/20 opacity-50"
          viewBox="0 0 100 100"
          fill="currentColor"
        >
          <path d="M0,0 L100,0 L100,100 Z" />
        </svg>
      </SectionBackground>

      <SectionContent className="mt-0 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {footerLinks.map((section, index) => (
            <Animate key={index} index={index}>
              <FooterSection
                key={index}
                title={section.title}
                items={section.items}
              />
            </Animate>
          ))}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get in touch</h3>
            <div className="flex space-x-4">
              <SocialIcon
                href="https://www.facebook.com/synthko"
                Icon={CgFacebook}
              />

              <SocialIcon
                href="https://www.linkedin.com/company/synthko/home/"
                Icon={BsLinkedin}
              />
            </div>
          </div>
        </div>

        <Separator className="my-2" />
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4 md:mb-0">
            <FooterLink href="/privacy-policy">Privacy Policy</FooterLink>
            <FooterLink href="/terms-of-use">Terms of Use</FooterLink>
            <FooterLink href="/contact-us">Contact Us</FooterLink>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()}{" "}
            <span className="font-medium">SYNTH-KO</span> Official. All Rights
            Reserved.
          </p>
        </div>
      </SectionContent>
    </Section>
  );
};

const FooterSection: React.FC<FooterSectionProps> = ({ title, items }) => (
  <div>
    <h3 className="text-lg font-semibold mb-4">{title}</h3>
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li key={index}>
          <Link
            href={item.href}
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const SocialIcon: React.FC<SocialIconProps> = ({ Icon, href }) => (
  <Link
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Social media link"
    className="text-muted-foreground hover:text-primary transition-colors duration-300"
  >
    <Icon className="w-5 h-5" />
  </Link>
);

const FooterLink: React.FC<FooterLinkProps> = ({ children, href }) => (
  <Link
    href={href}
    className="hover:text-primary transition-colors duration-300"
  >
    {children}
  </Link>
);

export default Footer;
