import { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, ZoomIn } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import SectionTitle from '@/components/ui/SectionTitle';
import ImageLightbox from '@/components/ui/ImageLightbox';
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
import img16 from '@/assets/certificates/te.jpeg';
import img17 from '@/assets/certificates/grad.png';
const Certificates = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const certificates = [
    { 
      title: 'Appreciation Certificate ', 
      image: img5, 
      year: '2025',
      issuer: 'Technosprint Info Solutions',
      description: 'Awarded in appreciation of outstanding contributions and performance at Technosprint Info Solutions'
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
      image: img11, 
      year: '2019',
      issuer: 'Jawahar Navodaya Vidyalaya',
      description: 'Participated in Green Olympiad exam at JNV'
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
      image: img16, 
      year: '2025',
      issuer: 'Google Developers Club',
      description: 'Participated in TechSprint Hackathon organized by Google Developers Club'
    },
    { 
      title: 'Grad Guru Webinar for Innovation', 
      image: img17, 
      year: '2025',
      issuer: 'Gard Guru',
      description: 'Attended Grad Guru webinar for innovation and career guidance'
    }
  ];

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const lightboxImages = certificates.map((cert) => ({
    src: cert.image,
    alt: cert.title,
    title: cert.title,
  }));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring' as const,
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <Layout>
      <div className="pt-24 pb-16 min-h-screen">
        {/* Hero Banner */}
        <section className="relative py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/10 to-secondary/20" />
          <motion.div 
            className="absolute inset-0 opacity-30"
            animate={{ 
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{ 
              duration: 20, 
              repeat: Infinity, 
              repeatType: 'reverse' 
            }}
            style={{
              backgroundImage: 'radial-gradient(circle at 20% 50%, hsl(var(--primary) / 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 50%, hsl(var(--accent) / 0.15) 0%, transparent 50%)',
              backgroundSize: '100% 100%',
            }}
          />
          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
                className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-primary/70 text-primary-foreground mb-6 shadow-lg"
              >
                <Award className="w-10 h-10" />
              </motion.div>
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
                My <span className="gradient-text">Certificates</span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                A collection of certifications and recognitions earned through dedication and hard work
              </p>
            </motion.div>
          </div>
        </section>

        {/* Certificates Grid */}
        <section className="section-padding">
          <div className="container-custom">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto"
            >
              {certificates.map((cert, index) => (
                <motion.div
                  key={cert.title}
                  variants={itemVariants}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  onClick={() => openLightbox(index)}
                  className="group cursor-pointer"
                >
                  <div className="relative bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500 border border-border hover:border-primary/30">
                    {/* Image Container */}
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            whileHover={{ scale: 1.1 }}
                            className="w-14 h-14 rounded-full bg-background/95 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 shadow-lg"
                          >
                            <ZoomIn className="w-7 h-7 text-primary" />
                          </motion.div>
                        </div>
                      </div>
                      {/* Year Badge */}
                      <div className="absolute top-3 right-3">
                        <motion.span 
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 + 0.3 }}
                          className="px-3 py-1 bg-primary/90 backdrop-blur-sm text-primary-foreground text-xs font-semibold rounded-full shadow-md"
                        >
                          {cert.year}
                        </motion.span>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-5">
                      <h3 className="font-heading font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                        {cert.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        {cert.issuer}
                      </p>
                      <p className="text-xs text-muted-foreground/80 line-clamp-2">
                        {cert.description}
                      </p>
                      
                      {/* View button */}
                      <div className="mt-4 flex items-center text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                        <span>View Certificate</span>
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Empty State Hint */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="text-center text-muted-foreground/60 text-sm mt-12"
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
