import React, { useState, useRef } from 'react';

const BurtReynoldsButton = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const audioRef = useRef(null);

  const getArticleText = () => {
    // Targets the typical Astro prose container
    const content = document.querySelector('.prose');
    if (!content) return '';
    
    // Clean up text: remove headings or specific elements if needed
    // For now, get all text content
    return content.innerText.slice(0, 5000); // ElevenLabs limit safety
  };

  const handleTogglePlay = async () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
      return;
    }

    if (audioRef.current && audioRef.current.src) {
      audioRef.current.play();
      setIsPlaying(true);
      return;
    }

    setIsLoading(true);
    const text = getArticleText();

    if (!text) {
      alert("No content found to read.");
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/tts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text }),
      });

      if (!response.ok) throw new Error('Failed to generate audio');

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      
      const audio = new Audio(url);
      audioRef.current = audio;
      
      audio.onended = () => {
        setIsPlaying(false);
      };

      audio.play();
      setIsPlaying(true);
    } catch (error) {
      console.error(error);
      alert("Burt's having some trouble. Check your API key in the .env file.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="my-8 flex items-center justify-center">
      <button
        onClick={handleTogglePlay}
        disabled={isLoading}
        className={`group relative flex items-center gap-3 px-6 py-3 font-bold text-white transition-all duration-300 rounded-full border-2 ${
          isPlaying 
          ? 'bg-red-600 border-red-700 hover:bg-red-700' 
          : 'bg-black border-yellow-500 hover:bg-yellow-500 hover:text-black'
        } ${isLoading ? 'opacity-50 cursor-wait' : ''}`}
      >
        <span className="text-2xl">
          {isLoading ? (
            <svg className="animate-spin h-6 w-6" viewBox="0 0 24 24">
               <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
               <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          ) : isPlaying ? '⏸' : '🎙️'}
        </span>
        <span className="uppercase tracking-widest text-sm">
          {isLoading ? 'Loading Burt...' : isPlaying ? 'Stop Burt' : 'Read by Burt Reynolds'}
        </span>
        
        {/* Decorative elements to make it "really unique" */}
        <div className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-500"></span>
        </div>
      </button>
    </div>
  );
};

export default BurtReynoldsButton;
