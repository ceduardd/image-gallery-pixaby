import React from 'react';
import ImageCard from './ImageCard';

import { Image } from './Interfaces';

interface Props {
  images: Image[];
}

export default function ImageGallery({ images }: Props) {
  return (
    <div className="max-w-screen-xl w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
      {images.map((image: Image) => (
        <ImageCard image={image} key={image.id} />
      ))}
    </div>
  );
}
