import React, { useEffect, useContext, useState } from "react";
import Contextpage from "../Contextpage";
import Moviecard from "./Moviecard";
import { motion, AnimatePresence } from "framer-motion";
import Genre from "./Genre";
import Header from "./Header";
import Searchbar from "./Searchbar";
import { Carousel } from "flowbite-react";
import "./Movies.css";

function Movies() {
  const {
    movies,
    loader,
    page,
    setPage,
    totalPage,
    setMovies,
    activegenre,
    filteredGenre,
  } = useContext(Contextpage);

  const [loadingMore, setLoadingMore] = useState(false);

  useEffect(() => {
    setPage(1); // Reset Page to 1 on initial render.
  }, []);

  useEffect(() => {
    setMovies([]); // Reset movies on genre change so that movies of other genre will not appear at top.
    setPage(0);
  }, [activegenre]);

  useEffect(() => {
    if (page > 0) {
      filteredGenre();
    }
  }, [page]);

  const handleLoadMore = () => {
    setLoadingMore(true);
    setPage(page + 1);
    setLoadingMore(false);
  };

  return (
    <div className="movie-home-backround w-full bg-[#10141e] md:p-10 mb-20 md:mb-0">
      <div>
        <Genre />
      </div>
      <Header />
      <motion.div
        layout
        className="flex flex-wrap relative justify-evenly md:justify-around"
      >
        <AnimatePresence>
          {loader ? (
            <span className="loader m-10"></span>
          ) : (
            <>
              <div className="w-full md:p-2 flex flex-wrap relative justify-evenly md:justify-around">
                {movies.map((movie) => (
                  <Moviecard key={movie.id} movie={movie} />
                ))}
              </div>
              {loadingMore && <span className="loader m-10"></span>}
              {!loadingMore && page < totalPage && (
                <button
                  className="py-3 px-2 border border-blue-500 rounded-lg"
                  onClick={handleLoadMore}
                >
                  Load More
                </button>
              )}
            </>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default Movies;
