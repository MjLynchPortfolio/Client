// import React from 'react';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import { Code2, Server, Database } from 'lucide-react';

// // Page dedicated to showcasing skills and expertise
// export default function Skills() {
//     const [ref, inView] = useInView({
//         triggerOnce: true,
//         threshold: 0.1
//     });

//     const skills = [
//         {
//             icon: <Code2 className="w-12 h-12" />,
//             title: 'Frontend Development',
//             skills: ['React', 'JavaScript', 'Tailwind CSS']
//         },
//         {
//             icon: <Server className="w-12 h-12" />,
//             title: 'Backend Development',
//             skills: ['Node.js', 'Express']
//         },
//         {
//             icon: <Database className="w-12 h-12" />,
//             title: 'Database',
//             skills: ['MySQL', 'MongoDB']
//         }
//     ];

//     return (
//         <section className="py-20 bg-gray-800 text-white" id="skills">
//             <div className="container mx-auto px-4">
//                 {/* Section Title */}
//                 <motion.h2
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={inView ? { opacity: 1, y: 0 } : {}}
//                     transition={{ duration: 0.6 }}
//                     className="text-4xl font-bold text-center mb-16"
//                 >
//                     Skills & Expertise
//                 </motion.h2>

//                 {/* Centered Skills Grid */}
//                 <div ref={ref} className="flex flex-wrap justify-center items-center gap-8">
//                     {skills.map((skill, index) => (
//                         <motion.div
//                             key={index}
//                             initial={{ opacity: 0, y: 50 }}
//                             animate={inView ? { opacity: 1, y: 0 } : {}}
//                             transition={{ duration: 0.6, delay: index * 0.2 }}
//                             className="bg-gray-700 p-6 rounded-lg text-center w-72 h-60 flex flex-col justify-center shadow-lg"
//                         >
//                             <div className="text-blue-400 mb-4 flex justify-center">
//                                 {skill.icon}
//                             </div>
//                             <h3 className="text-xl font-semibold mb-4">{skill.title}</h3>
//                             <ul className="space-y-2">
//                                 {skill.skills.map((item, skillIndex) => (
//                                     <li key={skillIndex} className="text-gray-300">
//                                         {item}
//                                     </li>
//                                 ))}
//                             </ul>
//                         </motion.div>
//                     ))}
//                 </div>

//                 {/* Centered Stats Bar */}
//                 <div className="mt-16 flex flex-col md:flex-row justify-center items-center gap-6">
//                     <div className="bg-gray-700 text-center py-6 px-12 rounded-lg shadow-md w-48">
//                         <h2 className="text-3xl font-bold text-blue-400">2.5+</h2>
//                         <p className="text-gray-300">Years</p>
//                     </div>
//                     <div className="bg-gray-700 text-center py-6 px-12 rounded-lg shadow-md w-48">
//                         <h2 className="text-3xl font-bold text-blue-400">50+</h2>
//                         <p className="text-gray-300">Projects</p>
//                     </div>
//                     <div className="bg-gray-700 text-center py-6 px-12 rounded-lg shadow-md w-48">
//                         <h2 className="text-3xl font-bold text-blue-400">15k+</h2>
//                         <p className="text-gray-300">Hours</p>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Server, Database, Sparkles } from 'lucide-react';

export default function Skills() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const skills = [
        {
            icon: <Code2 className="w-12 h-12" />,
            title: 'Frontend',
            items: ['React', 'JavaScript', 'Tailwind CSS'],
            accent: 'from-blue-400 to-purple-500',
        },
        {
            icon: <Server className="w-12 h-12" />,
            title: 'Backend',
            items: ['Node.js', 'Express', 'REST APIs'],
            accent: 'from-green-400 to-emerald-500',
        },
        {
            icon: <Database className="w-12 h-12" />,
            title: 'Databases',
            items: ['MySQL', 'MongoDB'],
            accent: 'from-purple-400 to-pink-500',
        },
    ];

    const stats = [
        { value: '2.5+', label: 'Years Exp', accent: 'from-blue-400 to-purple-500' },
        { value: '50+', label: 'Projects', accent: 'from-green-400 to-emerald-500' },
        { value: '15k+', label: 'Hours', accent: 'from-purple-400 to-pink-500' },
    ];

    return (
        <>
            <div className="bg-black">
                <div className=' mx-[25%] border-t border-white' />
            </div>
            <section
                id="skills"
                className="relative overflow-hidden bg-black text-white py-20"
            >
                {/* subtle grid overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

                <div className="container mx-auto px-6 relative z-10">
                    {/* Section Header */}
                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0, y: 30 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <Sparkles className="w-6 h-6 text-white/60" />
                            <span className="uppercase tracking-widest text-sm text-white/60">
                                Skills & Expertise
                            </span>
                            <Sparkles className="w-6 h-6 text-white/60" />
                        </div>
                        <h2 className="text-5xl font-light tracking-tight">
                            What I <span className="font-bold">Do</span>
                        </h2>
                        <div className="mx-auto mt-4 h-px w-24 bg-white/20" />
                    </motion.div>

                    {/* Skills Grid */}
                    <div
                        ref={ref}
                        className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20"
                    >
                        {skills.map((s, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 50 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: i * 0.2 }}
                                className="relative rounded-2xl bg-gray-900/50 backdrop-blur-sm p-8 flex flex-col items-center text-center"
                            >
                                {/* gradient border */}
                                <div
                                    className={`absolute -inset-px rounded-2xl bg-gradient-to-br ${s.accent} blur opacity-30`}
                                />
                                <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-black/50 mb-4">
                                    {s.icon}
                                </div>
                                <h3 className="relative z-10 mb-4 text-xl font-semibold">
                                    {s.title}
                                </h3>
                                <ul className="relative z-10 space-y-2">
                                    {s.items.map((item, idx) => (
                                        <li key={idx} className="text-white/70">
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>

                    {/* Stats Bar */}
                    <div className="flex flex-wrap justify-center gap-8">
                        {stats.map((st, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 50 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: idx * 0.2 }}
                                className="relative w-48 rounded-2xl bg-gray-900/50 backdrop-blur-sm p-6 text-center"
                            >
                                <div
                                    className={`absolute -inset-px rounded-2xl bg-gradient-to-br ${st.accent} blur opacity-30`}
                                />
                                <div className="relative z-10">
                                    <h4 className="text-3xl font-bold text-white">{st.value}</h4>
                                    <p className="mt-1 text-white/70">{st.label}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}