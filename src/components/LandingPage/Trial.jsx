import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ease = [0.22, 1, 0.36, 1];
const fadeUp   = { hidden: { opacity: 0, y: 48, filter: "blur(8px)" }, show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.75, ease } } };
const scaleIn  = { hidden: { opacity: 0, scale: 0.85 }, show: { opacity: 1, scale: 1, transition: { duration: 0.65, ease } } };
const stagger  = (d = 0.11) => ({ hidden: {}, show: { transition: { staggerChildren: d, delayChildren: 0.05 } } });


function useReveal(amount = 0.15) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, amount });
    return [ref, inView];
}

const Orb = ({ style: s = {} }) => <div style={{ position: "absolute", borderRadius: "50%", filter: "blur(80px)", pointerEvents: "none", ...s }} />;


const Trial = () => {
    const [ref, inView] = useReveal();

    return (
        <section
        id="trial"
        ref={ref}
        style={{
            padding: "clamp(80px,11vw,140px) clamp(20px,5vw,80px)",
            background: "var(--bg2)",
            position: "relative",
            overflow: "hidden",
        }}
        >
        <div
            style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
                "repeating-linear-gradient(45deg, rgba(201,168,76,0.018) 0, rgba(201,168,76,0.018) 1px, transparent 0, transparent 50%)",
            backgroundSize: "28px 28px",
            }}
        />
        <Orb
            style={{
            width: 700,
            height: 400,
            background:
                "radial-gradient(ellipse, rgba(201,168,76,0.08) 0%, transparent 65%)",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            }}
        />

        <div
            style={{
            maxWidth: 840,
            margin: "0 auto",
            textAlign: "center",
            position: "relative",
            zIndex: 1,
            }}
        >
            <motion.div
            variants={stagger(0.12)}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            >
            <motion.div
                variants={scaleIn}
                style={{
                display: "inline-block",
                background: "rgba(201,168,76,0.1)",
                border: "1px solid rgba(201,168,76,0.3)",
                borderRadius: 100,
                padding: "7px 20px",
                marginBottom: 30,
                }}
            >
                <span
                style={{
                    fontSize: 13,
                    color: "var(--gold2)",
                    fontWeight: 600,
                    letterSpacing: "0.06em",
                }}
                >
                🎁 Limited Offer
                </span>
            </motion.div>

            <motion.h2
                variants={fadeUp}
                style={{
                fontSize: "clamp(2.2rem,5.5vw,4rem)",
                fontWeight: 900,
                letterSpacing: "-0.03em",
                lineHeight: 1.08,
                marginBottom: 22,
                }}
            >
                The 6-Month
                <br />
                <span className="grad-text">Risk-Free Trial</span>
            </motion.h2>
            <motion.p
                variants={fadeUp}
                style={{
                color: "var(--sub)",
                fontSize: "clamp(14px,1.7vw,17px)",
                lineHeight: 1.85,
                maxWidth: 560,
                margin: "0 auto 52px",
                fontWeight: 300,
                }}
            >
                I'll promote your products with zero upfront cost for six full
                months. We track everything together — you only continue if you're
                genuinely happy with the results.
            </motion.p>

            <motion.div
                variants={scaleIn}
                style={{
                background: "var(--bg3)",
                border: "1px solid var(--border2)",
                borderRadius: 24,
                padding: "clamp(24px,4vw,44px)",
                marginBottom: 44,
                }}
            >
                <div
                style={{ display: "flex", gap: 6, height: 10, marginBottom: 8 }}
                >
                {["Mo. 1", "Mo. 2", "Mo. 3", "Mo. 4", "Mo. 5", "Mo. 6"].map(
                    (m, i) => (
                    <motion.div
                        key={m}
                        initial={{ scaleX: 0 }}
                        animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 + i * 0.18, ease }}
                        style={{ originX: 0 }}
                        className="month-bar"
                    >
                        <div
                        style={{
                            height: "100%",
                            borderRadius: 100,
                            background: `linear-gradient(90deg, var(--gold), var(--gold2))`,
                            opacity: 0.58 + i * 0.07,
                        }}
                        />
                    </motion.div>
                    ),
                )}
                </div>
                <div style={{ display: "flex", gap: 6 }}>
                {["Mo. 1", "Mo. 2", "Mo. 3", "Mo. 4", "Mo. 5", "Mo. 6"].map(
                    (m) => (
                    <div
                        key={m}
                        style={{
                        flex: 1,
                        fontSize: "clamp(10px,1.2vw,12px)",
                        color: "var(--dim)",
                        textAlign: "center",
                        fontWeight: 500,
                        }}
                    >
                        {m}
                    </div>
                    ),
                )}
                </div>
                <div
                style={{
                    marginTop: 28,
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
                    gap: 14,
                }}
                >
                {[
                    ["✓", "No Lock-in Contract"],
                    ["✓", "Full Performance Reports"],
                    ["✓", "Commission Only"],
                    ["✓", "Transparent Process"],
                ].map(([icon, t]) => (
                    <div
                    key={t}
                    style={{
                        display: "flex",
                        gap: 8,
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                    >
                    <span
                        style={{
                        color: "var(--gold)",
                        fontWeight: 700,
                        fontSize: 14,
                        }}
                    >
                        {icon}
                    </span>
                    <span
                        style={{
                        color: "var(--sub)",
                        fontSize: "clamp(11px,1.3vw,13px)",
                        fontWeight: 300,
                        }}
                    >
                        {t}
                    </span>
                    </div>
                ))}
                </div>
            </motion.div>

            <motion.button
                variants={fadeUp}
                onClick={() =>
                document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                whileHover={{
                scale: 1.05,
                boxShadow: "0 8px 50px rgba(201,168,76,0.5)",
                }}
                whileTap={{ scale: 0.96 }}
                style={{
                background: "linear-gradient(135deg, var(--gold), var(--gold2))",
                color: "var(--bg)",
                border: "none",
                borderRadius: 16,
                padding: "18px 52px",
                fontWeight: 700,
                fontSize: "clamp(14px,1.8vw,17px)",
                cursor: "pointer",
                }}
            >
                Start My 6-Month Trial →
            </motion.button>
            </motion.div>
        </div>

        </section>
    );
};

export default Trial;
