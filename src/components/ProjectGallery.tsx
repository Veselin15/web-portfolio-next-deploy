"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn, Maximize2 } from "lucide-react";

interface ProjectGalleryProps {
  images: string[];
}

export default function ProjectGallery({ images }: ProjectGalleryProps) {
  const [index, setIndex] = useState<number | null>(null);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (index === null) return;
    if (e.key === "Escape") setIndex(null);
    if (e.key === "ArrowRight") setIndex((prev) => (prev! + 1) % images.length);
    if (e.key === "ArrowLeft") setIndex((prev) => (prev! - 1 + images.length) % images.length);
  }, [index, images.length]);

  useEffect(() => {
    if (index !== null) {
        document.body.style.overflow = 'hidden'; // Prevent scrolling when lightbox is open
    } else {
        document.body.style.overflow = 'auto';
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => {
        window.removeEventListener("keydown", handleKeyDown);
        document.body.style.overflow = 'auto';
    };
  }, [handleKeyDown, index]);

  return (
    <div className="mt-12 border-t border-slate-800 pt-12">
      <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
        <Maximize2 className="text-sky-500" /> Project Gallery
      </h3>

      {/* Masonry-style Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {images.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            onClick={() => setIndex(i)}
            className={`relative rounded-3xl overflow-hidden border border-slate-800 cursor-pointer group hover:border-sky-500/50 hover:shadow-2xl hover:shadow-sky-500/10 transition-all duration-500 ${
                i % 3 === 0 ? 'sm:col-span-2 aspect-[2/1]' : 'aspect-square'
            }`}
          >
            <Image
              src={img}
              alt={`Gallery Image ${i + 1}`}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Icon Overlay */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-slate-950/50 backdrop-blur-md p-4 rounded-full border border-white/10">
                    <ZoomIn className="text-white w-8 h-8" />
                </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Enhanced Lightbox */}
      <AnimatePresence>
        {index !== null && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(10px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 z-[100] bg-slate-950/90 flex items-center justify-center"
            onClick={() => setIndex(null)}
          >
            {/* Top Bar Controls */}
            <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center z-10" onClick={e => e.stopPropagation()}>
                <span className="text-slate-400 font-mono text-sm bg-black/20 px-3 py-1 rounded-full border border-white/5">
                    {index + 1} / {images.length}
                </span>
                <button
                    onClick={() => setIndex(null)}
                    className="bg-black/20 hover:bg-white/10 p-2 rounded-full border border-white/5 transition-colors group"
                >
                    <X size={24} className="text-slate-400 group-hover:text-white" />
                </button>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={(e) => { e.stopPropagation(); setIndex((index - 1 + images.length) % images.length); }}
              className="absolute left-6 z-10 p-3 bg-black/20 hover:bg-white/10 rounded-full border border-white/5 transition-all hover:scale-110 hidden sm:block group"
            >
              <ChevronLeft size={32} className="text-slate-400 group-hover:text-white" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); setIndex((index + 1) % images.length); }}
              className="absolute right-6 z-10 p-3 bg-black/20 hover:bg-white/10 rounded-full border border-white/5 transition-all hover:scale-110 hidden sm:block group"
            >
              <ChevronRight size={32} className="text-slate-400 group-hover:text-white" />
            </button>

            {/* Main Image Container */}
            <motion.div
              key={index}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative w-full h-full max-w-7xl max-h-[85vh] p-4 flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
                <div className="relative w-full h-full">
                    <Image
                        src={images[index]}
                        alt="Fullscreen view"
                        fill
                        className="object-contain"
                        quality={100}
                        priority
                    />
                </div>
            </motion.div>

            {/* Thumbnails Strip (Optional Enhancement) */}
            <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 px-4 overflow-x-auto" onClick={e => e.stopPropagation()}>
                {images.map((img, i) => (
                    <button
                        key={i}
                        onClick={() => setIndex(i)}
                        className={`relative w-12 h-12 sm:w-16 sm:h-16 rounded-lg overflow-hidden border-2 transition-all flex-shrink-0 ${
                            i === index ? 'border-sky-500 scale-110 shadow-lg shadow-sky-500/20' : 'border-transparent opacity-50 hover:opacity-100'
                        }`}
                    >
                        <Image src={img} alt="thumb" fill className="object-cover" />
                    </button>
                ))}
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}