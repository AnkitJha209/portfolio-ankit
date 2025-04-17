"use client"
import { Github, Linkedin } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Ankit Jha. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/AnkitJha209"
              target="_blank"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              <Github className="w-5 h-5" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/ankit-jha-8917442b7/"
              target="_blank"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
