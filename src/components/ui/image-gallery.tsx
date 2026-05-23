import { cn } from "@/lib/utils";

interface ImageGalleryProps {
  items: {
    src: string;
    title: string;
    description?: string;
  }[];
  title?: string;
  subtitle?: string;
}

export default function ImageGallery({ items, title, subtitle }: ImageGalleryProps) {
  return (
    <section className="w-full flex flex-col items-center justify-start py-8">
      <div className="max-w-3xl text-center px-4 mb-6">
        <h2 className="text-4xl md:text-5xl font-black font-heading text-foreground uppercase tracking-tighter">
          {title || "Our Latest Creations"}
        </h2>
        {subtitle && (
          <p className="text-sm text-slate-500 mt-2 uppercase tracking-[0.2em] font-bold">
            {subtitle}
          </p>
        )}
      </div>

      {/* Gallery Container - Simplified for mobile, interactive for desktop */}
      <div className="flex flex-col md:flex-row items-stretch gap-4 md:gap-3 h-auto md:h-[500px] w-full max-w-7xl mt-6 px-4">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="relative group flex-[1] md:transition-all md:duration-700 md:ease-[0.16,1,0.3,1] w-full md:w-auto rounded-3xl md:rounded-[2.5rem] overflow-hidden h-[250px] sm:h-[300px] md:h-full md:hover:flex-[5] border border-gray-100 md:border-black/[0.03] shadow-lg md:shadow-xl"
          >
            <img
              className="h-full w-full object-cover object-center md:transition-transform md:duration-1000 md:ease-out md:group-hover:scale-105"
              src={item.src}
              alt={item.title}
              loading="lazy"
            />
            
            {/* Overlay Content - Simplified for mobile visibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 md:p-10">
              <div className="md:transform md:translate-y-6 md:group-hover:translate-y-0 transition-transform duration-700 ease-[0.16,1,0.3,1]">
                <h3 className="text-white text-xl md:text-3xl font-black uppercase tracking-tighter mb-1 md:mb-2">
                  {item.title}
                </h3>
                {item.description && (
                  <p className="text-white/80 md:text-white/70 text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em]">
                    {item.description}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
