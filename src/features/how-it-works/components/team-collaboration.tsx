import { Animate } from "@/components/animated";
import {
  Section,
  SectionContent,
  SectionHeader,
  SectionTitle,
} from "@/components/section";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { teamMembers } from "../how-it-works.data";

export function TeamCollaboration() {
  return (
    <Section>
      <SectionHeader>
        <SectionTitle>Our Collaborative Approach</SectionTitle>
      </SectionHeader>
      <SectionContent>
        <Card className="bg-background/50 backdrop-blur-sm border-primary/10">
          <CardHeader>
            <Animate className="flex flex-wrap justify-center -space-x-4 mb-4">
              {teamMembers.map((member, index) => (
                <Avatar
                  key={index}
                  className="w-16 h-16 border-4 border-background transition-transform hover:scale-105"
                >
                  <AvatarImage src={member.avatar} alt={member.name} />
                  <AvatarFallback>{member.name[0]}</AvatarFallback>
                </Avatar>
              ))}
            </Animate>
            <CardTitle className="text-center text-xl font-semibold">
              Meet Our Team
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-center text-muted-foreground mb-8">
              Our team works collaboratively to bring your vision to life. Each
              member brings unique skills and perspectives to ensure your
              project&apos;s success.
            </p>

            <Animate className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {teamMembers.map((member, index) => (
                <div key={index} className="text-center space-y-2">
                  <div>
                    <Badge variant="secondary" className="mt-1">
                      {member.role}
                    </Badge>
                  </div>
                </div>
              ))}
            </Animate>
          </CardContent>
        </Card>
      </SectionContent>
    </Section>
  );
}
