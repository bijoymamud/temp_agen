"use client";

import { Separator } from "@/components/ui/separator";
import React from "react";
import { IconType } from "react-icons";
import { BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { CgFacebook } from "react-icons/cg";
import { Section, SectionBackground, SectionContent } from "../section";

interface FooterLink {
  title: string;
  items: string[];
}

interface FooterSectionProps {
  title: string;
  items: string[];
}

interface SocialIconProps {
  Icon: IconType;
}

interface FooterLinkProps {
  children: React.ReactNode;
}

const footerLinks: FooterLink[] = [
  { title: "About Us", items: ["Our Story", "Team", "Careers"] },
  { title: "Services", items: ["Web Design", "Marketing", "Consulting"] },
  { title: "Resources", items: ["Blog", "Guides", "FAQ"] },
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {footerLinks.map((section, index) => (
            <FooterSection
              key={index}
              title={section.title}
              items={section.items}
            />
          ))}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get in touch</h3>
            <div className="flex space-x-4">
              <SocialIcon Icon={CgFacebook} />
              <SocialIcon Icon={BsTwitter} />
              <SocialIcon Icon={BsInstagram} />
              <SocialIcon Icon={BsLinkedin} />
            </div>
          </div>
        </div>

        <Separator className="my-2" />
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4 md:mb-0">
            <FooterLink>Privacy Policy</FooterLink>
            <FooterLink>Terms of Use</FooterLink>
            <FooterLink>Contact Us</FooterLink>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2024 Your Agency. All Rights Reserved.
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
          <a
            href="#"
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            {item}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const SocialIcon: React.FC<SocialIconProps> = ({ Icon }) => (
  <a
    href="#"
    className="text-muted-foreground hover:text-primary transition-colors duration-300"
  >
    <Icon className="w-5 h-5" />
  </a>
);

const FooterLink: React.FC<FooterLinkProps> = ({ children }) => (
  <a href="#" className="hover:text-primary transition-colors duration-300">
    {children}
  </a>
);

export default Footer;
