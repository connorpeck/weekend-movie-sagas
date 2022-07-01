import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import './Details.css'

function Details(props) {

    const dispatch = useDispatch();
    const history = useHistory();
    const Details = useSelector(store => store.Details);

    useEffect(() => {
        dispatch({ type: 'FETCH_Details' });
    }, []);

    const backButton = () => {
        console.log('in backButton');
        history.push('/');
    }

    return (
        <main>
            This is the Details of the movie clicked
            <button onClick={backButton}>Back </button>
        </main>

    );
}

export default Details;