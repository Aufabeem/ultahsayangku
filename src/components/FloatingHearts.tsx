import React, { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';

interface HeartProps {
  id: number;
  left: number;
  delay: number;
}

const FloatingHeart: React.FC<HeartProps> = ({ left, delay }) => {
  return (
    <div
      className="absolute animate-float opacity-60"
      style={{
        left: `${left}%`,
        animationDelay: `${delay}s`,
        animationDuration: '4s',
      }}
    >
      <Heart className="w-4 h-4 text-pink-300 fill-pink-300" />
    </div>
  );
};

export const FloatingHearts: React.FC = () => {
  const [hearts, setHearts] = useState<HeartProps[]>([]);

  useEffect(() => {
    const generateHearts = () => {
      const newHearts: HeartProps[] = [];
      for (let i = 0; i < 15; i++) {
        newHearts.push({
          id: i,
          left: Math.random() * 100,
          delay: Math.random() * 4,
        });
      }
      setHearts(newHearts);
    };

    generateHearts();
    const interval = setInterval(generateHearts, 8000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
        <FloatingHeart key={heart.id} {...heart} />
      ))}
    </div>
  );
};