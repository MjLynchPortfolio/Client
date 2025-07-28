import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink } from 'lucide-react';

import AlgoMastr from '../Images/ALGO.png';
import freshlee from '../Images/freshlee.png';
import DarkArts from '../Images/DarkArts.png';

// Page dedicated to showcasing projects
export default function Projects() {
    const [projects, setProjects] = useState([]);
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
            },
            {
                id: 1,
                name: "Employee Tracker",
                tags: ['JavaScript', 'ExpressJS', 'SQL', 'Node.js', 'Inquirer'],
                description: "A program that allows users to add, update, and delete employees, roles, and departments.",
                live_url: "",
                github_link: "https://github.com/mjlynch123/Employee_Tracker",
                image: "https://github.com/mjlynch123/Employee_Tracker/blob/main/Assets/Images/screenshot.png?raw=true",
            },
            {
                id: 3,
                name: "Tattoo Shop Landing Page",
                tags: ['React', 'TailwindCSS'],
                description: "A Front-End mockup of a landing page a tattoo shop could use. ",
                live_url: "https://darkartstattoo.netlify.app/",
                github_link: "https://github.com/mjlynch123/TattooShopWebsite",
                image: DarkArts,
            },
            {
                id: 4,
                name: "Freshlee Meals",
                tags: ['React', 'TailwindCSS'],
                description: "A meal subscription service landing page",
                live_url: "https://freshlee.netlify.app/",
                github_link: "https://github.com/mjlynch123/meal_subscription",
                image: freshlee,
            },
        ]);
    }, []);

    return (
        <section className="py-10 bg-gray-900 text-white" id="projects">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-3xl font-bold text-center mb-10 mt-[-70px]"
                >
                    Featured Projects
                </motion.h2>

                {/* Grid: 4 Columns, Adjusted Gap */}
                <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 50 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="bg-gray-800 rounded-lg overflow-hidden shadow-md hover:scale-105 transition-all duration-300 h-[540px] flex flex-col"
                        >
                            {/* Project Image (50% of Card Height) */}
                            <div className="relative h-1/2">
                                <img src={project.image} alt={project.name} className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                            </div>

                            {/* Project Details (Remaining 50%) */}
                            <div className="p-4 flex flex-col flex-grow">
                                <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                                <p className="text-gray-400 text-sm mb-2 flex-grow">{project.description}</p> {/* Reduced margin */}

                                {/* Tags Directly Below Description */}
                                <div className="flex flex-wrap gap-2 mb-3">
                                    {project.tags.map((tag, tagIndex) => (
                                        <span key={tagIndex} className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Links - Always at the Bottom */}
                                <div className="flex justify-between mt-auto"> {/* Forces Buttons to Bottom */}
                                    <a href={project.github_link} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                        <Github className="w-5 h-5" />
                                    </a>
                                    {project.live_url && (
                                        <a href={project.live_url} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                            <ExternalLink className="w-5 h-5" />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}