import { motion } from "framer-motion";
import { useState } from "react";

interface SkillBadgeProps {
  skill: string;
  index: number;
}

const skillLevels: Record<string, number> = {
  "React Native": 95,
  "JavaScript": 90,
  "TypeScript": 90,
  "React.js": 90,
  "Node.js": 85,
  "Firebase": 85,
  "Next.js": 80,
  "AWS": 75,
  "OpenAI": 70,
  // Add more skills as needed
};

export function SkillBadge({ skill, index }: SkillBadgeProps) {
  const [isHovered, setIsHovered] = useState(false);
  const skillLevel = skillLevels[skill] || Math.floor(Math.random() * 30 + 70); // Default 70-100%

  const getSkillIcon = (skill: string) => {
    if (skill.includes("React")) return "⚛️";
    if (skill.includes("Node")) return "🟢";
    if (skill.includes("Firebase")) return "🔥";
    if (skill.includes("AWS")) return "☁️";
    if (skill.includes("AI") || skill.includes("OpenAI")) return "🤖";
    // if (skill.includes("Python")) return "🐍";
    if (skill.includes("Mobile")) return "📱";
    if (skill.includes("Web")) return "🌐";
    return "⚡";
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, rotateX: -60 }}
      whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{
        scale: 1.08,
        y: -3,
        rotateZ: Math.random() * 6 - 3, // Slight random rotation
        transition: { duration: 0.2 }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative cursor-default"
    >
      <motion.span
        className="tech-badge relative overflow-hidden flex items-center gap-2"
        animate={isHovered ? {
          boxShadow: "0 8px 25px rgba(var(--primary), 0.25)",
        } : {}}
      >
        {/* Background animation */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20"
          initial={{ x: "-100%" }}
          animate={isHovered ? { x: "100%" } : { x: "-100%" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />

        {/* Skill icon */}
        <span className="text-sm">{getSkillIcon(skill)}</span>

        {/* Skill name */}
        <span className="relative z-10">{skill}</span>

        {/* Skill level indicator on hover */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={isHovered ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
          className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-foreground text-background text-xs px-2 py-1 rounded pointer-events-none whitespace-nowrap"
        >
          {skillLevel}%
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-foreground" />
        </motion.div>
      </motion.span>
    </motion.div>
  );
}

export default SkillBadge;
