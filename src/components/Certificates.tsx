import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CertificateCard } from "./CertificateCard";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export const certificates = [
  {
    title: "FreeCodeCamp JavaScript",
    image: "/images/certificates/FreeCodeCamp-JavaScript-cert.png",
    link: "https://aws.amazon.com/certification/certified-cloud-practitioner/",
  },
  {
    title: "FreeCodeCamp Responsive web design",
    image: "/images/certificates/FreeCodeCamp-Responsive-web-design.png",
    link: "https://www.coursera.org/professional-certificates/meta-front-end-developer",
  },
  {
    title: "Responsive web design",
    image: "/images/certificates/FreeCodeCamp-Responsive-web-design.png",
    link: "https://www.coursera.org/professional-certificates/google-ux-design",
  },
  {
    title: "IELTS",
    image: "/images/certificates/IELTS.jpg",
    link: "https://www.coursera.org/professional-certificates/google-ux-design",
  },
];

export function Certificates() {
  const [currentPage, setCurrentPage] = useState(0);
  const certificatesPerPage = 2;
  const totalPages = Math.ceil(certificates.length / certificatesPerPage);

  const currentCertificates = certificates.slice(
    currentPage * certificatesPerPage,
    (currentPage + 1) * certificatesPerPage
  );

  return (
    <section id="certificates" className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          {...fadeInUp}
          className="text-3xl font-bold text-center mb-12"
        >
          Certificates
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          {currentCertificates.map((certificate) => (
            <CertificateCard key={certificate.title} {...certificate} />
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
