// components/Footer.tsx
'use client';

import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white py-6 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left */}
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 relative">
            <Image
              src="/logo.png"
              alt="Krea AI"
              fill
              className="object-contain"
            />
          </div>
          <span className="text-2xl font-bold">Krea AI</span>
        </div>

        {/* Right  */}
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-300">curated by</span>
          <div className="h-6 w-12 relative"> {/* Changed from w-20 to w-12 */}
            <Image
              src="/mobbin.png" 
              alt="Mobbin"
              fill
              className="object-contain"
            />
          </div>
          <span className="text-lg font-bold">Mobbins</span>
        </div>
      </div>
    </footer>
  );
}