import React from 'react'

const Noise = () => {
    return (
        <svg style={{ position: "fixed", inset: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 0, opacity: 0.025 }} xmlns="http://www.w3.org/2000/svg">
            <filter id="n">
                <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="4" stitchTiles="stitch"/>
                <feColorMatrix type="saturate" values="0"/>
            </filter>
            <rect width="100%" height="100%" filter="url(#n)"/>
        </svg>
    )
}

export default Noise