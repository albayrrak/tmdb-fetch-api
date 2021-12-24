import React, { useState, useEffect } from 'react'



// Config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config'

// Components
import HeroImage from './HeroImage'
import Grid from './Grid'
import Thumb from './Thumb'
import Spinner from './Spinner'
import SearchBar from './SearchBar'
import Button from './Button'

// Hooks
import { useHomeFetch } from '../hooks/useHomeFetch'

// Image
import NoImage from '../images/no_image.jpg'

const Home = () => {
    const { state, loading, error, setSearchTerm, setIsLoadingMore } = useHomeFetch()

    console.log(state);

    if (error) return <div>Something went wrong...</div>
    return (
        <div>
            {
                state.results[0] ?
                    <HeroImage
                        image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
                        title={state.results[0].original_title}
                        text={state.results[0].overview}
                    />
                    : null
            }
            <SearchBar setSearchTerm={setSearchTerm} />
            <Grid header="Populer Movies">
                {state.results.map(movie => (
                    <Thumb
                        key={movie.id}
                        clickable
                        image={
                            movie.poster_path
                                ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                                : NoImage
                        }

                        moviId={movie.id}
                        title={movie.title}

                    />
                ))}

            </Grid>
            {loading && <Spinner />}
            {state.page < state.total_pages && !loading && (
                <Button text="Daha fazla..." callback={() => setIsLoadingMore(true)} />
            )}
        </div>
    )
}

export default Home
