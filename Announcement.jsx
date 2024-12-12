import React from 'react'
import styled from 'styled-components'

const Contaniner = styled.div`
    height:23px;
    background-color:black;
    color:white
`

const Announcement = () => {
    return (
        <Contaniner>
            회원가입 후 첫 구매 전품목 15% OFF
        </Contaniner>
    )
}

export default Announcement
