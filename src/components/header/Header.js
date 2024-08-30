import React, { useState } from "react"
import "./Header.css"
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';  // Import FontAwesome
import { faMagnifyingGlass, faTwitter, } from '@fortawesome/free-brands-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import SignUpModal from "../../pages/SignUpModel/SignUpModel";



export default function Headers() {

    const [searchQuery, setSearchQuery] = useState(""); // State to manage search input
    const [isModalOpen, setIsModalOpen] = useState(false);


    // Function to handle search input change
    const handleInputChange = (e) => {
        setSearchQuery(e.target.value);
    };

    // Function to handle search (e.g., redirect to a search results page)
    const handleSearch = (e) => {
        e.preventDefault();
        // Redirect or perform a search action
        console.log("Search Query:", searchQuery);

    };

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    return (
        <div className="header">
            <div className="headerLeft">
                <Link rel="preload" to="/"><img className="header__icon" src="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg" /></Link>
                <Link rel="preload" to="/movies/popular" style={{ textDecoration: "none" }}><span>Popular</span></Link>
                <Link rel="preload" to="/movies/top_rated" style={{ textDecoration: "none" }}><span>Top Rated</span></Link>
                <Link rel="preload" to="/movies/upcoming" style={{ textDecoration: "none" }}><span>Upcoming</span></Link>
                <Link rel="preload" to="/tv/popular" style={{ textDecoration: "none" }}><span>TV Series </span></Link>
            </div>

            {/* Search bar container */}
            <div className="headerCentre">
                <form onSubmit={handleSearch} className="searchForm">
                    <input
                        type="text"
                        className="searchInput"
                        placeholder="Search...."
                        value={searchQuery}
                        onChange={handleInputChange}
                    />

                    <button type="submit" className="searchButton">
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </form>
            </div>
            {/* Right Section: Sign In Button */}
            <div className="headerRight">
                <button className="signInButton" onClick={openModal}>Sign In</button>
                {/* SignUpModal component */}
                <SignUpModal isOpen={isModalOpen} onClose={closeModal} />
            </div>
        </div>

    )
}