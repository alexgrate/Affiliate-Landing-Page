import { motion } from 'framer-motion'

const Particles = () => {
    const pts = Array.from({ length: 24 }, (_, i) => ({
        id: i, x: Math.random() * 100, y: Math.random() * 100,
        size: Math.random() * 2.5 + 1, delay: Math.random() * 8,
        dur: 7 + Math.random() * 9, op: 0.12 + Math.random() * 0.22,
    }))


    return (
        <div style={{
            position: "fixed",
            inset: 0,
            pointerEvents: "none",
            zIndex: 0, 
            overflow: "hidden"
        }}>
            {pts.map(p => (
                <motion.div
                    key={p.id}
                    style={{ 
                        position: "absolute",
                        left: `${p.x}%`, 
                        top: `${p.y}%`, 
                        width: p.size, 
                        height: p.size, 
                        borderRadius: "50%",
                        background: "var(--gold",
                        opacity: p.op
                    }}
                    animate={{ y: [ -18, -18, -18 ], opacity: [ p.op, p.op * 2.2, p.op]}}
                    transition={{ duration: p.dur, delay: p.delay, repeat: Infinity, ease: "easeInOut"}}
                />
            ))}
        </div>
    )
}

export default Particles