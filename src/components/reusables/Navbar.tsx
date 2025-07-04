import { useTheme } from '../../contexts/ThemeContext';
import { ThemeToggle } from '../ThemeToggle';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavbarProps {
    menuOpen: boolean;
    setMenuOpen: (open: boolean) => void;
}

export const Navbar = ({ menuOpen, setMenuOpen }: NavbarProps) => {
    const { theme } = useTheme();
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();
    
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 100);
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
                    <div className="text-3xl font-bold">
                        <Link 
                            to="/" 
                            className="flex items-center space-x-2 transition-all duration-300"
                            style={{ color: theme.colors.secondary.text }}
                            // onMouseEnter={(e) => {
                            //     e.currentTarget.style.textShadow = `
                            //         0 0 5px ${theme.colors.accent.primary},
                            //         0 0 10px ${theme.colors.accent.primary},
                            //         0 0 15px ${theme.colors.accent.primary},
                            //         0 0 20px ${theme.colors.accent.primary},
                            //         0 0 35px ${theme.colors.accent.primary},
                            //         0 0 40px ${theme.colors.accent.primary}
                            //     `;
                            //     e.currentTarget.style.transform = 'scale(1.05)';
                            //     e.currentTarget.style.color = theme.colors.accent.primary;
                                
                            //     const img = e.currentTarget.querySelector('img');
                            //     if (img) {
                            //         img.style.filter = `
                            //             brightness(1.2)
                            //             drop-shadow(0 0 5px ${theme.colors.accent.primary})
                            //             drop-shadow(0 0 10px ${theme.colors.accent.primary})
                            //             drop-shadow(0 0 15px ${theme.colors.accent.primary})
                            //             drop-shadow(0 0 20px ${theme.colors.accent.primary})
                            //         `;
                            //     }
                            // }}
                            // onMouseLeave={(e) => {
                            //     e.currentTarget.style.textShadow = 'none';
                            //     e.currentTarget.style.transform = 'scale(1)';
                            //     e.currentTarget.style.color = theme.colors.secondary.text;
                                
                            //     const img = e.currentTarget.querySelector('img');
                            //     if (img) {
                            //         img.style.filter = 'none';
                            //     }
                            // }}
                        >
                            <img 
                                src="/logo.png" 
                                alt="Logo" 
                                className="inline-block h-8 transition-all duration-300" 
                            />
                            d<span style={{ color: theme.colors.accent.primary }}>web</span>
                        </Link>
                    </div>
                    
                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <ul className="flex space-x-16">
                            <li>
                                <Link 
                                    to="/" 
                                    className={`transition-all duration-300 hover:opacity-80 ${
                                        location.pathname === '/' ? 'font-semibold' : ''
                                    }`}
                                    style={{ 
                                        color: location.pathname === '/' 
                                            ? theme.colors.accent.primary 
                                            : theme.colors.secondary.text 
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.color = theme.colors.accent.primary;
                                        e.currentTarget.style.textShadow = `
                                            0 0 5px ${theme.colors.accent.primary},
                                            0 0 10px ${theme.colors.accent.primary},
                                            0 0 15px ${theme.colors.accent.primary}
                                        `;
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.color = location.pathname === '/' 
                                            ? theme.colors.accent.primary 
                                            : theme.colors.secondary.text;
                                        e.currentTarget.style.textShadow = 'none';
                                    }}
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    to="/my-work" 
                                    className={`transition-all duration-300 hover:opacity-80 ${
                                        location.pathname === '/my-work' ? 'font-semibold' : ''
                                    }`}
                                    style={{ 
                                        color: location.pathname === '/my-work' 
                                            ? theme.colors.accent.primary 
                                            : theme.colors.secondary.text 
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.color = theme.colors.accent.primary;
                                        e.currentTarget.style.textShadow = `
                                            0 0 5px ${theme.colors.accent.primary},
                                            0 0 10px ${theme.colors.accent.primary},
                                            0 0 15px ${theme.colors.accent.primary}
                                        `;
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.color = location.pathname === '/my-work' 
                                            ? theme.colors.accent.primary 
                                            : theme.colors.secondary.text;
                                        e.currentTarget.style.textShadow = 'none';
                                    }}
                                >
                                    My Work
                                </Link>
                            </li>
                            <li>
                                <a 
                                    href="/services" 
                                    className="transition-all duration-300 hover:opacity-80" 
                                    style={{ color: theme.colors.secondary.text }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.color = theme.colors.accent.primary;
                                        e.currentTarget.style.textShadow = `
                                            0 0 5px ${theme.colors.accent.primary},
                                            0 0 10px ${theme.colors.accent.primary},
                                            0 0 15px ${theme.colors.accent.primary}
                                        `;
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.color = theme.colors.secondary.text;
                                        e.currentTarget.style.textShadow = 'none';
                                    }}
                                >
                                    Services
                                </a>
                            </li>
                            <li>
                                <Link 
                                    to="/contact" 
                                    className={`transition-all duration-300 hover:opacity-80 ${
                                        location.pathname === '/contact' ? 'font-semibold' : ''
                                    }`}
                                    style={{ 
                                        color: location.pathname === '/contact' 
                                            ? theme.colors.accent.primary 
                                            : theme.colors.secondary.text 
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.color = theme.colors.accent.primary;
                                        e.currentTarget.style.textShadow = `
                                            0 0 5px ${theme.colors.accent.primary},
                                            0 0 10px ${theme.colors.accent.primary},
                                            0 0 15px ${theme.colors.accent.primary}
                                        `;
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.color = location.pathname === '/contact' 
                                            ? theme.colors.accent.primary 
                                            : theme.colors.secondary.text;
                                        e.currentTarget.style.textShadow = 'none';
                                    }}
                                >
                                    Contact
                                </Link>
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
                    style={{ backgroundColor: '#101411c1' }}
                    onClick={() => setMenuOpen(false)}
                >
                    <div 
                        className="rounded-lg p-8 w-80 max-w-[90vw] transition-colors duration-300"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex flex-col space-y-6 text-center">
                            <Link 
                                to="/" 
                                className="py-3 text-2xl transition-colors duration-200" 
                                style={{ color: "white" }}
                                onClick={() => setMenuOpen(false)}
                            >
                                Home
                            </Link>
                            <Link 
                                to="/my-work" 
                                className="py-3 text-2xl transition-colors duration-200" 
                                style={{ color: "white" }}
                                onClick={() => setMenuOpen(false)}
                            >
                                My Work
                            </Link>
                            <a 
                                href="/services" 
                                className="py-3 text-2xl transition-colors duration-200" 
                                style={{ color: "white" }}
                                onClick={() => setMenuOpen(false)}
                            >
                                Services
                            </a>
                            <Link
                                to="/contact" 
                                className="py-3 text-2xl transition-colors duration-200" 
                                style={{ color: "white" }}
                                onClick={() => setMenuOpen(false)}
                            >
                                Contact
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}