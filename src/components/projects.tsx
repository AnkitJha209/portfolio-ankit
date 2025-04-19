"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";

// Memoize the projects data to prevent unnecessary re-renders
const projects = [
  {
    title: "Learn Bytes - EdTech Platform",
    description:
      "A comprehensive educational technology platform featuring course management, user authentication, and interactive learning features. Built with modern web technologies and best practices.",
    image: "/LearnBytes.png",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Redux Toolkit",
      "JWT",
      "Bcrypt",
    ],
    githubUrl: "https://github.com/ankitjha209/learn-bytes",
  },
  {
    title: "TaskFlow - Jira Clone",
    description:
      "A modern project management tool inspired by Jira, built with a monorepo architecture. Features include task tracking, team collaboration, and real-time updates. Currently in active development.",
    image: "/Task-Management.png",
    technologies: [
      "Next.js",
      "Express.js",
      "PostgreSQL",
      "Prisma ORM",
      "JWT",
      "Bcrypt",
      "Monorepo",
    ],
    githubUrl: "https://github.com/ankitjha209/work-forge",
  },
  // {
  //   title: "Real-time Chat Application",
  //   description:
  //     "A chat application with real-time messaging capabilities, user authentication, and message history.",
  //   image: "/placeholder-project.png",
  //   technologies: [
  //     "Next.js",
  //     "WebSockets",
  //     "Prisma",
  //     "PostgreSQL",
  //     "TailwindCSS",
  //   ],
  //   githubUrl: "#",
  // },
  {
    title: "Paytm Clone - Payment Gateway",
    description:
      "A secure payment gateway application with transaction management, user authentication, and wallet functionality. Implements database transactions for data integrity.",
    image: "/Paytm.png",
    technologies: [
      "React",
      "Express",
      "TypeScript",
      "PostgreSQL",
      "Prisma ORM",
      "JWT",
      "Transactions",
    ],
    githubUrl: "https://github.com/ankitjha209/paytm-project",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
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

// Memoize the project card component to prevent unnecessary re-renders
const ProjectCard = memo(({ project }: { project: (typeof projects)[0] }) => {
  return (
    <Card className="group overflow-hidden rounded-xl bg-gradient-to-b from-gray-900 to-gray-950 border border-gray-800 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
      <div className="relative h-56 w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-60 transition-opacity z-10" />
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transform group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={
            project.title.includes("Learn Bytes") ||
            project.title.includes("TaskFlow")
          }
        />
      </div>
      <CardContent className="p-8">
        <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-300 mb-6 line-clamp-3">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 text-sm bg-gray-800/50 text-blue-300 rounded-full border border-gray-700 hover:border-blue-500/50 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          <Link
            href={project.githubUrl}
            target="_blank"
            className="flex items-center gap-2 text-sm text-gray-300 hover:text-blue-400 transition-all duration-300 group/link"
          >
            <Github className="w-5 h-5 group-hover/link:rotate-12 transition-transform" />
            <span className="relative">
              View Code
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover/link:w-full transition-all duration-300" />
            </span>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
});

ProjectCard.displayName = "ProjectCard";

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            Featured Projects
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            A showcase of my recent work and technical projects.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
