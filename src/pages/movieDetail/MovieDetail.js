
import React, { useEffect, useState } from "react"
import "./MovieDetail.css"
import { useParams } from "react-router-dom"
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'; // Ensure this import for styles

const MovieDetails = () => {
    const [currentMovieDetail, setMovie] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const { id } = useParams()

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 2000)
    }, [])

    useEffect(() => {
        getData()
        window.scrollTo(0, 0)
    }, [])

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
            .then(res => res.json())
            .then(data => setMovie(data))
    }

    return (
        isLoading
            ?
            // <div className="cards">
            //     <SkeletonTheme color="#0000" highlightColor="#444" baseColor="#0000">
            //         <Skeleton height={800} duration={2} />
            //     </SkeletonTheme>
            // </div>
            <div className="skeleton-wrapper">
                <SkeletonTheme color="#1b1b1b" highlightColor="#444" baseColor="#000">
                    <div className="skeleton-container">
                        <Skeleton height={400} width={"100%"} />
                        <div className="skeleton-details">
                            <Skeleton height={30} width={"60%"} style={{ marginBottom: 10 }} />
                            <Skeleton height={20} width={"40%"} style={{ marginBottom: 10 }} />
                            <Skeleton height={20} width={"50%"} style={{ marginBottom: 10 }} />
                            <Skeleton height={20} width={"30%"} style={{ marginBottom: 10 }} />
                            <Skeleton height={150} width={"100%"} />
                        </div>
                    </div>
                </SkeletonTheme>
            </div>
            :
            <div className="movie">
                <div className="movie__intro">
                    <img className="movie__backdrop" src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.backdrop_path : ""}`} />
                </div>
                <div className="movie__detail">
                    <div className="movie__detailLeft">
                        <div className="movie__posterBox">
                            <img className="movie__poster" src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.poster_path : ""}`} />
                        </div>
                    </div>
                    <div className="movie__detailRight">
                        <div className="movie__detailRightTop">
                            <div className="movie__name">{currentMovieDetail ? currentMovieDetail.original_title : ""}</div>
                            <div className="movie__tagline">{currentMovieDetail ? currentMovieDetail.tagline : ""}</div>
                            <div className="movie__rating">
                                {currentMovieDetail ? currentMovieDetail.vote_average : ""} <i class="fas fa-star" />
                                <span className="movie__voteCount">{currentMovieDetail ? "(" + currentMovieDetail.vote_count + ") votes" : ""}</span>
                            </div>
                            <div className="movie__runtime">{currentMovieDetail ? currentMovieDetail.runtime + " mins" : ""}</div>
                            <div className="movie__releaseDate">{currentMovieDetail ? "Release date: " + currentMovieDetail.release_date : ""}</div>
                            <div className="movie__genres">
                                {
                                    currentMovieDetail && currentMovieDetail.genres
                                        ?
                                        currentMovieDetail.genres.map(genre => (
                                            <><span className="movie__genre" id={genre.id}>{genre.name}</span></>
                                        ))
                                        :
                                        ""
                                }
                            </div>
                        </div>
                        <div className="movie__detailRightBottom">
                            <div className="synopsisText">Synopsis</div>
                            <div>{currentMovieDetail ? currentMovieDetail.overview : ""}</div>
                        </div>

                    </div>
                </div>
                <div className="movie__links">
                    <div className="movie__heading">Useful Links</div>
                    {
                        currentMovieDetail && currentMovieDetail.homepage && <a href={currentMovieDetail.homepage} target="_blank" style={{ textDecoration: "none" }}><p><span className="movie__homeButton movie__Button">Homepage <i className="newTab fas fa-external-link-alt"></i></span></p></a>
                    }
                    {
                        currentMovieDetail && currentMovieDetail.imdb_id && <a href={"https://www.imdb.com/title/" + currentMovieDetail.imdb_id} target="_blank" style={{ textDecoration: "none" }}><p><span className="movie__imdbButton movie__Button">IMDb<i className="newTab fas fa-external-link-alt"></i></span></p></a>
                    }
                </div>
                <div className="movie__heading">Production companies</div>
                <div className="movie__production">
                    {
                        currentMovieDetail && currentMovieDetail.production_companies && currentMovieDetail.production_companies.map(company => (
                            <>
                                {
                                    company.logo_path
                                    &&
                                    <span className="productionCompanyImage">
                                        <img className="movie__productionComapany" src={"https://image.tmdb.org/t/p/original" + company.logo_path} />
                                        <span>{company.name}</span>
                                    </span>
                                }
                            </>
                        ))
                    }
                </div>
            </div>
    )
}

export default MovieDetails