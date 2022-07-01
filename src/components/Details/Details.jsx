import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Details.css'

function Details(props) {

    const dispatch = useDispatch();
    const Details = useSelector(store => store.Details);

    useEffect(() => {
        dispatch({ type: 'FETCH_Details' });
    }, []);

    return (
        <main>
            This is the Details of the movie clicked
        </main>

    );
}

export default Details;