import React, { useEffect, useRef, useState } from 'react';
import AnimalNotFound from '../../../assets/404animal.svg';
import Icon from '../Icon';
import ImageWithFallback from '../ImgWithFallBack';
import './styles.css';

interface ImageSliderProps {
  images: string[];
  onDelete?: (index: number) => void;
  className?: string;
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images, onDelete, className }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [imageCache, setImageCache] = useState<string[]>(images);

  useEffect(() => {
    setImageCache(images);
  }, [images]);

  const handleOnDelete = (index: number) => {
    onDelete && onDelete(index);
    setImageCache([]);
  };

  const handlePrev = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -containerRef.current.clientWidth, behavior: 'smooth' });
    }
  };

  const handleNext = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: containerRef.current.clientWidth, behavior: 'smooth' });
    }
  };
  return (
    <div className={`relative flex justify-center items-center overflow-hidden h-[150px] ${className}`}>
      <Icon
        icon="keyboard_arrow_left"
        className="bg-white azulPrimario-0 rounded-full border-2 border-azulPrimario-2 shadow-lg"
        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        onClick={handlePrev}
      />
      <div ref={containerRef} className="flex mx-8 overflow-x-auto gap-8 no-scrollbar">
        {imageCache.length > 0 ? (
          imageCache.map((image, index) => (
            <div key={index} className="flex-shrink-0 w-[150px] h-[150px] relative border-2 border-black-200 shadow-md">
              <ImageWithFallback src={image} fallback={AnimalNotFound} className="w-full h-full object-cover" />
              <Icon onClick={() => handleOnDelete(index)} icon="delete" className="absolute top-2 right-2 shadow-md" />
            </div>
          ))
        ) : (
          <div className="flex-shrink-0 w-[150px] h-[150px] relative border-2 border-black-200 shadow-md">
            <ImageWithFallback src={AnimalNotFound} fallback={AnimalNotFound} className="w-full h-full object-cover" />
          </div>
        )}
      </div>
      <Icon
        icon="keyboard_arrow_right"
        className="bg-white azulPrimario-0 rounded-full border-2 border-azulPrimario-2 shadow-lg"
        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        onClick={handleNext}
      />
    </div>
  );
};

export default ImageSlider;
