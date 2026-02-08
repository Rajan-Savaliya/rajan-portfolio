import { portfolioData } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TimelineItem } from "@/components/ui/TimelineItem";

export function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        <SectionHeading
          title="Work Experience"
          subtitle="My professional journey building scalable applications"
        />

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline line */}
          <div className="timeline-line" />

          {/* Experience items */}
          {experience.map((exp, index) => (
            <TimelineItem key={exp.company + exp.period} experience={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
