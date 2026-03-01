"use client";

import React from 'react';
import { useSound } from '@/app/contexts/SoundContext';

const SoundOnIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
    <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
  </svg>
);

const SoundOffIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
    <line x1="23" y1="9" x2="17" y2="15"></line>
    <line x1="17" y1="9" x2="23" y2="15"></line>
  </svg>
);

const SoundToggle: React.FC = () => {
  const { isSoundOn, toggleSound } = useSound();

  return (
    <button
      onClick={toggleSound}
      className="fixed bottom-6 left-6 z-50 p-3 bg-ebony/50 text-cream rounded-full hover:bg-ebony transition-colors backdrop-blur-sm"
      aria-label="Toggle sound"
    >
      {isSoundOn ? <SoundOnIcon /> : <SoundOffIcon />}
    </button>
  );
};

export default SoundToggle;
