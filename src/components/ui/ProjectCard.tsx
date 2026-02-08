import { motion } from "framer-motion";
import { ExternalLink, Smartphone, Globe, Apple, PlayCircle } from "lucide-react";
import { Project } from "@/types/portfolio";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface ProjectCardProps {
  project: Project;
  index: number;
  featured?: boolean;
}

const platformIcons: Record<string, React.ElementType> = {
  Android: PlayCircle,
  iOS: Apple,
  Web: Globe,
};

export function ProjectCard({ project, index, featured = false }: ProjectCardProps) {
  const categoryColors: Record<string, string> = {
    mobile: "bg-green-500/10 text-green-500 dark:bg-green-400/10 dark:text-green-400",
    web: "bg-blue-500/10 text-blue-500 dark:bg-blue-400/10 dark:text-blue-400",
    ai: "bg-purple-500/10 text-purple-500 dark:bg-purple-400/10 dark:text-purple-400",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group ${featured ? "col-span-1 md:col-span-1" : ""}`}
    >
      <Dialog>
        <DialogTrigger asChild>
          <motion.div
            whileHover={{ y: -5 }}
            className="glass-card rounded-xl overflow-hidden cursor-pointer h-full flex flex-col shadow-premium"
          >
            {/* Project Image/Preview */}
            <div className="relative h-40 md:h-48 gradient-bg flex items-center justify-center overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent" />
                <div className="grid grid-cols-6 grid-rows-6 h-full w-full gap-1 p-4">
                  {Array.from({ length: 36 }).map((_, i) => (
                    <div
                      key={i}
                      className="rounded-sm bg-white/10"
                      style={{
                        animationDelay: `${Math.random() * 2}s`,
                        animation: "pulse 3s infinite"
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Project Initial/Logo */}
              <div className="relative z-10 text-center">
                <div className="text-4xl md:text-5xl font-bold text-white/90 mb-1">
                  {project.name.split(" ").map((w) => w[0]).join("").slice(0, 2)}
                </div>
                <div className="text-sm text-white/70 font-medium">
                  {project.category.join(" • ").toUpperCase()}
                </div>
              </div>
              
              {/* Platform badges overlay */}
              <div className="absolute bottom-3 right-3 flex gap-1.5">
                {project.platforms.map((platform) => {
                  const Icon = platformIcons[platform] || Globe;
                  return (
                    <span
                      key={platform}
                      className="bg-black/50 backdrop-blur-sm text-white p-1.5 rounded-md"
                    >
                      <Icon className="h-4 w-4" />
                    </span>
                  );
                })}
              </div>

              {/* Featured badge */}
              {featured && (
                <div className="absolute top-3 left-3">
                  <Badge className="bg-primary text-primary-foreground">
                    Featured
                  </Badge>
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-5 flex-1 flex flex-col">
              <div className="flex flex-wrap gap-1.5 mb-3">
                {project.category.map((cat) => (
                  <span
                    key={cat}
                    className={`text-xs px-2 py-0.5 rounded-full font-medium ${categoryColors[cat] || ""}`}
                  >
                    {cat.charAt(0).toUpperCase() + cat.slice(1)}
                  </span>
                ))}
              </div>

              <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                {project.name}
              </h3>
              
              <p className="text-muted-foreground text-sm mb-4 line-clamp-2 flex-1">
                {project.shortDescription}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {project.techStack.slice(0, 4).map((tech) => (
                  <span key={tech} className="tech-badge text-xs">
                    {tech}
                  </span>
                ))}
                {project.techStack.length > 4 && (
                  <span className="tech-badge text-xs">
                    +{project.techStack.length - 4}
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        </DialogTrigger>

        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl">{project.name}</DialogTitle>
            <DialogDescription className="text-primary font-medium">
              {project.role}
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6">
            {/* Platforms */}
            <div className="flex flex-wrap gap-2">
              {project.platforms.map((platform) => {
                const Icon = platformIcons[platform] || Globe;
                return (
                  <Badge key={platform} variant="secondary" className="gap-1">
                    <Icon className="h-3 w-3" />
                    {platform}
                  </Badge>
                );
              })}
            </div>

            {/* Description */}
            <p className="text-muted-foreground">
              {project.fullDescription || project.shortDescription}
            </p>

            {/* Highlights */}
            {project.highlights && project.highlights.length > 0 && (
              <div>
                <h4 className="font-semibold mb-2">Key Highlights</h4>
                <ul className="space-y-2">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tech Stack */}
            <div>
              <h4 className="font-semibold mb-2">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span key={tech} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            {project.links && Object.keys(project.links).length > 0 && (
              <div className="flex flex-wrap gap-3 pt-4 border-t border-border">
                {project.links.live && (
                  <Button asChild size="sm" className="gap-2">
                    <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                      <Globe className="h-4 w-4" />
                      View Live
                    </a>
                  </Button>
                )}
                {project.links.playStore && (
                  <Button asChild variant="outline" size="sm" className="gap-2">
                    <a href={project.links.playStore} target="_blank" rel="noopener noreferrer">
                      <PlayCircle className="h-4 w-4" />
                      Play Store
                    </a>
                  </Button>
                )}
                {project.links.appStore && (
                  <Button asChild variant="outline" size="sm" className="gap-2">
                    <a href={project.links.appStore} target="_blank" rel="noopener noreferrer">
                      <Apple className="h-4 w-4" />
                      App Store
                    </a>
                  </Button>
                )}
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </motion.div>
  );
}

export default ProjectCard;
