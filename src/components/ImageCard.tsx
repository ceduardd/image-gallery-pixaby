import React from 'react';
import { Image } from './Interfaces';

interface Props {
  image: Image;
}

export default function ImageCard({ image }: Props) {
  const tags = image.tags.split(',');

  return (
    <div className="rounded-lg shadow-lg overflow-hidden">
      <img className="w-full" src={image.webformatURL} alt={image.tags} />
      <div className="px-6 py-4">
        <p className="text-xl text-purple-500 font-bold">
          Photo by {image.user}
        </p>

        <ul className="mt-4">
          <li>
            <strong>Views: </strong>
            {image.views}
          </li>
          <li>
            <strong>Downloads: </strong>
            {image.downloads}
          </li>
          <li>
            <strong>Likes: </strong>
            {image.likes}
          </li>
        </ul>

        <div className="mt-4">
          {tags.map((tag, index) => (
            <span
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-1"
              key={index}
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
