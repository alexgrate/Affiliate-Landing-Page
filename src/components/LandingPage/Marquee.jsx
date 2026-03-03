import { motion } from "framer-motion";


const Marquee = () => {
    const items = [
        "Zero Upfront Cost",
        "Commission-Based",
        "Proven Results",
        "Lagos Nigeria",
        "Risk-Free Trial",
        "30% Sales Growth",
        "Online Ad Expert",
        "Pay Per Sale",
    ];
    const rep = [...items, ...items];


    return (
        <div
        style={{
            overflow: "hidden",
            background: "var(--bg2)",
            borderTop: "1px solid var(--border2)",
            borderBottom: "1px solid var(--border2)",
            padding: "13px 0",
        }}
        >
        <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
            style={{
            display: "flex",
            gap: 44,
            whiteSpace: "nowrap",
            width: "max-content",
            }}
        >
            {rep.map((item, i) => (
            <span
                key={i}
                style={{
                color: i % 2 === 0 ? "var(--sub)" : "var(--gold)",
                fontSize: 12,
                fontWeight: 500,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                }}
            >
                {item}{" "}
                <span style={{ color: "var(--dim)", marginLeft: 44 }}>✦</span>
            </span>
            ))}
        </motion.div>
        </div>
    );
};

export default Marquee;
