import React from "react"
import "./Header.css"
import { Link } from 'react-router-dom'


export default function Headers() {
    return (
        <div className="header">
            <div className="headerLeft">
                <Link rel="preload" to="/"><img className="header__icon" src="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg" /></Link>
                <Link rel="preload" to="/movies/popular" style={{ textDecoration: "none" }}><span>Popular</span></Link>
                <Link rel="preload" to="/movies/top_rated" style={{ textDecoration: "none" }}><span>Top Rated</span></Link>
                <Link rel="preload" to="/movies/upcoming" style={{ textDecoration: "none" }}><span>Upcoming</span></Link>
            </div>
        </div>

    )
}