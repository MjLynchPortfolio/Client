/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink, ArrowUpRight, Sparkles, X } from 'lucide-react';
import AlgoMastr from '../Images/ALGO.png';
import Rayvn from '../Images/rayvn2.png';
import freshlee from '../Images/freshlee.png';

export default function Projects() {
    const [projects, setProjects] = useState([]);
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [modalIndex, setModalIndex] = useState(null);
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

    useEffect(() => {
        setProjects([
            {
                id: 0,
                name: "AlgoMastr",
                tags: ['React', 'Node.js', 'Express', 'Sequelize', 'Stripe', 'Supabase', 'OpenRouter', 'TailwindCSS'],
                description: "AlgoMastr is an AI-powered tutor platform that helps users master algorithms and data structures through natural language conversation. Features include token-based access, streak rewards, and subscription plans.",
                live_url: "https://algomastr.com/",
                image: AlgoMastr,
                accent: "bg-gradient-to-br from-emerald-400 to-cyan-400",
                year: "2025"
            },

            {
                id: 1,
                name: "Rayvn Coding Language",
                tags: ['Python'],
                description: "Rayvn is a small programming language that compiles to bytecode and runs on a custom stack-based virtual machine.",
                github_link: "https://github.com/Ravyn-Coding-Language/Rayvn",
                image: Rayvn,
                accent: "bg-gradient-to-br from-red-400 to-orange-400",
                year: "2026"
            },

            {
                id: 2,
                name: "Employee Tracker",
                tags: ['JavaScript', 'ExpressJS', 'SQL', 'Node.js', 'Inquirer'],
                description: "A program that allows users to add, update, and delete employees, roles, and departments.",
                live_url: "",
                github_link: "https://github.com/mjlynch123/Employee_Tracker",
                image: "https://github.com/mjlynch123/Employee_Tracker/blob/main/Assets/Images/screenshot.png?raw=true",
                accent: "bg-gradient-to-br from-purple-400 to-pink-400",
                year: "2023"
            },
            {
                id: 3,
                name: "Freshlee Meals",
                tags: ['React', 'TailwindCSS'],
                description: "A meal subscription service landing page",
                live_url: "https://freshlee.netlify.app/",
                github_link: "https://github.com/mjlynch123/meal_subscription",
                image: freshlee,
                accent: "bg-gradient-to-br from-blue-400 to-indigo-400",
                year: "2025"
            },
        ]);
    }, []);

    useEffect(() => {
        if (showModal) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [showModal]);

    return (
        <>
            <section className="py-24 bg-black text-white relative overflow-hidden" id="projects">
                {/* Subtle grid pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

                <div className="container mx-auto px-6 relative z-10">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-20"
                    >
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <Sparkles className="w-6 h-6 text-white/60" />
                            <span className="text-white/60 uppercase tracking-widest text-sm font-medium">Portfolio</span>
                            <Sparkles className="w-6 h-6 text-white/60" />
                        </div>
                        <h2 className="text-6xl font-light mb-6 tracking-tight">
                            Selected <span className="font-bold">Work</span>
                        </h2>
                        <div className="w-24 h-px bg-white/20 mx-auto"></div>
                    </motion.div>

                    {/* Projects Grid */}
                    <div ref={ref} className="space-y-32">
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 100 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 1, delay: index * 0.2 }}
                                onHoverStart={() => setHoveredIndex(index)}
                                onHoverEnd={() => setHoveredIndex(null)}
                                className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                                    }`}
                            >
                                {/* Project Image */}
                                <motion.div
                                    className={`relative group ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.6, ease: "easeOut" }}
                                >
                                    <div className="relative overflow-hidden rounded-2xl bg-gray-900">
                                        <motion.img
                                            src={project.image}
                                            alt={project.name}
                                            className="w-full h-[400px] object-cover"
                                            animate={{
                                                scale: hoveredIndex === index ? 1.05 : 1,
                                            }}
                                            transition={{ duration: 0.8, ease: "easeOut" }}
                                        />

                                        {/* Overlay */}
                                        {/* <motion.div
                                        className="absolute inset-0 bg-black/40"
                                        animate={{ opacity: 0.3 }}      // always 30% black overlay
                                        transition={{ duration: 0.4 }}
                                    /> */}

                                        {/* Accent border */}
                                        <motion.div
                                            className={`absolute inset-0 rounded-2xl ${project.accent} p-[2px] opacity-0`}
                                            animate={{
                                                opacity: hoveredIndex === index ? 1 : 0,
                                            }}
                                            transition={{ duration: 0.4 }}
                                        >
                                            <div className="w-full h-full bg-black rounded-2xl">
                                                <motion.img
                                                    src={project.image}
                                                    alt={project.name}
                                                    className="w-full h-full object-cover rounded-2xl"
                                                    animate={{
                                                        scale: hoveredIndex === index ? 1 : 1,
                                                    }}
                                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                                />
                                            </div>
                                        </motion.div>
                                    </div>

                                    {/* Year badge */}
                                    <motion.div
                                        className="absolute -top-4 -right-4 bg-white text-black px-4 py-2 rounded-full text-sm font-bold"
                                        animate={{
                                            y: hoveredIndex === index ? -8 : 0,
                                        }}
                                        transition={{ duration: 0.4 }}
                                    >
                                        {project.year}
                                    </motion.div>
                                </motion.div>

                                {/* Project Info */}
                                <motion.div
                                    className={`space-y-8 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}
                                    animate={{
                                        x: hoveredIndex === index ? (index % 2 === 1 ? 20 : -20) : 0,
                                    }}
                                    transition={{ duration: 0.6, ease: "easeOut" }}
                                >
                                    {/* Project number */}
                                    <div className="text-8xl font-bold text-white/5 leading-none">
                                        {String(index + 1).padStart(2, '0')}
                                    </div>

                                    <div className="space-y-6 -mt-16">
                                        <motion.h3
                                            className="text-4xl font-bold tracking-tight"
                                            animate={{
                                                color: hoveredIndex === index ? "#ffffff" : "#ffffff",
                                            }}
                                        >
                                            {project.name}
                                        </motion.h3>

                                        <p className="text-white/70 text-lg leading-relaxed max-w-lg">
                                            {project.description}
                                        </p>

                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-3">
                                            {project.tags.slice(0, 4).map((tag, tagIndex) => (
                                                <motion.span
                                                    key={tagIndex}
                                                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-white/80 backdrop-blur-sm"
                                                    whileHover={{
                                                        backgroundColor: "rgba(255,255,255,0.1)",
                                                        scale: 1.05
                                                    }}
                                                    transition={{ duration: 0.2 }}
                                                >
                                                    {tag}
                                                </motion.span>
                                            ))}
                                            {project.tags.length > 4 && (
                                                <span
                                                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-white/60 cursor-pointer"
                                                    onClick={() => {
                                                        setModalIndex(index);
                                                        setShowModal(true);
                                                    }}
                                                >
                                                    +{project.tags.length - 4} more
                                                </span>
                                            )}
                                        </div>


                                        {/* Links */}
                                        <div className="flex gap-6 pt-4">
                                            {project.github_link && (
                                                <motion.a
                                                    href={project.github_link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="group flex items-center gap-3 text-white/70 hover:text-white transition-colors"
                                                    whileHover={{ x: 5 }}
                                                    transition={{ duration: 0.2 }}
                                                >
                                                    <Github className="w-5 h-5" />
                                                    <span className="font-medium">View Code</span>
                                                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                                </motion.a>
                                            )}

                                            {project.live_url && (
                                                <motion.a
                                                    href={project.live_url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="group flex items-center gap-3 text-white/70 hover:text-white transition-colors"
                                                    whileHover={{ x: 5 }}
                                                    transition={{ duration: 0.2 }}
                                                >
                                                    <ExternalLink className="w-5 h-5" />
                                                    <span className="font-medium">Live Site</span>
                                                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                                </motion.a>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        ))}
                        <AnimatePresence>
                            {showModal && modalIndex !== null && (
                                <motion.div
                                    className="fixed inset-0 z-[999] flex items-center justify-center px-4 min-h-screen"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.3, ease: "easeOut" }}
                                    onClick={() => setShowModal(false)}
                                >
                                    {/* Enhanced Backdrop */}
                                    <motion.div
                                        className="absolute inset-0 bg-black/60 backdrop-blur-lg"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    />

                                    {/* Subtle grid pattern on backdrop */}
                                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:60px_60px]"></div>

                                    {/* Modal Container */}
                                    <motion.div
                                        className="relative bg-black/90 backdrop-blur-xl border border-white/10 p-10 rounded-3xl max-w-lg w-full text-white shadow-2xl"
                                        initial={{ opacity: 0, y: 60, scale: 0.9 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 60, scale: 0.9 }}
                                        transition={{
                                            duration: 0.4,
                                            ease: [0.25, 0.46, 0.45, 0.94],
                                            type: "spring",
                                            stiffness: 300,
                                            damping: 30
                                        }}
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        {/* Gradient border effect */}
                                        <div className={`absolute inset-0 rounded-3xl ${projects[modalIndex]?.accent} p-[1px] opacity-20`}>
                                            <div className="w-full h-full bg-black/90 rounded-3xl backdrop-blur-xl"></div>
                                        </div>

                                        {/* Close Button */}
                                        <motion.button
                                            onClick={() => setShowModal(false)}
                                            className="absolute top-4 right-4 p-2 text-white/60 hover:text-white hover:bg-white/5 rounded-full transition-all duration-200 group"
                                            whileHover={{ scale: 1.1, rotate: 90 }}
                                            whileTap={{ scale: 0.9 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <X className="w-5 h-5" />
                                        </motion.button>

                                        {/* Modal Header */}
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.1, duration: 0.3 }}
                                            className="mb-8"
                                        >
                                            <div className="flex items-center gap-3 mb-3">
                                                <div className={`w-2 h-2 rounded-full ${projects[modalIndex]?.accent.replace('bg-gradient-to-br', 'bg-gradient-to-r')}`}></div>
                                                <span className="text-white/60 uppercase tracking-widest text-xs font-medium">
                                                    {projects[modalIndex]?.name}
                                                </span>
                                            </div>
                                            <h3 className="text-2xl font-bold mb-2 tracking-tight">
                                                Complete Tech Stack
                                            </h3>
                                            <div className="w-12 h-px bg-white/20"></div>
                                        </motion.div>

                                        {/* Technologies Grid */}
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 0.2, duration: 0.4 }}
                                            className="space-y-4"
                                        >
                                            <div className="grid grid-cols-2 gap-3">
                                                {projects[modalIndex]?.tags.map((tag, i) => (
                                                    < motion.div
                                                        className="group relative"
                                                        whileHover="hovered"
                                                        initial="initial"
                                                        animate="initial"
                                                    >
                                                        <motion.div
                                                            className="bg-white/5 border border-white/10 px-4 py-3 rounded-xl text-sm font-medium cursor-default backdrop-blur-sm overflow-hidden relative"
                                                            variants={{
                                                                hovered: { y: -2, boxShadow: "0 8px 25px -8px rgba(255,255,255,0.1)" },
                                                                initial: { y: 0, boxShadow: "none" }
                                                            }}
                                                            transition={{ duration: 0.3 }}
                                                        >
                                                            <span className="relative z-10">{tag}</span>

                                                            {/* Background shimmer */}
                                                            <motion.div
                                                                className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 rounded-xl z-0"
                                                                variants={{
                                                                    hovered: { x: "100%", opacity: 1 },
                                                                    initial: { x: "-100%", opacity: 0 }
                                                                }}
                                                                transition={{ duration: 0.6, ease: "easeInOut" }}
                                                            />
                                                        </motion.div>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </motion.div>

                                        {/* Modal Footer */}
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.3, duration: 0.3 }}
                                            className="mt-8 pt-6 border-t border-white/10"
                                        >
                                            <p className="text-white/50 text-sm text-center">
                                                {projects[modalIndex]?.tags.length} technologies used in this project
                                            </p>
                                        </motion.div>
                                    </motion.div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Bottom CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 1 }}
                        className="text-center mt-32"
                    >
                        <div className="w-24 h-px bg-white/20 mx-auto mb-8"></div>
                        <p className="text-white/60 text-lg mb-8">
                            Interested in working together?
                        </p>
                        <motion.button
                            className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Get In Touch
                        </motion.button>
                    </motion.div>
                </div >
            </section >
        </>
    );
}