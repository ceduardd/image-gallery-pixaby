import React, { useState, useEffect } from 'react';
import SearchImageForm from './components/SearchImageForm';
import ImageGallery from './components/ImageGallery';

import { Image } from './components/Interfaces';

import './assets/tailwind.output.css';

function App() {
  const [images, setImages] = useState<Image[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const updateSearchTerm = (newSearchTerm: string) =>
    setSearchTerm(newSearchTerm);

  useEffect(() => {
    const getImages = async () => {
      try {
        const data = await fetch(
          `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABY_API_KEY}&q=${searchTerm}&image_type=photo`
        ).then(data => data.json());

        if (data) {
          setLoading(false);
          setImages(data.hits);
        }
      } catch (error) {
        console.error(error);
      }
    };

    getImages();
  }, [searchTerm]);

  return (
    <div className="font-principal">
      <h1 className="text-3xl text-green-500 font-bold my-4 text-center">
        Image Gallery by PIXABY
      </h1>
      <SearchImageForm onSearch={updateSearchTerm} />
      {!loading && images.length === 0 && (
        <h1 className="text-5xl text-center mx-auto mt-32">No Images Found</h1>
      )}

      {loading ? (
        <h1 className="text-6xl text-center mx-auto mt-32">Loading...</h1>
      ) : (
        <ImageGallery images={images} />
      )}
    </div>
  );
}

export default App;
