import { useState } from 'react';
import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import SectionTitle from '@/components/ui/SectionTitle';
import ImageLightbox from '@/components/ui/ImageLightbox';
import img1 from '@/assets/gallery/img1.jpeg';
import img2 from '@/assets/gallery/img2.jpeg';
import img3 from '@/assets/gallery/img3.jpeg';
import img4 from '@/assets/gallery/img4.jpeg';
import img5 from '@/assets/gallery/img5.jpeg';
import img6 from '@/assets/gallery/img6.jpeg';
import ben2 from '@/assets/gallery/ben2.jpeg';
import ben6 from '@/assets/gallery/ben6.jpeg';
import ben8 from '@/assets/gallery/ben8.jpeg';
import ben1 from '@/assets/gallery/ben1.jpeg';
import ben9 from '@/assets/gallery/ben9.jpeg';
import ben7 from '@/assets/gallery/ben7.jpeg';
import ben3 from '@/assets/gallery/ben3.jpeg';
import ben4 from '@/assets/gallery/ben4.jpeg';
import ben5 from '@/assets/gallery/ben5.jpeg';
import ai from '@/assets/gallery/Ai ignite poster.jpg';
import ai1 from '@/assets/gallery/Ai ignite stage.jpg';
import ai2 from '@/assets/gallery/Ai ignite team.jpeg';
import ai3 from '@/assets/gallery/Ai ignite team1.jpeg';
import img7 from '@/assets/gallery/te.jpeg';
import ai4 from '@/assets/gallery/ign.jpeg';



const Gallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const events = [
    {
      name: 'AYA Hackathon IIIT Benguluru',
      photos: [ben2, ben6, ben8, ben1, ben9, ben7, ben3, ben4, ben5],
    },
    {
      name: 'TechSprint Hackathon',
      photos: [img7,img1, img2, img3, img4, img5, img6],
    },
    {
      name: 'AI Ignite',
      photos: [ai2, ai, ai1, ai3,ai4],
    },
   
  ];

  // Flatten all photos for the lightbox
  const allPhotos = events.flatMap(event => 
    event.photos.map(photo => ({
      src: photo,
      alt: event.name,
      title: event.name
    }))
  );

  const openLightbox = (photoSrc: string) => {
    const photoIndex = allPhotos.findIndex(p => p.src === photoSrc);
    if (photoIndex !== -1) {
      setCurrentImageIndex(photoIndex);
      setLightboxOpen(true);
    }
  };

  return (
    <Layout>
      <div className="pt-24 pb-16">
        <section className="section-padding">
          <div className="container-custom">
            <SectionTitle
              title="Gallery"
              subtitle="Photos from my journey"
            />

            <div className="space-y-12">
              {events.map((event, eventIndex) => (
                <motion.div 
                  key={event.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: eventIndex * 0.1 }}
                >
                  <h3 className="text-2xl font-bold mb-6 text-foreground">{event.name}</h3>
                  <div className="grid grid-cols-4 gap-4">
                    {event.photos.map((photo, photoIndex) => (
                      <motion.div
                        key={`${event.name}-${photoIndex}`}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: photoIndex * 0.05 }}
                        onClick={() => openLightbox(photo)}
                        className="group relative aspect-square cursor-pointer overflow-hidden rounded-xl bg-secondary"
                      >
                        <img
                          src={photo}
                          alt={`${event.name} - ${photoIndex + 1}`}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="absolute bottom-0 left-0 right-0 p-4">
                            <p className="text-background font-medium text-sm">
                              {event.name}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <ImageLightbox
          images={allPhotos}
          currentIndex={currentImageIndex}
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
          onNext={() =>
            setCurrentImageIndex((prev) => (prev + 5) % allPhotos.length)
          }
          onPrev={() =>
            setCurrentImageIndex(
              (prev) => (prev - 5 + allPhotos.length) % allPhotos.length
            )
          }
        />
      </div>
    </Layout>
  );
};


export default Gallery;
