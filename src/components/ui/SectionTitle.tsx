import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  dark?: boolean;
  className?: string;
}

const SectionTitle = ({ title, subtitle, centered = true, dark = false, className = '' }: SectionTitleProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`mb-6 sm:mb-10 ${centered ? 'text-center' : ''} ${className}`}
    >
      <div className={`flex items-center gap-3 mb-2 ${centered ? 'justify-center' : ''}`}>
        <div className={`h-px w-8 ${dark ? 'bg-white/30' : 'bg-primary/50'}`} />
        <span className={`text-[10px] font-black uppercase tracking-[0.4em] ${dark ? 'text-white/70' : 'text-primary'}`}>{subtitle || 'Overview'}</span>
        <div className={`h-px w-8 ${dark ? 'bg-white/30' : 'bg-primary/50'}`} />
      </div>
      
      <h2 className={`font-heading text-2xl sm:text-4xl md:text-6xl font-black mb-4 tracking-tighter uppercase leading-none ${dark ? 'text-white' : 'text-foreground'}`}>
        {title}
      </h2>
      
      <div className={`h-1.5 w-24 rounded-full ${dark ? 'bg-white shadow-[0_0_15px_rgba(255,255,255,0.3)]' : 'bg-primary shadow-[0_0_15px_rgba(30,64,175,0.5)]'} ${centered ? 'mx-auto' : ''}`} />
    </motion.div>
  );
};

export default SectionTitle;
