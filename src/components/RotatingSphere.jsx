import React from 'react';

export default function RotatingSphere() {
  const tags = ["Tailwind", "React.js", "AI Learner", "Vibe Coder"];

  return (
    <div className="orbit-container">
      {/* Glow Center */}
      <div style={{ position: 'absolute', width: '200px', height: '200px', background: 'radial-gradient(circle, rgba(6,182,212,0.15) 0%, transparent 70%)', borderRadius: '50%', zIndex: 5 }} />

      {/* Central Complex Structure */}
      <div className="sphere-core">
        {/* Layer 1: Point Cloud */}
        <div className="layer">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            {[...Array(30)].map((_, i) => (
              <circle 
                key={i} 
                cx={100 + Math.cos(i * (Math.PI / 15)) * 80} 
                cy={100 + Math.sin(i * (Math.PI / 15)) * 80} 
                r="1" 
                fill="#06b6d4" 
                opacity={0.6 + (i % 5) * 0.1}
              />
            ))}
            <circle cx="100" cy="100" r="85" fill="none" stroke="#06b6d4" strokeWidth="0.5" strokeDasharray="1 10" opacity="0.3" />
          </svg>
        </div>
        {/* Layer 2: Wireframe Hexagon */}
        <div className="layer" style={{ animationDuration: '25s' }}>
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path d="M100,5 L195,50 L195,150 L100,195 L5,150 L5,50 Z" fill="none" stroke="#06b6d4" strokeWidth="0.8" opacity="0.4" />
            <path d="M5,50 L195,50 M5,150 L195,150 M100,5 L100,195" fill="none" stroke="#06b6d4" strokeWidth="0.3" opacity="0.2" />
          </svg>
        </div>
      </div>

      {/* Tilted Rings with Dashed Stroke */}
      <div className="orbit-path cyan" style={{ border: 'none' }}>
        <svg viewBox="0 0 420 180" style={{ width: '100%', height: '100%' }}>
          <ellipse cx="210" cy="90" rx="205" ry="85" fill="none" stroke="rgba(6,182,212,0.2)" strokeWidth="1" strokeDasharray="5,15" />
        </svg>
      </div>
      <div className="orbit-path gold" style={{ border: 'none' }}>
         <svg viewBox="0 0 440 200" style={{ width: '100%', height: '100%' }}>
          <ellipse cx="220" cy="100" rx="215" ry="95" fill="none" stroke="rgba(245,158,11,0.15)" strokeWidth="1" strokeDasharray="2,10" />
        </svg>
      </div>

      {/* Orbiting Tags */}
      {tags.map((tag, i) => (
        <div key={i} className="orbit-child">
          {tag}
        </div>
      ))}
    </div>
  );
}
