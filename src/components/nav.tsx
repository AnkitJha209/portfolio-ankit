"use client"
import Link from "next/link";
import { motion } from "motion/react";

const Nav = () => {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/10 backdrop-blur-lg border-b border-white/10"
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent"
        >
          AJ
        </Link>

        <div className="flex gap-6">
          <Link
            href="/#skills"
            className="hover:text-blue-400 transition-colors"
          >
            Skills
          </Link>
          <Link
            href="/#projects"
            className="hover:text-blue-400 transition-colors"
          >
            Projects
          </Link>
          <Link
            href="/#contact"
            className="hover:text-blue-400 transition-colors"
          >
            Contact
          </Link>
        </div>
      </div>
    </motion.nav>
  );
};

export default Nav;
