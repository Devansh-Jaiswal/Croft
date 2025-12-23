export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface Portfolio {
  id: string;
  title: string;
  client: string;
  category: 'web-development' | 'social-media' | 'branding';
  description: string;
  fullDescription: string;
  image: string;
  gallery: string[];
  tags: string[];
  results: string;
  link?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  role: string;
  image: string;
  quote: string;
  rating: number;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  image: string;
  readTime: number;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}
