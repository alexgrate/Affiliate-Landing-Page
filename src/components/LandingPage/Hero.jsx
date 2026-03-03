import { useScroll, useTransform, motion } from "framer-motion";

const Orb = ({ style: s = {} }) => (
    <div
        style={{
        position: "absolute",
        borderRadius: "50%",
        filter: "blur(80px)",
        pointerEvents: "none",
        ...s,
        }}
    />
);
const ease = [0.22, 1, 0.36, 1];
const fadeUp = {
    hidden: { opacity: 0, y: 48, filter: "blur(8px)" },
    show: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: { duration: 0.75, ease },
    },
};
const stagger = (d = 0.11) => ({
    hidden: {},
    show: { transition: { staggerChildren: d, delayChildren: 0.05 } },
});

const Hero = () => {
    const { scrollY } = useScroll();
    const textY = useTransform(scrollY, [0, 600], [0, 90]);
    const fadeOp = useTransform(scrollY, [0, 500], [1, 0]);

    return (
        <section
        style={{
            position: "relative",
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            padding: "100px clamp(20px,5vw,80px) 60px",
            textAlign: "center",
        }}
        >
        <div
            style={{
            position: "absolute",
            inset: 0,
            background:
                "radial-gradient(ellipse 110% 75% at 50% -5%, rgba(201,168,76,0.13) 0%, transparent 58%)",
            zIndex: 0,
            }}
        />
        <div
            style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
                "linear-gradient(var(--border2) 1px, transparent 1px), linear-gradient(90deg, var(--border2) 1px, transparent 1px)",
            backgroundSize: "68px 68px",
            zIndex: 0,
            maskImage:
                "radial-gradient(ellipse 75% 70% at 50% 50%, black 25%, transparent 78%)",
            }}
        />

        <Orb
            style={{
            width: 620,
            height: 620,
            background:
                "radial-gradient(circle, rgba(201,168,76,0.1) 0%, transparent 68%)",
            top: "-12%",
            left: "50%",
            transform: "translateX(-50%)",
            }}
        />
        <Orb
            style={{
            width: 280,
            height: 280,
            background:
                "radial-gradient(circle, rgba(201,168,76,0.07) 0%, transparent 70%)",
            bottom: "8%",
            left: "3%",
            }}
        />
        <Orb
            style={{
            width: 180,
            height: 180,
            background:
                "radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 70%)",
            top: "18%",
            right: "4%",
            }}
        />

        <motion.div
            style={{
            position: "relative",
            zIndex: 1,
            maxWidth: 920,
            y: textY,
            opacity: fadeOp,
            }}
        >
            <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease }}
            style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "rgba(201,168,76,0.1)",
                border: "1px solid rgba(201,168,76,0.3)",
                borderRadius: 100,
                padding: "7px 18px",
                marginBottom: 36,
            }}
            >
            <span
                style={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: "var(--gold2)",
                display: "inline-block",
                animation: "blink 2s infinite",
                }}
            />
            <span
                style={{
                fontSize: 12,
                color: "var(--gold2)",
                fontWeight: 500,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                }}
            >
                Open for partnerships · Lagos, Nigeria
            </span>
            </motion.div>

            <motion.div variants={stagger(0.15)} initial="hidden" animate="show">
            {["Helping Businesses", "Sell More Online"].map((line, i) => (
                <motion.h1
                key={i}
                variants={fadeUp}
                style={{
                    fontSize: "clamp(2.8rem,7.5vw,6rem)",
                    fontWeight: 900,
                    lineHeight: 1.04,
                    letterSpacing: "-0.03em",
                    marginBottom: 6,
                }}
                >
                {line}
                </motion.h1>
            ))}
            <motion.h1
                variants={fadeUp}
                style={{
                fontSize: "clamp(2.8rem,7.5vw,6rem)",
                fontWeight: 900,
                lineHeight: 1.04,
                letterSpacing: "-0.03em",
                marginBottom: 34,
                }}
            >
                <span className="grad-text">Without the Hassle.</span>
            </motion.h1>

            <motion.p
                variants={fadeUp}
                style={{
                fontSize: "clamp(1rem,2.2vw,1.22rem)",
                color: "var(--sub)",
                lineHeight: 1.78,
                maxWidth: 580,
                margin: "0 auto 48px",
                fontWeight: 300,
                }}
            >
                I'm{" "}
                <strong style={{ color: "var(--text)", fontWeight: 500 }}>
                Okeke Kizito
                </strong>
                , an affiliate marketer connecting your products to eager buyers.
                You handle your product — I'll drive the sales.
            </motion.p>

            <motion.div
                variants={fadeUp}
                style={{
                display: "flex",
                gap: 14,
                justifyContent: "center",
                flexWrap: "wrap",
                }}
            >
                <motion.button
                onClick={() =>
                    document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                whileHover={{
                    scale: 1.05,
                    boxShadow: "0 8px 40px rgba(201,168,76,0.45)",
                }}
                whileTap={{ scale: 0.96 }}
                style={{
                    background:
                    "linear-gradient(135deg, var(--gold), var(--gold2))",
                    color: "var(--bg)",
                    border: "none",
                    borderRadius: 14,
                    padding: "16px 36px",
                    fontWeight: 700,
                    fontSize: 15,
                    cursor: "pointer",
                }}
                >
                Get Started Today →
                </motion.button>
                <motion.button
                onClick={() =>
                    document
                    .getElementById("how-it-works")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                whileHover={{ borderColor: "var(--gold)", color: "var(--gold)" }}
                style={{
                    background: "transparent",
                    color: "var(--sub)",
                    border: "1px solid var(--border2)",
                    borderRadius: 14,
                    padding: "16px 36px",
                    fontWeight: 400,
                    fontSize: 15,
                    cursor: "pointer",
                    transition: "color 0.3s, border-color 0.3s",
                }}
                >
                See How It Works
                </motion.button>
            </motion.div>
            </motion.div>

            <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1, ease }}
            style={{
                marginTop: 76,
                display: "flex",
                gap: "clamp(24px,6vw,72px)",
                justifyContent: "center",
                flexWrap: "wrap",
            }}
            >
            {[
                ["30%+", "Average Sales Growth"],
                ["₦0", "Upfront Cost To You"],
                ["6-Mo", "Risk-Free Trial"],
            ].map(([v, l]) => (
                <div key={l} style={{ textAlign: "center" }}>
                <div
                    className="grad-text"
                    style={{
                    fontSize: "clamp(1.8rem,4vw,2.8rem)",
                    fontWeight: 900,
                    fontFamily: "Playfair Display, serif",
                    letterSpacing: "-0.02em",
                    }}
                >
                    {v}
                </div>
                <div
                    style={{
                    fontSize: 11,
                    color: "var(--dim)",
                    marginTop: 6,
                    letterSpacing: "0.07em",
                    textTransform: "uppercase",
                    fontWeight: 500,
                    }}
                >
                    {l}
                </div>
                </div>
            ))}
            </motion.div>
        </motion.div>

        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
            style={{
            position: "absolute",
            bottom: 30,
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 8,
            }}
        >
            <motion.div
            animate={{ y: [0, 9, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            style={{
                width: 24,
                height: 38,
                border: "1.5px solid var(--border)",
                borderRadius: 12,
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "center",
                padding: 5,
            }}
            >
            <div
                style={{
                width: 3,
                height: 8,
                borderRadius: 2,
                background: "var(--gold)",
                }}
            />
            </motion.div>
        </motion.div>
        </section>
    );
};

export default Hero;
