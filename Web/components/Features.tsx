// Features.tsx
'use client';

import { motion } from 'framer-motion';
import { 
  ImageIcon, 
  Edit3, 
  Video, 
  Clock,
  Move3D,
  Train,
  Zap,
  Palette,
  ChevronDown,
  FileText,
  Scale
} from 'lucide-react';
export default function Features() {
  return (
    <div className="w-full bg-white">
      {/* Features Section */}
      <section className="w-full px-6 py-14 md:py-20 md:px-14">
        <div className="max-w-8xl mx-auto">
          {/* Header Section */}
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900"># Generate</h2>
            <button className="flex items-center gap-1 text-blue-600 font-medium">
              Show all <ChevronDown size={18} />
            </button>
          </div>
          
          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Image */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-50 rounded-2xl p-6 border border-gray-200"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <ImageIcon size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Image</h3>
                  </div>
                </div>
                <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">New</span>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Generate images with custom objects in various styles and formats.
              </p>
              <button className="text-blue-600 text-sm font-medium">Open</button>
            </motion.div>
            
            {/* Video */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="bg-gray-50 rounded-2xl p-6 border border-gray-200"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <Video size={20} className="text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Video</h3>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Generate videos with hidden elements, special effects, and more.
              </p>
              <button className="text-blue-600 text-sm font-medium">Open</button>
            </motion.div>
            
            {/* Real Time */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="bg-gray-50 rounded-2xl p-6 border border-gray-200"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <Clock size={20} className="text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Real Time</h3>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Real-time generation with instant preview and adjustments.
              </p>
              <button className="text-blue-600 text-sm font-medium">Open</button>
            </motion.div>
            
            {/* Enhancer */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="bg-gray-50 rounded-2xl p-6 border border-gray-200"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-pink-100 rounded-lg">
                    <Zap size={20} className="text-pink-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Enhancer</h3>
                  </div>
                </div>
                <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">New</span>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Enhance and upscale your images and videos up to 4K resolution.
              </p>
              <button className="text-blue-600 text-sm font-medium">Open</button>
            </motion.div>
            
            {/* Edit */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              className="bg-gray-50 rounded-2xl p-6 border border-gray-200"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-orange-100 rounded-lg">
                    <Edit3 size={20} className="text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Edit</h3>
                  </div>
                </div>
                <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">New</span>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Add features, change styles, or modify elements with precision.
              </p>
              <button className="text-blue-600 text-sm font-medium">Open</button>
            </motion.div>
            
            {/* Video Lipsync */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.5 }}
              className="bg-gray-50 rounded-2xl p-6 border border-gray-200"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-red-100 rounded-lg">
                    <Palette size={20} className="text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Video Lipsync</h3>
                  </div>
                </div>
                <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">New</span>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Sync audio with video for perfect lip movement and timing.
              </p>
              <button className="text-blue-600 text-sm font-medium">Open</button>
            </motion.div>
            
            {/* Motion Transfer */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.6 }}
              className="bg-gray-50 rounded-2xl p-6 border border-gray-200"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-indigo-100 rounded-lg">
                    <Move3D size={20} className="text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Motion Transfer</h3>
                  </div>
                </div>
                <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">New</span>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Transfer motion from one video to another seamlessly.
              </p>
              <button className="text-blue-600 text-sm font-medium">Open</button>
            </motion.div>
            
            {/* Train */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.7 }}
              className="bg-gray-50 rounded-2xl p-6 border border-gray-200"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-cyan-100 rounded-lg">
                    <Train size={20} className="text-cyan-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Train</h3>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Train custom models with your specific style and preferences.
              </p>
              <button className="text-blue-600 text-sm font-medium">Open</button>
            </motion.div>
          </div>
        </div>
      </section>

    
      <div className="w-full px-6 pb-12">
        <div className="max-w-6xl mx-auto border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
       
            <div className="text-lg font-semibold text-gray-900 mb-4 md:mb-0">
              Gallery
            </div>
            
            
            <div className="flex items-center gap-6">
              <button className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
                <Scale size={18} />
                <span className="text-sm">Legal</span>
              </button>
              
              <button className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
                <FileText size={18} />
                <span className="text-sm">Policies</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}