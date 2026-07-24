import React, { useState, useEffect } from "react";
import IntroScreen from "@/components/IntroScreen";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import Home from "@/pages/Home";

export default function HomeWrapper() {
  const [entered, setEntered] = useState(false);

  // Respect reduced motion: skip the intro portal after a short fade.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const t = setTimeout(() => setEntered(true), 300);
      return () => clearTimeout(t);
    }
  }, []);

  return (
    <>
      <CustomCursor />
      <ScrollProgressBar />
      {entered ? (
        <Home />
      ) : (
        <IntroScreen onEnter={() => setEntered(true)} />
      )}
    </>
  );
}