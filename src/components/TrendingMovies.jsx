import React from "react";
import { Link } from "react-router-dom";
const TrendingMovies = ({tip}) => {
  const movies = [
    {
      tip:1,
      name: "Inception",
      image: "https://th.bing.com/th/id/R.6fc5a3240f09d882606e55da4a58b2dd?rik=OfT5NsH%2bmIJcBg&pid=ImgRaw&r=0",
      description:
        "A thief who steals corporate secrets through dream-sharing technology.",
    },
    {
      tip:2,
      name: "Interstellar",
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/hd/297acd129204217.616629e21fe76.png",
      description:
        "Explorers travel through a wormhole searching for a new home for humanity.",
    },
    {
      tip:3,
      name: "Joker",
      image: "https://fr.web.img6.acsta.net/img/f5/a1/f5a1012acb73bb38b4801fe371a54227.jpg",
      description:
        "A failed comedian spirals into madness and becomes a criminal mastermind.",
    },
    {
      tip:4,
      name: "The Batman",
      image: "https://tse2.mm.bing.net/th/id/OIP.k3Blfo_Srl4OI0HPLSvoXAHaJ4?rs=1&pid=ImgDetMain&o=7&rm=3",
      description:
        "Batman hunts a masked serial killer targeting Gothams corrupt elite.",
    },
    {
      tip:5,
      name: "The Matrix",
      image: "https://tse4.mm.bing.net/th/id/OIP.nq66xqwF5qVWxt11yjmU6gHaLH?rs=1&pid=ImgDetMain&o=7&rm=3",
      description:
        "A computer hacker learns from mysterious rebels about the true nature of his reality.",
    },

  ];

  return (
    <div className="px-10 py-16 bg-black">
      <h2 className="text-4xl font-bold mb-10">Trending Now</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
        {movies.map((movie, index) => (
          <div
            key={index}
            className="group relative rounded-xl overflow-hidden shadow-lg cursor-pointer transform hover:scale-105 transition duration-300"
          >
            {/* Movie Image */}
            <img
              src={movie.image}
              alt={movie.name}
              className="w-full h-72 object-cover"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition duration-300"></div>

            {/* Movie Info */}
            <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition duration-300">
              <h1 className="text-xl font-bold">{movie.name}</h1>
              <p className="text-sm text-gray-300 mt-1 line-clamp-2">
                {movie.description}
              </p>

              <Link
          to={`/MovieCard/${tip}`}
          className="mt-4 block w-full bg-red-600 hover:bg-red-700 py-2 rounded-lg font-semibold text-center"
        >
          Watch Now
        </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingMovies;
