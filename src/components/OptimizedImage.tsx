// src/components/OptimizedImage.tsx
import React from 'react';
interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
}
const OptimizedImage: React.FC<OptimizedImageProps> = ({ src, alt, ...props }) => {
  return (
    <picture>
      <source srcSet={src.replace(/\.(png|jpe?g)$/i, '.webp')} type="image/webp" />
      <img src={src} alt={alt} loading="lazy" {...props} />
    </picture>
  );
};
export default OptimizedImage;
