import React from 'react'


import { Link } from 'react-router-dom'

// import RMDBLogo from '../../images/react-movie-logo.svg'
import TMDBLogo from '../../images/tmdb_logo.svg'

import { Wrapper, Content, LogoImg, TMDBLogoImg } from './Header.styles'

const index = () => {
    return (
        <div>
            <Wrapper>
                <Content>
                    <Link to="/">
                        nekşfliş
                    </Link>
                    <TMDBLogoImg src={TMDBLogo} />
                </Content>
            </Wrapper>
        </div>
    )
}

export default index
