import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';

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
  if (!stickers.length) return null;

  return (
    <div className="fixed top-1/2 -translate-y-1/2 right-4 z-50 flex flex-col gap-3">
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
          className="flex flex-col items-center gap-1.5 px-4 py-3 rounded-2xl bg-card border-2 border-border shadow-lg hover:border-primary/50 hover:shadow-primary/20 transition-all duration-300 cursor-pointer group"
          aria-label={sticker.ariaLabel ?? `Jump to ${sticker.label} section`}
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:from-primary/30 group-hover:to-accent/30 transition-colors">
            <sticker.icon className="w-5 h-5 text-primary" />
          </div>
          <span className="text-xs font-semibold text-foreground whitespace-nowrap">{sticker.label}</span>
        </motion.button>
      ))}
    </div>
  );
};
