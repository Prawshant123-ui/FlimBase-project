import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ id, image, name, description }) => {
  return (
    <div className="relative rounded-xl overflow-hidden shadow-lg hover:scale-105 transition duration-300 w-60 group">
      

      {/* Movie Image */}
      <img
        src={image}
        alt={name}
        className="w-full h-80 object-cover"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition duration-300"></div>

      {/* Movie Info */}
      <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition duration-300">
        <h1 className="text-xl font-bold">{name}</h1>
        <p className="text-sm text-gray-300 mt-1 line-clamp-2">{description}</p>
        <Link
          to={`/MovieCard/${id}`}
          className="mt-4 block w-full bg-red-600 hover:bg-red-700 py-2 rounded-lg font-semibold text-center"
        >
          Watch Now
        </Link>
      </div>

    </div>
  );
};

export default MovieCard;
