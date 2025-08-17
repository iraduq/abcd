import { ReactNode, lazy, Suspense } from "react";
import Header from "./Header";
import Footer from "./Footer";
import OptimizedBackground from "../Background/OptimizedBackground";

// Lazy load 3D components for better performance
const ParallaxCharacters = lazy(() => import("../ThreeD/ParallaxCharacters"));

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground relative">
      <OptimizedBackground />
      <Suspense fallback={null}>
        <ParallaxCharacters />
      </Suspense>
      <Header />
      <main className="flex-1 pt-16 relative z-10">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;