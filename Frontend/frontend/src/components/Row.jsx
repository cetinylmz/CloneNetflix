import axios from "axios";
import {MdChevronLeft , MdChevronRight} from "react-icons/md";

import React, { useEffect } from "react";
import { useState } from "react";
import Movie from "./Movie";

function Row({ title, fetchUrl,rowId }) {
  const [movies, SetMovie] = useState([]);


  useEffect(() => {
    axios.get(fetchUrl).then((res) => {
      SetMovie(res.data.results);
    });
  }, [fetchUrl]);

  const slideLeft = () => {

    var slider = document.getElementById('slider' + rowId)
    slider.scrollLeft = slider.scrollLeft - 500
  }

  const slideRight = () => {

    var slider = document.getElementById('slider' + rowId)
    slider.scrollLeft = slider.scrollLeft + 500
  }


  return (
    <>
      <h2 className="text-white font-bold md:text-xl  px-12">{title}</h2>
      <div className="flex items-center relative group ">
        <MdChevronLeft 
        onClick={slideLeft}
        className="bg-white mx-12 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block " size={40} />
        <div id={"slider" + rowId} className="w-full left-0 h-full  whitespace-nowrap scroll-smooth scrollbar-hide relative px-8">
          {movies.map((item) => (
            <Movie item={item} key={item.id} />
          ))}
        </div>
        <MdChevronRight 
             onClick={slideRight}
        className="bg-white mx-5  right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block" size={40} />
      </div>
    </>
  );
}

export default Row;
