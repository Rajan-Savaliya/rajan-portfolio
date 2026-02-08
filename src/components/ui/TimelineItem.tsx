import { motion } from "framer-motion";
import { MapPin, Calendar, ExternalLink } from "lucide-react";
import { Experience } from "@/types/portfolio";
import { Badge } from "@/components/ui/badge";

interface TimelineItemProps {
  experience: Experience;
  index: number;
}

export function TimelineItem({ experience, index }: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-10 pb-10 last:pb-0"
    >
      {/* Timeline dot */}
      <div className="absolute left-0 top-0 w-8 h-8 rounded-full gradient-bg flex items-center justify-center">
        <div className="w-3 h-3 bg-background rounded-full" />
      </div>

      {/* Timeline line */}
      {index !== 0 && (
        <div className="absolute left-[15px] top-0 bottom-full w-0.5 bg-gradient-to-b from-primary/50 to-primary" />
      )}

      {/* Content card */}
      <div className="glass-card rounded-xl p-6 shadow-premium">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
          <div>
            <h3 className="text-xl font-bold text-foreground">{experience.company}</h3>
            <p className="text-primary font-medium">{experience.role}</p>
          </div>
          <div className="flex flex-col md:items-end gap-1 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {experience.period}
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              {experience.location}
            </span>
          </div>
        </div>

        <Badge variant="secondary" className="mb-4">
          {experience.type}
        </Badge>

        <ul className="space-y-2 mb-4">
          {experience.highlights.map((highlight, i) => (
            <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
              <span className="text-primary mt-1.5">•</span>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {experience.techStack.map((tech) => (
            <span key={tech} className="tech-badge">
              {tech}
            </span>
          ))}
        </div>

        {/* Live links */}
        {experience.liveLinks && experience.liveLinks.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
            {experience.liveLinks.map((link, i) => (
              <motion.a
                key={i}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-1 text-xs text-primary hover:underline"
              >
                <ExternalLink className="h-3 w-3" />
                {new URL(link).hostname.replace("www.", "")}
              </motion.a>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default TimelineItem;
