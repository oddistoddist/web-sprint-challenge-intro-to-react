// Write your Character component here
import React from 'react'
import styled from 'styled-components'

const StyledCharacter = styled.div`
    margin: 10%;
    text-decoration: underline black;
`

export default function Character (props) {
    const {characterData} = props
    return(
        <StyledCharacter>
            <h3>{characterData.name}</h3>
            {/* could make them links */}
        </StyledCharacter>
    )
}