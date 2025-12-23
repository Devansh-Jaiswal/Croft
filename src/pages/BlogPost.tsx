import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../data/blog';

const categoryColors: Record<string, string> = {
  'development': 'bg-brutal-blue text-white',
  'marketing': 'bg-brutal-pink',
  'design': 'bg-brutal-yellow',
  'strategy': 'bg-brutal-green',
};

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen bg-brutal-bg pt-32 flex items-center justify-center">
        <div className="text-center">
          <div className="brutal-card-static p-12 max-w-md mx-auto">
            <h1 className="text-4xl font-black text-brutal-black mb-4">Post Not Found</h1>
            <p className="text-neutral-600 font-medium mb-8">The article you're looking for doesn't exist.</p>
            <Link
              to="/blog"
              className="brutal-button-primary inline-block"
            >
              ← Back to Blog
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-brutal-bg pt-32 pb-20">
      <article className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Back Link */}
        <Link
          to="/blog"
          className="inline-block bg-white border-3 border-brutal-black rounded-full px-4 py-2 font-bold text-sm text-brutal-black shadow-brutal-sm hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all mb-12"
        >
          ← Back to Blog
        </Link>

        {/* Header */}
        <header className="mb-12">
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className={`text-sm font-bold uppercase tracking-wide px-4 py-2 rounded-full border-3 border-brutal-black ${categoryColors[post.category] || 'bg-neutral-200'}`}>
              {post.category}
            </span>
            <span className="text-sm font-bold text-neutral-500">
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </span>
            <span className="text-sm font-bold text-neutral-500">
              {post.readTime} min read
            </span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-black text-brutal-black mb-8 leading-tight tracking-tight">
            {post.title}
          </h1>

          <div className="border-4 border-brutal-black rounded-brutal overflow-hidden shadow-brutal">
            <img
              src={post.image}
              alt={post.title}
              className="w-full aspect-[16/9] object-cover"
            />
          </div>
        </header>

        {/* Content */}
        <div className="brutal-card-static p-8 md:p-12 mb-12">
          {post.content.split('\n\n').map((paragraph, index) => (
            <p key={index} className="text-lg text-neutral-700 leading-relaxed mb-6 last:mb-0 font-medium">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Author */}
        <div className="border-4 border-brutal-black rounded-brutal bg-brutal-yellow shadow-brutal p-6 mb-16">
          <div className="flex items-center gap-4">
            <div className="border-3 border-brutal-black rounded-full overflow-hidden shadow-brutal-sm">
              <img
                src="https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=600&h=600"
                alt={post.author}
                className="w-16 h-16 object-cover"
              />
            </div>
            <div>
              <p className="font-black text-brutal-black text-lg">{post.author}</p>
              <p className="text-brutal-black font-medium">Digital Strategist at CROFT</p>
            </div>
          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="border-t-4 border-brutal-black pt-12">
            <h2 className="text-2xl font-black text-brutal-black mb-8">
              Related <span className="highlight-pink">Articles</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  to={`/blog/${relatedPost.id}`}
                  className="group border-4 border-brutal-black rounded-brutal bg-white shadow-brutal overflow-hidden hover:translate-x-1 hover:translate-y-1 hover:shadow-brutal-sm transition-all"
                >
                  <div className="aspect-[4/3] overflow-hidden border-b-4 border-brutal-black">
                    <img
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-black text-brutal-black group-hover:text-neutral-600 transition-colors line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-neutral-500 font-bold text-sm mt-2">{relatedPost.readTime} min read</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>
    </div>
  );
};

export default BlogPost;
