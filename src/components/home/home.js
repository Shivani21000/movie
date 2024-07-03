import React from 'react';
import styled from 'styled-components';
import MoviesList from './movies_list/movies_list';

function Home() {
    return (
        <Container>
            <Title>Welcome to the Movie App</Title>
            <MoviesList />
        </Container>
    );
}

export default Home;

const Container = styled.main`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;

    &:before {
        background: url('/images/home-background.jpg') center center / cover no-repeat fixed;
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: -1;
    }
`;

const Title = styled.h1`
    color: black;
    margin: 20px 0;
    font-size: 2.5em;
    text-align: center;
    z-index: 1;
`;
