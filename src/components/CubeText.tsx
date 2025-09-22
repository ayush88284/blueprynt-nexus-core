import { useEffect, useState } from "react";

interface CubeTextProps {
  text: string;
  className?: string;
}

const CubeText = ({ text, className = "" }: CubeTextProps) => {
  const [assembled, setAssembled] = useState(false);
  const [cubes, setCubes] = useState<Array<{ id: number; char: string; x: number; y: number; delay: number }>>([]);

  useEffect(() => {
    // Generate cubes for each character
    const chars = text.split('');
    const initialCubes = chars.map((char, index) => ({
      id: index,
      char: char === ' ' ? '\u00A0' : char, // Non-breaking space for spaces
      x: Math.random() * 200 - 100, // Random initial position
      y: Math.random() * 200 - 100,
      delay: index * 0.1, // Staggered animation
    }));
    
    setCubes(initialCubes);

    // Start assembly animation
    const timer = setTimeout(() => {
      setAssembled(true);
    }, 500);

    return () => clearTimeout(timer);
  }, [text]);

  return (
    <div className={`relative inline-block ${className}`}>
      <div className="flex flex-wrap justify-center items-center">
        {cubes.map((cube) => (
          <div
            key={cube.id}
            className={`relative transition-all duration-1000 ease-out ${
              assembled ? "translate-x-0 translate-y-0 opacity-100" : "opacity-0"
            }`}
            style={{
              transform: assembled 
                ? "translate(0, 0)" 
                : `translate(${cube.x}px, ${cube.y}px)`,
              transitionDelay: `${cube.delay}s`,
            }}
          >
            {/* Cube background */}
            <div className="absolute inset-0 bg-gradient-primary rounded-sm opacity-20 transform rotate-3 scale-110" />
            
            {/* Character */}
            <span className="relative z-10 inline-block font-poppins font-bold text-5xl md:text-7xl lg:text-8xl bg-gradient-primary bg-clip-text text-transparent px-1">
              {cube.char}
            </span>
            
            {/* Glow effect */}
            <div className="absolute inset-0 bg-cyan rounded-sm opacity-0 blur-sm animate-pulse" 
                 style={{ animationDelay: `${cube.delay + 1}s` }} />
          </div>
        ))}
      </div>
      
      {/* Fallback text for screen readers */}
      <span className="sr-only">{text}</span>
    </div>
  );
};

export default CubeText;