import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Button } from "@/components/ui/button";

const filterOptions = [
  { label: "All", value: "all" },
  { label: "Mobile", value: "mobile" },
  { label: "Web", value: "web" },
  { label: "AI", value: "ai" },
];

export function Projects() {
  const { projects } = portfolioData;
  const [activeFilter, setActiveFilter] = useState("all");
  const [showAll, setShowAll] = useState(false);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") return projects;
    return projects.filter((project) => project.category.includes(activeFilter));
  }, [activeFilter, projects]);

  const featuredProjects = filteredProjects.filter((p) => p.featured);
  const otherProjects = filteredProjects.filter((p) => !p.featured);

  const visibleOtherProjects = showAll ? otherProjects : otherProjects.slice(0, 6);

  return (
    <section id="projects" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <SectionHeading
          title="Featured Projects"
          subtitle="A selection of projects I've built for clients and myself"
        />

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {filterOptions.map((option) => (
            <Button
              key={option.value}
              variant={activeFilter === option.value ? "default" : "outline"}
              size="sm"
              onClick={() => {
                setActiveFilter(option.value);
                setShowAll(false);
              }}
              className={activeFilter === option.value ? "btn-gradient" : ""}
            >
              {option.label}
            </Button>
          ))}
        </motion.div>

        {/* Featured projects */}
        <AnimatePresence mode="wait">
          {featuredProjects.length > 0 && (
            <motion.div
              key={`featured-${activeFilter}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
            >
              {featuredProjects.map((project, index) => (
                <ProjectCard
                  key={project.name}
                  project={project}
                  index={index}
                  featured
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Other projects */}
        <AnimatePresence mode="wait">
          {visibleOtherProjects.length > 0 && (
            <motion.div
              key={`other-${activeFilter}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {visibleOtherProjects.map((project, index) => (
                <ProjectCard
                  key={project.name}
                  project={project}
                  index={index}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Show more button */}
        {otherProjects.length > 6 && !showAll && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mt-10"
          >
            <Button
              variant="outline"
              onClick={() => setShowAll(true)}
              className="px-8"
            >
              Show More Projects ({otherProjects.length - 6} more)
            </Button>
          </motion.div>
        )}

        {/* No results */}
        {filteredProjects.length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-muted-foreground py-12"
          >
            No projects found in this category.
          </motion.p>
        )}
      </div>
    </section>
  );
}

export default Projects;
