import { useEffect, useState } from "react";
import advocateProfile from "@/assets/advocate-profile.jpg";
import lawOfficeBackground from "@/assets/new-law-office-background.jpg";

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 5000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 overflow-hidden">
      {/* Law Office Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${lawOfficeBackground})` }}
      ></div>
      
      {/* Dark Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      {/* Subtle animated overlay for professional effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-legal-deep-blue/20 via-transparent to-justice-gold/20"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl animate-float-slow"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-l from-court-purple/10 to-legal-deep-blue/10 rounded-full blur-3xl animate-float-reverse"></div>
      
      {/* Main Content */}
      <div className="relative text-center z-10">
        <div className="mb-8">
          <img 
            src={advocateProfile} 
            alt="Babu Advocates - Legal Professional" 
            className={`w-52 h-52 rounded-full mx-auto shadow-glow object-cover border-4 border-white/30 transition-all duration-700 ${
              imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
            onLoad={() => setImageLoaded(true)}
          />
        </div>
        
        <div className={`space-y-4 transition-all duration-700 delay-300 ${imageLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-justice-gold via-prestige-amber to-justice-gold bg-clip-text text-transparent tracking-wide animate-typewriter relative">
            <span className="animate-glow-text">Babu Advocates</span>
          </h1>
          
          <h4 className="text-2xl font-semibold bg-gradient-to-r from-white via-justice-gold/90 to-white bg-clip-text text-transparent animate-slide-up tracking-wider relative">
            <span className="animate-shimmer">Your Legal Doctor</span>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;