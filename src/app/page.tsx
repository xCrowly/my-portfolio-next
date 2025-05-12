"use client";

import { motion, useInView } from "framer-motion";
import { Terminal, ChevronLeft, ChevronRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { ProjectCard } from "@/components/ProjectCard";
import { Skills } from "@/components/Skills";
import { AboutMe } from "@/components/AboutMe";
import { Certificates } from "@/components/Certificates";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { projects } from "@/data/projects";
import { useState, useRef } from "react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export default function Home() {
  const [currentPage, setCurrentPage] = useState(0);
  const projectsPerPage = 4;
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  // Refs for scroll animations
  const heroRef = useRef(null);
  const projectsRef = useRef(null);


  // Check if sections are in view
  const heroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const projectsInView = useInView(projectsRef, { once: true, amount: 0.3 });

  const currentProjects = projects.slice(
    currentPage * projectsPerPage,
    (currentPage + 1) * projectsPerPage
  );

  return (
    <main className="bg-[#0a0a0a] min-h-screen text-text font-inter">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-16 px-4" ref={heroRef}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="initial"
            animate={heroInView ? "animate" : "initial"}
            variants={fadeInUp}
            className="text-center"
          >
            <Terminal className="h-16 w-16 text-accent mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Hi, I&apos;m [Ahmed]
            </h1>
            <p className="text-xl md:text-2xl text-text/80 mb-8">
              I build modern web applications & more.
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
      <section id="projects" className="py-16 px-4" ref={projectsRef}>
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial="initial"
            animate={projectsInView ? "animate" : "initial"}
            variants={fadeInUp}
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

      <Certificates />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </main>
  );
}
