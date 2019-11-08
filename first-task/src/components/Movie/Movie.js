import React from 'react';

const Movie = (props) => {
    return (
        <div className="main">
            <img src={props.img}/>
            <h1>Название фильма: {props.name}</h1>
            <h1>Год выпуска: {props.year}</h1>
        </div>
    )
};

export default Movie;