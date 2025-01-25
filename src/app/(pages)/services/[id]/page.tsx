import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import { LeftSide } from "@/features/services/components/left-side";
import { RightSide } from "@/features/services/components/right-side";
import { Mail, Receipt } from "lucide-react";
import type { JSX } from "react";

export default function Page(): JSX.Element {
  return (
    <div>
      <div className="header">
        <Container className="h-40 flex items-end justify-start max-w-screen-xl">
          <h1 className="text-xl lg:text-4xl text-primary font-semibold bg-primary/20 backdrop-blur-sm px-2 relative z-10">
            Your Trusted Partner
          </h1>
        </Container>
      </div>

      <Container className="max-w-screen-xl my-8">
        <div className="flex w-full flex-col justify-between gap-4 sm:flex-row md:items-center md:gap-0">
          <div className="flex items-center justify-between gap-4 sm:flex-col sm:items-start sm:gap-0">
            <h2 className="text-2xl font-bold">Order ID: SHAD123CN</h2>
            <small className="text-balance text-foreground/80">
              Order created on 12/12/2022
            </small>
          </div>

          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <Button className="w-full sm:w-fit" variant="secondary">
              <span>
                <Receipt />
              </span>
              Send Invoice
            </Button>
            <Button className="w-full sm:w-fit">
              <span>
                <Mail />
              </span>
              Contact Buyer
            </Button>
          </div>
        </div>

        <section className="mt-6 flex flex-col rounded-lg border border-border bg-background px-4 xl:flex-row">
          <LeftSide />
          <RightSide />
        </section>
      </Container>
    </div>
  );
}
