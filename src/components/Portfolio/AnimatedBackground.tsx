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

const AnimatedBackground: React.FC = () => {
  const [symbols, setSymbols] = useState<SymbolItem[]>([]);

  useEffect(() => {
    const syms: SymbolItem[] = [];
    // Detectare dispozitiv mobil
    const isMobile = window.innerWidth < 768 || "ontouchstart" in window;
    const total = isMobile ? 10 : 40; // mult mai puține pe mobil
    const chars = [
      "★",
      "✦",
      "✧",
      "✩",
      "☼",
      "❂",
      "✪",
      "◆",
      "◇",
      "○",
      "●",
      "◉",
      "✨",
    ];
    const colors = [
      "#ffffff",
      "#fef3c7",
      "#ddd6fe",
      "#fce7f3",
      "#d1fae5",
      "#bfdbfe",
      "#fed7d7",
      "#f0f9ff",
      "#ecfdf5",
      "#fef7cd",
    ];

    for (let i = 0; i < total; i++) {
      syms.push({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 140,
        size: Math.random() * (isMobile ? 20 : 28) + (isMobile ? 6 : 8), // mai mici pe mobil
        duration: Math.random() * (isMobile ? 20 : 25) + (isMobile ? 12 : 15), // mai rapide pe mobil
        char: chars[Math.floor(Math.random() * chars.length)],
        opacity: Math.random() * 0.6 + 0.3,
        drift: (Math.random() - 0.5) * (isMobile ? 20 : 30), // mai puțin drift pe mobil
        blur: Math.random() * (isMobile ? 1 : 2), // mai puțin blur pe mobil
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    setSymbols(syms);
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

        {/* Particule extra subtile în fundal - mai puține pe mobil */}
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
