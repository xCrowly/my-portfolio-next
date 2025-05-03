import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
}

export function ProjectCard({
  title,
  description,
  techStack,
  githubUrl,
  liveUrl,
}: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-[#111111] p-6 rounded-lg border border-gray-800"
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-text">{title}</h3>
        <div className="flex space-x-3">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text hover:text-accent-hover"
          >
            <Github className="h-5 w-5" />
          </a>
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text hover:text-accent-hover"
            >
              <ExternalLink className="h-5 w-5" />
            </a>
          )}
        </div>
      </div>
      <p className="text-text/80 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {techStack.map((tech) => (
          <span
            key={tech}
            className="px-2 py-1 text-sm rounded-md bg-accent-hover/10 text-accent-hover border border-accent-hover/20"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
