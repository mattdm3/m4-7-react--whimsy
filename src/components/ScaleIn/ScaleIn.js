import React from "react"
import { useSpring, animated } from "react-spring"


const ScaleIn = ({ children }) => {

    const style = useSpring({
        transform: "scale(1)",
        from: {
            transform: "scale(0)",
        },
        config: {
            mass: 3.5,
            tension: 377,
            friction: 24
        }
    })

    const query = '(prefers-reduced-motion: reduce)';
    const mediaQueryList = window.matchMedia(query);

    const shouldReduceMotion = mediaQueryList.matches;

    if (shouldReduceMotion) {
        return null;
    }

    return (
        <animated.div style={style}>{children}</animated.div>
    )
}

export default ScaleIn;