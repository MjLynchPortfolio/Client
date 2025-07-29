/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail, ExternalLink, Sparkles } from 'lucide-react';

import "../CSS/landing-page.css";
import "../CSS/queries.css";
import "../CSS/skills.css";

import '@fortawesome/fontawesome-free/css/all.min.css';
import headerImage from '../Images/Header-Image.jpg';
import Projects from "../Components/Projects";
import Footer from "../Components/Footer";
import Skills from './Skills';

const backgroundImage = "https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop";

export default function LandingPage() {
    const [displayedText, setDisplayedText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const texts = ['Martin Lynch', 'A Full Stack Dev', 'A Problem Solver', "A Creator"];
    const currentText = texts[currentIndex];

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (!isDeleting) {
                if (displayedText.length < currentText.length) {
                    setDisplayedText(currentText.slice(0, displayedText.length + 1));
                } else {
                    setTimeout(() => setIsDeleting(true), 2000);
                }
            } else {
                if (displayedText.length > 0) {
                    setDisplayedText(displayedText.slice(0, -1));
                } else {
                    setIsDeleting(false);
                    setCurrentIndex((prev) => (prev + 1) % texts.length);
                }
            }
        }, isDeleting ? 50 : 100);

        return () => clearTimeout(timeout);
    }, [displayedText, isDeleting, currentText, currentIndex]);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const socialLinks = [
        { icon: Linkedin, href: "https://www.linkedin.com/in/martin-lynch-838976123/", color: "hover:text-blue-400", label: "LinkedIn" },
        { icon: Github, href: "https://github.com/mjlynch123", color: "hover:text-gray-300", label: "GitHub" },
        { icon: ExternalLink, href: "https://codepen.io/mjlynch123", color: "hover:text-yellow-400", label: "CodePen" },
        { icon: Mail, href: "mailto:martinlynchdesign@gmail.com", color: "hover:text-red-400", label: "Email" }
    ];

    return (
        <div className="bg-gradient-to-b from-gray-900 to-gray-900 text-white">
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-cover bg-center bg-fixed" style={{ backgroundImage: `url(${backgroundImage})` }} />
                    <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/80" />
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] animate-pulse" />
                    <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-float" />
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float-delayed" />
                    <motion.div
                        className="absolute w-96 h-96 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl pointer-events-none"
                        animate={{
                            x: mousePosition.x - 192,
                            y: mousePosition.y - 192,
                        }}
                        transition={{ type: "spring", damping: 30, stiffness: 200 }}
                    />
                </div>

                <div className="relative z-10 container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-screen py-20">
                        <motion.div
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                            className="space-y-8"
                        >
                            <div className="flex items-center gap-3">
                                <Sparkles className="w-6 h-6 text-white/60" />
                                <span className="text-white/60 uppercase tracking-widest text-sm font-medium">
                                    Hello, I'm
                                </span>
                            </div>

                            <div className="text-5xl md:text-7xl font-light tracking-tight">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-white bg-[length:400%_400%] animate-gradient">
                                    {displayedText}
                                </span>
                                <motion.span
                                    animate={{ opacity: [1, 0] }}
                                    transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
                                    className="text-blue-400"
                                >
                                    |
                                </motion.span>
                            </div>

                            <h1 className="text-3xl md:text-5xl font-bold text-white/90">Web Developer</h1>
                            <p className="text-xl text-white/70 leading-relaxed max-w-lg">
                                Full Stack Developer specializing in modern web development, creating exceptional digital experiences with cutting-edge technologies.
                            </p>

                            <div className="flex flex-wrap gap-6">
                                <motion.button
                                    className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl"
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    View My Work
                                </motion.button>
                                <motion.button
                                    className="px-8 py-4 border border-white/20 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Get In Touch
                                </motion.button>
                            </div>

                            <div className="flex gap-6 pt-8">
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`p-3 rounded-full bg-white/5 border border-white/10 text-white/70 ${social.color} transition-all duration-300 backdrop-blur-sm hover:bg-white/10`}
                                        whileHover={{ scale: 1.1, y: -3 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <social.icon className="w-6 h-6" />
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                            className="flex justify-center lg:justify-end"
                        >
                            <div className="relative w-80 h-80 md:w-96 md:h-96">
                                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 p-1 animate-gradient bg-[length:400%_400%]">
                                    <div className="w-full h-full rounded-full overflow-hidden bg-black">
                                        <img
                                            src={headerImage}
                                            alt="Martin Lynch - Web Developer"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 1 }}
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="flex flex-col items-center gap-2 text-white/60"
                    >
                        <span className="text-sm font-medium tracking-wider">SCROLL</span>
                        <ChevronDown className="w-5 h-5" />
                    </motion.div>
                </motion.div>
            </section>

            <Projects />
            <div>
                <Skills />
            </div>
            <Footer />

            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-20px) rotate(180deg); }
                }
                @keyframes float-delayed {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-30px) rotate(-180deg); }
                }
                @keyframes gradient {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }
                .animate-float-delayed {
                    animation: float-delayed 8s ease-in-out infinite;
                }
                .animate-gradient {
                    animation: gradient 3s ease infinite;
                }
            `}</style>
        </div>
    );
}
