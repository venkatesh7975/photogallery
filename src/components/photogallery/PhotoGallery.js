import React, { useState, useEffect } from "react";
import PhotosList from "./PhotosList";

const PhotoGallery = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/photos?_limit=10"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setPhotos(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchPhotos();
  }, []);

  return (
    <div className="container">
      <h2 className="text-center mt-4 mb-4">Photo Gallery</h2>
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <div className="row d-flex">
          {photos.map((photo) => (
            <PhotosList photo={photo} />
          ))}
        </div>
      )}
    </div>
  );
};

export default PhotoGallery;
