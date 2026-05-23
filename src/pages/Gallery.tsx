import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import ImageLightbox from '@/components/ui/ImageLightbox';
import { CircularGallery2 } from '@/components/ui/circular-gallery-2';
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
import ai from '@/assets/gallery/Aiigniteposter.jpg';
import ai1 from '@/assets/gallery/Aiignitestage.jpg';
import ai2 from '@/assets/gallery/Aiigniteteam.jpeg';
import ai3 from '@/assets/gallery/Aiigniteteam1.jpeg';
import img7 from '@/assets/gallery/te.jpeg';
import ai4 from '@/assets/gallery/ign.jpeg';
import sicmit1 from '@/assets/gallery/sicmit/1.jpeg';
import sicmit2 from '@/assets/gallery/sicmit/2.jpeg';
import sicmit3 from '@/assets/gallery/sicmit/3.jpeg';
import sicmit4 from '@/assets/gallery/sicmit/4.jpeg';
import sicmit5 from '@/assets/gallery/sicmit/5.jpeg';
import sicmit6 from '@/assets/gallery/sicmit/6.jpeg';
import sicmit7 from '@/assets/gallery/sicmit/7.jpeg';
import t1 from '@/assets/gallery/t1.jpeg';
import t2 from '@/assets/gallery/t2.jpeg';
import t3 from '@/assets/gallery/t3.jpeg';
import t4 from '@/assets/gallery/t4.jpeg';
import t5 from '@/assets/gallery/t5.jpeg';

const Gallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const events = [
    {
      name: 'Technosprint Info Solutions Annual Meet',
      photos: [t3, t2, t1, t4, t5],
    },
    {
      name: 'SCIMIT 2026 Hackathon',
      photos: [sicmit1, sicmit2, sicmit3, sicmit4, sicmit5, sicmit6, sicmit7],
    },
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
      photos: [ai4,ai2, ai, ai1, ai3],
    },
   
  ];

  const headerImages = events.flatMap((e) => e.photos);
  const headerGalleryItems = [...headerImages, ...headerImages].slice(0, 18).map((src) => ({
    image: src,
    text: '',
  }));

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
      <div className="pt-16 sm:pt-20 pb-8 sm:pb-12">
        <section id="gallery" className="scroll-mt-24 relative overflow-hidden bg-white">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_10%,rgba(45,90,158,0.10),transparent_55%),radial-gradient(circle_at_80%_40%,rgba(45,90,158,0.06),transparent_50%),radial-gradient(circle_at_50%_100%,rgba(45,90,158,0.05),transparent_55%)]" />
          <div className="container-custom pt-4 md:pt-8">
            <div className="mb-6 md:mb-8 flex items-center justify-center">
              <h1 className="font-heading text-2xl sm:text-3xl md:text-5xl font-black tracking-tighter uppercase text-foreground">
                Photo Gallery
              </h1>
            </div>
            <div className="mx-auto max-w-6xl">
              <CircularGallery2
                items={headerGalleryItems}
                bend={3}
                borderRadius={0.06}
                scrollSpeed={2}
                scrollEase={0.05}
                className="rounded-2xl sm:rounded-[2.5rem]"
              />
            </div>
          </div>

          <div className="container-custom mt-8 sm:mt-12 section-padding pt-0">
            <div className="space-y-8 sm:space-y-16">
              {events.map((event, eventIndex) => (
                <motion.div 
                  key={event.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: eventIndex * 0.1 }}
                >
                  <div className="flex items-center gap-2 sm:gap-4 mb-4 sm:mb-8">
                    <div className="h-px flex-1 bg-gray-200 hidden md:block" />
                    <h3 className="font-heading font-black text-base sm:text-xl md:text-3xl text-foreground uppercase tracking-tight text-center px-2 sm:px-4 flex-1">
                      {event.name}
                    </h3>
                    <div className="h-px flex-1 bg-gray-200 hidden md:block" />
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-6">
                    {event.photos.map((photo, photoIndex) => (
                      <motion.div
                        key={`${event.name}-${photoIndex}`}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: photoIndex * 0.05 }}
                        whileHover={{ y: -5, scale: 1.02 }}
                        onClick={() => openLightbox(photo)}
                        className="group relative aspect-square cursor-pointer overflow-hidden rounded-xl sm:rounded-[2rem] border border-gray-200 card-glow"
                      >
                        <img
                          src={photo}
                          alt={`${event.name} - ${photoIndex + 1}`}
                          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-125 grayscale-[0.3] group-hover:grayscale-0"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                        
                        <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/30 rounded-xl sm:rounded-[2rem] transition-all duration-500" />
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
            setCurrentImageIndex((prev) => (prev + 1) % allPhotos.length)
          }
          onPrev={() =>
            setCurrentImageIndex(
              (prev) => (prev - 1 + allPhotos.length) % allPhotos.length
            )
          }
        />
      </div>
    </Layout>
  );
};


export default Gallery;
