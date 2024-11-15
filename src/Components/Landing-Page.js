import react, { useState, useEffect } from 'react';

import "../CSS/landing-page.css";

import Header from './Header';

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
            <div
                className="landing-main"
                style={{
                    transform: `translate3d(0, ${scroll / 100}%, 0) scale(${(100 - scroll / 100) / 100
                        })`,
                }}
            >
                <h1>SCROLL</h1>
                <i style={{ fontSize: '50px' }}>☟</i>
            </div>
            <div className="landing-page-content">
                <div className="fade-in-header">
                    <h1>Hi There!</h1>
                    <p className="next">Glad you made it!</p>
                </div>
            </div>
        </div>
    );
}