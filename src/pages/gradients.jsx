import { useState, useEffect, useRef } from 'react';

function MouseTracker() {
  const [curX, setCurX] = useState(0);
  const [curY, setCurY] = useState(0);
  const [tgX, setTgX] = useState(0);
  const [tgY, setTgY] = useState(0);
  const interBubbleRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = event => {
      setTgX(event.clientX);
      setTgY(event.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const animate = () => {
      setCurX(prevCurX => prevCurX + (tgX - prevCurX) / 80);
      setCurY(prevCurY => prevCurY + (tgY - prevCurY) / 80);
      interBubbleRef.current.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
      requestAnimationFrame(animate);
    };

    animate();
  }, [curX, curY, tgX, tgY]);

  return <div ref={interBubbleRef} className="interactive"></div>;
}

export default function GradientBg() {
  return (
    <div className="gradient-bg">
      <svg xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 18 -8" result="goo" />
            <feBlend in2="goo" in="SourceGraphic" />
          </filter>
        </defs>
      </svg>
      <div className="gradients-container">
        <div className="g1"></div>
        <div className="g2"></div>
        <div className="g3"></div>
        <div className="g4"></div>
        <div className="g5"></div>
        <MouseTracker />
      </div>
    </div>
  );
}
