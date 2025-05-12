import { ExternalLink, Github, Eye } from "lucide-react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useState, useRef } from "react";
import { ProjectModal } from "./ProjectModal";

interface ProjectCardProps {
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  experience: string[];
  imageUrl: string;
  githubUrl: string;
  liveUrl: string;
}

export const ProjectCard = ({
  title,
  description,
  longDescription,
  techStack,
  experience,
  imageUrl,
  githubUrl,
  liveUrl,
}: ProjectCardProps) => {
  const [imageError, setImageError] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });

  return (
    <>
      <motion.div
        ref={cardRef}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="bg-[#0a0a0a] rounded-lg border border-gray-800 overflow-hidden hover:border-accent transition-colors"
      >
        <div className="relative h-48 w-full bg-gray-900">
          <Image
            src={imageError ? "/images/project-placeholder.jpg" : imageUrl}
            alt={title}
            fill
            className="object-cover"
            onError={() => setImageError(true)}
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-[#e2e2e2]/80 mb-4">{description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {techStack.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 bg-accent/10 text-accent rounded text-sm"
              >
                {tech}
              </span>
            ))}
            {techStack.length > 4 && (
              <span className="px-2 py-1 text-sm text-[#e2e2e2]/60">
                +{techStack.length - 4} more
              </span>
            )}
          </div>
          <div className="flex items-center justify-between">
            <div className="flex gap-4">
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-accent hover:text-accent/80"
              >
                GitHub
              </a>
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-accent hover:text-accent/80"
              >
                Live Demo
              </a>
            </div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-2 text-accent hover:text-accent/80 text-sm"
            >
              <Eye className="h-4 w-4" />
              Show More
            </button>
          </div>
        </div>
      </motion.div>

      {isModalOpen && (
        <ProjectModal
          project={{
            title,
            description,
            longDescription,
            techStack,
            experience,
            imageUrl,
            githubUrl,
            liveUrl,
          }}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
};
