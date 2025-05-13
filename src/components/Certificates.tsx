import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CertificateCard } from "./CertificateCard";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export const certificates = [
  {
    title: "JavaScript",
    image: "/images/certificates/FreeCodeCamp-JavaScript-cert.png",
    link: "https://www.freecodecamp.org/certification/Crowly/javascript-algorithms-and-data-structures",
  },
  {
    title: "IELTS",
    image: "/images/certificates/IELTS.jpg",
    link: "https://drive.google.com/file/d/1IMw3Wfh7SRbGsNmATrr2jU--vsb6iUyS/view",
  },
  {
    title: "Responsive web design",
    image: "/images/certificates/FreeCodeCamp-Responsive-web-design.png",
    link: "https://www.freecodecamp.org/certification/Crowly/responsive-web-design",
  },
  {
    title: "FrontEnd Development Libraries",
    image: "/images/certificates/FreeCodeCamp-FrontEnd-Libraries.png",
    link: "https://www.freecodecamp.org/certification/Crowly/front-end-development-libraries",
  },
];

export function Certificates() {
  const [currentPage, setCurrentPage] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const certificatesPerPage = 2;
  const totalPages = Math.ceil(certificates.length / certificatesPerPage);

  const currentCertificates = certificates.slice(
    currentPage * certificatesPerPage,
    (currentPage + 1) * certificatesPerPage
  );

  return (
    <section id="certificates" className="py-16 px-4" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          variants={fadeInUp}
          className="text-3xl font-bold text-center mb-12"
        >
          Certificates
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          {currentCertificates.map((certificate, index) => (
            <motion.div
              key={certificate.title}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              variants={{
                initial: { opacity: 0, y: 20 },
                animate: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, delay: index * 0.2 },
                },
              }}
            >
              <CertificateCard {...certificate} />
            </motion.div>
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
  );
}
