import { motion } from "framer-motion";
import { Brain, Rocket, Users, Heart } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export const AboutMe = () => {
  const passions = [
    {
      icon: <Brain className="h-8 w-8 text-accent" />,
      title: "Continuous Learning",
      description:
        "Passionate about staying at the forefront of technology, constantly learning new frameworks and methodologies to build better solutions.",
    },
    {
      icon: <Rocket className="h-8 w-8 text-accent" />,
      title: "Innovation Driven",
      description:
        "Always exploring cutting-edge technologies and pushing boundaries to create innovative solutions that make a difference.",
    },
    {
      icon: <Users className="h-8 w-8 text-accent" />,
      title: "Collaborative Spirit",
      description:
        "Believe in the power of teamwork and knowledge sharing. Love working in diverse teams and contributing to the developer community.",
    },
    {
      icon: <Heart className="h-8 w-8 text-accent" />,
      title: "Problem Solving",
      description:
        "Driven by the challenge of solving complex problems and creating elegant, efficient solutions that improve user experiences.",
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-background">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          {...fadeInUp}
          className="text-3xl font-bold text-center mb-12"
        >
          About Me
        </motion.h2>
        <motion.div
          {...fadeInUp}
          className="mb-12 text-center max-w-3xl mx-auto"
        >
          <p className="text-lg text-[#e2e2e2]/80">
            I&apos;m a passionate full-stack developer with a deep love for
            creating innovative web solutions. My journey in tech is driven by
            curiosity and the desire to build applications that make a real
            impact.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8">
          {passions.map((passion) => (
            <motion.div
              key={passion.title}
              {...fadeInUp}
              className="p-6 rounded-lg bg-[#0a0a0a] border border-gray-800 hover:border-accent transition-colors"
            >
              <div className="flex items-center gap-4 mb-4">
                {passion.icon}
                <h3 className="text-xl font-bold">{passion.title}</h3>
              </div>
              <p className="text-[#e2e2e2]/80">{passion.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
