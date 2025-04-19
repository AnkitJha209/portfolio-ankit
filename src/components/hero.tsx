"use client"

import { motion } from "motion/react";
import { Github, Linkedin } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Animated stars background */}
      {/* <div className="absolute inset-0 z-0">
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
      </div> */}

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 pt-24 text-center relative z-10"
      >
        <p className="text-blue-400 mb-4">Hi, my name is</p>
        <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
          Ankit Jha
        </h1>
        <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
          Full Stack Developer
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-8 text-lg">
          I build exceptional digital experiences with modern technologies.
          Specializing in MERN Stack, Prisma ORM, PostgreSQL, TypeScript,
          Next.js, and WebSockets.
        </p>

        <div className="flex items-center justify-center gap-4">
          <Link
            href="https://github.com/AnkitJha209"
            target="_blank"
            className="p-2 rounded-full hover:bg-white/10 transition-colors"
          >
            <Github className="w-6 h-6" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/ankit-jha-8917442b7/"
            target="_blank"
            className="p-2 rounded-full hover:bg-white/10 transition-colors"
          >
            <Linkedin className="w-6 h-6" />
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
