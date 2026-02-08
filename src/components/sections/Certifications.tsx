import { motion } from "framer-motion";
import { ExternalLink, Award } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Certifications() {
  const { certifications } = portfolioData;

  return (
    <section id="certifications" className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        <SectionHeading
          title="Certifications"
          subtitle="Continuous learning and professional development"
        />

        <div className="max-w-4xl mx-auto">
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="flex-shrink-0 w-72 snap-center"
              >
                <div className="glass-card rounded-xl p-5 h-full shadow-premium">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg gradient-bg flex items-center justify-center flex-shrink-0">
                      <Award className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-sm mb-1 line-clamp-2">
                        {cert.name}
                      </h3>
                      <p className="text-xs text-muted-foreground mb-3">
                        {cert.provider}
                      </p>
                      {cert.link && (
                        <motion.a
                          href={cert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs text-primary hover:underline"
                          whileHover={{ x: 3 }}
                        >
                          View Certificate
                          <ExternalLink className="h-3 w-3" />
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Scroll hint */}
          <p className="text-center text-xs text-muted-foreground mt-4 md:hidden">
            ← Scroll to see more →
          </p>
        </div>
      </div>
    </section>
  );
}

export default Certifications;
