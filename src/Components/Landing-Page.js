import react, { useState, useEffect } from 'react';

import "../CSS/landing-page.css";
import "../CSS/queries.css";

import iphoneDemo from '../Images/Iphone-demo.png';

import Nav from './Nav';


export default function LandingPage() {
    const [scroll, setScroll] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScroll(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="landing-page">
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