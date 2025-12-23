import { useState } from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blog';

const categoryColors: Record<string, string> = {
  'development': 'bg-brutal-blue text-white',
  'marketing': 'bg-brutal-pink',
  'design': 'bg-brutal-yellow',
  'strategy': 'bg-brutal-green',
  'all': 'bg-brutal-black text-white'
};

const Blog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', ...new Set(blogPosts.map(post => post.category))];

  const filteredPosts = selectedCategory === 'all'
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-brutal-bg pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <span className="brutal-tag-yellow mb-6 inline-block">
              ✦ Blog
            </span>
            <h1 className="text-5xl lg:text-7xl font-black text-brutal-black tracking-tight">
              <span className="highlight-green">Insights</span>
            </h1>
          </div>

          {/* Category Filter */}
          <div className="flex gap-2 p-2 bg-white border-4 border-brutal-black rounded-brutal shadow-brutal">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 text-sm font-bold transition-all capitalize border-2 border-brutal-black rounded-lg ${selectedCategory === category
                    ? categoryColors[category] || 'bg-brutal-black text-white'
                    : 'bg-white text-brutal-black hover:bg-neutral-100'
                  }`}
                aria-pressed={selectedCategory === category}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <article
                key={post.id}
                className="group border-4 border-brutal-black rounded-brutal bg-white shadow-brutal overflow-hidden hover:translate-x-1 hover:translate-y-1 hover:shadow-brutal-sm transition-all"
              >
                <Link to={`/blog/${post.id}`}>
                  <div className="relative aspect-[4/3] overflow-hidden border-b-4 border-brutal-black">
                    <img
                      src={post.image}
                      alt={post.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-white border-3 border-brutal-black rounded-full px-3 py-1 shadow-brutal-sm">
                      <span className="text-sm font-black text-brutal-black">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                  </div>
                </Link>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-xs font-bold uppercase tracking-wide px-3 py-1.5 rounded-full border-2 border-brutal-black ${categoryColors[post.category] || 'bg-neutral-200'}`}>
                      {post.category}
                    </span>
                    <span className="text-xs font-bold text-neutral-500">
                      {post.readTime} min read
                    </span>
                  </div>

                  <Link to={`/blog/${post.id}`}>
                    <h3 className="text-xl font-black text-brutal-black mb-3 group-hover:text-neutral-600 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                  </Link>

                  <p className="text-neutral-600 font-medium mb-5 line-clamp-2">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center gap-4 text-sm font-bold text-neutral-500 pt-4 border-t-4 border-brutal-black">
                    <span>{post.author}</span>
                    <span>·</span>
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                      })}
                    </time>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 border-4 border-brutal-black rounded-brutal bg-white shadow-brutal">
            <p className="text-neutral-600 font-bold text-lg">No articles found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
