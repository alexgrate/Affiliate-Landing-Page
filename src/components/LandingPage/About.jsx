import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

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

const About = () => {
    const [ref, inView] = useReveal();
    const [flipped, setFlipped] = useState(false);

    return (
        <section
        id="about"
        ref={ref}
        style={{
            padding: "clamp(80px,11vw,140px) clamp(20px,5vw,80px)",
            position: "relative",
            overflow: "hidden",
        }}
        >
        <Orb
            style={{
            width: 480,
            height: 480,
            background:
                "radial-gradient(circle, rgba(201,168,76,0.07) 0%, transparent 65%)",
            right: "-8%",
            top: "15%",
            }}
        />
        <div
            style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "clamp(40px,8vw,100px)",
            alignItems: "center",
            }}
        >
            <motion.div
            variants={stagger(0.12)}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            >
            <motion.span
                variants={fadeUp}
                style={{
                fontSize: 11,
                color: "var(--gold)",
                letterSpacing: "0.2em",
                fontWeight: 600,
                textTransform: "uppercase",
                display: "block",
                marginBottom: 16,
                }}
            >
                Who I Am
            </motion.span>
            <motion.h2
                variants={fadeUp}
                style={{
                fontSize: "clamp(2rem,4.5vw,3.5rem)",
                fontWeight: 900,
                lineHeight: 1.1,
                letterSpacing: "-0.025em",
                marginBottom: 28,
                }}
            >
                Your Digital
                <br />
                <span className="grad-text">Sales Partner</span>
            </motion.h2>
            <motion.p
                variants={fadeUp}
                style={{
                color: "var(--sub)",
                lineHeight: 1.88,
                fontSize: "clamp(14px,1.5vw,16px)",
                fontWeight: 300,
                marginBottom: 18,
                }}
            >
                Hi, I'm Okeke Kizito — a digital connector in the world of online sales.
                I don't own products. I partner with businesses like yours to
                promote what you already have, reaching the right buyers online.
            </motion.p>
            <motion.p
                variants={fadeUp}
                style={{
                color: "var(--sub)",
                lineHeight: 1.88,
                fontSize: "clamp(14px,1.5vw,16px)",
                fontWeight: 300,
                marginBottom: 32,
                }}
            >
                Through targeted advertising, I bring in customers and handle all
                promotion. You simply handle fulfillment.{" "}
                <span style={{ color: "var(--text)", fontWeight: 500 }}>
                It's a win-win
                </span>
                .
            </motion.p>
            {[
                ["100%", "Performance-based — no sale, no fee"],
                ["Clear", "Transparent reporting & communication"],
            ].map(([icon, text]) => (
                <motion.div
                key={text}
                variants={fadeUp}
                style={{
                    display: "flex",
                    gap: 14,
                    alignItems: "flex-start",
                    marginBottom: 14,
                }}
                >
                <div
                    style={{
                    width: 32,
                    height: 32,
                    borderRadius: 8,
                    background: "rgba(201,168,76,0.1)",
                    border: "1px solid var(--border)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 11,
                    fontWeight: 700,
                    color: "var(--gold)",
                    flexShrink: 0,
                    }}
                >
                    {icon}
                </div>
                <span
                    style={{
                    color: "var(--sub)",
                    fontSize: 15,
                    fontWeight: 300,
                    paddingTop: 6,
                    }}
                >
                    {text}
                </span>
                </motion.div>
            ))}
            </motion.div>

            {/* Flip Card */}
            <motion.div
            variants={scaleIn}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            >
            <div
                onClick={() => setFlipped(!flipped)}
                style={{
                perspective: 1100,
                cursor: "pointer",
                height: "clamp(340px,44vw,420px)",
                }}
            >
                <motion.div
                animate={{ rotateY: flipped ? 180 : 0 }}
                transition={{ duration: 0.8, ease }}
                style={{
                    width: "100%",
                    height: "100%",
                    position: "relative",
                    transformStyle: "preserve-3d",
                }}
                >
                <div
                    style={{
                    position: "absolute",
                    inset: 0,
                    backfaceVisibility: "hidden",
                    background: "var(--bg3)",
                    border: "1px solid var(--border)",
                    borderRadius: 28,
                    padding: "clamp(24px,4vw,44px)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    overflow: "hidden",
                    }}
                >
                    <div
                    style={{
                        position: "absolute",
                        top: 0,
                        right: 0,
                        width: 150,
                        height: 150,
                        background:
                        "radial-gradient(circle, rgba(201,168,76,0.11) 0%, transparent 70%)",
                        pointerEvents: "none",
                    }}
                    />
                    <div>
                    <div style={{ fontSize: 46, marginBottom: 18 }}>🤝</div>
                    <h3
                        style={{
                        fontSize: "clamp(1.2rem,2.5vw,1.7rem)",
                        fontWeight: 700,
                        marginBottom: 14,
                        lineHeight: 1.25,
                        }}
                    >
                        The Partnership Model
                    </h3>
                    <p
                        style={{
                        color: "var(--sub)",
                        lineHeight: 1.78,
                        fontWeight: 300,
                        fontSize: 15,
                        }}
                    >
                        I act as your dedicated online sales arm. You focus on your
                        product — I focus on filling your order book.
                    </p>
                    </div>
                    <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        color: "var(--gold)",
                        fontSize: 13,
                        fontWeight: 500,
                    }}
                    >
                    <span>Tap to reveal the deal</span>
                    <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.2, repeat: Infinity }}
                    >
                        →
                    </motion.span>
                    </div>
                </div>
                <div
                    style={{
                    position: "absolute",
                    inset: 0,
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                    background:
                        "linear-gradient(160deg, rgba(201,168,76,0.11), rgba(201,168,76,0.04))",
                    border: "1px solid rgba(201,168,76,0.3)",
                    borderRadius: 28,
                    padding: "clamp(24px,4vw,44px)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    gap: "clamp(10px,1.8vw,16px)",
                    }}
                >
                    <h3
                    style={{
                        fontSize: "clamp(1.1rem,2.2vw,1.45rem)",
                        fontWeight: 700,
                        color: "var(--gold2)",
                        marginBottom: 4,
                    }}
                    >
                    What You Get
                    </h3>
                    {[
                    "Zero upfront investment — ever",
                    "Professional ad campaigns on your behalf",
                    "Real buyers, not just traffic",
                    "Transparent sales tracking",
                    "Commission only when you earn",
                    "Dedicated support throughout",
                    ].map((item) => (
                    <div
                        key={item}
                        style={{ display: "flex", gap: 12, alignItems: "center" }}
                    >
                        <div
                        style={{
                            width: 20,
                            height: 20,
                            borderRadius: "50%",
                            background: "rgba(201,168,76,0.2)",
                            border: "1px solid var(--gold)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                            fontSize: 10,
                            color: "var(--gold)",
                            fontWeight: 700,
                        }}
                        >
                        ✓
                        </div>
                        <span
                        style={{
                            color: "var(--text)",
                            fontSize: "clamp(12px,1.4vw,14px)",
                            fontWeight: 300,
                        }}
                        >
                        {item}
                        </span>
                    </div>
                    ))}
                </div>
                </motion.div>
            </div>
            </motion.div>
        </div>
        </section>
    );
};

export default About;
