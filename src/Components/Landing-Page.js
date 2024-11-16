import react, { useState, useEffect, useRef } from 'react';

import "../CSS/landing-page.css";
import "../CSS/queries.css";

import iphoneDemo from '../Images/Iphone-demo.png';

import Projects from "../Components/Projects";
import Footer from "../Components/Footer";

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

        const container = containerRef.current;
        container.addEventListener('scroll', handleScroll);

        return () => {
            container.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="landing-page" ref={containerRef} style={{ overflowY: 'scroll', height: '100vh' }}>
            <div className='header-gradient'></div>
            <div
                className="landing-main"
                style={{
                    transform: `translate3d(0, ${scroll / 100}%, 0) scale(${(100 - scroll / 100) / 100
                        })`,

                }}
            >
                <div className="fade-in-header">
                    <div className='header-content'>
                        <div className='header-image'>
                            <img src={iphoneDemo} alt='Iphone Demo' />
                        </div>
                        <div className='header-text'>
                            <h1 className='typewriter'>{displayedText}<span className="cursor">_</span></h1>
                            <h1>Full Stack Developer</h1>
                            <p className='next'>I've been crafting websites for years—mostly because my ideas won't stop bugging me until I do.</p>
                            <div className='socials'>
                                <ul>
                                    <li><a href='https://www.linkedin.com/in/martin-lynch-838976123/'><i class="fa-brands fa-linkedin"></i></a></li>
                                    <li><a href='https://github.com/mjlynch123'><i class="fa-brands fa-github"></i></a></li>
                                    <li><a href="https://codepen.io/mjlynch123"><i class="fa-brands fa-codepen"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='scroll'>
                    <h1>SCROLL</h1>
                    <i style={{ fontSize: '20px' }}>☟</i>
                </div>
            </div>
            <div className="landing-page-content">
                <Projects />

            </div>
        </div>
    );
}