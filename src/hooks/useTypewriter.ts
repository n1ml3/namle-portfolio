import { useState, useEffect } from 'react';

interface UseTypewriterProps {
  text: string;
  speed?: number;
  delay?: number;
  shouldStart?: boolean;
}

export function useTypewriter({ 
  text, 
  speed = 100, 
  delay = 0, 
  shouldStart = true 
}: UseTypewriterProps) {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (!shouldStart) return;

    let timeoutId: NodeJS.Timeout;
    let currentIndex = 0;

    const startTyping = () => {
      if (currentIndex <= text.length) {
        setDisplayText(text.slice(0, currentIndex));
        currentIndex++;
        timeoutId = setTimeout(startTyping, speed);
      } else {
        setIsComplete(true);
      }
    };

    const initialDelayId = setTimeout(startTyping, delay);

    return () => {
      clearTimeout(initialDelayId);
      clearTimeout(timeoutId);
    };
  }, [text, speed, delay, shouldStart]);

  return { displayText, isComplete };
}
