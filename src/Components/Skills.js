import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Server, Database } from 'lucide-react';

export default function Skills() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    const skills = [
        {
            icon: <Code2 className="w-12 h-12" />,
            title: 'Frontend Development',
            skills: ['React', 'JavaScript', 'Tailwind CSS']
        },
        {
            icon: <Server className="w-12 h-12" />,
            title: 'Backend Development',
            skills: ['Node.js', 'Express', 'Python']
        },
        {
            icon: <Database className="w-12 h-12" />,
            title: 'Database',
            skills: ['MySQL', 'MongoDB']
        }
    ];

    return (
        <section className="py-20 bg-gray-800 text-white" id="skills">
            <div className="container mx-auto px-4">
                {/* Section Title */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-4xl font-bold text-center mb-16"
                >
                    Skills & Expertise
                </motion.h2>

                {/* Centered Skills Grid */}
                <div ref={ref} className="flex flex-wrap justify-center items-center gap-8">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="bg-gray-700 p-6 rounded-lg text-center w-72 h-60 flex flex-col justify-center shadow-lg"
                        >
                            <div className="text-blue-400 mb-4 flex justify-center">
                                {skill.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-4">{skill.title}</h3>
                            <ul className="space-y-2">
                                {skill.skills.map((item, skillIndex) => (
                                    <li key={skillIndex} className="text-gray-300">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* Centered Stats Bar */}
                <div className="mt-16 flex flex-col md:flex-row justify-center items-center gap-6">
                    <div className="bg-gray-700 text-center py-6 px-12 rounded-lg shadow-md w-48">
                        <h2 className="text-3xl font-bold text-blue-400">2.5+</h2>
                        <p className="text-gray-300">Years</p>
                    </div>
                    <div className="bg-gray-700 text-center py-6 px-12 rounded-lg shadow-md w-48">
                        <h2 className="text-3xl font-bold text-blue-400">50+</h2>
                        <p className="text-gray-300">Projects</p>
                    </div>
                    <div className="bg-gray-700 text-center py-6 px-12 rounded-lg shadow-md w-48">
                        <h2 className="text-3xl font-bold text-blue-400">15k+</h2>
                        <p className="text-gray-300">Hours</p>
                    </div>
                </div>
            </div>
        </section>
    );
}