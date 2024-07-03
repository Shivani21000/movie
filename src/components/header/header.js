import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

function Header() {
    return (
        <Nav>
            <Link to="/" style={{ textDecoration: "none" }}>
                <Logo src="/images/tfs.png" alt="TFS logo" />
            </Link>
            <NavMenu>
                <NavItem to="/">
                    <img src="/images/home.svg" alt="home icon" />
                    <span>HOME</span>
                </NavItem>
                <NavItem to="/profile">
                    <img src="/images/profile.svg" alt="profile icon" />
                    <span>MY PROFILE</span>
                </NavItem>
            </NavMenu>
            <Link to="/login">
                <UserImg src="https://img.icons8.com/?size=100&id=81139&format=png&color=000000" alt="user icon" />
            </Link>
        </Nav>
    );
}

export default Header;

const Nav = styled.nav`
    height: 70px;
    background: #ffffff;
    display: flex;
    align-items: center;
    padding: 0 36px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    overflow-x: hidden;

    @media (max-width: 900px) {
        justify-content: space-between;
        padding: 0 20px;
    }
`;

const Logo = styled.img`
    width: 80px;
`;

const NavMenu = styled.div`
    display: flex;
    flex: 1;
    margin-left: 25px;
    align-items: center;

    @media (max-width: 900px) {
        display: none;
    }
`;

const NavItem = styled(Link)`
    text-decoration: none;
    color: #000000;
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;
    transition: color 0.3s ease;

    img {
        height: 20px;
        margin-right: 8px;
    }

    span {
        font-size: 13px;
        letter-spacing: 1.42px;
        position: relative;

        &:after {
            content: "";
            height: 2px;
            background: #000000;
            position: absolute;
            left: 0;
            right: 0;
            bottom: -6px;
            opacity: 0;
            transform-origin: left center;
            transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
            transform: scaleX(0.5);
        }
    }

    &:hover {
        color: #007bff;

        span:after {
            transform: scaleX(1);
            opacity: 1;
            background: #007bff;
        }
    }
`;

const UserImg = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    cursor: pointer;
    transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.1);
    }
`;
