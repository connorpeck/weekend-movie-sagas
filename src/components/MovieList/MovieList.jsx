import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import './MovieList.css'
import Details from '../Details/Details';

function MovieList() {

    const dispatch = useDispatch();
    const history = useHistory();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

       const showDetails = () => {
        console.log("in showDetails");
        history.push("/details");

      };
   

    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div key={movie.id} >
                            {/* <h3>{movie.title}</h3> */}
                            <img onClick={showDetails} src={movie.poster} alt={movie.title}/>
                            {/* <h5>{movie.description}</h5> */}
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;