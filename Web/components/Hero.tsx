// HeroSection.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, ChevronDown, ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import toast from 'react-hot-toast';

export default function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  const slides = [
    { color: 'bg-blue-500' },
    { color: 'bg-purple-500' },
    { color: 'bg-pink-500' },
  ];

  const nextSlide = () => {
    setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleTryWanClick = () => {
    toast.success('WAN 2.2 is now downloaded and available on your device!');
  };


  return (
    <div className="flex items-center justify-center px-4 py-12 overflow-x-hidden md:px-8 md:py-24">
      <div className="w-full flex flex-col md:flex-row gap-6">
        {/* Left side */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full md:flex-[1.2] relative rounded-3xl overflow-hidden shadow-xl min-h-[400px] md:min-h-[600px]"
        >
          <Image
            src="/image1.png"
            alt="WAN 2.2"
            fill
            className="object-cover"
            priority
          />
          
         
          <div className="relative h-full min-h-[400px] md:min-h-[600px] flex flex-col p-6 md:p-10 text-white">
            {/* centered text */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="flex-1 flex items-center justify-center pt-20 md:pt-40"
            >
              <h1 className="text-5xl md:text-8xl font-bold tracking-tight">WAN 2.2</h1>
            </motion.div>
            
            {/* Bottom section with description and button */}
            <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 md:gap-0">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="max-w-xs"
              >
                <h1 className="text-xl md:text-2xl font-extrabold opacity-90 pb-2">
                  WAN 2.2 Image Generation
                </h1>
                <p className="text-base md:text-lg font-light opacity-90">
                  Generate complex images with the brand new and powerful WAN 2.2 model. Exceptional prompt appearance and ultra realistic textures
                </p>
              </motion.div>
              
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleTryWanClick}
                className="flex items-center gap-2 bg-white text-blue-900 px-6 py-2 md:px-8 md:py-3 rounded-full font-medium text-base md:text-lg hover:bg-blue-50 transition-all shadow-lg w-fit"
              >
                Try WAN 2.2
                <ArrowUp size={18} className="rotate-45" />
              </motion.button>
            </div>
            
            {/*  dots */}
            <div className="flex justify-center gap-2 mt-6">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveSlide(index)}
                  className={`w-2 h-2 md:w-3 md:h-3 rounded-full ${activeSlide === index ? 'bg-white' : 'bg-white/40'}`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right side  */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="w-full md:flex-1 relative rounded-3xl md:rounded-l-3xl overflow-hidden shadow-xl md:mr-[-8%] mt-6 md:mt-0 min-h-[400px] md:min-h-[600px]"
        >
          <Image
            src="/image2.png"
            alt="Open Source"
            fill
            className="object-cover"
          />
          
          {/* Content container */}
          <div className="relative h-full min-h-[400px] md:min-h-[600px] flex flex-col p-6 md:p-10 text-white">
            {/* Main centered text */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex-1 flex items-center justify-center mt-10 md:mt-20"
            >
              <h2 className="text-4xl md:text-7xl font-bold tracking-tight text-center">Open Source</h2>
            </motion.div>
            
            {/* Bottom section with description */}
            <div className="mt-auto">
                 <h1 className="text-xl md:text-2xl font-extrabold opacity-90 pb-2">
                  FLUX.1 Krea
                </h1>
              <p className="text-base md:text-lg font-light opacity-90 max-w-md">
                We're making the weights to our FLUX.1 Krea model open-source.
                Download and run our model weights, read the technical report, or generate with it in Krea Image.
              </p>
              
              {/* Navigation arrows */}
              <div className="flex gap-4 mt-6">
                <motion.button 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={prevSlide}
                  className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                >
                  <ChevronLeft size={20} className="md:size-6" />
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={nextSlide}
                  className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                >
                  <ChevronRight size={20} className="md:size-6" />
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}