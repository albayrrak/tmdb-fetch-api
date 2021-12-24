import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    height: 100px;
    background: var(--white);
    padding: 0 20px;
    border-bottom: 1px solid var(--lightGrey);

`

export const Content = styled.div`
    position: relative;
    max-width: var(--maxWidth);
    width: 100%;
    height: 55px;
    margin: 0 auto;
    border-radius: 40px;
    color: var(--medGrey);

    img{
        position: absolute;
        left: 15px;
        top: 14px;
        width: 30px;
        color: var(--lightGrey);
    }
    input{
        font-size: 20px;
        position: absolute;
        left: 0;
        margin: 8px 0;
        padding: 0 0 0 60px;
        border: 0;
        width: 95%;
        background: transparent;
        height: 40px;
        color: var(--medGrey);
        
        :focus{
            outline: none;
        }

    }

`
