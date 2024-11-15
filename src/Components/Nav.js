import react, { useState, useEffect } from 'react';

export default function Nav() {
    return (
        <>
            <nav>
                <div className='nav-container'>
                    <div className='nav-content'>
                        <h1>Home</h1>
                        <h1>About</h1>
                        <h1>Projects</h1>
                        <h1>Contact</h1>
                    </div>
                </div>
            </nav>
        </>
    )
}