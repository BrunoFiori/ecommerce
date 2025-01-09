import { useRef, useState } from 'react';
import AnimalNotFound from '../../../assets/404animal.svg';

import Icon from '../Icon';
import ImageWithFallback from '../ImgWithFallBack';
export interface CarouselProps {
  images: string[];
  className?: string;
}

const Carousel = ({ images, className }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const lastTouchTimeRef = useRef<number>(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.touches[0].clientX;
    const currentTime = new Date().getTime();

    if (currentTime - lastTouchTimeRef.current < 300) return; // debounce time of 300ms

    if (touchStartX - touchEndX > 50) {
      handleNextClick();
      lastTouchTimeRef.current = currentTime;
    } else if (touchEndX - touchStartX > 50) {
      handlePrevClick();
      lastTouchTimeRef.current = currentTime;
    }
  };

  const handleTouchEnd = () => {
    setTouchStartX(null);
  };

  const handlePrevClick = () => {
    if (!images) return;
    setCurrentIndex(prevIndex => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    if (!images) return;
    setCurrentIndex(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const getVisibleDots = () => {
    const totalDots = images.length;
    const visibleDots = totalDots > 3 ? 3 : totalDots;
    const start = Math.max(0, Math.min(currentIndex - Math.floor(visibleDots / 2), totalDots - visibleDots));
    return Array.from({ length: visibleDots }, (_, i) => start + i);
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  const dinamicDotStyles = (indexObjeto: number) => {
    let dotsStyle = 'w-[8px] h-[8px] rounded-full transition-all duration-300';
    // if its current image, paint it blue
    if (indexObjeto === currentIndex) dotsStyle += ' bg-azulPrimario-1';
    else dotsStyle += ' bg-gray-300';

    return dotsStyle;
  };

  const handleCarouselDoubleClick = (event: React.MouseEvent | React.TouchEvent) => {
    event.stopPropagation();
  };

  return (
    <>
      <div className={`h-full overflow-hidden relative ${className} rounded-lg`}>
        <div
          className="flex h-full transition-transform duration-300 ease-in-out "
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {images.map((img, index) => (
            <ImageWithFallback key={index} src={img} className="w-full object-cover flex-shrink-0" style={{ aspectRatio: '16/9' }} fallback={AnimalNotFound} />
          ))}
        </div>
        {images.length > 1 && (
          <>
            <div className="absolute w-full flex justify-between top-1/2 translate -translate-y-1/2 px-4">
              <Icon
                icon="keyboard_arrow_left"
                className="bg-white azulPrimario-0 rounded-full border-2 border-azulPrimario-2"
                style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                onClick={handlePrevClick}
                onDoubleClick={handleCarouselDoubleClick}
              />
              <Icon
                icon="keyboard_arrow_left"
                className={`bg-white azulPrimario-0 rounded-full border-2 border-azulPrimario-2 rotate-180`}
                style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                onClick={handleNextClick}
              />
            </div>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {getVisibleDots().map(index => (
                <div key={index} onClick={() => handleDotClick(index)} className={`${dinamicDotStyles(index)}`}></div>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Carousel;
