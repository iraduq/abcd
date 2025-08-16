import { useEffect, useState, useMemo } from "react";

interface ParticleItem {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

const OptimizedBackground = () => {
  const [particles, setParticles] = useState<ParticleItem[]>([]);

  // Detectare dispozitiv și optimizare
  const { isMobile, particleCount, floatingCount } = useMemo(() => {
    const mobile = window.innerWidth < 768;
    return {
      isMobile: mobile,
      particleCount: mobile ? 8 : 15,
      floatingCount: mobile ? 12 : 25,
    };
  }, []);

  useEffect(() => {
    const items: ParticleItem[] = [];

    for (let i = 0; i < particleCount; i++) {
      items.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * (isMobile ? 3 : 5) + (isMobile ? 2 : 3),
        duration: Math.random() * 20 + 15,
        delay: Math.random() * -20,
        opacity: Math.random() * 0.4 + 0.1,
      });
    }

    setParticles(items);
  }, [particleCount, isMobile]);

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @keyframes subtleFloat {
            0%, 100% {
              transform: translateY(0px) translateX(0px) scale(1);
              opacity: var(--particle-opacity);
            }
            25% {
              transform: translateY(-20px) translateX(10px) scale(1.1);
              opacity: calc(var(--particle-opacity) * 1.5);
            }
            50% {
              transform: translateY(-40px) translateX(-5px) scale(0.9);
              opacity: var(--particle-opacity);
            }
            75% {
              transform: translateY(-20px) translateX(-10px) scale(1.05);
              opacity: calc(var(--particle-opacity) * 1.2);
            }
          }

          @keyframes gentleDrift {
            0% {
              transform: translateX(0px) rotate(0deg);
            }
            50% {
              transform: translateX(20px) rotate(180deg);
            }
            100% {
              transform: translateX(0px) rotate(360deg);
            }
          }

          .optimized-particle {
            animation: subtleFloat linear infinite;
            will-change: transform, opacity;
            border-radius: 50%;
            background: linear-gradient(45deg, 
              hsl(var(--primary) / 0.3), 
              hsl(var(--accent) / 0.2)
            );
            filter: blur(1px);
          }

          .floating-element {
            animation: gentleDrift ease-in-out infinite;
            will-change: transform;
            border-radius: 50%;
            background: radial-gradient(circle, 
              hsl(var(--glow) / 0.15) 0%, 
              transparent 70%
            );
          }

          /* Optimizări pentru performanță */
          @media (max-width: 768px) {
            .optimized-particle {
              animation-timing-function: ease-out;
            }
          }

          /* Gradient overlay subtil */
          .subtle-overlay {
            background: linear-gradient(
              135deg,
              hsl(var(--background) / 0.95) 0%,
              hsl(var(--background) / 0.98) 50%,
              hsl(var(--background) / 0.95) 100%
            );
          }
        `,
        }}
      />

      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Gradient overlay subtil */}
        <div className="absolute inset-0 subtle-overlay" />

        {/* Particule optimizate */}
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute optimized-particle"
            style={
              {
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                animationDuration: `${particle.duration}s`,
                animationDelay: `${particle.delay}s`,
                "--particle-opacity": particle.opacity,
              } as React.CSSProperties & { "--particle-opacity": number }
            }
          />
        ))}

        {/* Elemente flotante mari */}
        {Array.from({ length: floatingCount }).map((_, i) => (
          <div
            key={`float-${i}`}
            className="absolute floating-element"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * (isMobile ? 80 : 120) + (isMobile ? 40 : 60)}px`,
              height: `${Math.random() * (isMobile ? 80 : 120) + (isMobile ? 40 : 60)}px`,
              animationDuration: `${Math.random() * 25 + 20}s`,
              animationDelay: `${-Math.random() * 25}s`,
            }}
          />
        ))}

        {/* Blob-uri de ambient */}
        <div 
          className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-96 sm:h-96 rounded-full opacity-20"
          style={{
            background: `radial-gradient(circle, hsl(var(--primary) / 0.3) 0%, transparent 70%)`,
            filter: 'blur(40px)',
            animation: 'gentleDrift 30s ease-in-out infinite'
          }}
        />
        
        <div 
          className="absolute bottom-1/3 right-1/4 w-48 h-48 sm:w-80 sm:h-80 rounded-full opacity-15"
          style={{
            background: `radial-gradient(circle, hsl(var(--accent) / 0.4) 0%, transparent 70%)`,
            filter: 'blur(35px)',
            animation: 'gentleDrift 25s ease-in-out infinite reverse'
          }}
        />
      </div>
    </>
  );
};

export default OptimizedBackground;