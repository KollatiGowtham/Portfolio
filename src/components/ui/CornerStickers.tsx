import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { useMobileMenu } from '@/contexts/MobileMenuContext';

export type CornerStickerItem = {
  id: string;
  label: string;
  icon: LucideIcon;
  ariaLabel?: string;
};

type CornerStickersProps = {
  stickers: CornerStickerItem[];
  /** Delay before first sticker appears (seconds) */
  initialDelay?: number;
};

const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

export const CornerStickers = ({ stickers, initialDelay = 1 }: CornerStickersProps) => {
  const isMobile = useIsMobile();
  const { isOpen: isMenuOpen } = useMobileMenu();

  if (!stickers.length) return null;

  // Hide stickers on mobile when hamburger menu is open
  if (isMobile && isMenuOpen) return null;

  return (
    <div className="fixed top-1/2 -translate-y-1/2 right-2 md:right-4 z-40 flex flex-col gap-1.5 md:gap-3">
      {stickers.map((sticker, index) => (
        <motion.button
          key={sticker.id}
          type="button"
          onClick={() => scrollToSection(sticker.id)}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: initialDelay + index * 0.1, duration: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="flex flex-col items-center gap-0.5 md:gap-1.5 px-2 py-1.5 md:px-4 md:py-3 rounded-lg md:rounded-2xl bg-card border border-border md:border-2 shadow-md md:shadow-lg hover:border-primary/50 hover:shadow-primary/20 transition-all duration-300 cursor-pointer group"
          aria-label={sticker.ariaLabel ?? `Jump to ${sticker.label} section`}
        >
          <div className="w-7 h-7 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:from-primary/30 group-hover:to-accent/30 transition-colors">
            <sticker.icon className="w-[14px] h-[14px] md:w-5 md:h-5 text-primary" />
          </div>
          <span className="text-[10px] md:text-xs font-semibold text-foreground whitespace-nowrap">{sticker.label}</span>
        </motion.button>
      ))}
    </div>
  );
};
