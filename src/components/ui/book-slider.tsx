import React from 'react';
import HTMLFlipBook from 'react-pageflip';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PageProps {
  children: React.ReactNode;
  className?: string;
}

const Page = React.forwardRef<HTMLDivElement, PageProps>((props, ref) => {
  return (
    <div className={cn("bg-white shadow-inner flex flex-col", props.className)} ref={ref}>
      {props.children}
    </div>
  );
});

interface BookSliderProps {
  items: {
    icon?: any;
    image?: string;
    label: string;
    value: string;
    sublabel: string;
  }[];
  className?: string;
}

export default function BookSlider({ items, className }: BookSliderProps) {
  return (
    <div className={cn("flex flex-col items-center justify-center py-10 gap-6", className)}>
      <div className="flex items-center gap-3 text-primary/40 animate-pulse">
        <div className="h-px w-12 bg-primary/10" />
        <span className="text-[10px] font-black uppercase tracking-[0.4em]">Click or Swipe to Flip</span>
        <div className="h-px w-12 bg-primary/10" />
      </div>

      <div className="relative group">
        {/* Shadow decoration */}
        <div className="absolute -inset-4 bg-primary/5 rounded-[2.5rem] blur-2xl group-hover:bg-primary/10 transition-colors duration-700" />
        
        {/* @ts-ignore */}
        <HTMLFlipBook
          width={320}
          height={450}
          size="fixed"
          minWidth={200}
          maxWidth={400}
          minHeight={300}
          maxHeight={600}
          maxShadowOpacity={0.3}
          showCover={true}
          mobileScrollSupport={true}
          className="rounded-2xl shadow-2xl overflow-hidden"
        >
          {/* Cover Page */}
          <Page className="items-center justify-center p-10 bg-gradient-to-br from-[#2D5A9E] to-[#1A3A6D] text-white">
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center shadow-2xl">
                <Sparkles size={40} className="text-white animate-pulse" />
              </div>
              <div className="space-y-2">
                <h2 className="font-heading text-3xl font-black uppercase tracking-tighter leading-none">
                  Career<br />Snapshot
                </h2>
                <div className="w-12 h-1 bg-white mx-auto rounded-full opacity-50" />
                <p className="text-[10px] font-black uppercase tracking-[0.3em] opacity-60">Professional Highlights</p>
              </div>
            </div>
            <div className="absolute bottom-10 left-0 right-0 text-center">
              <span className="text-[8px] font-black uppercase tracking-[0.4em] opacity-40 animate-bounce block">Flip to Open</span>
            </div>
          </Page>

          {/* Content Pages */}
          {items.map((item, index) => (
            <Page key={index} className="p-8 justify-between relative border-l border-gray-100">
              <div className="space-y-6">
                <div className="flex justify-between items-start">
                  <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center text-primary shadow-sm">
                    {item.image ? (
                      <img src={item.image} alt={item.value} className="w-10 h-10 object-contain" />
                    ) : (
                      <item.icon size={32} />
                    )}
                  </div>
                  <Badge variant="secondary" className="bg-primary/5 text-primary border-none text-[8px] font-black uppercase tracking-widest px-2 py-0.5">
                    Archive 0{index + 1}
                  </Badge>
                </div>

                <div className="space-y-4">
                  <div className="space-y-1">
                    <p className="text-[9px] font-black uppercase tracking-[0.3em] text-primary/60">{item.label}</p>
                    <h3 className="font-heading text-2xl font-black text-foreground uppercase tracking-tighter leading-none">
                      {item.value}
                    </h3>
                  </div>
                  <div className="h-0.5 w-12 bg-primary/20 rounded-full" />
                  <p className="text-sm text-muted-foreground font-medium leading-relaxed italic">
                    "{item.sublabel}"
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                  <p className="text-[8px] font-bold text-muted-foreground leading-relaxed">
                    This milestone represents a key achievement in my professional journey, demonstrating consistent growth and expertise.
                  </p>
                </div>
                <div className="flex justify-between items-center text-[8px] font-black text-gray-300 uppercase tracking-widest">
                  <span>Page {index + 2}</span>
                  <span>Portfolio 2026</span>
                </div>
              </div>
            </Page>
          ))}

          {/* Back Cover */}
          <Page className="items-center justify-center p-10 bg-gray-50">
            <div className="text-center space-y-4">
              <div className="font-heading text-xl font-black italic tracking-tighter text-gray-200 select-none">
                Gowtham.
              </div>
              <p className="text-[8px] font-black uppercase tracking-[0.2em] text-gray-400">End of Snapshot</p>
            </div>
          </Page>
        </HTMLFlipBook>
      </div>
    </div>
  );
}
