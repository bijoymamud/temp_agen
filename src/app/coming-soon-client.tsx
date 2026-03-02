

// "use client";

// import { Illustration } from "@/components/illustration";

// import siteInfo from "@/config/site-info";

// export default function ComingSoonClient() {
//   return (
//     <div className="relative flex flex-col justify-center min-h-svh gap-6 bg-background p-6 md:p-10 max-w-5xl mx-auto">
//       <div className="relative">
//         {/* Background Illustration */}
//         <Illustration className="absolute inset-0 opacity-75 text-muted" />

//         <div className="relative text-center z-[1] pt-48">
//           {/* Badge / Pre-title */}
//           <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20">
//             Coming Soon
//           </span>

//           <h1 className="mt-4 text-balance text-5xl font-semibold tracking-tight text-primary sm:text-7xl">
//             Something great is <br className="hidden sm:block" /> in the works
//           </h1>

//           <p className="mt-6 text-pretty text-lg font-medium text-muted-foreground sm:text-xl/8 mx-auto max-w-2xl">
//             {siteInfo.name} is preparing a modern design system for your next digital solution.
//             Join the waitlist to get early access and launch updates.
//           </p>



//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import { Illustration } from "@/components/illustration";
import siteInfo from "@/config/site-info";

export default function ComingSoonClient() {
  return (

    <div className="fixed inset-0 z-[100] bg-background overflow-y-auto">
      <div className="relative flex flex-col justify-center min-h-svh gap-6 p-6 md:p-10 max-w-5xl mx-auto">
        <div className="relative">
          {/* Background Illustration */}
          <Illustration className="absolute inset-0 opacity-75 text-muted" />

          <div className="relative text-center z-[1] pt-48">
            {/* Badge / Pre-title */}
            <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20">
              Coming Soon
            </span>

            <h1 className="mt-4 text-balance text-5xl font-semibold tracking-tight text-primary sm:text-7xl">
              Something great is <br className="hidden sm:block" /> in the works
            </h1>

            <p className="mt-6 text-pretty text-lg font-medium text-muted-foreground sm:text-xl/8 mx-auto max-w-2xl">
              {siteInfo.name} is preparing a modern design system for your next digital solution.
              Join the waitlist to get early access and launch updates.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}