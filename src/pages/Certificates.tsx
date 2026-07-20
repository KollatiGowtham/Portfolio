import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ZoomIn
} from 'lucide-react';
import Layout from '@/components/layout/Layout';
import ImageLightbox from '@/components/ui/ImageLightbox';
import { FocusRail, type FocusRailItem } from '@/components/ui/focus-rail';
import img from '@/assets/certificates/IT.jpg';
import img1 from '@/assets/certificates/DBMS.jpg';
import img2 from '@/assets/certificates/CSA.jpg';
import img3 from '@/assets/certificates/Agile.jpg';
import img4 from '@/assets/certificates/3D.jpg';
import img5 from '@/assets/certificates/TS.png';
import img6 from '@/assets/certificates/JCS.jpg';
import img7 from '@/assets/certificates/CSE.jpg';
import img8 from '@/assets/certificates/Deliotte.jpg';
import img9 from '@/assets/certificates/c.jpeg';
import img10 from '@/assets/certificates/aiignite.jpeg';
import img11 from '@/assets/certificates/green2.jpeg';
import img12 from '@/assets/certificates/greenolympiad.jpeg';
import img13 from '@/assets/certificates/yiuth.jpeg';
import img14 from '@/assets/certificates/workshop.jpeg';
import img15 from '@/assets/certificates/code.jpeg';
import img16 from '@/assets/certificates/gfgcloud.jpg';
import img17 from '@/assets/certificates/t3.jpeg';
import img19 from '@/assets/certificates/te.jpeg';
import img18 from '@/assets/certificates/grad.png';
import img20 from '@/assets/certificates/t4.jpeg';
import img21 from '@/assets/certificates/data.png';
import img22 from '@/assets/certificates/Experience.jpg';

