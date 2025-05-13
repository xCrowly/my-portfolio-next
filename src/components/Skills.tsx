import { motion, useInView } from "framer-motion";
import { skills } from "@/data/skills";
import { useState, useRef } from "react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export const Skills = () => {
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const toggleCategory = (category: string) => {
    setExpandedCategories(prev =>
      prev.includes(category)
        ? prev.filter(cat => cat !== category)
        : [...prev, category]
    );
  };

  return (
    <section id="skills" className="py-16 px-4 bg-[#111111]" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          variants={fadeInUp}
          className="text-3xl font-bold text-center mb-12"
        >
          Skills
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((category, index) => {
            const Icon = category.icon;
            const isExpanded = expandedCategories.includes(category.category);
            const displayItems = isExpanded ? category.items : category.items.slice(0, 3);
            const hasMore = category.items.length > 3;

            return (
              <motion.div
                key={category.category}
                initial="initial"
                animate={isInView ? "animate" : "initial"}
                variants={{
                  initial: { opacity: 0, y: 20 },
                  animate: { 
                    opacity: 1, 
                    y: 0,
                    transition: { duration: 0.5, delay: index * 0.1 }
                  }
                }}
                className="p-6 rounded-lg bg-[#0a0a0a] border border-gray-800"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Icon className="h-6 w-6 text-accent" />
                  <h3 className="text-xl font-bold">{category.category}</h3>
                </div>
                <ul className="space-y-2">
                  {displayItems.map((item) => (
                    <li key={item} className="text-[#e2e2e2]/80">
                      {item}
                    </li>
                  ))}
                </ul>
                {hasMore && (
                  <motion.button
                    onClick={() => toggleCategory(category.category)}
                    className="text-accent hover:text-accent/80 font-medium mt-4 transition-colors"
                  >
                    {isExpanded ? "Show Less" : "Show More"}
                  </motion.button>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
