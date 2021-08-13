import React from 'react'
import Character from './Character'
import styled from 'styled-components'

const StyledCharacters = styled.div`
    color: ${props => props.theme.primary};
    text-align: left;
    margin-left: 8%;
`

export default function Characters (props) {
    const {characterList} = props
    console.log(characterList)
    return(
        characterList.map((x) =>
        <StyledCharacters key ={x.name}>
            <Character characterData={x}/>
        </StyledCharacters>
    ))
}