import react, { useState, useEffect, useRef } from 'react';

import "../CSS/landing-page.css";
import "../CSS/queries.css";

import iphoneDemo from '../Images/Iphone-demo.png';

import Nav from './Nav';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function LandingPage() {
    const [scroll, setScroll] = useState(0);
    const containerRef = useRef(null);


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
                            <h1>Hi, I'm MJ</h1>
                            <h1>Full Stack Developer</h1>
                            <p className='next'>I've been crafting websites for years—mostly because my ideas won't stop bugging me until I do.</p>
                            <div className='socials'>
                                <ul>
                                    <li><a href='#l'><i class="fa-brands fa-linkedin"></i></a></li>
                                    <li><a href='#g'><i class="fa-brands fa-github"></i></a></li>
                                    <li><a href="#c"><i class="fa-brands fa-codepen"></i></a></li>
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
                <div className='content-container'>
                    <div className='content'>
                        <h1>My Projects</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}