import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  price: string;
  icon: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, features, price, icon }) => {
  const { theme } = useTheme();
  
  return (
    <div 
      className="rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 flex flex-col h-full" 
      style={{ backgroundColor: theme.colors.primary.bg }}
    >
      <div className="text-center mb-4">
        <div className="text-4xl mb-2">{icon}</div>
        <h3 className="text-xl font-bold" style={{ color: theme.colors.primary.text }}>
          {title}
        </h3>
        <p className="mt-2" style={{ color: theme.colors.neutral.text }}>
          {description}
        </p>
      </div>
      
      <ul className="space-y-2 mb-6 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center" style={{ color: theme.colors.neutral.textSecondary }}>
            <span className="mr-2" style={{ color: theme.colors.accent.primary }}>✓</span>
            {feature}
          </li>
        ))}
      </ul>
      
      <div className="text-center mt-auto">
        <div 
          className="text-2xl font-bold mb-4"
          style={{ color: theme.colors.accent.primary }}
        >
          {price}
        </div>
        <button 
          className="w-full py-2 px-4 rounded-lg transition-colors duration-300"
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
          Get Started
        </button>
      </div>
    </div>
  );
};

export const Services: React.FC = () => {
  const { theme } = useTheme();
  
  const services = [
    {
      title: "Simple",
      description: "Perfect for small businesses and personal websites",
      features: [
        "WordPress template setup",
        "Basic customization",
        "Mobile responsive",
        "SEO optimization",
        "1 month support"
      ],
      price: "$399",
      icon: "🌱"
    },
    {
      title: "Medium",
      description: "Custom coded solutions with unique design",
      features: [
        "Custom design & development",
        "React/Next.js development",
        "Database integration",
        "Advanced animations",
        "3 months support",
        "Performance optimization"
      ],
      price: "$899",
      icon: "🚀"
    },
    {
      title: "Advanced",
      description: "Enterprise-level applications with complex features",
      features: [
        "Full-stack development",
        "Microservices architecture",
        "Cloud deployment",
        "Advanced security",
        "6 months support",
        "Scalable infrastructure",
        "API development"
      ],
      price: "$2499",
      icon: "⚡"
    }
  ];

  return (
    <section className="py-20" style={{ backgroundColor: theme.colors.secondary.bg }}>
      <div className="container mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4" style={{ color: theme.colors.secondary.text }}>
            Our Services
          </h2>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: theme.colors.neutral.text }}>
            Choose the perfect package that your business needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              features={service.features}
              price={service.price}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};