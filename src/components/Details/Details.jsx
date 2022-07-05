import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import MovieList from "../MovieList/MovieList";
import "./Details.css";
import { Button } from "@material-ui/core";
import { useParams } from "react-router-dom";

function Details(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const genres = useSelector((store) => store.genres);
  const movies = useSelector((store) => store.movies);
  const thisID = useParams();
  const thisMovie = movies.find((movie) => movie.id === Number(thisID.id));
  // works but only shows the first result
  const genresToDisplay = [];


  genres.map((genre) => {
    if (genre.movie_id === thisID.id){    
      genresToDisplay.push(genre)
  } // end if
  })
    

//   const thisGenre =  genres.filter((genre) => {
//     return genre.movie_id == Number(thisID.id);
//   });

// doesnt work yet
// const genresToDisplay =  genres.filter((genre) => {
//   // console.log(genre, thisID.id);
//     return genre.movie_id === Number(thisID.id);
//   });
  

  useEffect(() => {
    dispatch({ type: "FETCH_DETAILS" });
    dispatch({ type: "FETCH_MOVIES" });
    // dispatch({ type: "MOVIE_TITLE" });
    dispatch({ type: "FETCH_GENRES" , payload: thisID.id});
    console.log("movie id is thisID:", thisID);
    // console.log("genres obj in /details", genres);
  }, []);

  const backButton = () => {
    console.log("in backButton");
    history.push("/");
  };

  const showGenres = () => {
    console.log("in showGenres ", genres, "movie id", thisID);
  };

  return (
    <main className="moviesDiv">
      {
        // thisMovie === undefined ?
        // (<h1>loading</h1>) :
        // ((<h1>{thisMovie.description}</h1>)
        // (<h2>{thisMovie.title}</h2>))

        ////// I have thisID that captures the movie id ////
        ///// // match that id to the movie id in the genres obj /////
        /////// show genres.name for the matching id's /////

        <div>
          <h1>{thisMovie.title}</h1>
          <img src={thisMovie.poster} alt="" />
          <h2>Description</h2>
          <h5> {thisMovie.description}</h5>

          <h2 onClick={showGenres}>Genres</h2>
          {/* { thisID === (genres.movie.id) ?  */}
          {/* <h4>{JSON.stringify(genresToDisplay)}</h4> */}
          {/* <h2>{JSON.stringify(thisGenre.name)}</h2> */}
          {/* :
            <h2>no matching genres</h2>} */}
        </div>
      }

      {/* This is the Details of the movie clicked
      {genres.map((genre) => {
        return (
          <div key={genre.id}>
              { thisID === genre.movie.id ?
              
            <h3>{genre.name}</h3>
            :
            <h2>no matching genres</h2>
              }
          </div>
        );
      })} */}
      <Button
        className="button"
        fullWidth={true}
        size="large"
        varient="contained"
        onClick={backButton}
      >
        Back To List
      </Button>
    </main>
  );
}

export default Details;
