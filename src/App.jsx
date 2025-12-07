
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import MovieCard from "./components/MovieCard";
import Navbar from "./components/Navbar";
import data from "./data.js";
import Footer from "./components/Footer";
import MovieDetail from "./components/MovieDetail";
import JoinNow from "./components/JoinNow.jsx";

const App = () => {
  const [search, setSearch] = useState("");

  const filteredItems = data.filter((movie) =>
    movie.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-black min-h-screen text-white">
      {/* Navbar with search */}
      <Navbar search={search} setSearch={setSearch} />

      <Routes>
        <Route path="/" element={<Homepage />} />

        <Route path="/MovieCard/:movieId" element={<MovieDetail />} />

        <Route path="/TrendingMovies/:movietip" element={<MovieDetail />} />

        <Route path="/JoinNow" element={<JoinNow />} />

        <Route
          path="/MovieCard"
          element={
            <div className="pt-32 px-10 pb-20">
              {/* Search Bar Above Movies */}
              <div className="flex  mb-8">
                <input
                  type="text"
                  placeholder="Search movies..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-80 md:w-96 p-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-red-600 outline-none transition"
                />
              </div>

              {/* Movie Cards Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {filteredItems.map((movie) => (
                  <MovieCard
                    key={movie.id}
                    id={movie.id}
                    name={movie.name}
                    description={movie.description}
                    image={movie.image}
                  />
                ))}
              </div>
            </div>
          }
        />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
