import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

// Styles
import { Wrapper, Content } from "./BreadCrumb.styles"

const BreadCrumb = ({ movieTitle }) => {
    return (
        <div>
            <Wrapper>
                <Content>
                    <Link to='/'>
                        <span>Home</span>
                    </Link>
                    <span>|</span>
                    <span>{movieTitle}</span>
                </Content>
            </Wrapper>
        </div>
    )
}

BreadCrumb.propTypes = {
    movieTitle: PropTypes.string,
}
export default BreadCrumb
