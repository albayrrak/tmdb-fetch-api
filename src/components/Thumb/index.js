import React from 'react'
import PropTypes from 'prop-types'


import { Link } from 'react-router-dom'

// Styles 
import { Image } from './Thumb.styles'

const Thumb = ({ image, moviId, clickable }) => {
    return (
        <div>
            {clickable ? (
                <Link to={`/${moviId}`}>
                    <Image src={image} alt='movie thumb' />
                </Link>
            ) : (

                <Image src={image} alt='movie thumb' />
            )}
        </div>
    )
}

Thumb.propTypes = {
    image: PropTypes.string,
    moviId: PropTypes.number,
    clickable: PropTypes.bool,
}
export default Thumb
