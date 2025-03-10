import React, { useState, useEffect } from "react";
import Card from "./components/Card";

function GetData(props) {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const header = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer *******************',
    },
    };
    const links = {
        discover: `https://api.themoviedb.org/3/discover/${props.genre}?include_adult=false&include_video=false&language=en-US&page=${props.page}&sort_by=popularity.desc`,
        topRated: `https://api.themoviedb.org/3/${props.genre}/top_rated?language=en-US&page=${props.page}`,
        trending: `https://api.themoviedb.org/3/trending/${props.genre}/${props.page > 1 ? "/l" : ""}day?language=en-US`,
        search  : `https://api.themoviedb.org/3/search/${props.genre}?query=${props.query}&include_adult=false&language=en-US&page=${props.page}`
    }

    useEffect(() => {
        const fetchFilms = async () => {
            var url = "";
        if (props.select === "discover") {
            url = links.discover
        } else if (props.select === "best") {
            url = links.topRated
        }else if (props.select === "trending") {
            url = links.trending
        }else if (props.select === "search") {
            url = links.search
        }
        try {
            const res = await fetch(url, header);
            const data = await res.json();
            setData(data);
        } catch (error) {
            console.log("Error fetching data:", error);
            setError("error");
        } finally {
            setLoading(false);
        }
    };
        fetchFilms();
    }, [props.page, props.genre, props.select, props.submit]);
    return (
        <div className='films'>
            {loading ? (
            <p>Loading...</p>
            ) : error ? (
            <p>Error fetching {props.genre === "tv"? "Tv Shows":"Movies"}</p>
            ) : data.results && data.results.length > 0 ? (
            data.results.map((film) => (
                <Card key={film.id} title={props.genre === "movie"? film.title:film.name} poster={film.poster_path} vote={film.vote_average} />
            ))
                    ) : (<div className="notFound" style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                            <img src="https://cdn-icons-png.flaticon.com/128/4826/4826312.png" loading="lazy" alt="Error 404 " title="Error 404 " width="50" height="50" style={{padding:"40px 0px 50px 0px"}}/>
                            <p>No {props.genre === "tv"? "Tv Shows":"Movies"} found.</p>
                    </div>
                        
            )}
        </div>
    );
};
    



export default GetData;
