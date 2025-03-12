import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Mail, Linkedin, Github, Twitter } from "lucide-react";

export default function Footer() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    return (
        <footer className="py-20 bg-gray-900 text-white" id="contact">
            <div className="container mx-auto px-4">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto text-center"
                >
                    {/* Contact Heading */}
                    <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
                    <p className="text-gray-400 mb-12 text-lg">
                        I'm always open to new opportunities and interesting projects.
                        Let's work together to bring your ideas to life!
                    </p>

                    {/* Social Links */}
                    <div className="flex justify-center space-x-6 mb-12">
                        <motion.a
                            href="mailto:martinlynchdesign@gmail.com"
                            whileHover={{ scale: 1.1 }}
                            className="text-gray-400 hover:text-blue-400 transition-colors"
                        >
                            <Mail className="w-8 h-8" />
                        </motion.a>
                        <motion.a
                            href="https://www.linkedin.com/in/martin-lynch-838976123/"
                            target="_blank"
                            whileHover={{ scale: 1.1 }}
                            className="text-gray-400 hover:text-blue-400 transition-colors"
                        >
                            <Linkedin className="w-8 h-8" />
                        </motion.a>
                        <motion.a
                            href="https://github.com/mjlynch123"
                            target="_blank"
                            whileHover={{ scale: 1.1 }}
                            className="text-gray-400 hover:text-blue-400 transition-colors"
                        >
                            <Github className="w-8 h-8" />
                        </motion.a>
                        <motion.a
                            href="https://twitter.com/"
                            target="_blank"
                            whileHover={{ scale: 1.1 }}
                            className="text-gray-400 hover:text-blue-400 transition-colors"
                        >
                            <Twitter className="w-8 h-8" />
                        </motion.a>
                    </div>

                    {/* Resume Download Button */}
                    <motion.a
                        href="/MartinLynchResumeMain.pdf"// <-- Path to your resume file
                        download="Martin_Lynch_Resume.pdf"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full font-semibold transition duration-300"
                    >
                        Download Resume
                    </motion.a>
                </motion.div>
            </div>

            {/* Footer Section */}
            <div className="border-t border-gray-700 mt-12 pt-6 text-center">
                <p className="text-gray-500">&copy; {new Date().getFullYear()} Martin Lynch. All Rights Reserved.</p>
            </div>
        </footer>
    );
}