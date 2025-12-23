import React, { useEffect } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  size = 'md'
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const sizeStyles = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-3xl'
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="presentation"
    >
      {/* Overlay - solid dark, no blur */}
      <div
        className="absolute inset-0 bg-brutal-black/80 transition-opacity duration-300 animate-fade-in"
        onClick={onClose}
      />

      {/* Modal Content - Neubrutalist style */}
      <div
        className={`${sizeStyles[size]} relative w-full bg-white border-4 border-brutal-black rounded-brutal shadow-brutal-lg overflow-hidden animate-slide-up`}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="sticky top-0 bg-brutal-yellow border-b-4 border-brutal-black px-6 py-4 flex items-center justify-between z-10">
          {title && (
            <h2 className="text-xl font-black text-brutal-black tracking-tight">
              {title}
            </h2>
          )}
          <button
            onClick={onClose}
            className="p-2 bg-white border-3 border-brutal-black rounded-full shadow-brutal-sm hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all ml-auto"
            aria-label="Close modal"
          >
            <div className="w-5 h-5 relative flex items-center justify-center">
              <span className="block w-4 h-1 bg-brutal-black rotate-45 absolute rounded-full" />
              <span className="block w-4 h-1 bg-brutal-black -rotate-45 absolute rounded-full" />
            </div>
          </button>
        </div>

        {/* Body */}
        <div className="p-6 max-h-[80vh] overflow-y-auto bg-white">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
