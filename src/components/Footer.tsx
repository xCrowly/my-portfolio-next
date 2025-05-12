"use client";

import { Coffee, Copyright } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-8">
          <div className="flex items-center gap-2 text-text/60">
            <Copyright className="h-4 w-4" />
            <span>Built with Next.js and</span>
            <Coffee className="h-4 w-4" />
          </div>
        </div>
      </div>
    </footer>
  );
};
