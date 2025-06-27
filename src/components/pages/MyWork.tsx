import React, { useState } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { AnimatedBackground } from '../AnimatedBackground';
import nbbakeryImage from '../../assets/nbbakery.png';
import stevenbeileslawImage from '../../assets/stevenbeileslaw.png';
import { Footer } from '../Footer';
import WaveSeparator from '../WaveSeparator';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  url: string;
  category: string;
  client: string;
  image: string;
  testimonial?: {
    message: string;
    author: string;
    position: string;
  };
  features: string[];
}

export const MyWork: React.FC = () => {
  const { theme } = useTheme();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "NB Bakery",
      description: "Modern e-commerce website for family bakery business",
      longDescription: "Built a comprehensive e-commerce platform for NB Bakery, featuring online ordering, product catalog, custom cake ordering system, and customer management. The site showcases their delicious baked goods and allows customers to place orders for pickup or delivery.",
      technologies: ["WordPress", "WooCommerce", "CSS3", "Square", "GoDaddy Hosting"],
      url: "https://www.nbbakery.ca/",
      category: "E-commerce",
      client: "NB Bakery",
      image: nbbakeryImage,
      testimonial: {
        message: "Abror transformed our small bakery into a professional online presence. The website perfectly captures our brand and has significantly increased our online orders. The samosa online ordering system is exactly what we needed!",
        author: "Nodira & Bakhodir Khabibov",
        position: "Owners, NB Bakery"
      },
      features: [
        "Custom cake ordering system",
        "Product catalog with categories",
        "Online payment processing",
        "Mobile-responsive design",
        "SEO optimization",
        "Content management system"
      ]
    },
    {
      id: 2,
      title: "Steven Beiles Law",
      description: "Professional law firm website with client portal",
      longDescription: "Managed and maintained a sophisticated website for Steven Beiles Law, a prominent law firm. The site features professional design, case studies, attorney profiles, and a secure client portal for document sharing and case updates.",
      technologies: ["WordPress", "PHP", "MySQL", "JavaScript", "CSS3", "SSL Security"],
      url: "https://www.stevenbeileslaw.com/",
      category: "Legal Services",
      client: "Steven Beiles Law",
      image: stevenbeileslawImage,
      testimonial: {
        message: "Abror has been exceptional in maintaining our law firm's website. His attention to detail, quick response times, and technical expertise have kept our site running smoothly and looking professional. Highly recommended!",
        author: "Steven Beiles",
        position: "Principal Lawyer, Steven Beiles Law"
      },
      features: [
        "Professional law firm design",
        "Attorney profiles and bios",
        "Practice area descriptions",
        "Contact forms and consultation booking",
        "Regular maintenance and updates",
        "Security monitoring and backup"
      ]
    }
  ];

  return (
    <>
    <div className="min-h-screen" style={{ backgroundColor: theme.colors.primary.bg }}>
      <AnimatedBackground variant="waves" />
      
      {/* Header Section */}
      <section className="pt-60 pb-20 relative">
        <div className="container mx-auto px-8 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ color: theme.colors.primary.text }}>
              My Work
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto" style={{ color: theme.colors.neutral.textSecondary }}>
              Real projects, real results. See how I've helped businesses establish their online presence.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-8 relative z-10">
          <div className="max-w-6xl mx-auto space-y-20">
            {projects.map((project, index) => (
              <div key={project.id} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}>
                {/* Project Image/Preview */}
                <div className="flex-1">
                  <div 
                    className="relative rounded-2xl overflow-hidden shadow-2xl group cursor-pointer transform hover:scale-105 transition-all duration-500"
                    onClick={() => setSelectedProject(project)}
                  >
                    {/* Website Preview Frame */}
                    <div className="bg-gray-800 p-4 rounded-t-2xl">
                      <div className="flex space-x-2 mb-4">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                      <div 
                        className="text-sm px-4 py-2 rounded"
                        style={{ backgroundColor: theme.colors.secondary.bg, color: theme.colors.neutral.text }}
                      >
                        {project.url}
                      </div>
                    </div>
                    
                    {/* Preview Content with Real Image */}
                    <div 
                      className="h-80 relative overflow-hidden"
                      style={{ backgroundColor: theme.colors.secondary.bg }}
                    >
                      <img 
                        src={project.image} 
                        alt={`${project.title} website screenshot`}
                        className="w-full h-full object-cover"
                      />
                      
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-[#101411c1] bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="text-white text-center">
                          <div className="text-lg font-semibold mb-2">View Project Details</div>
                          <div className="text-sm">Click to learn more</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="flex-1 space-y-6">
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <span 
                        className="px-4 py-2 rounded-full text-sm font-medium"
                        style={{ 
                          backgroundColor: theme.colors.accent.primary + '20',
                          color: theme.colors.accent.primary 
                        }}
                      >
                        {project.category}
                      </span>
                      <span style={{ color: theme.colors.neutral.text }}>
                        for {project.client}
                      </span>
                    </div>
                    
                    <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: theme.colors.primary.text }}>
                      {project.title}
                    </h2>
                    
                    <p className="text-lg mb-6" style={{ color: theme.colors.neutral.textSecondary }}>
                      {project.longDescription}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-lg font-semibold mb-3" style={{ color: theme.colors.secondary.text }}>
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 rounded-full text-sm font-medium"
                          style={{
                            backgroundColor: theme.colors.secondary.bg,
                            color: theme.colors.secondary.text,
                            border: `1px solid ${theme.colors.neutral.border}`
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-8 py-3 rounded-lg font-semibold text-center transition-all duration-300 transform hover:scale-105"
                      style={{
                        backgroundColor: theme.colors.accent.primary,
                        color: theme.colors.button.primary.text
                      }}
                    >
                      Visit Website
                    </a>
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="px-8 py-3 rounded-lg font-semibold text-center transition-all duration-300 border-2 hover:transform hover:scale-105"
                      style={{
                        borderColor: theme.colors.accent.primary,
                        color: theme.colors.accent.primary,
                        backgroundColor: 'transparent'
                      }}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: theme.colors.primary.text }}>
              Client Testimonials
            </h2>
            <p className="text-lg" style={{ color: theme.colors.neutral.text }}>
              What my clients say about working with me
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {projects.map((project) => 
              project.testimonial && (
                <div
                  key={project.id}
                  className="p-8 rounded-2xl shadow-lg"
                  style={{ backgroundColor: theme.colors.secondary.bg }}
                >
                  <div className="mb-6">
                    <div className="text-4xl mb-4" style={{ color: theme.colors.accent.primary }}>
                      "
                    </div>
                    <p className="text-lg italic mb-6" style={{ color: theme.colors.secondary.text }}>
                      {project.testimonial.message}
                    </p>
                  </div>
                  <div className="border-t pt-6" style={{ borderColor: theme.colors.neutral.border }}>
                    <div className="font-semibold" style={{ color: theme.colors.secondary.text }}>
                      {project.testimonial.author}
                    </div>
                    <div style={{ color: theme.colors.neutral.text }}>
                      {project.testimonial.position}
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="max-w-4xl w-full rounded-2xl p-8 max-h-[90vh] overflow-y-auto"
            style={{ backgroundColor: theme.colors.secondary.bg }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-8">
              <div>
                <h3 className="text-3xl font-bold mb-2" style={{ color: theme.colors.secondary.text }}>
                  {selectedProject.title}
                </h3>
                <p style={{ color: theme.colors.neutral.text }}>
                  {selectedProject.category} project for {selectedProject.client}
                </p>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-3xl p-2 rounded-full hover:bg-opacity-20 transition-colors"
                style={{ color: theme.colors.neutral.text }}
              >
                ×
              </button>
            </div>

            {/* Project Image in Modal */}
            <div className="mb-8">
              <img 
                src={selectedProject.image} 
                alt={`${selectedProject.title} website screenshot`}
                className="w-full h-64 object-cover rounded-xl"
              />
            </div>

            <div className="space-y-8">
              <div>
                <h4 className="text-xl font-semibold mb-4" style={{ color: theme.colors.secondary.text }}>
                  Project Overview
                </h4>
                <p className="text-lg" style={{ color: theme.colors.neutral.textSecondary }}>
                  {selectedProject.longDescription}
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold mb-4" style={{ color: theme.colors.secondary.text }}>
                  Key Features
                </h4>
                <div className="grid md:grid-cols-2 gap-3">
                  {selectedProject.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div 
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: theme.colors.accent.primary }}
                      ></div>
                      <span style={{ color: theme.colors.secondary.text }}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xl font-semibold mb-4" style={{ color: theme.colors.secondary.text }}>
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-3">
                  {selectedProject.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 rounded-full text-sm font-medium"
                      style={{
                        backgroundColor: theme.colors.accent.primary + '20',
                        color: theme.colors.accent.primary
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t" style={{ borderColor: theme.colors.neutral.border }}>
                <a
                  href={selectedProject.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                  style={{
                    backgroundColor: theme.colors.accent.primary,
                    color: theme.colors.button.primary.text
                  }}
                >
                  Visit Live Website
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
    <WaveSeparator topColor="var(--color-primary-bg)" botColor="var(--color-secondary-bg)" />
    <Footer />
    </>
  );
};