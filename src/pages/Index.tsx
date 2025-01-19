import { useEffect, useState } from "react";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/lovable-uploads/5efaadb9-4d49-419d-8a62-0499c18e4b2e.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Message Container */}
      <div 
        className={`relative px-6 py-8 text-center transition-opacity duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{ animation: isVisible ? "fadeIn 1.5s ease-out" : "none" }}
      >
        <h1 className="text-white text-3xl md:text-5xl font-semibold leading-tight tracking-tight drop-shadow-lg">
          VAI PRECISAR DE MAIS TEMPO<br />
          OU VAI TÁ LIVRE,<br className="md:hidden" />
          <span className="text-rose-300">AMOR?</span>
        </h1>
      </div>
    </div>
  );
};

export default Index;