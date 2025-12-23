import { BlogPost } from '../types';

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Future of Web Development in 2025',
    excerpt: 'Explore emerging trends and technologies shaping the web development landscape this year.',
    content: `Web development continues to evolve at a rapid pace. In 2025, we're seeing several key trends emerge that will shape how developers build applications.

First, AI integration has become mainstream. Tools like GitHub Copilot and Claude are now essential in most development workflows, helping developers write code faster and more efficiently.

Second, performance optimization remains critical. With Core Web Vitals becoming more important for SEO, developers must focus on fast load times, responsive interactions, and visual stability.

Third, the rise of edge computing is changing how we deploy applications. Services like Vercel Edge Functions and Cloudflare Workers allow developers to run code closer to users, reducing latency and improving performance.

Fourth, TypeScript adoption continues to grow. More developers recognize the value of type safety in large codebases, preventing bugs before they reach production.

Finally, the emphasis on accessibility and inclusive design is stronger than ever. Building accessible applications isn't just about compliance—it's about reaching a wider audience and providing better user experiences.

These trends represent an exciting time in web development. Staying updated with these changes will help you build better applications.`,
    author: 'John Smith',
    date: '2025-01-15',
    category: 'Web Development',
    image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=600',
    readTime: 5
  },
  {
    id: '2',
    title: 'Social Media Marketing Strategies That Actually Work',
    excerpt: 'Data-driven strategies to maximize your social media ROI and build authentic audience connections.',
    content: `Social media marketing has evolved significantly. It's no longer just about posting content—it's about building relationships and providing value.

Authenticity is key. Audiences can detect and dismiss inauthentic content immediately. Share genuine stories about your brand, your team, and your customers.

Engagement matters more than followers. A smaller audience that actively engages with your content is more valuable than a large, passive following. Respond to comments, ask questions, and create conversations.

Consistency is crucial. Posting regularly keeps your brand top-of-mind. Develop a content calendar and stick to it. Quality should always come first, but consistency ensures visibility.

Data-driven decisions beat gut feelings. Analyze your analytics, understand what resonates with your audience, and double down on what works.

Collaborate with influencers strategically. Partner with creators whose values align with your brand and whose audience matches your target market.

Invest in video content. Video has the highest engagement rates across platforms. Whether it's short-form TikTok videos or longer YouTube content, video is king.

Finally, remember that social media is about being social. Be present, responsive, and human. Build community, not just a following.`,
    author: 'Emma Davis',
    date: '2025-01-10',
    category: 'Marketing',
    image: 'https://images.pexels.com/photos/3387853/pexels-photo-3387853.jpeg?auto=compress&cs=tinysrgb&w=600',
    readTime: 7
  },
  {
    id: '3',
    title: 'Building Accessible Websites: Best Practices Guide',
    excerpt: 'Learn how to create inclusive web experiences that work for everyone, regardless of abilities.',
    content: `Accessibility is not an afterthought—it's a fundamental requirement for modern web development. Creating accessible websites benefits everyone.

Start with semantic HTML. Use proper heading hierarchy (h1, h2, h3), semantic elements like nav, main, and article. This provides structure that screen readers and assistive technologies can understand.

Ensure sufficient color contrast. Text should have a contrast ratio of at least 4.5:1 for normal text and 3:1 for large text. Use tools like WebAIM to check your contrast ratios.

Keyboard navigation is essential. All interactive elements should be accessible via keyboard. Test your site by navigating with Tab, Shift+Tab, and Enter.

Add alt text to images. Describe images clearly and concisely. Good alt text tells users what they're missing visually.

Provide captions and transcripts for video and audio content. This helps deaf and hard-of-hearing users, and it also benefits users in loud environments.

Test with real users. Involve people with disabilities in your testing process. They'll identify issues you might miss.

Use ARIA labels and roles appropriately. ARIA can enhance accessibility, but it's not a substitute for semantic HTML.

Remember, accessibility is not a feature—it's a requirement. Building accessible websites expands your reach and makes the web better for everyone.`,
    author: 'Michael Johnson',
    date: '2025-01-05',
    category: 'Accessibility',
    image: 'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=600',
    readTime: 6
  }
];
