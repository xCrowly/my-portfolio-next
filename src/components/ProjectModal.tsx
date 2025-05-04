import { X, Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

interface ProjectModalProps {
  project: {
    title: string;
    description: string;
    longDescription: string;
    techStack: string[];
    experience: string[];
    imageUrl: string;
    githubUrl: string;
    liveUrl: string;
  };
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.95 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-[#0a0a0a] rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
      >
        <div className="p-6">
          <div className="flex justify-between items-start mb-6">
            <h2 className="text-2xl font-bold">{project.title}</h2>
            <button
              onClick={onClose}
              className="text-[#e2e2e2] hover:text-accent transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="relative h-64 w-full bg-gray-900 rounded-lg mb-6">
            <Image
              src={project.imageUrl}
              alt={project.title}
              fill
              className="object-cover rounded-lg"
            />
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Description</h3>
              <p className="text-[#e2e2e2]/80">{project.longDescription}</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm rounded-lg bg-accent/10 text-accent"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Experience Gained</h3>
              <ul className="list-disc list-inside space-y-2 text-[#e2e2e2]/80">
                {project.experience.map((exp, index) => (
                  <li key={index}>{exp}</li>
                ))}
              </ul>
            </div>

            <div className="flex gap-4">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-accent rounded-lg hover:bg-accent/90 transition-colors"
              >
                <Github className="h-5 w-5" />
                View Repository
              </a>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 border border-accent text-accent rounded-lg hover:bg-accent/10 transition-colors"
              >
                <ExternalLink className="h-5 w-5" />
                Visit Website
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
} 