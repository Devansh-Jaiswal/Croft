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
    <div className="min-h-screen bg-brutal-bg pt-24 sm:pt-32 pb-16 sm:pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 sm:gap-6 mb-10 sm:mb-16">
          <div className="max-w-xl">
            <span className="brutal-tag-yellow mb-4 sm:mb-6 inline-block text-xs sm:text-sm">
              ✦ Blog
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black text-brutal-black tracking-tight">
              <span className="highlight-green">Insights</span>
            </h1>
          </div>

          {/* Category Filter - Horizontally scrollable */}
          <div className="w-full md:w-auto overflow-x-auto pb-2 md:pb-0 no-scrollbar">
            <div className="flex gap-1 sm:gap-2 p-1.5 sm:p-2 bg-white border-3 sm:border-4 border-brutal-black rounded-brutal shadow-brutal-sm sm:shadow-brutal min-w-max">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-bold transition-all capitalize border-2 border-brutal-black rounded-lg whitespace-nowrap ${selectedCategory === category
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
        </div>

        {/* Blog Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {filteredPosts.map((post, index) => (
              <article
                key={post.id}
                className="group border-3 sm:border-4 border-brutal-black rounded-brutal bg-white shadow-brutal-sm sm:shadow-brutal overflow-hidden hover:translate-x-1 hover:translate-y-1 hover:shadow-brutal-sm transition-all"
              >
                <Link to={`/blog/${post.id}`}>
                  <div className="relative aspect-[4/3] overflow-hidden border-b-3 sm:border-b-4 border-brutal-black">
                    <img
                      src={post.image}
                      alt={post.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-white border-2 sm:border-3 border-brutal-black rounded-full px-2 sm:px-3 py-0.5 sm:py-1 shadow-brutal-sm">
                      <span className="text-xs sm:text-sm font-black text-brutal-black">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                  </div>
                </Link>

                <div className="p-4 sm:p-6">
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <span className={`text-[10px] sm:text-xs font-bold uppercase tracking-wide px-2 sm:px-3 py-1 sm:py-1.5 rounded-full border-2 border-brutal-black ${categoryColors[post.category] || 'bg-neutral-200'}`}>
                      {post.category}
                    </span>
                    <span className="text-[10px] sm:text-xs font-bold text-neutral-500">
                      {post.readTime} min read
                    </span>
                  </div>

                  <Link to={`/blog/${post.id}`}>
                    <h3 className="text-base sm:text-xl font-black text-brutal-black mb-2 sm:mb-3 group-hover:text-neutral-600 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                  </Link>

                  <p className="text-sm sm:text-base text-neutral-600 font-medium mb-4 sm:mb-5 line-clamp-2">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center gap-2 sm:gap-4 text-xs sm:text-sm font-bold text-neutral-500 pt-3 sm:pt-4 border-t-3 sm:border-t-4 border-brutal-black">
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
          <div className="text-center py-8 sm:py-12 border-3 sm:border-4 border-brutal-black rounded-brutal bg-white shadow-brutal-sm sm:shadow-brutal">
            <p className="text-neutral-600 font-bold text-base sm:text-lg">No articles found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
