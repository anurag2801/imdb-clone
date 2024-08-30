import React from "react";
import { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'; // Ensure this import for styles
import './TvCard.css'
import { Link } from "react-router-dom";


const TvCards = ({ person }) => {

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 2000)
    }, [])

    return <>
        {
            isLoading
                ?
                <div className="cards">
                    <SkeletonTheme color="#0000" highlightColor="#444" baseColor="#0000">
                        <Skeleton height={300} duration={2} />
                    </SkeletonTheme>
                </div>
                :
                <Link rel="preload" to={`/tv/${person.id}`} style={{ textDecoration: "none", color: "white" }}>
                    <div className="cards">
                        <img className="cards__img" src={`https://image.tmdb.org/t/p/original${person ? person.poster_path : ""}`} />
                        <div className="cards__overlay">
                            <div className="card__title">{person ? person.original_name : ""}</div>
                            <div className="card__runtime">
                                {person ? person.known_for_department : ""}
                                <span className="card__rating">{person ? person.vote_average : ""}<i className="fas fa-star" /></span>
                            </div>
                            {/* <div className="card__description">{movie ? movie.overview.slice(0, 118) + "..." : ""}</div> */}
                        </div>
                    </div>
                </Link>
        }
    </>
}

export default TvCards