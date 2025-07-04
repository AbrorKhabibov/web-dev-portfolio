import nbbakeryImage from '../../../assets/nbbakery.png';
import stevenbeileslawImage from '../../../assets/stevenbeileslaw.png';

export interface Project {
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

export const projects: Project[] = [
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
