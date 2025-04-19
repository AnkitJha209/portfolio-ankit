"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Layers, Server, Cloud, Wrench } from "lucide-react";

// Memoize the skills data to prevent unnecessary re-renders
const skillsData = [
  {
    title: "Frontend Development",
    description:
      "Building responsive and interactive user interfaces with modern web technologies",
    icon: Layers,
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Redux Toolkit",
      "TailwindCSS",
      "HTML5/CSS3",
      "ShadCN UI",
      "Framer Motion",
    ],
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    title: "Backend Development",
    description:
      "Creating robust and scalable server-side applications and APIs",
    icon: Server,
    skills: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "PostgreSQL",
      "Prisma ORM",
      "Mongoose",
      "REST APIs",
      "JWT Auth",
      "WebSockets",
    ],
    gradient: "from-purple-500 to-pink-400",
  },
  {
    title: "Deployment & DevOps",
    description: "Deploying and maintaining applications in cloud environments",
    icon: Cloud,
    skills: [
      "AWS EC2",
      "Vercel",
      "Render",
      "Nginx",
      "Linux",
    ],
    gradient: "from-orange-500 to-red-400",
  },
  {
    title: "Development Tools",
    description:
      "Utilizing modern development tools and practices for efficient workflow",
    icon: Wrench,
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
      "npm/yarn",
      "Webpack",
      "ESLint",
      "TurboRepo"
    ],
    gradient: "from-green-500 to-emerald-400",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

// Memoize the skill card component to prevent unnecessary re-renders
const SkillCard = memo(({ skill }: { skill: (typeof skillsData)[0] }) => {
  const Icon = skill.icon;
  return (
    <Card className="group h-full bg-gradient-to-b from-gray-900 to-gray-950 border border-gray-800 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 overflow-hidden">
      <CardHeader className="relative pb-8">
        <div
          className={`absolute inset-0 opacity-10 bg-gradient-to-br ${skill.gradient}`}
        />
        <div className="relative z-10">
          <div
            className={`w-12 h-12 rounded-lg bg-gradient-to-br ${skill.gradient} p-2.5 mb-4`}
          >
            <Icon className="w-full h-full text-white" />
          </div>
          <CardTitle className="text-2xl font-bold text-white mb-2">
            {skill.title}
          </CardTitle>
          <p className="text-gray-300">{skill.description}</p>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {skill.skills.map((item, i) => (
            <span
              key={i}
              className={`px-3 py-1 text-sm rounded-full border transition-colors
                ${
                  skill.gradient.includes("blue")
                    ? "bg-blue-500/10 border-blue-500/20 text-blue-300 hover:border-blue-500/50"
                    : skill.gradient.includes("purple")
                    ? "bg-purple-500/10 border-purple-500/20 text-purple-300 hover:border-purple-500/50"
                    : skill.gradient.includes("orange")
                    ? "bg-orange-500/10 border-orange-500/20 text-orange-300 hover:border-orange-500/50"
                    : "bg-green-500/10 border-green-500/20 text-green-300 hover:border-green-500/50"
                }`}
            >
              {item}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
});

SkillCard.displayName = "SkillCard";

const Skills = () => {
  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            Skills & Expertise
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            My technical skills and areas of expertise across the full stack
            development spectrum.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {skillsData.map((skill, index) => (
            <motion.div key={index} variants={itemVariants}>
              <SkillCard skill={skill} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
