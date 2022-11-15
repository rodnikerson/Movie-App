import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import AnimatedPage from './AnimatedPage';

function Movie() {

    const { id } = useParams();

    const [isFetched, setIsFetched] = useState(false)

    const [movie, setMovie] = useState([])
    const [cast, setCast] = useState([])

    async function getDataCast() {
        const responseCast = await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=daffd40bac50d42bcf8b01b32b4e9b9b`)
        setCast(responseCast.data.cast)
    }

    async function getData() {
        const responseMovie = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=daffd40bac50d42bcf8b01b32b4e9b9b`)
        setMovie(responseMovie.data)
        setIsFetched(true)
    }

    useEffect(() => {
        getData()
        getDataCast()
    }, [])

    const genres = movie.genres

    const names = genres && genres.map(genre => {
        return <li key={genre.id}>{genre.name}</li>
    })

    const movieCast = cast.map(person => {
        return (
            <div className='cast' key={person.id}>
                <img className='person--img' src={`https://image.tmdb.org/t/p/original${person.profile_path}`} alt='Person' />
                <p className='cast--p'>{person.name}</p>
                <p className='cast--p'>{person.character}</p>
            </div>
        )
    })

    return (
        <div>
            {
                isFetched ?
                    <AnimatedPage>
                        <div className='movie'>
                            <img className='movie--poster' src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt='Poster' />
                            <div>
                                <h1>{movie.original_title}</h1>
                                <p>{movie.overview}</p>
                                <p>Released in: {movie.release_date}</p>
                                <p>Movie length: {movie.runtime} min.</p>
                                <ul>Genre(s): {names}</ul>
                                <h3>Cast (Most Famous)</h3>
                                <div className='movie--cast'>
                                    {movieCast.slice(0, 21)}
                                </div>
                            </div>
                        </div>
                    </AnimatedPage>
                    :
                    null
            }
        </div>
    )
}

export default Movie