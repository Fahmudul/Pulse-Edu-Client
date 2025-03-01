"use client";
import { useRef } from "react";
import Header from "@/components/Shared/Header";
import Footer from "@/components/Shared/Footer";
// import 'animate.css';
export default function Home({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLElement>(null);

  return (
    <main className="relative" ref={ref}>
      <div className="bg-primaryPro border  w-full lg:p-8 ">
        <Header />
      </div>
      {children}
      <Footer />
    </main>
  );
}
