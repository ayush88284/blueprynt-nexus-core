import { useEffect, useState } from "react";

interface BackgroundCube {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  delay: number;
  duration: number;
}

const AnimatedBackground = () => {
  const [cubes, setCubes] = useState<BackgroundCube[]>([]);

  useEffect(() => {
    const generateCubes = () => {
      const newCubes: BackgroundCube[] = [];
      const cubeCount = 15; // Reduced for better performance
      
      for (let i = 0; i < cubeCount; i++) {
        newCubes.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 20 + 10, // 10-30px
          opacity: Math.random() * 0.3 + 0.1, // 0.1-0.4
          delay: Math.random() * 2,
          duration: Math.random() * 4 + 3, // 3-7s
        });
      }
      
      setCubes(newCubes);
    };

    generateCubes();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {cubes.map((cube) => (
        <div
          key={cube.id}
          className="absolute bg-gradient-primary rounded-sm"
          style={{
            left: `${cube.x}%`,
            top: `${cube.y}%`,
            width: `${cube.size}px`,
            height: `${cube.size}px`,
            opacity: cube.opacity,
            animation: `float ${cube.duration}s ease-in-out infinite`,
            animationDelay: `${cube.delay}s`,
            transform: 'rotate(45deg)',
          }}
        />
      ))}
      
      {/* Subtle grid overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />
    </div>
  );
};

export default AnimatedBackground;