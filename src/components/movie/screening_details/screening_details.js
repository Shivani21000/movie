import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import moment from "moment";

const ScreeningDetails = ({ movie }) => {
    const screenings = [
        { time: '10 AM', daysFromNow: 1 },
        { time: '8 PM', daysFromNow: 1 },
        { time: '10 AM', daysFromNow: 2 },
        { time: '8 PM', daysFromNow: 2 }
    ];

    return (
        <Container>
            <Title>SCREENING DETAILS</Title>
            <Content>
                {screenings.map((screening, index) => (
                    <StyledLink key={index} to={`/booking/${movie.id}`}>
                        <ScreeningWrap>
                            <span>{`${screening.time} ${moment().add(screening.daysFromNow, 'days').format('DD MMM')}`}</span>
                        </ScreeningWrap>
                    </StyledLink>
                ))}
            </Content>
        </Container>
    );
};

export default ScreeningDetails;

const Container = styled.div`
    margin-top: 30px;
    padding: 30px 0 26px;
    @media (max-width: 900px) {
        margin-bottom: 30px;
    }
`;

const Title = styled.h4`
    color: #ffffff;
    text-align: center;
    margin-bottom: 20px;
    font-size: 24px;
    font-weight: bold;
    letter-spacing: 1.5px;
`;

const Content = styled.div`
    display: flex;
    gap: 25px;
    overflow-x: auto;
    padding-left: 5px;
    &::-webkit-scrollbar {
        display: none;
    }
    @media (max-width: 900px) {
        font-size: 12px;
    }
`;

const StyledLink = styled(Link)`
    text-decoration: none;
`;

const ScreeningWrap = styled.div`
    background:#00000;
    border-radius: 10px;
    cursor: pointer;
    border: 3px solid rgba(249, 249, 249, 0.1);
    box-shadow: rgba(0, 0, 0, 0.69) 0px 26px 30px -10px,
                rgba(0, 0, 0, 0.73) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    text-align: center;
    padding: 20px;
    &:hover {
        transform: scale(1.05);
        box-shadow: rgba(0, 0, 0, 0.8) 0px 40px 58px -16px,
                    rgba(0, 0, 0, 0.72) 0px 30px 22px -10px;
        border-color: rgba(249, 249, 249, 0.8);
    }
    span {
        letter-spacing: 1.42px;
        color: rgba(249, 249, 249, 0.8);
    }
    @media (max-width: 900px) {
        width: 150px;
    }
`;
