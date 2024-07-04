import React from "react";

export default function PhotosList({ photo }) {
  return (
    <div key={photo.id} className="col-md-4 mb-4">
      <div className="card h-100">
        <img
          src={photo.thumbnailUrl}
          className="card-img-top"
          alt={photo.title}
        />
        <div className="card-body">
          <h5 className="card-title">{photo.title}</h5>
          <p className="card-text">ID: {photo.id}</p>
        </div>
      </div>
    </div>
  );
}
