import React, { useEffect, useState, useCallback } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import './Home.css'
import MovieList from '../../components/MovieList/MovieList';
import Footer from '../../components/footer/Footer';
import TvList from '../../components/TvList/TvList';
import useEmblaCarousel from 'embla-carousel-react';


export default function Home() {

    const [popularMovies, setPopularMovies] = useState([])
    const [popularPerson, setPopularPersonList] = useState([])
    // Embla Carousel setup
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, slidesToScroll: 1, align: 'start' });

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
            .then(res => res.json())
            .then(data => setPopularMovies(data.results))
            //     .then(data => console.log(data.results))
            .catch(error => console.error('Error fetching data:', error));
    }, [])

    useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/person/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
            .then(res => res.json())
            .then(data => setPopularPersonList(data.results))
        //     .then(data => console.log(data.results))


    }
    return (
        <>  <div>


            <Carousel
                showThumbs={false}
                autoPlay={true}
                transitionTime={3}
                infiniteLoop={true}
                showStatus={false}
                useKeyboardArrows={true}

            >
                {popularMovies.map((movie) => (
                    <Link rel='preload' style={{ textDecoration: 'none', color: 'white' }} to={`/movie/${movie.id}`}>
                        <div className='posterImage'>
                            <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} />

                        </div>
                        <div className='posterImage__overlay'>
                            <div className='posterImage__title'>{movie ? movie.original_title : ''}</div>
                            <div className='posterImage__runtime'>
                                {movie ? movie.release_date : ''}
                                <span className='posterImage__rating'>
                                    {movie ? movie.vote_average : ''}
                                    <i className='fas fa-star' style={{ color: 'yellow' }} />
                                </span>
                            </div>
                            <div className="posterImage__description">{movie ? movie.overview : ""}</div>
                        </div>
                    </Link>
                ))
                }
            </Carousel>

            <MovieList />

            <TvList />




            {/* Embla Carousel for Popular Persons */}
            <h2 className="section-heading">Most Popular Celebrities</h2>
            <div className="embla">
                <div className="embla__viewport" ref={emblaRef}>
                    <div className="embla__container">

                        {popularPerson.map((person) => (
                            <div className="embla__slide" key={person.id}>

                                <Link style={{ textDecoration: 'none', color: 'white' }} to={`/person/${person.id}`}>
                                    <div className='actorImage'>
                                        <img src={`https://image.tmdb.org/t/p/original${person ? person.profile_path : ""}`} alt={person.name} />
                                    </div>
                                    <div className='actorImage__overlay'>
                                        <div className='actorImage__title'>{person ? person.name : ""}</div>
                                        <div className='actorImage__runtime'>
                                            {person ? person.known_for_department : ''}
                                            <span className='actorImage__rating'>
                                                {person ? person.popularity : ""}
                                                <i className='fas fa-star' style={{ color: 'yellow' }} />
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
                <button className="embla__prev" onClick={scrollPrev}>‹</button>
                <button className="embla__next" onClick={scrollNext}>›</button>
            </div>

            <Footer />

        </div >
        </>

    )
}