import React from 'react'
import PropTypes from 'prop-types'
// Styled
import { Wrapper, Image } from './Actor.styles'
const Actor = ({ name, character, imgUrl }) => {
    return (
        <>
            <Wrapper>
                <Image src={imgUrl} alt="actor-thumb" />
                <h3>{name}</h3>
                <h3>{character}</h3>
            </Wrapper>

        </>
    )
}

Actor.propTypes = {
    name: PropTypes.string,
    character: PropTypes.string,
    imgUrl: PropTypes.string,
}

export default Actor
