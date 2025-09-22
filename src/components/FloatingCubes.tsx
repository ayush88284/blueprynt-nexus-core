import { useEffect, useState } from "react";

interface Cube {
  id: number;
  x: number;
  y: number;
  delay: number;
  size: number;
  opacity: number;
}

const FloatingCubes = () => {
  const [cubes, setCubes] = useState<Cube[]>([]);
  const [assembled, setAssembled] = useState(false);

  useEffect(() => {
    // Generate random floating cubes
    const initialCubes: Cube[] = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: i * 0.2,
      size: 20 + Math.random() * 20,
      opacity: 0.3 + Math.random() * 0.4,
    }));
    
    setCubes(initialCubes);

    // Trigger assembly animation after a delay
    const timer = setTimeout(() => {
      setAssembled(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="text-primary"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Floating cubes */}
      {cubes.map((cube) => (
        <div
          key={cube.id}
          className={`absolute transition-all duration-1000 ease-out ${
            assembled ? "animate-cube-assemble" : ""
          }`}
          style={{
            left: assembled ? "50%" : `${cube.x}%`,
            top: assembled ? "50%" : `${cube.y}%`,
            transform: assembled 
              ? "translate(-50%, -50%)" 
              : "translate(-50%, -50%)",
            animationDelay: `${cube.delay}s`,
            "--start-x": `${(cube.x - 50) * 4}px`,
            "--start-y": `${(cube.y - 50) * 4}px`,
          } as React.CSSProperties}
        >
          <div
            className="bg-gradient-primary rounded-md animate-float opacity-60 shadow-blue"
            style={{
              width: `${cube.size}px`,
              height: `${cube.size}px`,
              opacity: assembled ? 0.8 : cube.opacity,
              animationDelay: `${cube.delay * 2}s`,
            }}
          />
        </div>
      ))}

      {/* Central logo placeholder - this will be replaced by the actual logo */}
      {assembled && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-scale-in">
          <div className="w-16 h-16 bg-gradient-primary rounded-lg shadow-glow animate-glow-pulse" />
        </div>
      )}
    </div>
  );
};

export default FloatingCubes;