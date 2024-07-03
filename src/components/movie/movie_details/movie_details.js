import React, { useState } from 'react';
import styled from 'styled-components';
import 'font-awesome/css/font-awesome.min.css';
import { Link } from "react-router-dom";

const MovieDetails = (props) => {
    const [mute, setMute] = useState(true);

    return (
        <Container>
            <Details>
                <h1>{props.movie.name}</h1>
                <SubTitle>
                    {props.movie.lang} • {props.movie.duration}m • Animated
                </SubTitle>
                <Description>
                    {props.movie.desc}
                </Description>
                <Link to={'/booking/' + props.movie.id} style={{ "textDecoration": "none" }}>
                    <BookTicket>
                        <img src="/images/ticket.png" alt="" />
                        <span>BOOK TICKETS</span>
                    </BookTicket>
                </Link>
            </Details>
            <Poster>
                <MoviePoster src={props.movie.poster} alt={`${props.movie.name} Poster`} />
            </Poster>
        </Container>
    );
};

export default MovieDetails;

const Container = styled.div`
    display: flex;
    margin-top: 20px;
    height: 100%;
    width: 100%;
    background: #f9f9f9;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

    @media (max-width: 900px) {
        flex-direction: column-reverse;
    }
`;

const Details = styled.div`
    width: 40%;
    padding: 0 36px;
    background: #ffffff;

    @media (max-width: 900px) {
        width: 100%;
        padding: 20px;
    }
`;

const SubTitle = styled.div`
    color: #666666;
    font-size: 15px;
    min-height: 20px;
    margin-top: 26px;
`;

const Description = styled.div`
    width: 80%;
    line-height: 1.4;
    font-size: 20px;
    margin-top: 16px;
    color: #333333;

    @media (max-width: 900px) {
        width: 100%;
    }
`;

const BookTicket = styled.button`
    margin-top: 30px;
    margin-bottom: 30px;
    border-radius: 4px;
    font-size: 15px;
    padding: 0 24px;
    display: flex;
    align-items: center;
    height: 56px;
    background: #007bff;
    color: white;
    border: none;
    letter-spacing: 1.8px;
    cursor: pointer;
    transition: background 0.3s;

    &:hover {
        background: #0056b3;
    }
`;

const Poster = styled.div`
    width: 60%;
    background: #e0e0e0;

    @media (max-width: 900px) {
        width: 100%;
    }
`;

const MoviePoster = styled.img`
    width: 100%;
    height: auto;
    border-radius: 10px;
`;
