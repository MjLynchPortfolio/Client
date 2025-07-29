// import React from "react";
// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import { Mail, Linkedin, Github } from "lucide-react";

// // Footer component that provides contact information and social media links
// export default function Footer() {
//     const [ref, inView] = useInView({
//         triggerOnce: true,
//         threshold: 0.1
//     });

//     return (
//         <footer className="py-20 bg-gray-900 text-white" id="contact">
//             <div className="container mx-auto px-4">
//                 <motion.div
//                     ref={ref}
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={inView ? { opacity: 1, y: 0 } : {}}
//                     transition={{ duration: 0.6 }}
//                     className="max-w-4xl mx-auto text-center"
//                 >
//                     {/* Contact Heading */}
//                     <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
//                     <p className="text-gray-400 mb-12 text-lg">
//                         I'm always open to new opportunities and interesting projects.
//                         Let's work together to bring your ideas to life!
//                     </p>

//                     {/* Social Links */}
//                     <div className="flex justify-center space-x-6 mb-12">
//                         <motion.a
//                             href="mailto:martinlynchdesign@gmail.com"
//                             whileHover={{ scale: 1.1 }}
//                             className="text-gray-400 hover:text-blue-400 transition-colors"
//                         >
//                             <Mail className="w-8 h-8" />
//                         </motion.a>
//                         <motion.a
//                             href="https://www.linkedin.com/in/martin-lynch-838976123/"
//                             target="_blank"
//                             whileHover={{ scale: 1.1 }}
//                             className="text-gray-400 hover:text-blue-400 transition-colors"
//                         >
//                             <Linkedin className="w-8 h-8" />
//                         </motion.a>
//                         <motion.a
//                             href="https://github.com/mjlynch123"
//                             target="_blank"
//                             whileHover={{ scale: 1.1 }}
//                             className="text-gray-400 hover:text-blue-400 transition-colors"
//                         >
//                             <Github className="w-8 h-8" />
//                         </motion.a>
//                     </div>

//                 </motion.div>
//             </div>

//             {/* Footer Section */}
//             <div className="border-t border-gray-700 mt-12 pt-6 text-center">
//                 <p className="text-gray-500">&copy; {new Date().getFullYear()} Martin Lynch. All Rights Reserved.</p>
//             </div>
//         </footer>
//     );
// }
import React from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Sparkles } from "lucide-react";

export default function Footer() {
    const year = new Date().getFullYear();
    const socials = [
        { Icon: Mail, href: "mailto:martinlynchdesign@gmail.com", label: "Email" },
        { Icon: Linkedin, href: "https://www.linkedin.com/in/martin-lynch-838976123/", label: "LinkedIn" },
        { Icon: Github, href: "https://github.com/mjlynch123", label: "GitHub" },
    ];

    return (
        <footer className="relative overflow-hidden bg-black text-white pt-24 pb-12" id="contact">
            {/* grid overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

            <div className="relative z-10 container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-xl mx-auto space-y-6"
                >
                    <div className="flex items-center justify-center gap-2">
                        <Sparkles className="w-5 h-5 text-white/60" />
                        <span className="uppercase text-sm text-white/60 tracking-wider">Get in Touch</span>
                        <Sparkles className="w-5 h-5 text-white/60" />
                    </div>

                    <h2 className="text-4xl md:text-5xl font-light">
                        Let’s <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 bg-[length:200%_200%] animate-gradient">Collaborate</span>
                    </h2>

                    <p className="text-white/70 leading-relaxed">
                        I’m always excited about new projects and partnerships. Shoot me a message and let’s build something amazing together.
                    </p>

                    <motion.div
                        className="flex justify-center gap-8 mt-6"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                    >
                        {socials.map(({ Icon, href, label }) => (
                            <motion.a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.2 }}
                                className="p-3 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 transition-all"
                            >
                                <Icon className="w-6 h-6" />
                            </motion.a>
                        ))}
                    </motion.div>
                </motion.div>

                <motion.div
                    className="mt-16 border-t border-gray-800 pt-6 text-gray-500 text-sm"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                >
                    &copy; {year} Martin Lynch. All rights reserved.
                </motion.div>
            </div>

            <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
      `}</style>
        </footer>
    );
}