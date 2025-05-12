"use client";

import {
  Mail,
  Github,
  Linkedin,
  Send,
  Phone,
  FileUser,
  Youtube,
} from "lucide-react";
import { motion, useInView } from "framer-motion";
import {  useRef } from "react";

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };
export  const Contact = () => {

      const contactRef = useRef(null);
    
  const contactInView = useInView(contactRef, { once: true, amount: 0.3 });

    return (
        <section
        id="contact"
        className="py-16 px-4 bg-gray-background"
        ref={contactRef}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial="initial"
            animate={contactInView ? "animate" : "initial"}
            variants={fadeInUp}
            className="text-3xl font-bold text-center mb-12"
          >
            Contact
          </motion.h2>
          <div className="flex flex-col md:flex-row gap-8">
            <motion.div
              initial="initial"
              animate={contactInView ? "animate" : "initial"}
              variants={fadeInUp}
              className="flex-1 content-around"
            >
              <div className="max-w-7xl mx-auto">
                <div className="flex flex-col items-center gap-8">
                  <div className="grid grid-cols-2 w-full gap-4 max-w-lg">
                    <div className="flex flex-col gap-4 items-start">
                      <a
                        href="mailto:badawy.ca@gmail.com"
                        className="flex items-center gap-2 text-text hover:text-accent transition-colors"
                      >
                        <Mail className="h-5 w-5" />
                        <span>Email</span>
                      </a>
                      <a
                        href="https://github.com/xCrowly"
                        target="_blank"
                        className="flex items-center gap-2 text-text hover:text-accent transition-colors"
                      >
                        <Github className="h-5 w-5" />
                        <span>GitHub</span>
                      </a>
                      <a
                        href="https://www.linkedin.com/in/ahmed-badawy-61bb7a213/"
                        target="_blank"
                        className="flex items-center gap-2 text-text hover:text-accent transition-colors"
                      >
                        <Linkedin className="h-5 w-5" />
                        <span>LinkedIn</span>
                      </a>
                    </div>
                    <div className="flex flex-col gap-4 items-start">
                      <a
                        href="callto:+3928097565"
                        className="flex items-center gap-2 text-text hover:text-accent transition-colors"
                      >
                        <Phone className="h-5 w-5" />
                        <span>Phone</span>
                      </a>
                      <a
                        href="https://www.youtube.com/@tikkawi"
                        target="_blank"
                        className="flex items-center gap-2 text-text hover:text-accent transition-colors"
                      >
                        <Youtube className="h-5 w-5" />
                        <span>YouTube</span>
                      </a>
                      <a
                        href="#"
                        target="_blank"
                        className="flex items-center gap-2 text-text hover:text-accent transition-colors"
                      >
                        <FileUser className="h-5 w-5" />
                        <span>Resume</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.form
              initial="initial"
              animate={contactInView ? "animate" : "initial"}
              variants={fadeInUp}
              className="flex-1 space-y-4"
            >
              <input
                type="email"
                placeholder="Your email"
                className="w-full p-3 bg-background border border-gray-800 rounded-lg focus:outline-none focus:border-accent"
              />
              <textarea
                placeholder="Your message"
                rows={4}
                className="w-full p-3 bg-background border border-gray-800 rounded-lg focus:outline-none focus:border-accent"
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
    )
}