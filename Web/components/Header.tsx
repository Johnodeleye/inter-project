// Header.tsx
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { 
  Home, 
  ImageIcon, 
  Video, 
  Wand2, 
  Paintbrush, 
  PenTool, 
  File, 
  ChevronDown, 
  Headphones, 
  Bell, 
  Sun
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [activeTab, setActiveTab] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <motion.header 
      initial={{ y: 0 }}
      animate={{ y: 0 }}
      className={`w-full bg-white bg-opacity-95 backdrop-blur-sm border-b border-gray-200 px-6 py-3 sticky top-0 z-50 ${
        isScrolled ? 'shadow-md' : ''
      }`}
    >
      <motion.div 
        initial={{ opacity: 1 }}
        animate={{ opacity: isScrolled ? 0.95 : 1 }}
        className="flex items-center justify-between"
      >
        {/* Left Section */}
        <div className="flex items-center gap-6">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/logo.png"
              alt="Krea AI"
              width={32}
              height={32}
              className="h-8 w-auto"
            />
            {/* Mobile-only text */}
            <span className="ml-2 font-semibold text-gray-800 md:hidden">
              Krea AI
            </span>
          </div>
          
          {/* Profile */}
          <div className="hidden md:flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center">
              <span className="text-xs font-medium text-gray-700">J</span>
            </div>
            <span className="text-sm text-gray-700 hidden md:block">
              johnayomide920@gmail.com
            </span>
            <ChevronDown size={16} className="text-gray-500" />
          </div>
        </div>

        {/* Center Navigation */}
        <div className="hidden md:flex items-center bg-white bg-opacity-80 rounded-full px-2 py-1 shadow-sm gap-3">
          <button
            onClick={() => setActiveTab('home')}
            className={`p-2 rounded-full ${activeTab === 'home' ? 'bg-white shadow-md' : 'hover:bg-gray-100'}`}
          >
            <Home size={20} className={activeTab === 'home' ? 'text-blue-600' : 'text-gray-600'} />
          </button>
          
          <div className="w-px h-6 bg-gray-200 mx-1"></div>
          
          <button
            onClick={() => setActiveTab('image')}
            className={`p-2 rounded-full ${activeTab === 'image' ? 'bg-white shadow-md' : 'hover:bg-gray-100'}`}
          >
            <ImageIcon size={20} className={activeTab === 'image' ? 'text-blue-600' : 'text-gray-600'} />
          </button>
          
          <button
            onClick={() => setActiveTab('video')}
            className={`p-2 rounded-full ${activeTab === 'video' ? 'bg-white shadow-md' : 'hover:bg-gray-100'}`}
          >
            <Video size={20} className={activeTab === 'video' ? 'text-blue-600' : 'text-gray-600'} />
          </button>
          
          <div className="w-px h-6 bg-gray-200 mx-1"></div>
          
          <button
            onClick={() => setActiveTab('magic')}
            className={`p-2 rounded-full ${activeTab === 'magic' ? 'bg-white shadow-md' : 'hover:bg-gray-100'}`}
          >
            <Wand2 size={20} className={activeTab === 'magic' ? 'text-blue-600' : 'text-gray-600'} />
          </button>
          
          <button
            onClick={() => setActiveTab('brush')}
            className={`p-2 rounded-full ${activeTab === 'brush' ? 'bg-white shadow-md' : 'hover:bg-gray-100'}`}
          >
            <Paintbrush size={20} className={activeTab === 'brush' ? 'text-blue-600' : 'text-gray-600'} />
          </button>
          
          <button
            onClick={() => setActiveTab('pen')}
            className={`p-2 rounded-full ${activeTab === 'pen' ? 'bg-white shadow-md' : 'hover:bg-gray-100'}`}
          >
            <PenTool size={20} className={activeTab === 'pen' ? 'text-blue-600' : 'text-gray-600'} />
          </button>
          
          <div className="w-px h-6 bg-gray-200 mx-1"></div>
          
          <button
            onClick={() => setActiveTab('file')}
            className={`p-2 rounded-full ${activeTab === 'file' ? 'bg-white shadow-md' : 'hover:bg-gray-100'}`}
          >
            <File size={20} className={activeTab === 'file' ? 'text-blue-600' : 'text-gray-600'} />
          </button>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          <button className="hidden md:flex items-center gap-1 text-gray-700 hover:text-blue-600">
            <ImageIcon size={18} />
            <span className="text-sm">Gallery</span>
          </button>
          
          <button className="hidden md:flex items-center gap-1 text-gray-700 hover:text-blue-600">
            <Headphones size={18} />
            <span className="text-sm">Support</span>
          </button>
          
          <button className="p-1.5 rounded-full hover:bg-gray-100">
            <Bell size={18} className="text-gray-700" />
          </button>
          
          <button className="p-1.5 rounded-full hover:bg-gray-100">
            <Sun size={18} className="text-gray-700" />
          </button>
          
          <div className="flex items-center">
            <div className="h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center ml-2 relative">
              <span className="text-xs font-medium text-gray-700">J</span>
              
              {/* Mobile dropdown just on mobile */}
              <button 
                onClick={toggleDropdown}
                className="md:hidden absolute -bottom-2 -right-2 bg-gray-200 rounded-full p-1"
              >
                <ChevronDown size={14} />
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Mobile Navigation */}
      <div className="md:hidden flex items-center justify-center mt-4 bg-white bg-opacity-80 rounded-full px-2 py-1 shadow-sm overflow-x-auto">
        <div className="flex items-center space-x-1">
          <button
            onClick={() => setActiveTab('home')}
            className={`p-2 rounded-full ${activeTab === 'home' ? 'bg-white shadow-md' : 'hover:bg-gray-100'}`}
          >
            <Home size={18} className={activeTab === 'home' ? 'text-blue-600' : 'text-gray-600'} />
          </button>
          
          <button
            onClick={() => setActiveTab('image')}
            className={`p-2 rounded-full ${activeTab === 'image' ? 'bg-white shadow-md' : 'hover:bg-gray-100'}`}
          >
            <ImageIcon size={18} className={activeTab === 'image' ? 'text-blue-600' : 'text-gray-600'} />
          </button>
          
          <button
            onClick={() => setActiveTab('video')}
            className={`p-2 rounded-full ${activeTab === 'video' ? 'bg-white shadow-md' : 'hover:bg-gray-100'}`}
          >
            <Video size={18} className={activeTab === 'video' ? 'text-blue-600' : 'text-gray-600'} />
          </button>
          
          <button
            onClick={() => setActiveTab('magic')}
            className={`p-2 rounded-full ${activeTab === 'magic' ? 'bg-white shadow-md' : 'hover:bg-gray-100'}`}
          >
            <Wand2 size={18} className={activeTab === 'magic' ? 'text-blue-600' : 'text-gray-600'} />
          </button>
          
          <button
            onClick={() => setActiveTab('brush')}
            className={`p-2 rounded-full ${activeTab === 'brush' ? 'bg-white shadow-md' : 'hover:bg-gray-100'}`}
          >
            <Paintbrush size={18} className={activeTab === 'brush' ? 'text-blue-600' : 'text-gray-600'} />
          </button>
          
          <button
            onClick={() => setActiveTab('pen')}
            className={`p-2 rounded-full ${activeTab === 'pen' ? 'bg-white shadow-md' : 'hover:bg-gray-100'}`}
          >
            <PenTool size={18} className={activeTab === 'pen' ? 'text-blue-600' : 'text-gray-600'} />
          </button>
          
          <button
            onClick={() => setActiveTab('file')}
            className={`p-2 rounded-full ${activeTab === 'file' ? 'bg-white shadow-md' : 'hover:bg-gray-100'}`}
          >
            <File size={18} className={activeTab === 'file' ? 'text-blue-600' : 'text-gray-600'} />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown  */}
      <AnimatePresence>
        {isDropdownOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-200 py-2 px-4"
          >
            <div className="flex flex-col space-y-2">
              <button className="flex items-center gap-2 text-gray-700 hover:text-blue-600 py-2">
                <ImageIcon size={18} />
                <span className="text-sm">Gallery</span>
              </button>
              <button className="flex items-center gap-2 text-gray-700 hover:text-blue-600 py-2">
                <Headphones size={18} />
                <span className="text-sm">Support</span>
              </button>
              <div className="border-t border-gray-200 pt-2 mt-1">
                <span className="text-xs text-gray-500 block py-2">
                  johnayomide920@gmail.com
                </span>
                <button className="text-sm text-blue-600 font-medium">
                  Sign Out
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}