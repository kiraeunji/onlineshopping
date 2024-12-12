import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

const Contaniner = styled.div`
    height: 60px;
    `

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px 20px;
    align-items:center;
`
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items:center;
    `
const Language = styled.span`
    font-size:14px;
    cursor:pointer;
    `

const SerchContainer = styled.div`
    border: 1px solid lightgray;
    display: flex;
    align-items:center;
    margin-left:25px;
    padding:5px
`
const Input = styled.input`
    border:none;
    `
const Center = styled.div`
    flex: 1;
    text-align:center;
    `

const Logo = styled.h1`
    font-weight: bold;
`
const Right = styled.div`
    flex: 1;
    display:flex;
    align-items:center;
    justify-content:flex-end
    `
const MenuItem = styled.div`
    font-size:14px
    cursor: pointer;
    margin-left:25px
`
const Navbar = () => {
    return (
    <Contaniner>
    <Wrapper>
    <Left>
    <Language>
    KR
    </Language>
    <SerchContainer>
    <Input/>
    <search/>
    &#x1F50D;
    </SerchContainer>
    </Left>
    <Center><Logo>Eau de Parfum .</Logo></Center>
    <Right>
    <MenuItem>
    <Link to ="/register" style={{textDecoration:'none',color:'inherit'}}>REGISTER</Link>
    </MenuItem>
    <MenuItem>
    <Link to ="/signin" style={{textDecoration:'none',color:'inherit'}}>SIGN IN</Link>
    </MenuItem>
    </Right>
    </Wrapper>
    </Contaniner>
    )
    }
    export default Navbar