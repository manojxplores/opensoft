import React, { useEffect, useContext } from "react";
import Contextpage from "../Contextpage";
import { Helmet } from "react-helmet";
import "./Genre.css"


function Genre() {
  const {
    fetchGenre,
    activegenre,
    setActiveGenre,
    genres,
    setMovies,
    page,
    setPage,
    filteredGenre,
  } = useContext(Contextpage);

  useEffect(() => {
    fetchGenre(); // Fetching Genres on Initial Render.
  }, []);

  return (
    <>
      

      <div className="genre-cards-container flex justify-center p-10 ">
        <div className="flex items-center genre-cards">
          {genres.map((genre) => (
            <div
              key={genre.id}
              onClick={() => setActiveGenre(genre.id)}
              className={`genre-card-each  border rounded-lg shadow-sl px-4 py-2 focus:ring-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-300 font-large text-sm inline-flex items-center ${
                activegenre === genre.id ? "font-bold" : ""
              }`}
            >
              <h1>
                <h1>
                {genre.name}
                </h1>
                
              </h1>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Genre;
