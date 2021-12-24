import styled from "styled-components";


export const Wrapper = styled.div`
    position:sticky;
 

    background-color: var(--red);
    padding: 0 20px;
    width: 100%;
`

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: var(--maxWidth);
    padding: 20px 0;
    margin: 0 auto;
    a{
        text-decoration:none;
        color:#fff;
        text-transform: uppercase;
        font-size: 25px;
        font-weight: 600;
    }
`

export const LogoImg = styled.img`
    width: 200px;
    @media screen and (max-width: 500px){
        width: 150px;
    }


`

export const TMDBLogoImg = styled.img`
    width: 100px;

    @media screen and (max-width: 500px){
        width: 80px;
    }

`