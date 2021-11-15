import React from 'react'
import { useSpring, animated } from 'react-spring'

export default function AnimatedDiv() {
    const styles = useSpring({
        loop: true,
        from: {
            width: 700,
            height: "100vh",
        },
        to: {
            width: 200,
            height: "300px",
        },
    })
    return (
        <animated.div

            style={{
                width: 200,
                height: 300,
                backgroundColor: 'red',
                borderRadius: 16,
                ...styles,
            }}
        />
    )
}

//how to use animation in react. this is important reference code .keep it to use further
