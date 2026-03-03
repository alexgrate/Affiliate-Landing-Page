import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];
const fadeUp   = { hidden: { opacity: 0, y: 48, filter: "blur(8px)" }, show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.75, ease } } };
const stagger  = (d = 0.11) => ({ hidden: {}, show: { transition: { staggerChildren: d, delayChildren: 0.05 } } });


function useReveal(amount = 0.15) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, amount });
    return [ref, inView];
}

const steps = [
    { n: "01", icon: "🤝", title: "Partner Up", desc: "Share your product, pricing and commission preference. We agree on terms and kick things off." },
    { n: "02", icon: "📣", title: "I Promote", desc: "I run targeted ad campaigns across social & digital channels to reach buyers who want what you're selling." },
    { n: "03", icon: "🛒", title: "Orders Come In", desc: "Customers find your product through my campaigns and place orders through my channels." },
    { n: "04", icon: "🚚", title: "You Fulfill", desc: "I forward every order to you. You handle shipping, packaging, and the customer experience." },
    { n: "05", icon: "💰", title: "We Share Profits", desc: "You pay a fair commission (10–20%) per completed sale only. No sale = no fee — ever." },
];

const HowItWorks = () => {
    const [ref, inView] = useReveal(0.05);
    const [active, setActive] = useState(null);

    return (
        <section
        id="how-it-works"
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
                "radial-gradient(circle, rgba(201,168,76,0.04) 1px, transparent 1px)",
            backgroundSize: "34px 34px",
            maskImage:
                "radial-gradient(ellipse 80% 80% at 50% 50%, black 25%, transparent 78%)",
            }}
        />
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <motion.div
            variants={stagger(0.12)}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            style={{ textAlign: "center", marginBottom: "clamp(48px,7vw,80px)" }}
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
                The Process
            </motion.span>
            <motion.h2
                variants={fadeUp}
                style={{
                fontSize: "clamp(2rem,5vw,3.5rem)",
                fontWeight: 900,
                letterSpacing: "-0.025em",
                lineHeight: 1.1,
                }}
            >
                How It <span className="grad-text">Works</span>
            </motion.h2>
            <motion.p
                variants={fadeUp}
                style={{
                color: "var(--sub)",
                fontSize: "clamp(13px,1.5vw,16px)",
                fontWeight: 300,
                maxWidth: 500,
                margin: "16px auto 0",
                lineHeight: 1.75,
                }}
            >
                A simple, transparent process from first contact to shared profits.
            </motion.p>
            </motion.div>

            <div
            style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))",
                gap: 14,
            }}
            >
            {steps.map((step, i) => (
                <motion.div
                key={step.n}
                variants={{
                    hidden: { opacity: 0, y: 50, filter: "blur(8px)" },
                    show: {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                    transition: { duration: 0.65, delay: i * 0.1, ease },
                    },
                }}
                initial="hidden"
                animate={inView ? "show" : "hidden"}
                whileHover={{
                    y: -10,
                    boxShadow:
                    "0 24px 60px rgba(0,0,0,0.35), 0 0 0 1px rgba(201,168,76,0.25)",
                }}
                onClick={() => setActive(active === i ? null : i)}
                style={{
                    background:
                    active === i ? "rgba(201,168,76,0.07)" : "var(--bg3)",
                    border: `1px solid ${active === i ? "rgba(201,168,76,0.4)" : "var(--border2)"}`,
                    borderRadius: 22,
                    padding: "clamp(20px,3vw,34px)",
                    cursor: "pointer",
                    transition: "border-color 0.3s, background 0.3s",
                }}
                >
                <div
                    style={{
                    fontSize: 11,
                    color: "var(--gold)",
                    fontWeight: 600,
                    letterSpacing: "0.15em",
                    fontFamily: "Outfit, sans-serif",
                    marginBottom: 16,
                    }}
                >
                    STEP {step.n}
                </div>
                <div style={{ fontSize: 40, marginBottom: 16 }}>{step.icon}</div>
                <h3
                    style={{
                    fontSize: "clamp(0.95rem,1.8vw,1.15rem)",
                    fontWeight: 700,
                    marginBottom: 10,
                    lineHeight: 1.3,
                    }}
                >
                    {step.title}
                </h3>
                <p
                    style={{
                    color: "var(--sub)",
                    fontSize: "clamp(12px,1.3vw,13.5px)",
                    lineHeight: 1.78,
                    fontWeight: 300,
                    }}
                >
                    {step.desc}
                </p>
                </motion.div>
            ))}
            </div>
        </div>
        </section>
    );
};

export default HowItWorks;
