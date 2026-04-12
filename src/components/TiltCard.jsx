import React, { useState, useRef } from "react";

const TiltCard = ({ children, className = "", style = {}, maxTilt = 15, scale = 1.05, perspective = 1000 }) => {
  const cardRef = useRef(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current || window.innerWidth < 1024) return;

    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = (mouseX / width - 0.5) * 2;
    const yPct = (mouseY / height - 0.5) * 2;
    
    const rotateX = -yPct * maxTilt;
    const rotateY = xPct * maxTilt;
    
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
        perspective: `${perspective}px`,
        transformStyle: "preserve-3d",
        transition: isHovered ? "transform 0.1s cubic-bezier(0.23, 1, 0.32, 1)" : "transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)",
        transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale3d(${isHovered ? scale : 1}, ${isHovered ? scale : 1}, 1)`,
        willChange: "transform",
      }}
    >
      <div style={{ 
        transform: isHovered ? `translateZ(${maxTilt * 2}px)` : "translateZ(0px)", 
        transition: "transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)", 
        height: '100%',
        pointerEvents: 'none'
      }}>
        <div style={{ pointerEvents: 'auto', height: '100%' }}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default TiltCard;
