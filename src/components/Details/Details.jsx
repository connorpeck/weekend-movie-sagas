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
  const thisMovie = movies.find((movie)=> movie.id === Number(thisID.id));

  useEffect(() => {
    dispatch({ type: "FETCH_DETAILS" });
    dispatch({ type: "FETCH_MOVIES" });
    dispatch({ type: "MOVIE_TITLE" });
    console.log(thisID);
  }, []);

  const backButton = () => {
    console.log("in backButton");
    history.push("/");
  };

  return (
    <main>
        {
            // thisMovie === undefined ?
            // (<h1>loading</h1>) :
            // ((<h1>{thisMovie.description}</h1>)
            // (<h2>{thisMovie.title}</h2>))

            <h2>{thisMovie.title}</h2>
            
            
        }



      {/* This is the Details of the movie clicked
      {genres.map((genre) => {
        return (
          <div key={genre.id}>
            <h3>{genre.name}</h3>
            <h2>{thisMovie}</h2>
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
