import React, { useEffect, useState } from 'react';

const Loader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          clearInterval(timer);
          setIsExiting(true);
          setTimeout(onComplete, 1000); // Match CSS transition duration
          return 100;
        }
        return oldProgress + 2;
      });
    }, 30);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className={`loader-overlay ${isExiting ? "exit" : ""}`}>
      <div className="loader-content">
        <h1 className="loader-name">HELLO I AM ADNAN.</h1>
        <div className="loader-bar-container">
          <div className="loader-bar" style={{ width: `${progress}%` }}></div>
        </div>
        <p className="loader-text">LOADING EXPERIENCE...</p>
      </div>
    </div>
  );
};

export default Loader;
