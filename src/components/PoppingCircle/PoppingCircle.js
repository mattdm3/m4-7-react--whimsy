import React from "react"
import styled, { keyframes } from "styled-components"

const PoppingCircle = ({ size, color }) => {
    const query = '(prefers-reduced-motion: reduce)';
    const mediaQueryList = window.matchMedia(query);
    const shouldReduceMotion = mediaQueryList.matches;
    if (shouldReduceMotion) {
        return null;
    }
    return (
        <Wrapper style={{ width: size, background: color, height: size }} />

    )
}

const scale = keyframes`
    from {
        transform: scale(0);

    }
    to {
        transform: scale(1);
    
    }

`
const fade = keyframes`
    from {
        opacity: 1; 
    }
    to {
        opacity: 0;
    }
`


const Wrapper = styled.div`
    display: block; 
    border-radius: 50%;

    animation: ${scale} 300ms ease-in forwards, ${fade} 500ms cubic-bezier(0.44, 0.11, 0.93, 0.72) forwards;

    
     

`

export default PoppingCircle;