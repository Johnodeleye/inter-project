// app/page.tsx
import Header from '@/components/Header';
import HeroSection from '@/components/Hero';
import Features from '@/components/Features';
import Footer from '@/components/Footer'; 

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <Features />
      <Footer /> 
    </div>
  );
}