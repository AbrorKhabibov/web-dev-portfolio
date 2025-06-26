import { useTheme } from '../contexts/ThemeContext';
import { ThemeToggle } from './ThemeToggle';
import { useState, useEffect } from 'react';

interface NavbarProps {
    menuOpen: boolean;
    setMenuOpen: (open: boolean) => void;
}

export const Navbar = ({ menuOpen, setMenuOpen }: NavbarProps) => {
    const { theme } = useTheme();
    const [isScrolled, setIsScrolled] = useState(false);
    
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 100); // Trigger after 100px scroll
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    return (
        <>
            <nav 
                className={`p-6 fixed top-0 left-0 right-0 z-50 mx-auto shadow-md transition-all duration-500 ease-in-out ${
                    isScrolled 
                        ? 'w-full mt-0 rounded-none' 
                        : 'w-5/6 mt-10 rounded-2xl'
                }`}
                style={{ backgroundColor: theme.colors.secondary.bg }}
            >
                <div className="max-w-5xl mx-auto flex justify-between items-center px-8">
                    <div 
                        className="text-3xl font-bold"
                        style={{ color: theme.colors.secondary.text }}
                    >
                        <img src="/logo.png" alt="Logo" className="inline-block h-8" />
                        d<span style={{ color: theme.colors.accent.primary }}>web</span>
                    </div>
                    
                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <ul className="flex space-x-16">
                            <li>
                                <a 
                                    href="/" 
                                    className="transition-colors duration-200 hover:opacity-80" 
                                    style={{ color: theme.colors.secondary.text }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.color = theme.colors.accent.primary;
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.color = theme.colors.secondary.text;
                                    }}
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="/about" 
                                    className="transition-colors duration-200 hover:opacity-80" 
                                    style={{ color: theme.colors.secondary.text }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.color = theme.colors.accent.primary;
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.color = theme.colors.secondary.text;
                                    }}
                                >
                                    About
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="/services" 
                                    className="transition-colors duration-200 hover:opacity-80" 
                                    style={{ color: theme.colors.secondary.text }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.color = theme.colors.accent.primary;
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.color = theme.colors.secondary.text;
                                    }}
                                >
                                    Services
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="/contact" 
                                    className="transition-colors duration-200 hover:opacity-80" 
                                    style={{ color: theme.colors.secondary.text }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.color = theme.colors.accent.primary;
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.color = theme.colors.secondary.text;
                                    }}
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                        <ThemeToggle />
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center space-x-4">
                        <ThemeToggle />
                        <button 
                            className="flex flex-col justify-center items-center w-10 h-10 p-2 z-[60]"
                            onClick={() => setMenuOpen(!menuOpen)}
                            aria-label="Toggle menu"
                        >
                            <div className="relative w-6 h-6 flex flex-col justify-center items-center">
                                <span 
                                    className={`absolute h-0.5 w-6 transition-all duration-300 ${
                                        menuOpen ? 'rotate-45' : 'translate-y-1'
                                    }`}
                                    style={{ backgroundColor: theme.colors.secondary.text }}
                                ></span>
                                <span 
                                    className={`absolute h-0.5 w-6 transition-all duration-300 ${
                                        menuOpen ? 'opacity-0' : ''
                                    }`}
                                    style={{ backgroundColor: theme.colors.secondary.text }}
                                ></span>
                                <span 
                                    className={`absolute h-0.5 w-6 transition-all duration-300 ${
                                        menuOpen ? '-rotate-45' : '-translate-y-1'
                                    }`}
                                    style={{ backgroundColor: theme.colors.secondary.text }}
                                ></span>
                            </div>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            {menuOpen && (
                <div 
                    className="fixed inset-0 bg-opacity-75 z-40 md:hidden flex items-center justify-center"
                    style={{ backgroundColor: '#000000d1' }}
                    onClick={() => setMenuOpen(false)}
                >
                    <div 
                        className="rounded-lg p-8 w-80 max-w-[90vw] transition-colors duration-300"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex flex-col space-y-6 text-center">
                            <a 
                                href="/" 
                                className="py-3 text-2xl transition-colors duration-200" 
                                style={{ color: "white" }}
                                onClick={() => setMenuOpen(false)}
                            >
                                Home
                            </a>
                            <a 
                                href="/about" 
                                className="py-3 text-2xl transition-colors duration-200" 
                                style={{ color: "white" }}
                                onClick={() => setMenuOpen(false)}
                            >
                                About
                            </a>
                            <a 
                                href="/services" 
                                className="py-3 text-2xl transition-colors duration-200" 
                                style={{ color: "white" }}
                                onClick={() => setMenuOpen(false)}
                            >
                                Services
                            </a>
                            <a 
                                href="/contact" 
                                className="py-3 text-2xl transition-colors duration-200" 
                                style={{ color: "white" }}
                                onClick={() => setMenuOpen(false)}
                            >
                                Contact
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}