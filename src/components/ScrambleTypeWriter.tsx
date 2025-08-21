import { useState, useEffect } from "react";

interface ScrambleTypewriterProps {
  text: string;
  speed?: number;        // ms per character reveal
  scrambleSpeed?: number; // ms per scramble step
  scrambleLength?: number; // how many chars to scramble at the end
}

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";
export default function ScrambleTypewriter({
  text,
  speed = 30,
  scrambleSpeed = 10,
  scrambleLength = 2,
}: ScrambleTypewriterProps) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    setDisplayed("");
    let i = 0;
    let mainInterval: NodeJS.Timeout;
    let scrambleInterval: NodeJS.Timeout;

    const processNextCharacter = () => {
      if (i < text.length) {
        const current = text.slice(0, i + 1);
        let scrambleSteps = 0;
        const maxScrambleSteps = Math.ceil(speed / scrambleSpeed);

        scrambleInterval = setInterval(() => {
          const scrambleCount = Math.min(scrambleLength, current.length);
          const startIndex = current.length - scrambleCount;

          // scramble last `scrambleCount` chars
          const scrambled = current
            .slice(0, startIndex) +
            Array.from(current.slice(startIndex))
              .map(() => chars[Math.floor(Math.random() * chars.length)])
              .join("");

          setDisplayed(scrambled);

          scrambleSteps++;
          if (scrambleSteps >= maxScrambleSteps) {
            clearInterval(scrambleInterval);
            setDisplayed(current); // settle on final chars
            
            // Move to next character after settling
            i++;
            if (i < text.length) {
              mainInterval = setTimeout(processNextCharacter, speed);
            }
          }
        }, scrambleSpeed);
      }
    };

    // Start the process
    if (text.length > 0) {
      processNextCharacter();
    }

    return () => {
      clearInterval(mainInterval);
      clearInterval(scrambleInterval);
    };
  }, [text, speed, scrambleSpeed, scrambleLength]);

  return <span>{displayed}</span>;
}