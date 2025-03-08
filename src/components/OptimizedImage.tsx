// src/components/OptimizedImage.tsx
import React from 'react';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({ src, alt, ...props }) => {
  const webpSrc = src.replace(/\.(png|jpe?g)$/i, '.webp');
  return (
    <picture>
      <source srcSet={webpSrc} type="image/webp" onError={(e) => {(e.target as HTMLSourceElement).style.display = 'none';}} />
      <img src={src} alt={alt} loading="lazy" {...props} />
    </picture>
  );
};

export default OptimizedImage;
