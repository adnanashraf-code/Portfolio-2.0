import React, { useEffect, useState } from "react";

const CustomCursor = () => {
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const checkTouch = () => {
      setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0 || window.innerWidth < 1024);
    };
    
    checkTouch();
    window.addEventListener('resize', checkTouch);
    
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener('resize', checkTouch);
    };
  }, []);

  if (isTouchDevice) return null;

  return (
    <div
      className="custom-cursor"
      style={{ 
        left: cursorPos.x, 
        top: cursorPos.y,
        transition: 'transform 0.1s ease-out' 
      }}
    >
      <div className="cursor-dot"></div>
      <div className="cursor-ring"></div>
    </div>
  );
};

export default React.memo(CustomCursor);
