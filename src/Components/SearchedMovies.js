import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Star from '../Imgs & SVG/star.png'

function SearchedMovies() {

    const { input } = useParams()

    const [searchedMovie, setSearchedMovie] = useState([])
    const navigate = useNavigate()

    async function getData() {
        const response = await axios.get(
            `https://api.themoviedb.org/3/search/movie?api_key=daffd40bac50d42bcf8b01b32b4e9b9b&language=en-US&query=${input}&page=1`
        )
        setSearchedMovie(response.data.results)
    }

    useEffect(() => {
        getData()
    }, [input])

    const genres = {
        28: 'Action',
        12: 'Adventure',
        16: 'Animation',
        35: 'Comedy',
        80: 'Crime',
        99: 'Documentary',
        18: 'Drama',
        10751: 'Family',
        14: 'Fantasy',
        36: 'History',
        27: 'Horror',
        10402: 'Music',
        9648: 'Mystery',
        10749: 'Romance',
        878: 'Science Fiction',
        10770: 'TV Movie',
        53: 'Thriller',
        10752: 'War',
        37: 'Western'
    }

    const cards = searchedMovie.map(movie => {

        const genre = movie.genre_ids
        let genreStorage = []
        for (let i = 0; i < 3; i++) {
            if (genre[i]) {
                genreStorage = [...genreStorage, genres[`${genre[i]}`]]
            }
            else {
                return
            }
        }

        return (
            <div className='tr--card' key={movie.id}>
                <img className='tr--movie--poster' src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt='Movie poster' />
                <div className='tr--movie--genres'>
                    {genreStorage.map(genre => {
                        return <span key={genre}>{genre}</span>
                    })}
                </div>
                <h2>{movie.title}</h2>
                <div className='tr--movie'>
                    <div className='tr--movie--infos'>
                        <img className='tr--movie--star' src={Star} alt='Yellow Star' />
                        <p>{movie.vote_average}</p>
                    </div>
                    <span>{movie.release_date.slice(0, 4)}</span>
                </div>
                <button onClick={() => navigate(`/movie/${movie.id}`)}>See More</button>
            </div>
        )
    })

    return (
        <div>
            <div className='tr'>
                {cards}
            </div>
        </div>
    )
}

export default SearchedMovies