import { motion } from "framer-motion";
import Image from "next/image";

interface CertificateCardProps {
  title: string;
  image: string;
  link: string;
}

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export function CertificateCard({ title, image, link }: CertificateCardProps) {
  return (
    <motion.div {...fadeInUp}>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block group"
      >
        <div className="bg-gray-background border-text/30 border-1 hover:border-accent rounded-lg overflow-hidden transition-transform transform">
          <div className="p-4">
            <h3 className="text-xl font-semibold text-center mb-4">{title}</h3>
            <div className="relative aspect-[16/9] w-full">
              <Image
                src={image}
                alt={title}
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </a>
    </motion.div>
  );
}
