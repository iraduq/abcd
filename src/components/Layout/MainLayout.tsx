import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import OptimizedBackground from "../Background/OptimizedBackground";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground relative">
      <OptimizedBackground />
      <Header />
      <main className="flex-1 pt-16">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;