const Certificates = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const certificates = [
    { 
      title: 'AWS Cloud Practitioner', 
      image: img16, 
      year: '2026',
      issuer: 'Geeks For Geeks',
      description: 'Completed AWS Cloud Practitioner- Self Paced course offered by GFG'
    },
    { 
      title: 'Appreciation Certificate', 
      image: img5, 
      year: '2025',
      issuer: 'Technosprint Info Solutions',
      description: 'Awarded in appreciation of outstanding contributions and performance at Technosprint Info Solutions'
    },
    { 
      title: 'Operational Excellence Award', 
      image: img17, 
      year: '2026',
      issuer: 'Technosprint Info Solutions',
      description: 'Awarded Operational Excellence Award for outstanding contributions and performance at Technosprint Info Solutions'
    },    
    { 
      title: 'Pillar of Integrity - Straight Shooter', 
      image: img20, 
      year: '2026',
      issuer: 'Technosprint Info Solutions',
      description: 'Awarded the Pillar of Integrity - Straight Shooter award for upholding the highest standards of ethics, transparency, and honesty in all professional endeavors at Technosprint Info Solutions'
    },
        { 
      title: 'Experience certificate from Technosprint Info Solutions', 
      image: img22, 
      year: '2026',
      issuer: 'Technosprint Info Solutions',
      description: 'Received an experience certificate recognizing 20 months of continuous dedicated work at Technosprint Info Solutions. Grateful for the invaluable learning opportunities, mentorship, and professional growth during my tenure. Thank you for the incredible journey and support!'
    },
        { 
      title: 'Data Science for Beginners', 
      image: img21, 
      year: '2026',
      issuer: 'Board Infinity',
      description: 'Successfully earned a Data Science certification from Board Infinity, demonstrating proficiency in core data science concepts and practices'
    },
    { 
      title: 'C Programming', 
      image: img9, 
      year: '2021',
      issuer: 'Human Resources and Development Society',
      description: 'Completed C Programming course offered by Human Resources and Development Society'
    },
    { 
      title: 'Data Analytics', 
      image: img8, 
      year: '2025',
      issuer: 'Deliotte',
      description: 'Completed Data Analytics course offered by Deliotte'
    },
    { 
      title: 'Database Management System', 
      image: img1, 
      year: '2025',
      issuer: 'NPTL',
      description: 'Completed Database Management Systems course offered by NPTL'
    },
    { 
      title: 'Junior Cyber Security', 
      image: img6, 
      year: '2025',
      issuer: 'Cisco Network Academy',
      description: 'Completed Junior Cyber Security course offered by Cisco Network Academy'
    },
    { 
      title: 'Cyber Security Essentials', 
      image: img7, 
      year: '2025',
      issuer: 'Cisco Network Academy',
      description: 'Completed Cyber Security Essentials course offered by Cisco Network Academy'
    },
    { 
      title: 'IT Basics', 
      image: img, 
      year: '2025',
      issuer: 'Programiz',
      description: 'Completed IT Basics course offered by Programiz'
    },
    { 
      title: 'Cyber Security Awareness', 
      image: img2, 
      year: '2025',
      issuer: 'HP',
      description: 'Completed Cyber Security Awareness course offered by HP'
    },
    { 
      title: '3D printing', 
      image: img4, 
      year: '2025',
      issuer: 'HP',
      description: 'Completed 3D printing course offered by HP'
    },
    { 
      title: 'Agile Project Management', 
      image: img3, 
      year: '2025',
      issuer: 'HP',
      description: 'Completed Agile Project Management course offered by HP'
    },
    { 
      title: 'AI Unplugged Workshop', 
      image: img13, 
      year: '2025',
      issuer: 'SMVEC',
      description: 'Participated in AI Unplugged Workshop organized by SMVEC'
    },
    { 
      title: 'Electronic Design Workshop', 
      image: img14, 
      year: '2025',
      issuer: 'SMVEC',
      description: 'Attended Electronic Design Workshop at SMVEC'
    },
    { 
      title: 'AI Ignite Hackathon', 
      image: img10, 
      year: '2025',
      issuer: 'SMVEC',
      description: 'Participated in AI Ignite Hackathon organized by SMVEC'
    },
    { 
      title: 'Green Olympiad', 
      image: img12, 
      year: '2018',
      issuer: 'Jawahar Navodaya Vidyalaya',
      description: 'Participated in Green Olympiad exam at JNV in 2018'
    },
    { 
      title: 'Green Olympiad', 
      image: img11, 
      year: '2019',
      issuer: 'Jawahar Navodaya Vidyalaya',
      description: 'Participated in Green Olympiad exam at JNV in 2019'
    },
   
    { 
      title: 'Trending Technologies Guidance Workshop', 
      image: img15, 
      year: '2023',
      issuer: 'VPS Codebuilders Pvt. Ltd.',
      description: 'Attended Trending Technologies Guidance Workshop organized by VPS Codebuilders Pvt. Ltd.'
    },
    { 
      title: 'TechSprint Hackathon Certificate', 
      image: img19, 
      year: '2025',
      issuer: 'Google Developers Club',
      description: 'Participated in TechSprint Hackathon organized by Google Developers Club'
    },
    { 
      title: 'Grad Guru Webinar for Innovation', 
      image: img18, 
      year: '2025',
      issuer: 'Gard Guru',
      description: 'Attended Grad Guru webinar for innovation and career guidance'

    }
  ];

  const focusItems: FocusRailItem[] = certificates.slice(0, 10).map((cert, index) => ({
    id: index,
    title: cert.title,
    description: cert.description,
    meta: `${cert.issuer} • ${cert.year}`,
    imageSrc: cert.image,
  }));

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const lightboxImages = certificates.map((cert) => ({
    src: cert.image,
    alt: cert.title,
    title: cert.title,
  }));

  return (
      <Layout>
        <div className="pt-16 sm:pt-20 pb-8 sm:pb-12 min-h-screen">
        {/* Hero Banner */}
        <section className="relative pb-4 sm:pb-6 overflow-hidden">
          <div className="container-custom">
            <FocusRail 
              items={focusItems} 
              autoPlay={true} 
              interval={3000} 
              loop={true} 
              className="rounded-2xl sm:rounded-[3rem]" 
            />
          </div>
        </section>

        {/* Certificates Grid */}
        <section id="certificates" className="py-8 sm:py-14 scroll-mt-24">
          <div className="container-custom">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-8">
              {certificates.map((cert, index) => (
                <motion.div
                  key={`${cert.title}-${cert.year}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="group glass-card overflow-hidden card-glow flex flex-col h-full"
                >
                  {/* Certificate Image */}
                  <div className="relative aspect-[4/3] bg-gray-50 overflow-hidden p-2 sm:p-3 group-hover:p-1 transition-all duration-500">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Overlay Actions */}
                    <div className="absolute inset-0 bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center gap-4">
                      <button
                        onClick={() => openLightbox(index)}
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-[0_0_20px_rgba(170,77,255,0.5)] hover:scale-110 transition-transform"
                        aria-label="Zoom image"
                      >
                        <ZoomIn size={18} className="sm:w-5 sm:h-5" />
                      </button>
                    </div>

                    {/* Year Badge */}
                    <div className="absolute top-3 right-3 sm:top-4 sm:right-4 px-2 sm:px-3 py-1 bg-primary text-primary-foreground text-[8px] sm:text-[10px] font-black uppercase tracking-widest rounded-lg shadow-xl">
                      {cert.year}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4 sm:p-6 flex flex-col flex-1">
                    <div className="mb-3 sm:mb-4">
                      <p className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-1.5 sm:mb-2 opacity-80">{cert.issuer}</p>
                      <h3 className="font-heading font-black text-base sm:text-lg text-foreground uppercase tracking-tight leading-tight group-hover:text-primary transition-colors">
                        {cert.title}
                      </h3>
                    </div>
                    
                    <p className="text-[11px] sm:text-xs text-muted-foreground leading-relaxed line-clamp-2 mb-4 sm:mb-6 flex-1">
                      {cert.description}
                    </p>

                    <button
                      onClick={() => openLightbox(index)}
                      className="w-full py-2.5 sm:py-3 bg-gray-50 border border-gray-200 rounded-lg sm:rounded-xl text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground group-hover:text-primary group-hover:border-primary/50 transition-all"
                    >
                      View Full Document
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Empty State Hint */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="text-center text-muted-foreground/60 text-sm mt-8"
            >
              Click on any certificate to view in full size
            </motion.p>
          </div>
        </section>

        {/* Lightbox */}
        <ImageLightbox
          images={lightboxImages}
          currentIndex={currentImageIndex}
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
          onNext={() => setCurrentImageIndex((prev) => (prev + 1) % certificates.length)}
          onPrev={() => setCurrentImageIndex((prev) => (prev - 1 + certificates.length) % certificates.length)}
        />
      </div>
    </Layout>
  );
};

export default Certificates;
