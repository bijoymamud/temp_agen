
// import { Animate } from "@/components/animated";
// import { Section, SectionContent } from "@/components/section";
// import { teamMembers } from "../how-it-works.data";

// export function TeamCollaboration() {
//   return (
//     <Section className="py-0 overflow-hidden">
//       <SectionContent className="max-w-7xl mx-auto p-0">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full border-l border-t border-primary/5">
//           {teamMembers.map((member, index) => {
//             const isGrey = index % 3 === 0;
//             const isTan = index % 3 === 1;

//             return (
//               <Animate
//                 key={index}
//                 index={index}
//                 className="group relative flex flex-col h-[450px] md:h-[500px] lg:h-[550px] cursor-pointer overflow-hidden border-r border-b border-primary/5"
//               >
//                 <div className="relative h-2/3 w-full overflow-hidden bg-muted">
//                   <img
//                     src={member.avatar}
//                     alt={member.name}
//                     className="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-100 group-hover:scale-110 transition-all duration-700 ease-in-out"
//                   />
//                   <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
//                 </div>

//                 <div
//                   className={`h-1/2 p-6 md:p-10 flex flex-col justify-start transition-all duration-500 
//                     ${isGrey ? "bg-[#f8f8f8]" : ""}
//                     ${isTan ? "bg-[#e5ddd5]" : "bg-white"} 
//                     group-hover:shadow-[inset_0_0_20px_rgba(0,0,0,0.02)]`}
//                 >
//                   {/* Content lift animation */}
//                   <div className="relative z-10 transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500 ease-out">
//                     <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-1">
//                       {member.name}
//                     </h3>
//                     <div className="flex items-center gap-2 mb-4">
//                       <span className="w-8 h-[2px] bg-primary/30" />
//                       <p className="text-xs md:text-sm font-semibold uppercase tracking-widest text-primary/80">
//                         {member.role}
//                       </p>
//                     </div>

//                     {/* Reveal description */}
//                     <p className="text-sm md:text-base leading-relaxed text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100 line-clamp-4 italic">
//                       "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                       Morbi quis massa a nisi lacinia dapibus eu a sem.
//                       Maecenas."
//                     </p>
//                   </div>
//                 </div>
//               </Animate>
//             );
//           })}
//         </div>
//       </SectionContent>
//     </Section>
//   );
// }

import { Animate } from "@/components/animated";
import { Section, SectionContent } from "@/components/section";
import { teamMembers } from "../how-it-works.data";

export function TeamCollaboration() {
  return (
    <Section className="py-0 overflow-hidden">
      <SectionContent className="max-w-7xl mx-auto p-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 w-full  border-t border-primary/5">
          {teamMembers.map((member, index) => {
            const isGrey = index % 3 === 0;
            const isTan = index % 3 === 1;

            return (
              <Animate
                key={index}
                index={index}
                className="group relative flex flex-col h-[450px] md:h-[500px] lg:h-[550px] cursor-pointer overflow-hidden border-r border-b border-primary/5"
              >
                <div className="relative h-2/3 w-full overflow-hidden bg-muted">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-100 group-hover:scale-110 transition-all duration-700 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                </div>

                <div
                  className={`relative h-1/2 p-6 md:p-10 flex flex-col justify-start transition-all duration-500 
                    ${isGrey ? "bg-[#f8f8f8]" : ""}
                    ${isTan ? "bg-[#e5ddd5]" : "bg-white"} 
                    group-hover:shadow-[inset_0_0_20px_rgba(0,0,0,0.02)]`}
                >
                  <div
                    className="absolute inset-y-0 left-0 w-[4px] bg-primary/60 scale-y-0 group-hover:scale-y-100 transition-transform duration-700 ease-out origin-top"
                  />

                  <div className="relative z-10 transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-1">
                      {member.name}
                    </h3>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="w-8 h-[2px] bg-primary/30" />
                      <p className="text-xs md:text-sm font-semibold uppercase tracking-widest text-primary/80">
                        {member.role}
                      </p>
                    </div>
                    <p className="text-sm md:text-base leading-relaxed text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100 line-clamp-4 italic">
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Morbi quis massa a nisi lacinia dapibus eu a sem.
                      Maecenas."
                    </p>
                  </div>
                </div>
              </Animate>
            );
          })}
        </div>
      </SectionContent>
    </Section>
  );
}