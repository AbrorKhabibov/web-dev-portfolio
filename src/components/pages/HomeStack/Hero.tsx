import { Link } from 'react-router-dom';
import laptop_phone from '../../../assets/laptop-phone.png';
import { useTheme } from '../../../contexts/ThemeContext';
import { AnimatedBackground } from '../../reusables/AnimatedBackground';

export const Hero = () => {
    const { theme } = useTheme();
    
    return (
        <section 
            className="min-h-screen flex items-center justify-center pt-44 md:pt-20 transition-colors duration-300 relative"
            style={{ backgroundColor: theme.colors.primary.bg }}
        >
            <AnimatedBackground variant="geometric" />
            
            <div className="container mx-auto px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                    {/* Left side - Text content */}
                    <div className="flex-1 text-left">
                        <h1 
                            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
                            style={{ color: theme.colors.primary.text }}
                        >
                            Helping <span style={{ color: theme.colors.accent.primary }}>Your Businesses</span> Thrive Online
                        </h1>
                        <h3 
                            className="text-4xl md:text-xl lg:text-2xl mb-8"
                            style={{ color: theme.colors.neutral.textSecondary }}
                        >
                            Custom Websites. Clean Design. Real Results.
                        </h3>
                        <p 
                            className="text-lg mb-8"
                            style={{ color: theme.colors.neutral.text }}
                        >
                            Full Stack Developer specializing in building fast, 
                            mobile-friendly websites that turn visitors into customers. 
                            Whether you're launching or leveling up, 
                            I'll build a site that works hard for your business.
                        </p>
                            <Link to="/my-work">
                            <button 
                                className="px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300"
                                style={{ 
                                    backgroundColor: theme.colors.button.primary.bg,
                                    color: theme.colors.button.primary.text 
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = theme.colors.button.primary.hover;
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = theme.colors.button.primary.bg;
                                }}
                            >
                                View My Work
                            </button>
                            </Link>
                    </div>

                    {/* Right side - Image */}
                    <div className="flex-1 flex justify-center">
                        <img 
                            src={laptop_phone} 
                            alt="Laptop and Phone" 
                            className="w-300 h-auto object-contain relative z-10"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};