import { Portfolio } from '../types';

export const portfolioItems: Portfolio[] = [
  {
    id: '1',
    title: 'TechStartup Platform',
    client: 'TechStartup Inc.',
    category: 'web-development',
    description: 'Modern SaaS platform for project management',
    fullDescription: 'A comprehensive project management platform built with React and Node.js. Features real-time collaboration, advanced analytics, and seamless integrations with popular tools. The platform serves over 5,000 active users across multiple industries.',
    image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=600',
    gallery: [
      'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/3962285/pexels-photo-3962285.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    tags: ['React', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
    results: '250% increase in user engagement, 40% reduction in onboarding time',
    link: 'https://example.com'
  },
  {
    id: '2',
    title: 'EcoMart Social Campaign',
    client: 'EcoMart',
    category: 'social-media',
    description: 'Viral social media marketing campaign',
    fullDescription: 'A multi-platform social media campaign promoting sustainable products. Campaign included influencer partnerships, user-generated content initiatives, and targeted paid advertising across Instagram, TikTok, and Twitter.',
    image: 'https://images.pexels.com/photos/3387853/pexels-photo-3387853.jpeg?auto=compress&cs=tinysrgb&w=600',
    gallery: [
      'https://images.pexels.com/photos/3387853/pexels-photo-3387853.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/3808517/pexels-photo-3808517.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    tags: ['Instagram', 'TikTok', 'Content Strategy', 'Influencer Marketing'],
    results: '2.5M impressions, 15% conversion rate, 300K new followers',
    link: 'https://example.com'
  },
  {
    id: '3',
    title: 'GourmetBites Rebrand',
    client: 'GourmetBites',
    category: 'branding',
    description: 'Complete brand identity redesign',
    fullDescription: 'Full brand identity overhaul for a premium food delivery service. Includes new logo, color palette, typography system, and comprehensive brand guidelines for consistent application across all touchpoints.',
    image: 'https://images.pexels.com/photos/3407652/pexels-photo-3407652.jpeg?auto=compress&cs=tinysrgb&w=600',
    gallery: [
      'https://images.pexels.com/photos/3407652/pexels-photo-3407652.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/3534215/pexels-photo-3534215.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    tags: ['Logo Design', 'Brand Guidelines', 'Visual Identity'],
    results: 'Brand recognition up 85%, improved customer loyalty by 60%',
    link: 'https://example.com'
  },
  {
    id: '4',
    title: 'FinanceFlow Dashboard',
    client: 'FinanceFlow',
    category: 'web-development',
    description: 'Sophisticated financial analytics dashboard',
    fullDescription: 'A real-time financial analytics dashboard for investment tracking. Features advanced charting, portfolio analysis, and risk management tools. Built with TypeScript, React, and D3.js for powerful data visualization.',
    image: 'https://images.pexels.com/photos/3965619/pexels-photo-3965619.jpeg?auto=compress&cs=tinysrgb&w=600',
    gallery: [
      'https://images.pexels.com/photos/3965619/pexels-photo-3965619.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/3957984/pexels-photo-3957984.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    tags: ['React', 'D3.js', 'TypeScript', 'Financial Data'],
    results: '99.9% uptime, processes 1M+ transactions daily, trusted by 50+ institutions',
    link: 'https://example.com'
  },
  {
    id: '5',
    title: 'WellnessHub Growth',
    client: 'WellnessHub',
    category: 'social-media',
    description: 'Fitness brand social media growth strategy',
    fullDescription: 'Comprehensive social media strategy for a fitness brand. Implemented content calendar, community engagement tactics, and paid campaigns across multiple platforms resulting in exponential growth.',
    image: 'https://images.pexels.com/photos/3846017/pexels-photo-3846017.jpeg?auto=compress&cs=tinysrgb&w=600',
    gallery: [
      'https://images.pexels.com/photos/3846017/pexels-photo-3846017.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    tags: ['Instagram', 'Facebook', 'Content Creation', 'Community Management'],
    results: '500K followers, 8% engagement rate, 200+ brand partnerships',
    link: 'https://example.com'
  },
  {
    id: '6',
    title: 'StyleHub E-Commerce',
    client: 'StyleHub',
    category: 'web-development',
    description: 'Premium e-commerce platform',
    fullDescription: 'Full-featured e-commerce platform for a fashion retailer. Includes product catalog, secure payment processing, inventory management, and personalized recommendations powered by machine learning.',
    image: 'https://images.pexels.com/photos/3962285/pexels-photo-3962285.jpeg?auto=compress&cs=tinysrgb&w=600',
    gallery: [
      'https://images.pexels.com/photos/3962285/pexels-photo-3962285.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/3789136/pexels-photo-3789136.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    tags: ['React', 'Node.js', 'Stripe', 'ML Recommendations'],
    results: 'AOV increased 45%, conversion rate 3.8%, customer lifetime value 2x',
    link: 'https://example.com'
  }
];
