"use client";

import React, { createContext, useContext, useState, useRef, useEffect, ReactNode } from 'react';

interface SoundContextType {
  isSoundOn: boolean;
  toggleSound: () => void;
}

const SoundContext = createContext<SoundContextType | undefined>(undefined);

export const useSound = () => {
  const context = useContext(SoundContext);
  if (context === undefined) {
    throw new Error('useSound must be used within a SoundProvider');
  }
  return context;
};

interface SoundProviderProps {
  children: ReactNode;
}

export const SoundProvider: React.FC<SoundProviderProps> = ({ children }) => {
  const [isSoundOn, setIsSoundOn] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const toggleSound = () => {
    setIsSoundOn(prev => !prev);
  };

  const handleFirstInteraction = () => {
    if (!hasInteracted) {
      setHasInteracted(true);
      setIsSoundOn(true);
    }
  };

  useEffect(() => {
    window.addEventListener('click', handleFirstInteraction);
    return () => {
      window.removeEventListener('click', handleFirstInteraction);
    };
  }, [hasInteracted]);

  useEffect(() => {
    if (audioRef.current) {
      if (isSoundOn) {
        audioRef.current.play().catch(error => {
          console.error("Audio play failed:", error);
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [isSoundOn]);

  return (
    <SoundContext.Provider value={{ isSoundOn, toggleSound }}>
      <audio ref={audioRef} src="/airplane-cabin1.mp3" loop />
      {children}
    </SoundContext.Provider>
  );
};
