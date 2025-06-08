import { useState } from 'react';
import { Link } from 'wouter';

type GalleryImage = {
  id: number;
  src: string;
  alt: string;
  category: string;
};

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [imageErrors, setImageErrors] = useState<Set<number>>(new Set());

  // Test with different path formats
  const galleryImages: GalleryImage[] = [
    {
      id: 1,
      src: 'client/public/assets/gallery/family.jpg',
      alt: 'Placeholder test image',
      category: 'test'
    },
    {
      id: 2,
      src: './assets/gallery/img1.png',
      alt: 'Test img1 with relative path',
      category: 'welding'
    },
    {
      id: 3,
      src: '/assets/gallery/img1.png',
      alt: 'Test img1 with absolute path',
      category: 'welding'
    },
    {
      id: 4,
      src: 'assets/gallery/img1.png',
      alt: 'Test img1 without leading slash',
      category: 'welding'
    }
  ];

  const categories = ['all', ...new Set(galleryImages.map(img => img.category))];

  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const handleImageError = (imageId: number) => {
    setImageErrors(prev => new Set(prev).add(imageId));
    console.log(`Image ${imageId} failed to load`);
  };

  const handleImageLoad = (imageId: number) => {
    console.log(`Image ${imageId} loaded successfully`);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">Gallery Debug Test</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Testing different image path formats to find what works.
          </p>
        </div>

        <div className="flex justify-center mb-8 space-x-4 flex-wrap gap-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-md capitalize ${
                activeCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-white text-primary border border-primary hover:bg-primary hover:text-white'
              } transition duration-300`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map(image => (
            <div 
              key={image.id}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            >
              <div className="bg-yellow-100 p-2 text-xs text-gray-700 mb-2">
                Path: {image.src}
              </div>
              
              {imageErrors.has(image.id) ? (
                <div className="w-full h-64 bg-red-200 flex items-center justify-center">
                  <div className="text-center text-red-600">
                    <svg 
                      className="w-12 h-12 mx-auto mb-2" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" 
                      />
                    </svg>
                    <p className="text-sm font-bold">FAILED TO LOAD</p>
                    <p className="text-xs">{image.src}</p>
                  </div>
                </div>
              ) : (
                <img 
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-300"
                  loading="lazy"
                  onError={() => handleImageError(image.id)}
                  onLoad={() => handleImageLoad(image.id)}
                />
              )}
              
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <div className="text-white text-center px-4">
                  <h3 className="text-xl font-bold capitalize">{image.category}</h3>
                  <p className="text-sm mt-2">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 p-4 bg-blue-100 rounded-lg">
          <h3 className="font-bold mb-2">Debug Info:</h3>
          <p className="text-sm">Check the browser console for load/error messages.</p>
          <p className="text-sm">The first image should be a placeholder that works.</p>
          <p className="text-sm">Try different path formats to see which one loads your images.</p>
        </div>

        <div className="mt-12 text-center">
          <Link href="/contact">
            <button className="bg-accent-500 hover:bg-accent-600 text-white font-medium py-3 px-8 rounded-md transition duration-300 shadow-lg">
              Contact Us for More
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Gallery;