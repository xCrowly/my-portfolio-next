import { motion, useInView } from "framer-motion";
import { Brain, Rocket, Users, Heart, Flame } from "lucide-react";
import { useState, useRef } from "react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export const AboutMe = () => {
  const [showMore, setShowMore] = useState(false);
  const sectionRef = useRef(null);
  const passionsRef = useRef(null);

  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const passionsInView = useInView(passionsRef, { once: true, amount: 0.3 });

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
    <section
      id="about"
      className="py-16 px-4 bg-gray-background"
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          variants={fadeInUp}
          className="text-3xl font-bold text-center mb-12"
        >
          🚀 About Me
        </motion.h2>
        <motion.div
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          variants={fadeInUp}
          className="mb-12 text-justify max-w-5xl mx-auto"
        >
          <p className="text-gray-300 text-lg">
            Hi! I&apos;m a passionate{" "}
            <strong className="text-blue-400">Front-End Developer</strong> with
            a solid foundation in HTML, CSS, JavaScript, and modern libraries
            like <strong>React.js</strong> and <strong>React Router</strong>. I
            also work with <strong>jQuery</strong>, <strong>Bootstrap</strong>,{" "}
            <strong>Sass/SCSS</strong>, and tools like <strong>Git</strong> &{" "}
            <strong>GitHub</strong>.
          </p>
          <br />

          <p className="text-gray-300 text-lg">
            My background in design software like <strong>Canva</strong>,{" "}
            <strong>Adobe Premiere</strong>, and{" "}
            <strong>DaVinci Resolve</strong> helps me bring visually appealing
            experiences to life. I focus on <strong>responsive</strong>,{" "}
            <strong>mobile-first</strong> design that performs beautifully
            across all devices.
          </p>

          <h3 className="text-2xl font-semiboldtext-white pt-2">
            🧠 Learning Beyond My Skillset With AI
          </h3>
          <p className="text-gray-300 text-lg">
            With AI as my coding assistant and research companion, I&apos;ve
            gone beyond my original skillset to:
          </p>

          {!showMore ? (
            <motion.button
              onClick={() => setShowMore(true)}
              className="text-accent hover:text-accent/80 font-medium mt-2 transition-colors"
            >
              Show More
            </motion.button>
          ) : (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.3 }}
            >
              <ul className="list-disc list-inside text-gray-300 pl-4 space-y-1 text-lg">
                <li>
                  Build a full Italian{" "}
                  <strong>e-commerce clothing website</strong> using{" "}
                  <strong>Next.js</strong> and <strong>TypeScript</strong>
                </li>
                <li>
                  Learn and implement dynamic routing, third-party APIs, and
                  best practices for production-ready apps
                </li>
                <li>
                  Currently building this portfolio using{" "}
                  <strong>Next.js</strong> and <strong>Cursor</strong>
                </li>
              </ul>

              <h3 className="text-2xl font-semibold text-white pt-4">
                💡 Why Hire Me?
              </h3>
              <p className="text-gray-300 text-lg">
                I may be a <strong>Junior Developer</strong>, but I think like a
                senior learner:
              </p>
              <ul className="list-disc list-inside text-gray-300 pl-4 space-y-1 text-lg">
                <li>I ship real, working products</li>
                <li>I adapt quickly to new technologies and frameworks</li>
                <li>
                  I combine human creativity with AI efficiency to solve
                  problems fast
                </li>
              </ul>

              <p className="text-white text-lg font-semibold pt-4">
                If you&apos;re looking for someone who learns fast, works smart,
                and brings creative energy, let&apos;s connect.
              </p>

              <motion.button
                onClick={() => setShowMore(false)}
                className="text-accent hover:text-accent/80 font-medium mt-2 transition-colors"
              >
                Show Less
              </motion.button>
            </motion.div>
          )}
        </motion.div>
        <motion.h2
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          variants={fadeInUp}
          className="text-3xl font-bold text-center mb-12"
        >
          <Flame className="inline-block mr-2 text-accent" size={36} />Top skills
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8" ref={passionsRef}>
          {passions.map((passion, index) => (
            <motion.div
              key={passion.title}
              initial="initial"
              animate={passionsInView ? "animate" : "initial"}
              variants={{
                initial: { opacity: 0, y: 20 },
                animate: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, delay: index * 0.1 },
                },
              }}
              className="p-6 rounded-lg bg-background border border-gray-800 hover:border-accent transition-colors"
            >
              <div className="flex items-center gap-4 mb-4">
                {passion.icon}
                <h3 className="text-xl font-bold">{passion.title}</h3>
              </div>
              <p className="text-text/80">{passion.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
