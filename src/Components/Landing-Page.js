import react, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

import "../CSS/landing-page.css";
import "../CSS/queries.css";
import "../CSS/skills.css"

import '@fortawesome/fontawesome-free/css/all.min.css';

import iphoneDemo from '../Images/Iphone-demo.png';
import headerImage from '../Images/Header-Image.jpg';
import backgroundImage from '../Images/background.jpeg';

import Projects from "../Components/Projects";
import Footer from "../Components/Footer";
import Skills from './Skills';

// Landing page component that serves as the main entry point of the application
export default function LandingPage() {
    const [scroll, setScroll] = useState(0);
    const containerRef = useRef(null);
    const [displayedText, setDisplayedText] = useState('');
    const characterArray = ["H", "i", ",", " ", "I", "'", "m", " ", "M", "J", "!"];

    // Typing animation logic
    useEffect(() => {
        let index = 0;
        setDisplayedText(''); // Ensure reset at the start

        const typeText = () => {
            if (index < characterArray.length) {
                const char = characterArray[index];
                if (char !== undefined) { // Prevent appending 'undefined'
                    // console.log(`Index: ${index}, Character: "${char}"`);
                    setDisplayedText((prev) => prev + char);
                }
                index++;
            } else {
                clearInterval(typingInterval); // Stop when complete
            }
        };

        const typingInterval = setInterval(typeText, 150); // Adjust speed as needed

        return () => clearInterval(typingInterval); // Clean up
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (containerRef.current) {
                setScroll(containerRef.current.scrollTop);
            }
        };

        // Ensure the reference exists before adding event listener
        if (containerRef.current) {
            containerRef.current.addEventListener('scroll', handleScroll);
        }

        return () => {
            if (containerRef.current) {
                containerRef.current.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);

    return (
        <div className="bg-gradient-to-b from-gray-900 to-gray-900 text-white">
            {/* Hero Section */}
            <div
                className="relative h-[90vh] flex items-center justify-center bg-cover bg-center"
                style={{ backgroundImage: `url(${backgroundImage})` }}
            >
                {/* Background Overlay */}
                <div className="absolute inset-0 bg-black/50"></div>

                {/* Content Section */}
                <div className="relative z-10 container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
                    {/* Left Section - Typing Effect & Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="md:w-1/2 text-center md:text-left"
                    >
                        {/* Animated Gradient Text */}
                        <div className="text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 bg-[size:400%] animate-gradient">
                            {displayedText}
                            <span className="animate-blink">_</span>
                        </div>
                        <p className="text-xl mb-8 text-gray-300">
                            Full Stack Developer specializing in modern web development
                        </p>

                        {/* Social Media Icons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="flex flex-row items-center justify-center md:justify-start gap-6 mt-4"
                        >
                            <a href="https://www.linkedin.com/in/martin-lynch-838976123/" target="_blank" className="text-xl hover:text-blue-400">
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a href="https://github.com/mjlynch123" target="_blank" className="text-xl hover:text-gray-400">
                                <i className="fab fa-github"></i>
                            </a>
                            <a href="https://codepen.io/mjlynch123" target="_blank" className="text-xl hover:text-yellow-400">
                                <i className="fab fa-codepen"></i>
                            </a>
                            <a href="mailto:martinlynchdesign@gmail.com" className="text-xl hover:text-red-400">
                                <i className="far fa-envelope"></i>
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* Right Section - Profile Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="md:w-1/2 flex justify-center"
                    >
                        <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-500 shadow-2xl">
                            <img src={headerImage} alt="Profile" className="w-full h-full object-cover" />
                        </div>
                    </motion.div>
                </div>
            </div>
            {/* Ensure Proper Spacing Before Next Section */}
            <div className="mb-20"></div>

            {/* Projects Section */}
            <div className="bg-gray-900 py-16 px-6">
                <Projects />
            </div>

            {/* Skills Section */}
            <div className="bg-gray-800 py-16 px-6">
                <Skills />
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
}
