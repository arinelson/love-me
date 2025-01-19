import { useEffect, useState } from "react";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-[#1A1F2C] to-[#2C1A2F]">
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
        className={`relative px-8 py-12 glass-card rounded-xl transition-all duration-1000 floating ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h1 className="text-white text-3xl md:text-5xl font-bold leading-tight tracking-tight">
          VAI PRECISAR DE 
          <span className="block mt-2">MAIS TEMPO</span>
          <span className="block mt-2">OU VAI TÁ LIVRE,</span>
          <span className="neon-text text-rose-300 block mt-2">AMOR?</span>
        </h1>
      </div>
    </div>
  );
};

export default Index;