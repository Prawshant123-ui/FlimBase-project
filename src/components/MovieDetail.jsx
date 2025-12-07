import React from "react";
import { useParams, Link } from "react-router-dom";
import movies from "../data";

const MovieDetails = () => {
  const { movieId,movietip } = useParams();
  const movie = movies.find((m) => m.id === parseInt(movieId) || m.tip === parseInt(movietip));

  if (!movie) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold mb-4">Movie not found!</h2>
        <Link to="/" className="text-red-500 hover:underline text-lg">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-6 md:p-12">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        <div className="w-full">
          <img
            src={movie.image}
            alt={movie.name}
            className="rounded-lg shadow-lg w-full object-cover"
          />
        </div>

        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            {movie.name}
          </h1>

          <p className="text-gray-300 text-lg mb-6 leading-relaxed">
            {movie.description}
          </p>

          <button className="bg-red-600 hover:bg-red-700 transition px-6 py-3 text-lg rounded-lg font-semibold">
             Watch Now
          </button>

          <div className="mt-5">
            <Link to="/MovieCard" className="text-red-500 hover:underline text-lg">
               Back to Movies
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
};

export default MovieDetails;
