import React, { useEffect, useState } from 'react';

interface TrailPoint {
  x: number;
  y: number;
  id: number;
}

export const CursorTrail: React.FC = () => {
  const [trail, setTrail] = useState<TrailPoint[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let animationId: number;
    let trailId = 0;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      setTrail(prev => {
        const newTrail = [...prev, { x: e.clientX, y: e.clientY, id: trailId++ }];
        return newTrail.slice(-15); // Keep only last 15 points
      });
    };

    const animateTrail = () => {
      setTrail(prev => prev.slice(1)); // Remove oldest point
      animationId = requestAnimationFrame(animateTrail);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animationId = requestAnimationFrame(animateTrail);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-30">
      {trail.map((point, index) => (
        <div
          key={point.id}
          className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-pink-400 to-purple-400"
          style={{
            left: point.x - 4,
            top: point.y - 4,
            opacity: (index + 1) / trail.length * 0.6,
            transform: `scale(${(index + 1) / trail.length})`,
            transition: 'opacity 0.3s ease-out, transform 0.3s ease-out'
          }}
        />
      ))}
    </div>
  );
};