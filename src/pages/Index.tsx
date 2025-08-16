import { Parallax } from "react-scroll-parallax";

const Index = () => {
  const characters = ["✨", "🚀", "💫", "⭐", "🌟", "💎", "🔮", "⚡", "🌙", "☄️"];
  
  return (
    <div className="min-h-[300vh] bg-gradient-to-b from-background via-background/80 to-background relative overflow-hidden">
      {/* Floating Characters with Parallax */}
      {characters.map((char, index) => (
        <Parallax
          key={index}
          translateY={[-100, 100]}
          translateX={[-50, 50]}
          rotate={[0, 360]}
          speed={Math.random() * 20 - 10}
          className={`absolute text-6xl opacity-20 select-none pointer-events-none`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 200 + 50}%`,
            animationDelay: `${index * 0.5}s`,
          }}
        >
          {char}
        </Parallax>
      ))}

      {/* Main Content */}
      <div className="relative z-10">
        <section className="min-h-screen flex items-center justify-center">
          <Parallax translateY={[-20, 20]} className="text-center">
            <h1 className="text-6xl font-bold mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Parallax Magic
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experimentează cu efecte parallax și caractere flotante
            </p>
          </Parallax>
        </section>

        <section className="min-h-screen flex items-center justify-center">
          <Parallax translateY={[40, -40]} className="text-center">
            <h2 className="text-4xl font-bold mb-6 text-primary">
              Secțiunea Două
            </h2>
            <div className="grid grid-cols-3 gap-8 max-w-4xl">
              {[1, 2, 3].map((item) => (
                <Parallax key={item} translateY={[20, -20]} speed={item * 5}>
                  <div className="bg-card p-8 rounded-lg border border-border hover:border-primary/50 transition-colors">
                    <div className="text-4xl mb-4">{characters[item - 1]}</div>
                    <h3 className="text-xl font-semibold mb-2">Element {item}</h3>
                    <p className="text-muted-foreground">Conținut cu efect parallax</p>
                  </div>
                </Parallax>
              ))}
            </div>
          </Parallax>
        </section>

        <section className="min-h-screen flex items-center justify-center">
          <Parallax translateY={[-60, 60]} rotate={[0, 180]} className="text-center">
            <div className="text-8xl mb-8">🌌</div>
            <h2 className="text-5xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              Universul Parallax
            </h2>
          </Parallax>
        </section>
      </div>

      {/* Background Pattern */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 animate-pulse"></div>
      </div>
    </div>
  );
};

export default Index;