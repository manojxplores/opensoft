import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Contextpage from "../Contextpage";
import { motion } from "framer-motion";
import { HiMenuAlt1, HiX } from "react-icons/hi";
import User from "../assets/images/User.jpg";
import { auth } from "../../firebase";
import { toast } from "react-toastify";
import Searchbar from "./Searchbar";
import "./Navbar.css";

function Navbar() {
  const { header, user } = useContext(Contextpage);
  const [activemobile, setActivemobile] = useState(false);

  const Navdata = [
    {
      id: 1,
      headername: "Genres",
      Name: "Genres",
      link: "/",
    },
    {
      id: 2,
      headername: "Trending Movies",
      Name: "Trending",
      link: "/trending",
    },
    {
      id: 3,
      headername: "Upcoming Movies",
      Name: "Upcoming",
      link: "/upcoming",
    },
    {
      id: 4,
      headername: "Favorite Movies",
      Name: "Favorites",
      link: "/favorite",
    },
  ];

  return (
    <>
      <div className="mx-10 my-4 navbar-top text-white flex flex-col md:flex-row items-center justify-space-between">
        <div className="genres-section mb-2 md:mb-0 md:w-20%">
          <ul className="rounded-lg px-4 py-4 flex justify-center items-center border border-blue-500">
            {Navdata.map((data) => (
              <li key={data.id} className="mr-4">
                <Link
                  to={data.link}
                  className={`transition-colors duration-300 ease-in-out hover:text-white hover:text-lg ${
                    header === data.headername
                      ? "border-blue-600"
                      : "border-black"
                  }`}
                >
                  {data.Name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col md:flex-row items-center md:w-50%">
          <Searchbar />
          {user ? (
            <div className="ml-4 md:ml-0 md:mr-4 md:w-20%">
              <div className="px-3 py-1 rounded-xl flex items-center font-semibold">
                <img
                  src={user.photoURL == null ? User : user.photoURL}
                  alt="user"
                  className="h-8 w-8 rounded-full mr-2"
                />
                <h1>{user.displayName}</h1>
              </div>
              <div
                className="cursor-pointer bg-red-500 flex justify-center items-center p-2 rounded-xl mt-2"
                onClick={() => auth.signOut(toast.error("Logout successfully"))}
              >
                <h1>Logout</h1>
              </div>
            </div>
          ) : (
            <Link
              to="/login"
              className="bg-gray-900 py-2 px-5 md:ml-4 md:w-20% rounded-xl flex items-center font-semibold"
            >
              <h1>Log in</h1>
            </Link>
          )}
        </div>
      </div>
    </>
  );
}

export default Navbar;

// {/* <Link to="/" className="mr-20">
//             {/* Your logo or brand */}
//           </Link> */}
