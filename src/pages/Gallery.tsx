import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const galleryImages = [
  { id: 1, src: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600', alt: 'Classroom learning', category: 'Campus' },
  { id: 2, src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600', alt: 'Students studying', category: 'Activities' },
  { id: 3, src: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600', alt: 'School library', category: 'Campus' },
  { id: 4, src: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=600', alt: 'Science lab', category: 'Campus' },
  { id: 5, src: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=600', alt: 'Sports activities', category: 'Events' },
  { id: 6, src: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600', alt: 'Art class', category: 'Activities' },
  { id: 7, src: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=600', alt: 'Annual day celebration', category: 'Events' },
  { id: 8, src: 'https://images.unsplash.com/photo-1588072432836-e10032774350?w=600', alt: 'Computer lab', category: 'Campus' },
  { id: 9, src: 'https://images.unsplash.com/photo-1560785496-3c9d27877182?w=600', alt: 'School playground', category: 'Campus' },
  { id: 10, src: 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=600', alt: 'Student graduation', category: 'Events' },
  { id: 11, src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600', alt: 'Group study', category: 'Activities' },
  { id: 12, src: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600', alt: 'School building', category: 'Campus' },
];

const categories = ['All', 'Campus', 'Activities', 'Events'];

const Gallery = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredImages = activeCategory === 'All'
    ? galleryImages
    : galleryImages.filter((img) => img.category === activeCategory);

  const selectedImage = selectedImageIndex !== null ? filteredImages[selectedImageIndex] : null;

  const handlePrevious = () => {
    if (selectedImageIndex !== null && selectedImageIndex > 0) {
      setSelectedImageIndex(selectedImageIndex - 1);
    }
  };

  const handleNext = () => {
    if (selectedImageIndex !== null && selectedImageIndex < filteredImages.length - 1) {
      setSelectedImageIndex(selectedImageIndex + 1);
    }
  };

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary/10 to-background">
        <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Photo <span className="text-primary">Gallery</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Explore moments from our campus life, events, and student activities.
            </p>
          </div>
        </div>
      </section>

      {/* Filter & Gallery */}
      <section className="section-padding">
        <div className="container-custom mx-auto">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  'px-6 py-2 rounded-full font-medium transition-all duration-300',
                  activeCategory === category
                    ? 'bg-primary text-primary-foreground shadow-md'
                    : 'bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary'
                )}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredImages.map((image, index) => (
                <div
                  key={image.id}
                  className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer animate-scale-in shadow-md"
                  style={{ animationDelay: `${index * 0.05}s` }}
                  onClick={() => openLightbox(index)}
                >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-xs font-medium text-primary bg-card/90 px-2 py-1 rounded">{image.category}</span>
                  <h3 className="text-card font-medium mt-2">{image.alt}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center p-4 animate-fade-in"
          onClick={closeLightbox}
        >
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 w-12 h-12 rounded-full bg-card/10 text-card hover:bg-card/20"
            onClick={closeLightbox}
          >
            <X className="w-6 h-6" />
          </Button>
          
          {/* Previous Button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-card/10 text-card hover:bg-card/20 disabled:opacity-30"
            onClick={(e) => { e.stopPropagation(); handlePrevious(); }}
            disabled={selectedImageIndex === 0}
          >
            <ChevronLeft className="w-8 h-8" />
          </Button>
          
          {/* Next Button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-card/10 text-card hover:bg-card/20 disabled:opacity-30"
            onClick={(e) => { e.stopPropagation(); handleNext(); }}
            disabled={selectedImageIndex === filteredImages.length - 1}
          >
            <ChevronRight className="w-8 h-8" />
          </Button>
          
          <div className="max-w-5xl max-h-[90vh] animate-scale-in" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage.src.replace('w=600', 'w=1200')}
              alt={selectedImage.alt}
              className="max-w-full max-h-[85vh] object-contain rounded-xl"
            />
            <div className="text-center mt-4">
              <span className="text-xs font-medium text-primary bg-card/10 px-3 py-1 rounded-full">{selectedImage.category}</span>
              <h3 className="text-card font-medium mt-2 text-lg">{selectedImage.alt}</h3>
              <p className="text-card/60 text-sm mt-1">{selectedImageIndex !== null ? selectedImageIndex + 1 : 0} / {filteredImages.length}</p>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Gallery;