import { motion } from "framer-motion";

const Footer = () => {
    return (
        <footer
        style={{
            background: "var(--bg2)",
            borderTop: "1px solid var(--border2)",
            padding: "36px clamp(20px,5vw,80px)",
        }}
        >
        <div
            style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 18,
            }}
        >
            <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
            <div
                style={{
                width: 32,
                height: 32,
                borderRadius: 9,
                background: "linear-gradient(135deg, var(--gold), var(--gold2))",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                }}
            >
                <span
                style={{
                    fontWeight: 900,
                    fontSize: 13,
                    color: "var(--bg)",
                }}
                >
                Zito
                </span>
            </div>
            <span
                style={{
                fontWeight: 700,
                fontSize: 16,
                color: "var(--text)",
                }}
            >
                Connect
            </span>
            </div>
            <p style={{ color: "var(--dim)", fontSize: 12, fontWeight: 300 }}>
            © 2026 Okeke Kizito · Lagos, Nigeria
            </p>
            <div style={{ display: "flex", gap: 20 }}>
            {[
                ["WhatsApp", "https://wa.me/2347025466321"],
                ["Email", "mailto:Kizval07@gmail.com"],
            ].map(([s, h]) => (
                <motion.a
                key={s}
                href={h}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ color: "var(--gold)", y: -2 }}
                style={{
                    color: "var(--dim)",
                    textDecoration: "none",
                    fontSize: 12,
                    fontWeight: 400,
                    display: "inline-block",
                }}
                >
                {s}
                </motion.a>
            ))}
            </div>
        </div>
        </footer>
    );
};

export default Footer;
