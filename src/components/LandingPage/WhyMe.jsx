import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];
const fadeUp   = { hidden: { opacity: 0, y: 48, filter: "blur(8px)" }, show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.75, ease } } };
const stagger  = (d = 0.11) => ({ hidden: {}, show: { transition: { staggerChildren: d, delayChildren: 0.05 } } });


function useReveal(amount = 0.15) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, amount });
    return [ref, inView];
}

const Orb = ({ style: s = {} }) => <div style={{ position: "absolute", borderRadius: "50%", filter: "blur(80px)", pointerEvents: "none", ...s }} />;

const reasons = [
    { icon: "📈", title: "Proven Results", desc: "Businesses I've partnered with saw up to 30% sales growth in the first few months through data-driven campaigns." },
    { icon: "🛡️", title: "Low Risk", desc: "6-month trial with no long-term commitment. Not satisfied? We part ways professionally with zero obligation." },
    { icon: "🎯", title: "Deep Expertise", desc: "Social media, targeted campaigns, retargeting — I know where your buyers are and exactly how to reach them." },
    { icon: "💸", title: "Pay Per Sale", desc: "No retainers. No monthly fees. Commission only on completed sales. Your profit comes first." },
];

const WhyMe = () => {
    const [ref, inView] = useReveal(0.05);
    return (
        <section
        id="why-me"
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
            left: "-8%",
            bottom: "0%",
            }}
        />
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <motion.div
            variants={stagger(0.12)}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            style={{ marginBottom: "clamp(48px,7vw,80px)" }}
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
                The Advantage
            </motion.span>
            <motion.h2
                variants={fadeUp}
                style={{
                fontSize: "clamp(2rem,5vw,3.5rem)",
                fontWeight: 900,
                letterSpacing: "-0.025em",
                lineHeight: 1.1,
                maxWidth: 520,
                }}
            >
                Why Work <span className="grad-text">With Me?</span>
            </motion.h2>
            </motion.div>

            <div
            style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                gap: 18,
                marginBottom: 36,
            }}
            >
            {reasons.map((r, i) => (
                <motion.div
                key={r.title}
                variants={{
                    hidden: { opacity: 0, y: 40, filter: "blur(6px)" },
                    show: {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                    transition: { duration: 0.65, delay: i * 0.12, ease },
                    },
                }}
                initial="hidden"
                animate={inView ? "show" : "hidden"}
                whileHover={{
                    y: -8,
                    boxShadow:
                    "0 20px 60px rgba(0,0,0,0.3), 0 0 0 1px rgba(201,168,76,0.2)",
                }}
                style={{
                    background: "var(--bg3)",
                    border: "1px solid var(--border2)",
                    borderRadius: 22,
                    padding: "clamp(26px,3vw,38px)",
                }}
                >
                <motion.div
                    whileHover={{ scale: 1.2, rotate: 8 }}
                    style={{
                    fontSize: 42,
                    marginBottom: 20,
                    display: "inline-block",
                    }}
                >
                    {r.icon}
                </motion.div>
                <h3
                    style={{
                    fontSize: "clamp(1rem,2vw,1.25rem)",
                    fontWeight: 700,
                    marginBottom: 10,
                    }}
                >
                    {r.title}
                </h3>
                <p
                    style={{
                    color: "var(--sub)",
                    lineHeight: 1.82,
                    fontWeight: 300,
                    fontSize: "clamp(12px,1.4vw,14.5px)",
                    }}
                >
                    {r.desc}
                </p>
                </motion.div>
            ))}
            </div>
        </div>
        </section>
    );
};

export default WhyMe;
