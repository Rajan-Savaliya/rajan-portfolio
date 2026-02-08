import { motion } from "framer-motion";
import { Smartphone, Monitor, Server, Cloud, Bot, Package } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StatCounter } from "@/components/ui/StatCounter";

const iconMap: Record<string, React.ElementType> = {
  Smartphone,
  Monitor,
  Server,
  Cloud,
  Bot,
  Package,
};

export function About() {
  const { about } = portfolioData;

  const stats = [
    { value: about.stats.years, label: "Years Experience" },
    { value: about.stats.apps, label: "Apps Delivered" },
    // { value: about.stats.storeApps, label: "Live Store Apps" },
    // { value: about.stats.companies, label: "Companies" },
  ];

  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <SectionHeading title="About Me" />

        <div className="max-w-6xl mx-auto">
          {/* Avatar and Bio */}
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 mb-16">
            {/* Profile Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <motion.img
                src="/rajan_work_photo.jpeg"
                alt="Rajan Savaliya"
                className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-primary/20 shadow-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <div className="absolute -inset-2 rounded-full border-2 border-primary/20 animate-pulse" />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/10 to-accent/10 opacity-0 hover:opacity-100 transition-opacity duration-300" />
            </motion.div>

            {/* Bio */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex-1 text-center lg:text-left"
            >
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                {about.bio}
              </p>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-2 gap-2 md:gap-6 mb-16"
          >
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="glass-card rounded-xl shadow-premium"
              >
                <StatCounter
                  value={stat.value}
                  label={stat.label}
                  index={index}
                />
              </div>
            ))}
          </motion.div>

          {/* Strengths */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {about.strengths.map((strength, index) => {
              const Icon = iconMap[strength.icon] || Package;
              return (
                <motion.div
                  key={strength.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="glass-card rounded-xl p-4 md:p-5 text-center shadow-premium"
                >
                  <div className="w-12 h-12 mx-auto mb-3 rounded-lg gradient-bg flex items-center justify-center">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-sm mb-1">{strength.title}</h3>
                  <p className="text-xs text-muted-foreground">{strength.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
