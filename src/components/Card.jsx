import React from "react";

function Card(props) {
    return (
        <div className="card" >
            {
                !props.poster ?
                <img src="https://cdn-icons-png.flaticon.com/128/3855/3855208.png" loading="lazy" alt="Error 404 " title="Error 404 " width="50" height="50" style={{padding:"40px 0px 50px 0px"}}/>
                    : <img src={`https://image.tmdb.org/t/p/w500${props.poster}`} alt={props.title} draggable="false" title={props.title} />
            }
            
            <p className="card-title">{props.title}</p>
            <p>{props.vote}</p>
        </div>
    );
}

export default Card;
