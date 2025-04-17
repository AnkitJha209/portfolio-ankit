"use client"

import { motion } from "motion/react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

const Contact = () => {
  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-400">
            Feel free to reach out for collaborations or just a friendly hello
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-black/50 border-white/10">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Mail className="w-5 h-5 text-blue-400" />
                    <Link
                      href="mailto:contact@ankitjha.dev"
                      className="hover:text-blue-400 transition-colors"
                    >
                      contact@ankitjha.dev
                    </Link>
                  </div>
                  <div className="flex items-center gap-4">
                    <Github className="w-5 h-5 text-blue-400" />
                    <Link
                      href="https://github.com/AnkitJha209"
                      target="_blank"
                      className="hover:text-blue-400 transition-colors"
                    >
                      github.com/AnkitJha209
                    </Link>
                  </div>
                  <div className="flex items-center gap-4">
                    <Linkedin className="w-5 h-5 text-blue-400" />
                    <Link
                      href="https://www.linkedin.com/in/ankit-jha-8917442b7/"
                      target="_blank"
                      className="hover:text-blue-400 transition-colors"
                    >
                      linkedin.com/in/ankit-jha
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-black/50 border-white/10">
              <CardContent className="p-6">
                <form className="space-y-4">
                  <div>
                    <Input
                      type="text"
                      placeholder="Your Name"
                      className="bg-white/5 border-white/10 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Your Email"
                      className="bg-white/5 border-white/10 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Your Message"
                      className="bg-white/5 border-white/10 focus:border-blue-500 min-h-[120px]"
                    />
                  </div>
                  <Button className="w-full bg-blue-500 hover:bg-blue-600">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
