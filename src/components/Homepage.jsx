
// import React from 'react';
// import TrendingMovies from './TrendingMovies';
// import Logo from '../assets/LOGO.png';

// const Homepage = () => {
//   return (
//     <div className="min-h-screen bg-black text-white relative">

//       {/* Background Image + Overlay */}
//       <div className="absolute inset-0">
//         <img
//           src="https://tse4.mm.bing.net/th/id/OIP.Gf-4ph9wwR6S0pcZ38CpuwHaEJ?rs=1&pid=ImgDetMain&o=7&rm=3"
//           alt="bg"
//           className="w-full h-full object-cover opacity-50"
//         />
//         <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/50 to-black"></div>
//       </div>

//       {/* Hero Section (Content + Logo Image) */}
//       <div className="relative z-10 px-10 pt-40 flex flex-col md:flex-row items-center md:items-start md:justify-between">

//         {/* Hero Text */}
//         <div className="max-w-3xl">
//           <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
//             Unlimited Movies, TV Shows & More.
//           </h2>

//           <p className="text-lg text-gray-300 leading-relaxed mb-8">
//             Watch anywhere. Cancel anytime. Enjoy the best movies and shows anytime on any device.
//           </p>

//           <a
//             href="/movieCard"
//             className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-md font-semibold text-white text-lg shadow-lg transition"
//           >
//             Explore Movies
//           </a>
//         </div>

//         {/* Right-side Logo Image */}
//         <div className="mt-10 md:mt-0 md:ml-12">
//           <img
//             src={Logo}
//             alt="FlimBase Logo"
//             className="
//               w-64 md:w-80 
//               opacity-90 
//               rounded-xl 
//               shadow-xl 
//               backdrop-blur-sm 
//               bg-black/40 
//               p-4 
//               border border-gray-800
//             "
//           />
//         </div>
//       </div>

//       {/* Trending Movies Section */}
//       <div className="relative z-10 mt-20">
//         <TrendingMovies />
//       </div>

//     </div>
//   );
// };

// export default Homepage;

















import React from 'react';
import TrendingMovies from './TrendingMovies';
import Logo from '../assets/LOGO.png';

const Homepage = () => {
  return (
    <div className="min-h-screen bg-black text-white relative">

      {/* Background Image + Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://tse4.mm.bing.net/th/id/OIP.Gf-4ph9wwR6S0pcZ38CpuwHaEJ?rs=1&pid=ImgDetMain&o=7&rm=3"
          alt="bg"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/50 to-black"></div>
      </div>

      {/* Hero Section (Content + Logo Image) */}
      <div className="relative z-10 px-10 pt-40 flex flex-col md:flex-row items-center md:items-start md:justify-between">

        {/* Hero Text */}
        <div className="max-w-3xl">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
            Unlimited Movies, TV Shows & More.
          </h2>

          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            Watch anywhere. Cancel anytime. Enjoy the best movies and shows anytime on any device.
          </p>

          <a
            href="/movieCard"
            className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-md font-semibold text-white text-lg shadow-lg transition"
          >
            Explore Movies
          </a>
        </div>

        {/* Right-side Logo Image */}
        <div className="mt-10 md:mt-0 md:ml-12">
          <div
            className="
              p-1
              rounded-2xl
              backdrop-blur-md
              bg-gradient-to-b from-black/90 via-black/50 to-black/80
              shadow-2xl
              border border-white/10
              w-64 md:w-72
            "
          >
            <img
              src={Logo}
              alt="FlimBase Logo"
              className="w-full object-contain opacity-100"
            />
          </div>
        </div>
      </div>

      {/* Trending Movies Section */}
      <div className="relative z-10 mt-20">
        <TrendingMovies />
      </div>

    </div>
  );
};

export default Homepage;
