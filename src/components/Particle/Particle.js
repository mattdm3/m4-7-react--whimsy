import React from "react"
import { useSpring, animated } from "react-spring"
import { sample } from '../../utils';

const convertDegreesToRadians = angle => (angle * Math.PI) / 180;




const Particle = ({ startDistance, endDistance, children, angle }) => {

    const angleInRads = convertDegreesToRadians(angle);

    const delay = React.useRef(sample([0, 200]));

    const startX = Math.cos(angleInRads) * startDistance;
    const startY = Math.sin(angleInRads) * startDistance;

    const endX = Math.cos(angleInRads) * endDistance;
    const endY = Math.sin(angleInRads) * endDistance;

    const positionSpring = useSpring({
        transform: `translate(${endX}px, ${endY}px) scale(0)`,
        from: {
            transform: `translate(${startX}px, ${startY}px) scale(1)`,
        },
        delay: delay.current,
        config: {
            tension: 120,
            friction: 30,
        },

    });

    const opacitySpring = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        config: {
            tension: 140,
            friction: 20,
        },

    });
    const query = '(prefers-reduced-motion: reduce)';
    const mediaQueryList = window.matchMedia(query);
    const shouldReduceMotion = mediaQueryList.matches;
    if (shouldReduceMotion) {
        return null;
    }

    // const x = Math.cos(angleInRads) * distance;
    // const y = Math.sin(angleInRads) * distance;


    // const styleSpring = useSpring({
    //     transform: `translate(${x}px, ${y}px) scale(2.5)`,
    //     from: {
    //         transform: "translate(0, 0) scale(1)",

    //     },
    //     config: {
    //         tension: 120,
    //         friction: 30,
    //     },
    //     // config: {
    //     //     mass: 1.1,
    //     //     tension: 231,
    //     //     friction: 15,
    //     //     velocity: 9
    //     // }
    // })

    return (
        /* <animated.div distance={distance} angle={angle} style={styleSpring} > {children}</ animated.div> */

        <animated.div
            style={{
                ...opacitySpring,
                ...positionSpring,
            }}
        >
            {children}
        </animated.div>

    )
}

export default Particle;