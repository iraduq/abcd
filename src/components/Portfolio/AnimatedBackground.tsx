import { useEffect, useState } from "react";

interface SymbolItem {
  id: number;
  left: number;
  top: number;
  size: number;
  duration: number;
  char: string;
  opacity: number;
  drift: number; // deriva orizontală
  blur: number; // intensitate blur
  color: string; // culoarea simbolului
}

interface MorphShape {
  id: number;
  x: number;
  y: number;
  size: number;
  rotation: number;
  color: string;
  type: 'circle' | 'square' | 'triangle' | 'hexagon';
}

const AnimatedBackground: React.FC = () => {
  const [symbols, setSymbols] = useState<SymbolItem[]>([]);
  const [morphShapes, setMorphShapes] = useState<MorphShape[]>([]);

  useEffect(() => {
    const syms: SymbolItem[] = [];
    const shapes: MorphShape[] = [];
    
    // Detectare dispozitiv mobil
    const isMobile = window.innerWidth < 768 || "ontouchstart" in window;
    const total = isMobile ? 10 : 40;
    const totalShapes = isMobile ? 5 : 15;
    
    const chars = [
      "★", "✦", "✧", "✩", "☼", "❂", "✪", "◆", "◇", "○", "●", "◉", "✨",
      "⚡", "🌟", "💫", "✴️", "🔮", "💎", "🌙", "☄️", "🎆", "🎇"
    ];
    
    const colors = [
      "hsl(var(--primary))", "hsl(var(--accent))", "hsl(var(--glow))",
      "hsl(160 70% 85%)", "hsl(200 80% 70%)", "hsl(280 60% 75%)",
      "hsl(45 90% 80%)", "hsl(320 50% 85%)", "hsl(180 60% 80%)"
    ];

    // Generare simboluri
    for (let i = 0; i < total; i++) {
      syms.push({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 140,
        size: Math.random() * (isMobile ? 20 : 32) + (isMobile ? 8 : 12),
        duration: Math.random() * (isMobile ? 20 : 30) + (isMobile ? 15 : 20),
        char: chars[Math.floor(Math.random() * chars.length)],
        opacity: Math.random() * 0.7 + 0.4,
        drift: (Math.random() - 0.5) * (isMobile ? 25 : 40),
        blur: Math.random() * (isMobile ? 1.5 : 3),
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    // Generare forme morfice
    for (let i = 0; i < totalShapes; i++) {
      const shapeTypes: MorphShape['type'][] = ['circle', 'square', 'triangle', 'hexagon'];
      shapes.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 80 + 40,
        rotation: Math.random() * 360,
        color: colors[Math.floor(Math.random() * colors.length)],
        type: shapeTypes[Math.floor(Math.random() * shapeTypes.length)]
      });
    }

    setSymbols(syms);
    setMorphShapes(shapes);
  }, []);

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @keyframes float {
            0% {
              transform: translateY(0) translateX(0) rotate(0deg) scale(0.5);
              opacity: 0;
              filter: blur(2px);
            }
            5% {
              opacity: 1;
              filter: blur(0px);
              transform: translateY(-10vh) translateX(0) rotate(45deg) scale(1);
            }
            25% {
              transform: translateY(-30vh) translateX(5px) rotate(135deg) scale(1.1);
            }
            50% {
              transform: translateY(-60vh) translateX(var(--drift)) rotate(225deg) scale(0.9);
            }
            75% {
              transform: translateY(-90vh) translateX(calc(var(--drift) * 1.5)) rotate(315deg) scale(1.05);
            }
            95% {
              opacity: 1;
              filter: blur(0px);
            }
            100% {
              transform: translateY(-140vh) translateX(calc(var(--drift) * 2)) rotate(405deg) scale(0.3);
              opacity: 0;
              filter: blur(3px);
            }
          }

          @keyframes sparkle {
            0%, 100% { 
              text-shadow: 0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor;
              transform: scale(1);
            }
            50% { 
              text-shadow: 0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor;
              transform: scale(1.2);
            }
          }

          @keyframes morphShape {
            0% { 
              transform: rotate(0deg) scale(1); 
              border-radius: 50%; 
              opacity: 0.3;
            }
            25% { 
              transform: rotate(90deg) scale(1.2); 
              border-radius: 0%; 
              opacity: 0.6;
            }
            50% { 
              transform: rotate(180deg) scale(0.8); 
              border-radius: 30%; 
              opacity: 0.8;
            }
            75% { 
              transform: rotate(270deg) scale(1.1); 
              border-radius: 10%; 
              opacity: 0.5;
            }
            100% { 
              transform: rotate(360deg) scale(1); 
              border-radius: 50%; 
              opacity: 0.3;
            }
          }

          @keyframes energyWave {
            0% { 
              transform: scale(0) rotate(0deg); 
              opacity: 1;
              filter: blur(0px);
            }
            50% { 
              transform: scale(2) rotate(180deg); 
              opacity: 0.5;
              filter: blur(2px);
            }
            100% { 
              transform: scale(4) rotate(360deg); 
              opacity: 0;
              filter: blur(5px);
            }
          }

          @keyframes particleTrail {
            0% { 
              transform: translateY(100vh) translateX(0) scale(0); 
              opacity: 0;
              box-shadow: 0 0 0px currentColor;
            }
            10% { 
              opacity: 1; 
              transform: translateY(80vh) translateX(10px) scale(1);
              box-shadow: 0 0 20px currentColor;
            }
            90% { 
              opacity: 0.8; 
              transform: translateY(-10vh) translateX(-10px) scale(0.5);
              box-shadow: 0 0 30px currentColor;
            }
            100% { 
              transform: translateY(-20vh) translateX(0) scale(0); 
              opacity: 0;
              box-shadow: 0 0 0px currentColor;
            }
          }

          .animate-float {
            animation-name: float;
            animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
            animation-iteration-count: infinite;
            will-change: transform, opacity;
          }

          .sparkle-effect {
            animation: sparkle 3s ease-in-out infinite;
            text-shadow: 0 0 3px currentColor, 0 0 6px currentColor;
          }

          .morph-shape {
            animation: morphShape 15s ease-in-out infinite;
            filter: blur(1px);
          }

          .energy-wave {
            animation: energyWave 8s ease-out infinite;
          }

          .particle-trail {
            animation: particleTrail linear infinite;
          }

          /* Optimizări pentru mobil */
          @media (max-width: 768px) {
            .animate-float {
              animation-timing-function: ease-out; /* mai puțin CPU intensiv */
            }
            
            .sparkle-effect {
              animation: none; /* dezactivează sparkle pe mobil pentru performanță */
              text-shadow: 0 0 2px currentColor;
            }
          }

          /* Gradient overlay pentru depth */
          .bg-overlay {
            background: linear-gradient(
              180deg,
              rgba(0, 0, 0, 0) 0%,
              rgba(0, 0, 0, 0.05) 30%,
              rgba(0, 0, 0, 0.1) 60%,
              rgba(0, 0, 0, 0.2) 100%
            );
          }
        `,
        }}
      />

      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        {/* Gradient overlay pentru depth */}
        <div className="absolute inset-0 bg-overlay" />

        {symbols.map((s) => (
          <span
            key={s.id}
            className={`absolute animate-float ${
              Math.random() > 0.7 ? "sparkle-effect" : ""
            }`}
            style={
              {
                left: `${s.left}%`,
                top: `${s.top}%`,
                fontSize: `${s.size}px`,
                color: s.color,
                opacity: s.opacity,
                animationDuration: `${s.duration}s`,
                animationDelay: `${-(s.top / 140) * s.duration}s`,
                filter: `blur(${s.blur}px)`,
                "--drift": `${s.drift}px`,
              } as React.CSSProperties & { "--drift": string }
            }
          >
            {s.char}
          </span>
        ))}

        {/* Forme morfice */}
        {morphShapes.map((shape) => (
          <div
            key={`morph-${shape.id}`}
            className="absolute morph-shape"
            style={{
              left: `${shape.x}%`,
              top: `${shape.y}%`,
              width: `${shape.size}px`,
              height: `${shape.size}px`,
              backgroundColor: shape.color,
              opacity: 0.15,
              animationDelay: `${shape.id * 2}s`,
              animationDuration: `${15 + shape.id * 3}s`,
            }}
          />
        ))}

        {/* Unde de energie */}
        {Array.from({ length: window.innerWidth < 768 ? 3 : 8 }).map((_, i) => (
          <div
            key={`energy-${i}`}
            className="absolute energy-wave rounded-full border-2 border-primary"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: "20px",
              height: "20px",
              animationDelay: `${i * 2}s`,
              animationDuration: `${8 + i}s`,
            }}
          />
        ))}

        {/* Particule cu urme */}
        {Array.from({ length: window.innerWidth < 768 ? 5 : 12 }).map((_, i) => (
          <div
            key={`trail-${i}`}
            className="absolute particle-trail rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 6 + 3}px`,
              height: `${Math.random() * 6 + 3}px`,
              backgroundColor: `hsl(${Math.random() * 60 + 160} 70% 70%)`,
              animationDuration: `${Math.random() * 15 + 10}s`,
              animationDelay: `${-Math.random() * 15}s`,
            }}
          />
        ))}

        {/* Particule extra subtile în fundal */}
        {Array.from({ length: window.innerWidth < 768 ? 8 : 20 }).map(
          (_, i) => (
            <div
              key={`particle-${i}`}
              className="absolute rounded-full bg-white opacity-10"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 4 + 1}px`,
                height: `${Math.random() * 4 + 1}px`,
                animation: `float ${Math.random() * 30 + 20}s linear infinite`,
                animationDelay: `${-Math.random() * 30}s`,
              }}
            />
          )
        )}
      </div>
    </>
  );
};

export default AnimatedBackground;
