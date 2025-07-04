export interface Service {
  id: number;
  title: string;
  description: string;
  detailedDescription: string;
  icon: string;
  features: string[];
  technologies: string[];
  pricing: {
    startingPrice: string;
    priceNote: string;
  };
  deliveryTime: string;
  category: string;
}

export interface ServicePackage {
  id: number;
  name: string;
  description: string;
  price: string;
  features: string[];
  popular?: boolean;
  category: string;
}

export const services: Service[] = [
  {
    id: 1,
    title: "Website Development",
    description: "Custom websites built with modern technologies, responsive design, and optimized performance.",
    detailedDescription: "I create stunning, responsive websites tailored to your business needs. From simple landing pages to complex web applications, I ensure your online presence stands out with modern design, fast loading times, and seamless user experience across all devices.",
    icon: "🌐",
    features: [
      "Responsive design for all devices",
      "Modern UI/UX design",
      "Fast loading performance",
      "SEO optimization",
      "Content management system",
      "Cross-browser compatibility",
      "Mobile-first approach",
      "Accessibility standards"
    ],
    technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Node.js", "HTML5", "CSS3"],
    pricing: {
      startingPrice: "$800",
      priceNote: "Starting price for basic websites, custom quotes for complex projects"
    },
    deliveryTime: "2-4 weeks",
    category: "Development"
  },
  {
    id: 2,
    title: "E-commerce Solutions",
    description: "Complete online stores with payment processing, inventory management, and customer analytics.",
    detailedDescription: "Transform your business with a professional e-commerce platform. I build secure, scalable online stores that drive sales and provide excellent customer experience. From product catalogs to payment processing and order management.",
    icon: "🛒",
    features: [
      "Product catalog management",
      "Secure payment processing",
      "Inventory tracking",
      "Customer accounts",
      "Order management",
      "Analytics and reporting",
      "Mobile commerce",
      "Multi-payment options"
    ],
    technologies: ["WooCommerce", "Shopify", "Stripe", "PayPal", "Square", "WordPress", "React"],
    pricing: {
      startingPrice: "$1,500",
      priceNote: "Includes basic e-commerce features, advanced features quoted separately"
    },
    deliveryTime: "3-6 weeks",
    category: "E-commerce"
  },
  {
    id: 3,
    title: "Website Maintenance",
    description: "Ongoing support, updates, security monitoring, and performance optimization for your website.",
    detailedDescription: "Keep your website running smoothly with my comprehensive maintenance services. I handle everything from security updates and backups to performance optimization and content updates, so you can focus on your business.",
    icon: "🔧",
    features: [
      "Regular security updates",
      "Performance monitoring",
      "Content updates",
      "Backup management",
      "Bug fixes and troubleshooting",
      "Analytics reporting",
      "SEO monitoring",
      "24/7 support"
    ],
    technologies: ["WordPress", "PHP", "MySQL", "Google Analytics", "SSL", "CDN", "Monitoring Tools"],
    pricing: {
      startingPrice: "$100/month",
      priceNote: "Monthly maintenance plans available, custom packages for enterprise"
    },
    deliveryTime: "Ongoing",
    category: "Maintenance"
  },
  {
    id: 4,
    title: "SEO Optimization",
    description: "Improve your website's search engine visibility and drive more organic traffic.",
    detailedDescription: "Boost your online visibility with comprehensive SEO services. I optimize your website's structure, content, and performance to rank higher in search results and attract more qualified visitors to your business.",
    icon: "📈",
    features: [
      "Keyword research and strategy",
      "On-page optimization",
      "Technical SEO audit",
      "Content optimization",
      "Local SEO setup",
      "Google My Business optimization",
      "Performance tracking",
      "Monthly reporting"
    ],
    technologies: ["Google Analytics", "Google Search Console", "SEMrush", "Ahrefs", "Schema Markup"],
    pricing: {
      startingPrice: "$300/month",
      priceNote: "Monthly SEO packages, one-time audits also available"
    },
    deliveryTime: "3-6 months for results",
    category: "Marketing"
  },
  {
    id: 5,
    title: "Web Application Development",
    description: "Custom web applications with advanced functionality and database integration.",
    detailedDescription: "Build powerful web applications that solve your specific business challenges. From customer portals to internal tools, I create scalable applications with modern technologies and intuitive user interfaces.",
    icon: "⚡",
    features: [
      "Custom functionality",
      "Database integration",
      "User authentication",
      "API development",
      "Third-party integrations",
      "Admin dashboards",
      "Real-time features",
      "Scalable architecture"
    ],
    technologies: ["React", "Node.js", "TypeScript", "PostgreSQL", "MongoDB", "Express", "Socket.io"],
    pricing: {
      startingPrice: "$2,000",
      priceNote: "Custom applications quoted based on complexity and features"
    },
    deliveryTime: "4-8 weeks",
    category: "Development"
  },
  {
    id: 6,
    title: "Website Redesign",
    description: "Transform your existing website with modern design and improved user experience.",
    detailedDescription: "Give your website a fresh new look and improved functionality. I redesign existing websites to be more modern, user-friendly, and aligned with your brand while preserving your existing content and SEO rankings.",
    icon: "🎨",
    features: [
      "Modern design upgrade",
      "Improved user experience",
      "Mobile responsiveness",
      "Performance optimization",
      "Brand consistency",
      "Content migration",
      "SEO preservation",
      "Training and support"
    ],
    technologies: ["Figma", "Adobe XD", "React", "CSS3", "WordPress", "Gatsby", "Next.js"],
    pricing: {
      startingPrice: "$1,200",
      priceNote: "Redesign pricing based on current site complexity and new requirements"
    },
    deliveryTime: "3-5 weeks",
    category: "Design"
  }
];

export const servicePackages: ServicePackage[] = [
  {
    id: 1,
    name: "Starter Package",
    description: "Perfect for small businesses and startups",
    price: "$800",
    features: [
      "5-page responsive website",
      "Basic SEO optimization",
      "Contact form integration",
      "Mobile-friendly design",
      "1 month free maintenance",
      "Basic analytics setup"
    ],
    category: "Website"
  },
  {
    id: 2,
    name: "Business Package",
    description: "Ideal for growing businesses",
    price: "$1,500",
    features: [
      "10-page responsive website",
      "Advanced SEO optimization",
      "Content management system",
      "E-commerce functionality",
      "Social media integration",
      "3 months free maintenance",
      "Analytics and reporting",
      "Training included"
    ],
    popular: true,
    category: "Business"
  },
  {
    id: 3,
    name: "Enterprise Package",
    description: "For large businesses and organizations",
    price: "$3,000+",
    features: [
      "Unlimited pages",
      "Custom web application",
      "Advanced e-commerce features",
      "Third-party integrations",
      "Advanced security features",
      "6 months free maintenance",
      "Priority support",
      "Custom training program",
      "Performance optimization"
    ],
    category: "Enterprise"
  }
];
