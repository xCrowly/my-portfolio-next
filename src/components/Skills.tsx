import { motion } from "framer-motion";
import { skills } from "@/data/skills";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export const Skills = () => {
  return (
    <section id="skills" className="py-16 px-4 bg-[#111111]">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          {...fadeInUp}
          className="text-3xl font-bold text-center mb-12"
        >
          Skills
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((category) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.category}
                {...fadeInUp}
                className="p-6 rounded-lg bg-[#0a0a0a] border border-gray-800"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Icon className="h-6 w-6 text-accent" />
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
            );
          })}
        </div>
      </div>
    </section>
  );
};
