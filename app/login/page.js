"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [velocity, setVelocity] = useState({ dx: 2, dy: 2 });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Bouncing animation logic
  useEffect(() => {
    if (loading) return; // pause while "connecting"

    const moveButton = () => {
      setPosition((prev) => {
        const buttonWidth = 180;
        const buttonHeight = 50;

        const width = window.innerWidth - buttonWidth;
        const height = window.innerHeight - buttonHeight;

        let newX = prev.x + velocity.dx;
        let newY = prev.y + velocity.dy;
        let newDx = velocity.dx;
        let newDy = velocity.dy;

        // Bounce off edges
        if (newX <= 0 || newX >= width) newDx = -newDx;
        if (newY <= 0 || newY >= height) newDy = -newDy;

        setVelocity({ dx: newDx, dy: newDy });

        return {
          x: Math.max(0, Math.min(newX, width)),
          y: Math.max(0, Math.min(newY, height)),
        };
      });
    };

    const interval = setInterval(moveButton, 10);
    return () => clearInterval(interval);
  }, [velocity, loading]);

  // Handle troll login
  const handleClick = () => {
    setLoading(true);
    setMessage("");
    // ⏳ fake 10-second delay
    setTimeout(() => {
      setLoading(false);
      setMessage("Login Failed Successfully");
      // clear after 3 seconds
      setTimeout(() => setMessage(""), 3000);
    }, 10000);
  };

  return (
    <>
    <div className="relative w-full h-screen overflow-hidden flex items-center justify-center text-center">
      {/* Title */}
      <h1 className="text-white text-4xl font-semibold absolute top-10 left-1/2 transform -translate-x-1/2">
        Login
      </h1>

      {/* Bouncing Google Button */}
      <button
        disabled={loading}
        onClick={handleClick}
        className="absolute flex items-center gap-2 bg-white text-black font-semibold px-6 py-2 rounded-full shadow-lg transition-transform duration-200 active:scale-95"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          cursor: loading ? "not-allowed" : "pointer",
          opacity: loading ? 0.6 : 1,
        }}
      >
        <img
          src="https://www.svgrepo.com/show/355037/google.svg"
          alt="Google"
          className="h-6 w-6"
        />
        <span>Google</span>
      </button>

      {/* Loading overlay */}
      {loading && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/70 backdrop-blur-sm text-white text-lg font-medium z-50">
          <div className="flex flex-col items-center gap-3">
            <div className="animate-spin rounded-full h-10 w-10 border-4 border-white border-t-transparent"></div>
            <p>Connecting to Google servers...</p>
          </div>
        </div>
      )}

      {/* Message popup */}
      {message && (
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 bg-white/90 text-black font-semibold px-6 py-2 rounded-full shadow-lg animate-bounce">
          {message}
        </div>
      )}
    </div>
    <div className="min-h-screen"></div>
    <div className="min-h-screen"></div>
    <div className="min-h-screen"></div>
    <div className="min-h-screen"></div>
    <div className="min-h-screen"></div>
    <div className="min-h-screen"></div>
    <div className="min-h-screen"></div>
    <div className="min-h-screen"></div>
    <div className="min-h-screen"></div>
    <div className="min-h-screen"></div>
    <div className="min-h-screen"></div>
    <div className="min-h-screen"></div>
    <div className="min-h-screen"></div>
    <div className="min-h-screen"></div>
     <div className="relative w-full h-screen overflow-hidden flex flex-col items-center justify-center text-center gap-6 ">
        <h2 className="text-2xl font-semibold">Nothing here</h2>
        <div className="flex gap-6 mt-4">
          <Link href="/">
            <Button className="bg-gray-800 hover:bg-gray-700 text-white font-semibold px-8 py-4 rounded-full border border-gray-600 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:scale-105 transition-all">
              Back
            </Button>
          </Link>
          <Link href="https://youtu.be/dQw4w9WgXcQ?si=ZGlt4XpFshXnlvcr">
            <Button className="bg-gray-800 hover:bg-gray-700 text-white font-semibold px-8 py-4 rounded-full border border-gray-600 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:scale-105 transition-all">
              Next
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Page;
