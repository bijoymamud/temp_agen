"use client";

import { Animate } from "@/components/animated";
import {
  Section,
  SectionContent,
  SectionHeader,
  SectionTitle,
} from "@/components/section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";
import { ContactUsFaqCategories, ContactUsFaqData } from "../about-us.data";

export function Faq() {
  const [activeCategory, setActiveCategory] = useState<string>("services");
  return (
    <Section className="">
      <SectionHeader>
        <SectionTitle>Frequently Asked Questions</SectionTitle>
      </SectionHeader>
      <SectionContent className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Table of Contents */}
        <nav className="mb-6 col-span-full md:col-span-1">
          <h3 className="text-lg font-semibold mb-6">Table of Contents</h3>
          <ul className="flex flex-col space-y-4">
            {ContactUsFaqCategories.map((category, _i) => (
              <Animate key={category.id} index={_i}>
                <button
                  className={`text-lg font-medium ${
                    activeCategory === category.id && "text-primary"
                  }`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  {category.name}
                </button>
              </Animate>
            ))}
          </ul>
        </nav>
        {/* Accordion for FAQs */}
        <div className="col-span-full md:col-span-2 lg:col-span-3">
          <Accordion type="single" collapsible className="w-full">
            {ContactUsFaqData[activeCategory].map((item, index) => (
              <AccordionItem value={`item-${index}`} key={index}>
                <Animate index={index}>
                  <AccordionTrigger className="text-lg font-medium">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    <p>{item.answer}</p>
                  </AccordionContent>
                </Animate>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </SectionContent>
    </Section>
  );
}
