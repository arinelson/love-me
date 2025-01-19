import { useEffect, useState } from "react";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showAudioPopup, setShowAudioPopup] = useState(true);

  useEffect(() => {
    setIsVisible(true);
    
    // Hide audio popup after 10 seconds
    const timeout = setTimeout(() => {
      setShowAudioPopup(false);
    }, 10000);

    return () => clearTimeout(timeout);
  }, []);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5582991799095', '_blank');
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-[#1A1F2C] to-[#2C1A2F] overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute h-32 w-32 rounded-full bg-purple-500 blur-3xl animate-pulse top-1/4 left-1/4" />
        <div className="absolute h-32 w-32 rounded-full bg-blue-500 blur-3xl animate-pulse bottom-1/4 right-1/4" />
        <div className="absolute h-32 w-32 rounded-full bg-pink-500 blur-3xl animate-pulse top-1/2 left-1/2" />
      </div>

      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/lovable-uploads/5efaadb9-4d49-419d-8a62-0499c18e4b2e.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      </div>

      {/* Message Container */}
      <div 
        className={`relative px-8 py-12 glass-card rounded-xl transition-all duration-1000 floating max-w-2xl mx-4 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
        style={{
          background: "rgba(255, 255, 255, 0.03)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255, 255, 255, 0.05)",
          boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl" />
        
        <h1 className="text-white text-3xl md:text-5xl font-bold leading-tight tracking-tight relative z-10">
          <span className="block transform transition-all duration-500 hover:scale-105">VAI PRECISAR DE</span>
          <span className="block mt-2 transform transition-all duration-500 hover:scale-105">MAIS TEMPO</span>
          <span className="block mt-2 transform transition-all duration-500 hover:scale-105">OU VAI TÁ LIVRE,</span>
          <span className="neon-text text-rose-300 block mt-2 transform transition-all duration-500 hover:scale-105">AMOR?</span>
        </h1>

        {/* Audio Section */}
        <div className="mt-8 relative">
          <div className="mt-4">
            <iframe 
              src="https://drive.google.com/file/d/1ZIFfpnwk9trRRrDxvkbdaBDzaCq14PVC/preview" 
              width="300" 
              height="100" 
              allow="autoplay"
              className="mx-auto rounded-lg shadow-lg"
            ></iframe>
          </div>

          {/* Glowing Popup */}
          {showAudioPopup && (
            <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600/90 to-pink-600/90 px-6 py-3 rounded-full text-white text-sm animate-bounce shadow-[0_0_15px_rgba(168,85,247,0.5)]">
              Escute a mensagem! 🎵
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-t-[8px] border-t-pink-600/90 border-r-[8px] border-r-transparent" />
            </div>
          )}
        </div>

        <button
          onClick={handleWhatsAppClick}
          className="mt-8 px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full font-semibold transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(34,197,94,0.6)] active:scale-95 animate-pulse relative group overflow-hidden"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-green-400/30 to-green-600/30 group-hover:opacity-75 transition-opacity" />
          <span className="relative flex items-center gap-2">
            Me manda mensagem 
            <span className="text-xl">❤️</span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Index;