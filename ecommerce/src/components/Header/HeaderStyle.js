import styled from "styled-components";

export const NavigationBar = styled.nav`
    border: 1px solid red;
    width: 100%;
    height: 12vh;
    display: flex;
    justify-content: space-between;
    align-items:center;
    padding: 0 25px;
`

export const List = styled.ul`
    border: 1px solid blue;
    width: 60%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items:center;
`

export const ListItem = styled.li`
    border:1px solid green;
    width: auto;
    height: auto;
    list-style:none;
    font-size: 3vh;
    letter-spacing: 3px;
`