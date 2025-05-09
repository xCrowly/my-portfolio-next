"use client";

import { motion } from "framer-motion";
import {
  Terminal,
  Mail,
  Github,
  Linkedin,
  Send,
  Coffee,
  Copyright,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { ProjectCard } from "@/components/ProjectCard";
import { Skills } from "@/components/Skills";
import { AboutMe } from "@/components/AboutMe";
import { projects } from "@/data/projects";
import { useState } from "react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export default function Home() {
  const [currentPage, setCurrentPage] = useState(0);
  const projectsPerPage = 4;
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const currentProjects = projects.slice(
    currentPage * projectsPerPage,
    (currentPage + 1) * projectsPerPage
  );

  return (
    <main className="bg-[#0a0a0a] min-h-screen text-[#e2e2e2] font-inter">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center">
            <Terminal className="h-16 w-16 text-accent mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Hi, I&apos;m [Ahmed]
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

      <Skills />

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
            {currentProjects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center mt-8 gap-4">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(0, prev - 1))}
              disabled={currentPage === 0}
              className="p-2 rounded-lg bg-accent/10 text-accent hover:bg-accent/20 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <span className="text-text/80">
              Page {currentPage + 1} of {totalPages}
            </span>
            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1))
              }
              disabled={currentPage === totalPages - 1}
              className="p-2 rounded-lg bg-accent/10 text-accent hover:bg-accent/20 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </section>

      <AboutMe />

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-background">
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
                className="w-full p-3 bg-gray-background border border-gray-800 rounded-lg focus:outline-none focus:border-accent"
              />
              <textarea
                placeholder="Your message"
                rows={4}
                className="w-full p-3 bg-gray-background border border-gray-800 rounded-lg focus:outline-none focus:border-accent"
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
