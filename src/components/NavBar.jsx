import React from "react";
import { AppBar,Toolbar,Typography,styled } from "@mui/material";
import { NavLink } from "react-router-dom";

const Header = styled(AppBar)`
    background-color : black ;
`

const Tab = styled(NavLink)`
    font-size : 20px;
    margin-right : 25px;
    color : inherit;
    text-decoration : none;
`


const NavBar =  () => {
    return (
        <Header position="static">
            <Toolbar>
                <Tab to="/">UnityInDiversity</Tab>
                <Tab to="/all">All Users</Tab>
                <Tab to="/add">Add Users</Tab>
            </Toolbar>
        </Header>
    )
};

export default NavBar;