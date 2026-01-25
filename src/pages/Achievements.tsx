import { motion } from 'framer-motion';
import { Trophy, Medal, Star, Sparkles } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import SectionTitle from '@/components/ui/SectionTitle';

const Achievements = () => {
  const achievements = [
    {
      title: '4th Place - TechSprint Hackathon',
      description: 'Secured 4th position with Special Jury Mention for innovative solution in the TechSprint Hackathon, competing against 100+ teams.',
      icon: Trophy,
      year: '2024',
      highlight: 'Special Jury Mention',
      color: 'from-amber-500 to-orange-600',
    },
    {
      title: '2nd Place - State-Level Athletics',
      description: 'Won silver medal in state-level athletics competition, demonstrating dedication and athletic excellence.',
      icon: Medal,
      year: '2023',
      highlight: '',
      color: 'from-slate-400 to-slate-600',
    },
    {
      title: 'Top 10 - IIIT Bengaluru Hackathon',
      description: 'Participated in Aya Hackathon conducted by IIIT Bengaluru, exploring innovative concepts in blockchain technology.',
      icon: Star,
      year: '2025',
      highlight: '',
      color: 'from-emerald-400 to-teal-600',
    },
    {
      title: 'Appreciation for Client Side',
      description: 'Developed a responsive client-side web application for a handloom company, featuring product galleries, inquiry forms, and an interactive showcase of traditional weaving techniques.',
      icon: Sparkles,
      year: '2025',
      highlight: '',
      color: 'from-purple-500 to-indigo-600',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50, rotateY: -15 },
    visible: {
      opacity: 1,
      x: 0,
      rotateY: 0,
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
        {/* Hero Section */}
        <section className="relative py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/10" />
          
          {/* Animated background elements */}
          <motion.div
            className="absolute top-20 left-10 w-72 h-72 rounded-full bg-primary/5 blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-accent/10 blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ duration: 10, repeat: Infinity }}
          />

          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
                className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-primary/70 text-primary-foreground mb-6 shadow-lg relative"
              >
                <Trophy className="w-10 h-10" />
                <motion.div
                  className="absolute -top-1 -right-1"
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Sparkles className="w-5 h-5 text-amber-400" />
                </motion.div>
              </motion.div>
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
                My <span className="gradient-text">Achievements</span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Milestones and recognition earned through perseverance and dedication
              </p>
            </motion.div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="section-padding">
          <div className="container-custom">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="max-w-4xl mx-auto space-y-8"
            >
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                  className="group relative"
                >
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative flex flex-col md:flex-row gap-6 bg-card rounded-2xl p-6 md:p-8 shadow-card hover:shadow-card-hover transition-all duration-500 border border-border hover:border-primary/30 overflow-hidden">
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/5 to-transparent rounded-full -translate-y-1/2 translate-x-1/2" />
                    
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <motion.div 
                        className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${achievement.color} flex items-center justify-center shadow-lg`}
                        whileHover={{ rotate: [0, -10, 10, 0] }}
                        transition={{ duration: 0.5 }}
                      >
                        <achievement.icon className="w-10 h-10 text-white" />
                      </motion.div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 relative z-10">
                      <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                        <h3 className="font-heading font-bold text-xl md:text-2xl text-foreground group-hover:text-primary transition-colors duration-300">
                          {achievement.title}
                        </h3>
                        <motion.span 
                          initial={{ scale: 0.9 }}
                          whileInView={{ scale: 1 }}
                          className="px-4 py-1.5 bg-gradient-to-r from-primary/10 to-accent/10 text-primary text-sm font-semibold rounded-full border border-primary/20"
                        >
                          {achievement.year}
                        </motion.span>
                      </div>
                      
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {achievement.description}
                      </p>

                      {/* Highlight badge */}
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="inline-flex items-center gap-2 px-3 py-1.5 bg-secondary rounded-full"
                      >
                        <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                        <span className="text-sm font-medium text-foreground">{achievement.highlight}</span>
                      </motion.div>
                    </div>

                    {/* Animated border */}
                    <motion.div
                      className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-accent"
                      initial={{ width: '0%' }}
                      whileInView={{ width: '100%' }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + 0.5, duration: 0.8 }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
            >
              {[
                { label: 'Hackathons', value: '5+' },
                { label: 'Competitions', value: '10+' },
                { label: 'Certifications', value: '8+' },
                { label: 'Years Active', value: '3+' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="text-center p-6 bg-card rounded-2xl border border-border hover:border-primary/30 transition-all duration-300"
                >
                  <motion.p 
                    className="font-heading text-3xl md:text-4xl font-bold gradient-text mb-2"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', delay: index * 0.1 + 0.2 }}
                  >
                    {stat.value}
                  </motion.p>
                  <p className="text-muted-foreground text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Achievements;
