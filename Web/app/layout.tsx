// layout.tsx 
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import ClientComponents from "@/components/ClientComponents";

// Font configuration
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: '--font-outfit'
});

export const metadata: Metadata = {
  title: "Krea AI",
  description: "Krea AI ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable}`}>
      <head>
      
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#2563eb" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="font-outfit antialiased">
       <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: '#2563eb',
            color: '#fff',
            borderRadius: '8px',
            fontWeight: 500,
            fontFamily: 'Outfit, sans-serif',
          },
          success: {
            duration: 3000,
            iconTheme: {
              primary: '#fff',
              secondary: '#2563eb',
            },
          },
          error: {
            style: {
              background: '#ef4444',
            },
          },
        }}
      />
        {children}
        <ClientComponents />
      </body>
    </html>
  );
}