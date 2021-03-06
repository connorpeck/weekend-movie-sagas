import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "./MovieList.css";
import ReactDOM from "react-dom";
import { Card, Grid } from "@material-ui/core";
import { Container, Row, Col } from "react-grid";

// ///////   try later ////////////
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from 'react-responsive-carousel';
import Details from "../Details/Details";

function MovieList() {
  const [movie, setMovie] = useState("");
  const [showTitle, setShowTitle] = useState(true)
  const dispatch = useDispatch();
  const history = useHistory();
  const movies = useSelector((store) => store.movies);

  useEffect(() => {
    dispatch({ type: "FETCH_MOVIES" });
  }, []);

  const toggleShow = () => {
      console.log('toggle show');
      setShowTitle(!showTitle);
  }; // end toggleShow

  //   const collectMovie = (movieID) => {
  //       console.log(movieID);
  //         setMovie(movieID);
  //   }

  //   const storeMovie = () => {
  //     console.log(movie);

  const showDetails = (event) => {
    const movieID = event.currentTarget.id;
    console.log("movieID:", movieID);
    history.push({
      pathname: `/details/${movieID}`,
      id: movieID,
    });
  };

  return (
    <main>
      <h2  className="movieList">MovieList</h2>
      <section className="movies">
        {movies.map((movie) => {
          return (
            <div onMouseEnter={toggleShow} onMouseLeave={toggleShow} id={movie.id} onClick={showDetails} key={movie.id}>
              {/* <h3>{movie.title}</h3> */}
              
              <Grid style={{ width: "15rem", margin: "2rem" }}>
                <Card variant="contained" v>
                <img src={movie.poster} alt={movie.title} />
                    <h2>{movie.title}</h2>
                  
                  
                    
                  
              
                </Card>
              </Grid>
              {/* <h5>{movie.description}</h5> */}

            
            </div>

            //// toggle movie title on hover first attempt
            /// {showTitle ? (
            //     <h2>{movie.title}</h2>)
                  
            //     :(
            //       <img src={movie.poster} alt={movie.title} />)
                
            // }
          );
        })}
      </section>
    </main>
  );
}

export default MovieList;
