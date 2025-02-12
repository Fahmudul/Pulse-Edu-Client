"use client";
import { useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
// import 'animate.css';
export default function Home({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLElement>(null);

  return (
    <main className="relative" id="home" ref={ref}>
      <Header />

      {children}

      <Footer />
    </main>
  );
}
