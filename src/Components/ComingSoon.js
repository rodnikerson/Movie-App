import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Star from '../Imgs & SVG/star.png'

function ComingSoon() {

    const [comingSoon, setcomingSoon] = useState([])
    const [isFetched, setIsFetched] = useState(false)
  
    async function getData() {
      const response = await axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=daffd40bac50d42bcf8b01b32b4e9b9b&language=en-US&page=1')
      setcomingSoon(response.data.results)
      setIsFetched(true)
    }
  
    useEffect(() => {
      getData()
    }, [])

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

    const navigate = useNavigate()

    const cards = comingSoon.map(movie => {

        const genre = movie.genre_ids
        let genreStorage = []
        for (let i = 0; i < 3; i++) {
            if(genre[i]) {
                genreStorage = [...genreStorage, genres[`${genre[i]}`]]
            }
            else {
                return
            }
        }

        return (
            <div className='tr--card' key={movie.id}>
                <img className='tr--movie--poster' src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt='Movie poster' />
                {genreStorage.map(genre => {
                    return <span key={genre}>{genre}</span>
                })}
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
        <div className='tr'>
            {cards}
        </div>
    )
}

export default ComingSoon