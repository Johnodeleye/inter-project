'use client';

import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

export default function ToastInstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [hasShownPrompt, setHasShownPrompt] = useState(false);

  useEffect(() => {
    // Check if browser supports PWA installation
    if (typeof window === 'undefined' || !('BeforeInstallPromptEvent' in window)) {
      return;
    }

    const handler = (e: any) => {
      // Prevent Chrome 67 and earlier from automatically showing the prompt
      e.preventDefault();
      console.log('PWA install prompt available');
      setDeferredPrompt(e);
      
      // Show our custom prompt immediately
      if (!hasShownPrompt) {
        showInstallPrompt();
      }
    };

    window.addEventListener('beforeinstallprompt', handler);

    // Fallback: Show prompt after 10 seconds if event doesn't fire
    const timer = setTimeout(() => {
      if (!hasShownPrompt && deferredPrompt) {
        showInstallPrompt();
      }
    }, 10000);

    return () => {
      window.removeEventListener('beforeinstallprompt', handler);
      clearTimeout(timer);
    };
  }, [hasShownPrompt, deferredPrompt]);

  const showInstallPrompt = () => {
    if (hasShownPrompt || !deferredPrompt) return;

    toast.custom(
      (t) => (
        <div className={`${t.visible ? 'animate-enter' : 'animate-leave'} 
          bg-white p-4 rounded-lg shadow-lg border border-blue-100 max-w-md w-full`}>
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img 
                src="/logo.png" 
                alt="Krea AI"
                className="h-10 w-10"
              />
            </div>
            <div className="ml-3">
              <h3 className="text-lg font-medium text-gray-900">Install Krea AI</h3>
              <p className="mt-1 text-sm text-gray-500">
                Get the full experience by installing this as an app on your device.
              </p>
              <div className="mt-4 flex space-x-3">
                <button
                  onClick={async () => {
                    await handleInstallClick();
                    toast.dismiss(t.id);
                  }}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Install Now
                </button>
                <button
                  onClick={() => {
                    toast.dismiss(t.id);
                    setHasShownPrompt(true);
                  }}
                  className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
                >
                  Later
                </button>
              </div>
            </div>
          </div>
        </div>
      ),
      {
        duration: 15000, // Show for 15 seconds
        position: 'bottom-center',
      }
    );

    setHasShownPrompt(true);
  };

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    try {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      
      if (outcome === 'accepted') {
        toast.success('Krea AI installed successfully!');
      } else {
        toast.error('Installation cancelled');
      }
    } catch (error) {
      toast.error('Installation failed');
    }
  };

  return null;
}