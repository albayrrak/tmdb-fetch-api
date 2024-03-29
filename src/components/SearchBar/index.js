import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

// Image
import searchIcon from '../../images/search-icon.svg'
//Styles
import { Wrapper, Content } from './SearchBar.styles'


const SearchBar = ({ setSearchTerm }) => {
    const [state, setState] = useState('')
    const inital = useRef(true)

    useEffect(() => {
        if (inital.current) {
            inital.current = false
            return;
        }

        const timer = setTimeout(() => {
            setSearchTerm(state);
        }, 100)
        return () => clearTimeout(timer)
    }, [setSearchTerm, state])

    return (
        <Wrapper>
            <Content>
                <img src={searchIcon} alt="search-icon" />
                <input type='text'
                    placeholder="Search Movie"
                    onChange={event => setState(event.currentTarget.value)}
                    value={state}
                />
            </Content>
        </Wrapper>
    )
}

SearchBar.propTypes = {
    callback: PropTypes.func
}
export default SearchBar
