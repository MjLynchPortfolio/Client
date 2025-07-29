// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import { Github, ExternalLink } from 'lucide-react';

// import AlgoMastr from '../Images/ALGO.png';
// import freshlee from '../Images/freshlee.png';
// import DarkArts from '../Images/DarkArts.png';

// // Page dedicated to showcasing projects
// export default function Projects() {
//     const [projects, setProjects] = useState([]);
//     const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

//     useEffect(() => {

//         setProjects([
//             {
//                 id: 0,
//                 name: "AlgoMastr",
//                 tags: ['React', 'Node.js', 'Express', 'Sequelize', 'Stripe', 'Supabase', 'OpenRouter', 'TailwindCSS'],
//                 description: "AlgoMastr is an AI-powered tutor platform that helps users master algorithms and data structures through natural language conversation. Features include token-based access, streak rewards, and subscription plans.",
//                 live_url: "https://algomastr.com/",
//                 image: AlgoMastr,
//             },
//             {
//                 id: 1,
//                 name: "Employee Tracker",
//                 tags: ['JavaScript', 'ExpressJS', 'SQL', 'Node.js', 'Inquirer'],
//                 description: "A program that allows users to add, update, and delete employees, roles, and departments.",
//                 live_url: "",
//                 github_link: "https://github.com/mjlynch123/Employee_Tracker",
//                 image: "https://github.com/mjlynch123/Employee_Tracker/blob/main/Assets/Images/screenshot.png?raw=true",
//             },
//             {
//                 id: 3,
//                 name: "Tattoo Shop Landing Page",
//                 tags: ['React', 'TailwindCSS'],
//                 description: "A Front-End mockup of a landing page a tattoo shop could use. ",
//                 live_url: "https://darkartstattoo.netlify.app/",
//                 github_link: "https://github.com/mjlynch123/TattooShopWebsite",
//                 image: DarkArts,
//             },
//             {
//                 id: 4,
//                 name: "Freshlee Meals",
//                 tags: ['React', 'TailwindCSS'],
//                 description: "A meal subscription service landing page",
//                 live_url: "https://freshlee.netlify.app/",
//                 github_link: "https://github.com/mjlynch123/meal_subscription",
//                 image: freshlee,
//             },
//         ]);
//     }, []);

//     return (
//         <section className="py-10 bg-gray-900 text-white" id="projects">
//             <div className="container mx-auto px-4">
//                 <motion.h2
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={inView ? { opacity: 1, y: 0 } : {}}
//                     transition={{ duration: 0.6 }}
//                     className="text-3xl font-bold text-center mb-10 mt-[-70px]"
//                 >
//                     Featured Projects
//                 </motion.h2>

//                 {/* Grid: 4 Columns, Adjusted Gap */}
//                 <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//                     {projects.map((project, index) => (
//                         <motion.div
//                             key={project.id}
//                             initial={{ opacity: 0, y: 50 }}
//                             animate={inView ? { opacity: 1, y: 0 } : {}}
//                             transition={{ duration: 0.6, delay: index * 0.2 }}
//                             className="bg-gray-800 rounded-lg overflow-hidden shadow-md hover:scale-105 transition-all duration-300 h-[540px] flex flex-col"
//                         >
//                             {/* Project Image (50% of Card Height) */}
//                             <div className="relative h-1/2">
//                                 <img src={project.image} alt={project.name} className="w-full h-full object-cover" />
//                                 <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
//                             </div>

//                             {/* Project Details (Remaining 50%) */}
//                             <div className="p-4 flex flex-col flex-grow">
//                                 <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
//                                 <p className="text-gray-400 text-sm mb-2 flex-grow">{project.description}</p> {/* Reduced margin */}

//                                 {/* Tags Directly Below Description */}
//                                 <div className="flex flex-wrap gap-2 mb-3">
//                                     {project.tags.map((tag, tagIndex) => (
//                                         <span key={tagIndex} className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs">
//                                             {tag}
//                                         </span>
//                                     ))}
//                                 </div>

//                                 {/* Links - Always at the Bottom */}
//                                 <div className="flex justify-between mt-auto"> {/* Forces Buttons to Bottom */}
//                                     <a href={project.github_link} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
//                                         <Github className="w-5 h-5" />
//                                     </a>
//                                     {project.live_url && (
//                                         <a href={project.live_url} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
//                                             <ExternalLink className="w-5 h-5" />
//                                         </a>
//                                     )}
//                                 </div>
//                             </div>
//                         </motion.div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// }
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink, ArrowUpRight, Sparkles } from 'lucide-react';

import AlgoMastr from '../Images/ALGO.png';
import freshlee from '../Images/freshlee.png';
import DarkArts from '../Images/DarkArts.png';

export default function Projects() {
    const [projects, setProjects] = useState([]);
    const [hoveredIndex, setHoveredIndex] = useState(null);
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
                name: "Tattoo Shop Landing Page",
                tags: ['React', 'TailwindCSS'],
                description: "A Front-End mockup of a landing page a tattoo shop could use.",
                live_url: "https://darkartstattoo.netlify.app/",
                github_link: "https://github.com/mjlynch123/TattooShopWebsite",
                image: DarkArts,
                accent: "bg-gradient-to-br from-red-400 to-orange-400",
                year: "2024"
            },
            {
                id: 4,
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

    return (
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
                                            <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-white/60">
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
            </div>
        </section>
    );
}