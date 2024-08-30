import React, { useEffect, useState } from "react"
import "./TvList.css"
import { useParams } from "react-router-dom"
import TvCards from "../TvCard/TvCard"

const TvList = () => {

    const [person, setPersonList] = useState([])
    const { type } = useParams()

    useEffect(() => {
        getData()
    }, [])

    // useEffect(() => {
    //     getData()
    // }, [type])

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/tv/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
            .then(res => res.json())
            .then(data => setPersonList(data.results))
        //  .then(data => console.log(data.results))
    }

    return (
        <div className="movie__list">
            <h2 className="list__title">TV Series</h2>
            <div className="list__cards">
                {
                    person.map(person => (
                        <TvCards person={person} />
                    ))
                }
            </div>
        </div>
    )
}

export default TvList