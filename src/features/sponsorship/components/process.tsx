import { Animate } from "@/components/animated";
import {
  Section,
  SectionContent,
  SectionHeader,
  SectionTitle,
} from "@/components/section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ArrowRight,
  CheckCircle,
  Clock,
  FileText,
  HandshakeIcon,
  MessageCircle,
  TrendingUp,
} from "lucide-react";
const steps = [
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

export function SponsorshipProcess() {
  return (
    <Section className="header">
      <SectionHeader>
        <SectionTitle>Sponsorship Process</SectionTitle>
      </SectionHeader>
      <SectionContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <Animate key={index} index={index}>
            <Card className="h-full overflow-hidden ">
              <CardHeader className={`${step.color} text-white p-4`}>
                <CardTitle className="flex items-center text-lg font-semibold">
                  <step.icon className="w-6 h-6 mr-2" />
                  {step.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 bg-white dark:bg-gray-800">
                <p className="text-gray-600 dark:text-gray-300">
                  {step.description}
                </p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Step {index + 1}
                  </span>
                  <ArrowRight className="w-5 h-5 text-gray-400" />
                </div>
              </CardContent>
            </Card>
          </Animate>
        ))}
      </SectionContent>
    </Section>
  );
}
