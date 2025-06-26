import React from 'react';
import profile_picture from '../assets/profile-picture.jpg'; 
import { useTheme } from '../contexts/ThemeContext';
import { AnimatedBackground } from './AnimatedBackground';

export const About: React.FC = () => {
  const { theme } = useTheme();

  return (
    <section className="py-20 relative" style={{ backgroundColor: theme.colors.primary.bg }}>
      <AnimatedBackground variant="grid" />
      
      <div className="container mx-auto px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4" style={{ color: theme.colors.primary.text }}>
            About Me
          </h2>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: theme.colors.neutral.text }}>
            Get to know the developer behind the code
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image Section */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                  <img 
                    src={profile_picture} 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative elements */}
                <div 
                  className="absolute -top-4 -right-4 w-20 h-20 rounded-full opacity-20 animate-pulse"
                  style={{ backgroundColor: theme.colors.accent.primary }}
                ></div>
                <div 
                  className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full opacity-20 animate-pulse delay-1000"
                  style={{ backgroundColor: theme.colors.accent.hover }}
                ></div>
              </div>
            </div>
            
            {/* Text Section */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: theme.colors.primary.text }}>
                  Hi, I'm <span style={{ color: theme.colors.accent.primary }}>Abror Khabibov</span>
                </h3>
                <p className="text-lg leading-relaxed" style={{ color: theme.colors.neutral.text }}>
                  A passionate full-stack developer with over 4 years of experience creating 
                  beautiful and functional web applications. I specialize in modern JavaScript 
                  frameworks and love turning complex problems into simple, elegant solutions.
                </p>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold mb-3" style={{ color: theme.colors.primary.text }}>
                  What I Do
                </h4>
                <p className="leading-relaxed" style={{ color: theme.colors.neutral.text }}>
                  I build responsive websites, develop custom web applications, and create 
                  seamless user experiences. From concept to deployment, I handle every 
                  aspect of web development with attention to detail and performance.
                </p>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold mb-3" style={{ color: theme.colors.primary.text }}>
                  My Skills
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <span 
                        className="w-2 h-2 rounded-full mr-3"
                        style={{ backgroundColor: theme.colors.accent.primary }}
                      ></span>
                      <span style={{ color: theme.colors.neutral.textSecondary }}>React & Next.js</span>
                    </div>
                    <div className="flex items-center">
                      <span 
                        className="w-2 h-2 rounded-full mr-3"
                        style={{ backgroundColor: theme.colors.accent.hover }}
                      ></span>
                      <span style={{ color: theme.colors.neutral.textSecondary }}>Node.js & Express</span>
                    </div>
                    <div className="flex items-center">
                      <span 
                        className="w-2 h-2 rounded-full mr-3"
                        style={{ backgroundColor: theme.colors.accent.primary }}
                      ></span>
                      <span style={{ color: theme.colors.neutral.textSecondary }}>TypeScript</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <span 
                        className="w-2 h-2 rounded-full mr-3"
                        style={{ backgroundColor: theme.colors.accent.hover }}
                      ></span>
                      <span style={{ color: theme.colors.neutral.textSecondary }}>MongoDB & SQL</span>
                    </div>
                    <div className="flex items-center">
                      <span 
                        className="w-2 h-2 rounded-full mr-3"
                        style={{ backgroundColor: theme.colors.accent.primary }}
                      ></span>
                      <span style={{ color: theme.colors.neutral.textSecondary }}>WordPress</span>
                    </div>
                    <div className="flex items-center">
                      <span 
                        className="w-2 h-2 rounded-full mr-3"
                        style={{ backgroundColor: theme.colors.accent.hover }}
                      ></span>
                      <span style={{ color: theme.colors.neutral.textSecondary }}>Hosting</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <button 
                  className="px-6 py-3 rounded-lg transition-colors duration-300 flex items-center"
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
                  <span className="mr-2">💬</span>
                  Let's Talk
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};