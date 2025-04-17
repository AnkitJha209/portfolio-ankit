"use client"

import { motion } from "motion/react";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce platform with product management, cart functionality, and payment integration.",
    image: "/ecommerce.jpg",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Real-time Chat Application",
    description:
      "A chat application with real-time messaging capabilities, user authentication, and message history.",
    image: "/chat.jpg",
    technologies: [
      "Next.js",
      "WebSockets",
      "Prisma",
      "PostgreSQL",
      "TailwindCSS",
    ],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Task Management System",
    description:
      "A collaborative task management system with real-time updates and team features.",
    image: "/tasks.jpg",
    technologies: ["TypeScript", "React", "Node.js", "MongoDB", "Socket.io"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Personal Finance Tracker",
    description:
      "A finance tracking application with expense categorization and visualization.",
    image: "/finance.jpg",
    technologies: ["React", "Node.js", "PostgreSQL", "Chart.js", "Express"],
    liveUrl: "#",
    githubUrl: "#",
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

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-400">
            A showcase of my recent work and technical projects.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="overflow-hidden bg-black/50 border-white/10 hover:border-blue-500/50 transition-colors">
                <div className="relative h-48 w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-sm bg-white/5 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      className="flex items-center gap-2 text-sm hover:text-blue-400 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </Link>
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      className="flex items-center gap-2 text-sm hover:text-blue-400 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
