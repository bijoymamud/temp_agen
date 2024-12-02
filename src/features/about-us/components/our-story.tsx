import storyImage from "@/assets/images/story.png";
import { Section, SectionContent } from "@/components/section";
import siteInfo from "@/config/site-info";
import Image from "next/image";

const OurStory = () => {
  return (
    <Section>
      <SectionContent className="mt-0">
        <div className="grid gap-8 lg:grid-cols-2 items-center">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Our Story</h2>
            <p className="text-lg leading-relaxed">
              Founded in <span className="mx-1">{siteInfo.startYear}</span>, we
              started as a small team of passionate developers with a vision to
              simplify web development. Since then, we've grown into a leading
              provider of modern web templates, helping thousands of developers
              and businesses worldwide create outstanding web applications.
            </p>
            <p className="text-lg leading-relaxed">
              Every day, we work tirelessly to improve our templates,
              incorporate the latest technologies, and provide the best possible
              developer experience.
            </p>
          </div>
          <Image
            src={storyImage}
            alt="Our Story"
            width={500}
            height={400}
            className="rounded-lg shadow-lg w-full"
          />
        </div>
      </SectionContent>
    </Section>
  );
};

export default OurStory;
