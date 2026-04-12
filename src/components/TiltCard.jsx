import React, { useState, useRef } from "react";

const TiltCard = ({ children, className = "", style = {} }) => {
  const cardRef = useRef(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Calculate mouse position relative to card center
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    // Convert to range -1 to 1
    const xPct = (mouseX / width - 0.5) * 2;
    const yPct = (mouseY / height - 0.5) * 2;
    
    // Calculate rotation (max 8 degrees for subtlety)
    const rotateX = -yPct * 8;
    const rotateY = xPct * 8;
    
    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        ...style,
        perspective: "1000px",
        transformStyle: "preserve-3d",
        transition: isHovered ? "transform 0.1s cubic-bezier(0.23, 1, 0.32, 1)" : "transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)",
        transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale3d(${isHovered ? 1.02 : 1}, ${isHovered ? 1.02 : 1}, 1)`,
        willChange: "transform",
      }}
    >
      <div style={{ 
        transform: isHovered ? "translateZ(30px)" : "translateZ(0px)", 
        transition: "transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)", 
        height: '100%',
        pointerEvents: 'none' // Allow events to pass through to the parent ref
      }}>
        <div style={{ pointerEvents: 'auto', height: '100%' }}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default TiltCard;
