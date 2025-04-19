"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Github, Linkedin, Mail, Send, MapPin, Phone } from "lucide-react";
import Link from "next/link";

// Memoize the contact form to prevent unnecessary re-renders
const ContactForm = memo(() => {
  return (
    <form className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="relative">
          <Input
            type="text"
            placeholder="Your Name"
            className="bg-gray-900/50 border-gray-800 focus:border-blue-500 pl-10 h-12"
          />
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-user"
            >
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </div>
        </div>
        <div className="relative">
          <Input
            type="email"
            placeholder="Your Email"
            className="bg-gray-900/50 border-gray-800 focus:border-blue-500 pl-10 h-12"
          />
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <Mail className="w-5 h-5" />
          </div>
        </div>
      </div>
      <div className="relative">
        <Input
          type="text"
          placeholder="Subject"
          className="bg-gray-900/50 border-gray-800 focus:border-blue-500 pl-10 h-12"
        />
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-tag"
          >
            <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
            <line x1="7" y1="7" x2="7.01" y2="7" />
          </svg>
        </div>
      </div>
      <div className="relative">
        <Textarea
          placeholder="Your Message"
          className="bg-gray-900/50 border-gray-800 focus:border-blue-500 pl-10 min-h-[150px] resize-none"
        />
        <div className="absolute left-3 top-3 text-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-message-square"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        </div>
      </div>
      <Button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 h-12 text-base font-medium group">
        <span className="flex items-center justify-center gap-2">
          Send Message
          <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </span>
      </Button>
    </form>
  );
});

ContactForm.displayName = "ContactForm";

// Memoize the contact info component
const ContactInfo = memo(() => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4 p-4 rounded-lg bg-gray-900/30 border border-gray-800 hover:border-blue-500/50 transition-all duration-300 group">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform">
          <Mail className="w-5 h-5 text-white" />
        </div>
        <div>
          <h3 className="font-medium text-gray-300">Email</h3>
          <Link
            href="mailto:contact@ankitjha.dev"
            className="text-blue-400 hover:text-blue-300 transition-colors"
          >
            contact@ankitjha.dev
          </Link>
        </div>
      </div>

      <div className="flex items-center gap-4 p-4 rounded-lg bg-gray-900/30 border border-gray-800 hover:border-blue-500/50 transition-all duration-300 group">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform">
          <Github className="w-5 h-5 text-white" />
        </div>
        <div>
          <h3 className="font-medium text-gray-300">GitHub</h3>
          <Link
            href="https://github.com/AnkitJha209"
            target="_blank"
            className="text-blue-400 hover:text-blue-300 transition-colors"
          >
            github.com/AnkitJha209
          </Link>
        </div>
      </div>

      <div className="flex items-center gap-4 p-4 rounded-lg bg-gray-900/30 border border-gray-800 hover:border-blue-500/50 transition-all duration-300 group">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center group-hover:scale-110 transition-transform">
          <Linkedin className="w-5 h-5 text-white" />
        </div>
        <div>
          <h3 className="font-medium text-gray-300">LinkedIn</h3>
          <Link
            href="https://www.linkedin.com/in/ankit-jha-8917442b7/"
            target="_blank"
            className="text-blue-400 hover:text-blue-300 transition-colors"
          >
            linkedin.com/in/ankit-jha
          </Link>
        </div>
      </div>

      <div className="flex items-center gap-4 p-4 rounded-lg bg-gray-900/30 border border-gray-800 hover:border-blue-500/50 transition-all duration-300 group">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center group-hover:scale-110 transition-transform">
          <MapPin className="w-5 h-5 text-white" />
        </div>
        <div>
          <h3 className="font-medium text-gray-300">Location</h3>
          <p className="text-gray-300">India</p>
        </div>
      </div>
    </div>
  );
});

ContactInfo.displayName = "ContactInfo";

const Contact = () => {
  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            Get In Touch
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Feel free to reach out for collaborations or just a friendly hello
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-gradient-to-b from-gray-900 to-gray-950 border border-gray-800 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-50"></div>
              <CardContent className="p-8 relative z-10">
                <h3 className="text-2xl font-bold mb-6 text-white">
                  Contact Information
                </h3>
                <ContactInfo />
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-gradient-to-b from-gray-900 to-gray-950 border border-gray-800 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-50"></div>
              <CardContent className="p-8 relative z-10">
                <h3 className="text-2xl font-bold mb-6 text-white">
                  Send Me a Message
                </h3>
                <ContactForm />
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
