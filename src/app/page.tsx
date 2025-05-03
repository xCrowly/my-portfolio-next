"use client";

import { motion } from "framer-motion";
import {
  Terminal,
  GitBranch,
  Code,
  Server,
  Mail,
  Github,
  Linkedin,
  Send,
  Coffee,
  Copyright,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { ProjectCard } from "@/components/ProjectCard";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export default function Home() {
  const skills = [
    {
      category: "Frontend",
      icon: <Code className="h-6 w-6" />,
      items: ["React", "Next.js", "TypeScript", "Tailwind"],
    },
    {
      category: "Backend",
      icon: <Server className="h-6 w-6" />,
      items: ["Node.js", "Python", "PostgreSQL", "MongoDB"],
    },
    {
      category: "Tools",
      icon: <GitBranch className="h-6 w-6" />,
      items: ["Git", "Docker", "AWS", "Linux"],
    },
  ];

  const projects = [
    {
      title: "Project 1",
      description:
        "A full-stack application built with Next.js and TypeScript.",
      techStack: ["Next.js", "TypeScript", "Tailwind"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
    },
    // Add more projects as needed
  ];

  return (
    <main className="bg-[#0a0a0a] min-h-screen text-[#e2e2e2] font-inter">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center">
            <Terminal className="h-16 w-16 text-accent mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Hi, I&apos;m [Name]
            </h1>
            <p className="text-xl md:text-2xl text-[#e2e2e2]/80 mb-8">
              I build modern web applications
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="#projects"
                className="px-6 py-3 bg-accent rounded-lg hover:bg-accent/90 transition-colors"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border border-accent rounded-lg hover:bg-accent/10 transition-colors"
              >
                Contact Me
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 bg-[#111111]">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            {...fadeInUp}
            className="text-3xl font-bold text-center mb-12"
          >
            Skills
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((category) => (
              <motion.div
                key={category.category}
                {...fadeInUp}
                className="p-6 rounded-lg bg-[#0a0a0a] border border-gray-800"
              >
                <div className="flex items-center gap-3 mb-4">
                  {category.icon}
                  <h3 className="text-xl font-bold">{category.category}</h3>
                </div>
                <ul className="space-y-2">
                  {category.items.map((item) => (
                    <li key={item} className="text-[#e2e2e2]/80">
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            {...fadeInUp}
            className="text-3xl font-bold text-center mb-12"
          >
            Projects
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-[#111111]">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            {...fadeInUp}
            className="text-3xl font-bold text-center mb-12"
          >
            Contact
          </motion.h2>
          <div className="flex flex-col md:flex-row gap-8">
            <motion.div {...fadeInUp} className="flex-1">
              <div className="flex gap-6 mb-6">
                <a
                  href="mailto:your@email.com"
                  className="text-[#e2e2e2] hover:text-accent"
                >
                  <Mail className="h-6 w-6" />
                </a>
                <a
                  href="https://github.com"
                  className="text-[#e2e2e2] hover:text-accent"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a
                  href="https://linkedin.com"
                  className="text-[#e2e2e2] hover:text-accent"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </motion.div>
            <motion.form {...fadeInUp} className="flex-1 space-y-4">
              <input
                type="email"
                placeholder="Your email"
                className="w-full p-3 bg-[#0a0a0a] border border-gray-800 rounded-lg focus:outline-none focus:border-accent"
              />
              <textarea
                placeholder="Your message"
                rows={4}
                className="w-full p-3 bg-[#0a0a0a] border border-gray-800 rounded-lg focus:outline-none focus:border-accent"
              />
              <button
                type="submit"
                className="flex items-center gap-2 px-6 py-3 bg-accent rounded-lg hover:bg-accent/90 transition-colors"
              >
                Send Message
                <Send className="h-4 w-4" />
              </button>
            </motion.form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-800">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 text-[#e2e2e2]/60">
          <Copyright className="h-4 w-4" />
          <span>Built with Next.js and</span>
          <Coffee className="h-4 w-4" />
        </div>
      </footer>
    </main>
  );
}
