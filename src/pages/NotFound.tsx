import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-brutal-bg flex items-center justify-center pt-20">
      <div className="max-w-lg text-center px-6">
        <div className="brutal-card-static p-12">
          {/* Big 404 */}
          <div className="mb-8">
            <span className="text-8xl font-black text-brutal-black">4</span>
            <span className="inline-block w-20 h-20 bg-brutal-pink border-4 border-brutal-black rounded-full mx-2 align-middle"></span>
            <span className="text-8xl font-black text-brutal-black">4</span>
          </div>

          <span className="brutal-tag-pink mb-6 inline-block">
            ✦ Error
          </span>

          <h1 className="text-3xl lg:text-4xl font-black text-brutal-black mb-4 tracking-tight">
            Page not found
          </h1>

          <p className="text-neutral-600 font-medium mb-8 text-lg">
            The page you're looking for doesn't exist or has been moved.
          </p>

          <Link
            to="/"
            className="brutal-button-primary inline-block"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
