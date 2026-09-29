"use client";

import React from "react";

export const DeveloperParallaxBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none print:hidden">
      {/* Subtle soft ambient light orbs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-blue-500/[0.04] blur-3xl" />
      <div className="absolute top-1/3 -right-32 w-96 h-96 rounded-full bg-indigo-500/[0.03] blur-3xl" />
      <div className="absolute bottom-10 left-1/4 w-[500px] h-[500px] rounded-full bg-rose-500/[0.02] blur-3xl" />

      {/* Ultra-subtle minimal dot matrix */}
      <div 
        className="absolute inset-0 opacity-[0.35]" 
        style={{
          backgroundImage: "radial-gradient(rgba(100, 116, 139, 0.15) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
    </div>
  );
};
