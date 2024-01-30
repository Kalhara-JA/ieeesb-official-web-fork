"use client"

import { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
    const [hovered, setHovered] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const scrollTop = (e: any) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            setIsVisible(scrollTop > window.innerHeight / 2); // Show button after scrolling half the viewport height
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`fixed bottom-5 right-5 z-50 ${isVisible ? 'visible' : 'invisible'}`}>
            <button
                onClick={scrollTop}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                className={`bg-[#0E559D] text-white rounded-full w-[40px] h-[40px] flex items-center justify-center border-white ${
                    hovered ? 'hover:bg-blue-600' : ''
                } transition-all duration-300`}
                style={{
                    opacity: isVisible ? 1 : 0,
                    transition: 'opacity 0.5s ease',
                }}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-6 w-6 transform ${
                        hovered ? 'scale-110' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 15l7-7 7 7"
                    />
                </svg>
            </button>
        </div>
    );
};

export default ScrollToTopButton;
