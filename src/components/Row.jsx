import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Movie from './Movie';
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'

const Row = ({ title, fetchURL, rowID }) => {
  const [movies, setMovies] = useState([])
  

  useEffect(() => {
    axios.get(fetchURL)
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((error) => {
        if (error.response) {
          console.error('Response error:', error.response.data);
        } else if (error.request) {
          console.error('Request error:', error.request);
        } else {
          console.error('Error message:', error.message);
        }
        console.error('Config:', error.config);
      });
  }, [fetchURL]);

  const slideLeft = () => {
    var slider = document.getElementById('slider' + rowID);
    slider.scrollLeft = slider.scrollLeft - 500;
  }


  const slideRight = () => {
    var slider = document.getElementById('slider' + rowID);
    slider.scrollLeft = slider.scrollLeft + 500;
  }

  return (
    <>
    <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
    <div className='relative flex items-center group'>
      <MdChevronLeft 
        onClick={slideLeft}
        className='arrow-l bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' 
        size={40}/>
        <div 
          id={'slider' + rowID} 
          className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'
        >
          {movies.map((item, id)=> (
              <Movie key={id} item={item} />
          ))}

        </div>
        <MdChevronRight 
          onClick={slideRight}
          className='arrow-r bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' 
          size={40}/>
    </div>
    </>
  );
}

export default Row