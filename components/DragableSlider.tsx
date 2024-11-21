import React, { useRef, useState } from 'react';

interface DraggableSliderProps {
  speed?: number; // Optionally pass a speed prop
  children: React.ReactNode; // To accept children passed into the component
  className?: string;
}

const DraggableSlider: React.FC<DraggableSliderProps> = ({ speed = 1.5, children, className }) => {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const slider = sliderRef.current;
    if (!slider) return;

    setIsDragging(true);
    setStartX(e.pageX - slider.offsetLeft);
    setScrollLeft(slider.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !sliderRef.current) return;
    e.preventDefault();

    const slider = sliderRef.current;
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * speed;
    slider.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    const slider = sliderRef.current;
    if (!slider) return;

    setStartX(e.touches[0].pageX);
    setScrollLeft(slider.scrollLeft);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!sliderRef.current) return;

    const slider = sliderRef.current;
    const touch = e.touches[0].pageX;
    const walk = (startX - touch) * speed;
    slider.scrollLeft = scrollLeft + walk;
  };

  return (
    <div
      ref={sliderRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUpOrLeave}
      onMouseLeave={handleMouseUpOrLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      style={{ overflowX: 'auto', cursor: 'grab' }}
      className={className}
    >
      {children}
    </div>
  );
};

export default DraggableSlider;
