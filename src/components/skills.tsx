"use client"

import { motion } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import {
  Globe,
  Server,
  Database,
  Code2,
  FileJson,
  GitBranch,
} from "lucide-react";

const skillsData = [
  {
    title: "Frontend Development",
    description: "Creating responsive, interactive UI with React and Next.js",
    icon: Globe,
    skills: ["React", "Next.js", "TypeScript", "TailwindCSS", "HTML/CSS"],
  },
  {
    title: "Backend Development",
    description: "Building robust server-side applications with Node.js",
    icon: Server,
    skills: ["Node.js", "Express", "WebSockets", "REST APIs"],
  },
  {
    title: "Database Management",
    description: "Designing and optimizing database solutions",
    icon: Database,
    skills: ["MongoDB", "PostgreSQL", "Prisma ORM"],
  },
  {
    title: "Full Stack Applications",
    description: "Developing end-to-end applications with MERN stack",
    icon: Code2,
    skills: ["MERN Stack", "Full Stack Applications"],
  },
  {
    title: "API Development",
    description: "Creating and consuming RESTful and GraphQL APIs",
    icon: FileJson,
    skills: ["RESTful APIs", "GraphQL", "API Integration"],
  },
  {
    title: "Version Control & Deployment",
    description: "Managing code and deploying applications",
    icon: GitBranch,
    skills: ["Git", "GitHub", "CI/CD", "Cloud Deployment"],
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

export const Skills = () => {
  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Skills & Expertise
          </h2>
          <p className="text-gray-400">
            My technical skills and areas of expertise span across the full
            stack development spectrum.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillsData.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div key={index} variants={itemVariants}>
                <Card className="bg-black/50 border-white/10 hover:border-blue-500/50 transition-colors">
                  <CardHeader>
                    <Icon className="w-8 h-8 text-blue-400 mb-2" />
                    <CardTitle>{skill.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-400 mb-4">{skill.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {skill.skills.map((item, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 text-sm bg-white/5 rounded-full"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
