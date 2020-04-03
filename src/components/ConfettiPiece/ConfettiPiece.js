import React from "react"
import styled from "styled-components"
import Particle from '../Particle'


const ConfettiPiece = ({ distance, angle, color }) => {

    return (
        <CenteredWithinParent>
            <Particle angle={angle} color={color} startDistance={distance * .55} endDistance={distance}>
                <Circle />
            </Particle>

        </CenteredWithinParent>


    )
}

const Circle = styled.div`
    background-color: red;
    border-radius: 50%;
    width: 10px; 
    height: 10px; 
    animation: all 1000ms infinite;
`
const CenteredWithinParent = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    /* transform: translate(-70%, -50%); */
    
`

export default ConfettiPiece;