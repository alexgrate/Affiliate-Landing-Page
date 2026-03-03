import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, Mail } from "lucide-react"

const ease = [0.22, 1, 0.36, 1];
const fadeUp   = { hidden: { opacity: 0, y: 48, filter: "blur(8px)" }, show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.75, ease } } };
const stagger  = (d = 0.11) => ({ hidden: {}, show: { transition: { staggerChildren: d, delayChildren: 0.05 } } });


function useReveal(amount = 0.15) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, amount });
    return [ref, inView];
}

const WaIcon = () => (
    <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
);

const contactMethods = [
    { icon: <WaIcon />, label: "WhatsApp", value: "+234-702-546-6321", sub: "Chat with me directly — fastest response", href: "https://wa.me/2347025466321", accent: "#25D366", shadow: "rgba(37,211,102,0.35)", cta: "Open WhatsApp" },
    { icon: <Phone />, label: "Phone Call", value: "+234-702-546-6321", sub: "Call me anytime between 8am – 8pm", href: "tel:+2347025466321", accent: "var(--gold)", shadow: "rgba(201,168,76,0.4)", cta: "Call Now" },
    { icon: <Mail />, label: "Email", value: "Kizval07@gmail.com", sub: "For detailed or formal inquiries", href: "mailto:Kizval07@gmail.com", accent: "#4F8EF7", shadow: "rgba(79,142,247,0.35)", cta: "Send Email" },
];


const Contact = () => {
    const [ref, inView] = useReveal(0.05);

    return (
        <section
        id="contact"
        ref={ref}
        style={{
            padding: "clamp(80px,11vw,140px) clamp(20px,5vw,80px)",
            position: "relative",
            overflow: "hidden",
        }}
        >
        <div
            style={{
            position: "absolute",
            inset: 0,
            background:
                "radial-gradient(ellipse 70% 60% at 50% 100%, rgba(201,168,76,0.07) 0%, transparent 58%)",
            pointerEvents: "none",
            }}
        />
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <motion.div
            variants={stagger(0.12)}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            style={{ textAlign: "center", marginBottom: "clamp(44px,7vw,76px)" }}
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
                Get In Touch
            </motion.span>
            <motion.h2
                variants={fadeUp}
                style={{
                fontSize: "clamp(2rem,5vw,3.5rem)",
                fontWeight: 900,
                letterSpacing: "-0.025em",
                lineHeight: 1.1,
                marginBottom: 18,
                }}
            >
                Ready to <span className="grad-text">Grow Together?</span>
            </motion.h2>
            <motion.p
                variants={fadeUp}
                style={{
                color: "var(--sub)",
                fontSize: "clamp(13px,1.5vw,16px)",
                fontWeight: 300,
                maxWidth: 480,
                margin: "0 auto",
                lineHeight: 1.78,
                }}
            >
                Pick whichever channel feels right. I typically respond within a few
                hours.
            </motion.p>
            </motion.div>

            <div
            style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: 18,
                marginBottom: 40,
            }}
            >
            {contactMethods.map((c, i) => (
                <motion.a
                key={c.label}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                variants={{
                    hidden: { opacity: 0, y: 48, filter: "blur(8px)" },
                    show: {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                    transition: { duration: 0.65, delay: i * 0.13, ease },
                    },
                }}
                initial="hidden"
                animate={inView ? "show" : "hidden"}
                whileHover={{ y: -10, boxShadow: `0 24px 60px ${c.shadow}` }}
                whileTap={{ scale: 0.97 }}
                style={{
                    display: "block",
                    background: "var(--bg3)",
                    border: "1px solid var(--border2)",
                    borderRadius: 24,
                    padding: "clamp(26px,3.5vw,40px)",
                    textDecoration: "none",
                    transition: "box-shadow 0.3s",
                }}
                >
                <div
                    style={{
                    width: 58,
                    height: 58,
                    borderRadius: 17,
                    background: c.accent,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: c.label === "Phone Call" ? "var(--bg)" : "#fff",
                    marginBottom: 22,
                    boxShadow: `0 8px 22px ${c.shadow}`,
                    }}
                >
                    {c.icon}
                </div>
                <div
                    style={{
                    fontSize: 11,
                    color: "var(--dim)",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    fontWeight: 600,
                    marginBottom: 7,
                    }}
                >
                    {c.label}
                </div>
                <div
                    style={{
                    fontSize: "clamp(13px,1.5vw,15px)",
                    color: "var(--text)",
                    fontWeight: 500,
                    marginBottom: 5,
                    }}
                >
                    {c.value}
                </div>
                <div
                    style={{
                    fontSize: "clamp(11px,1.2vw,13px)",
                    color: "var(--sub)",
                    fontWeight: 300,
                    marginBottom: 22,
                    lineHeight: 1.6,
                    }}
                >
                    {c.sub}
                </div>
                <div
                    style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    color: c.accent === "var(--gold)" ? "var(--gold)" : c.accent,
                    fontSize: 14,
                    fontWeight: 600,
                    }}
                >
                    <span>{c.cta} →</span>
                </div>
                </motion.a>
            ))}
            </div>

            <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            style={{
                background:
                "linear-gradient(135deg, rgba(201,168,76,0.1), rgba(201,168,76,0.03))",
                border: "1px solid var(--border)",
                borderRadius: 24,
                padding: "clamp(28px,4vw,48px)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 18,
                textAlign: "center",
            }}
            >
            <div style={{ fontSize: 42 }}>🚀</div>
            <h3
                style={{
                fontSize: "clamp(1.25rem,3vw,1.9rem)",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                }}
            >
                Still unsure? Let's talk it through.
            </h3>
            <p
                style={{
                color: "var(--sub)",
                maxWidth: 460,
                lineHeight: 1.78,
                fontWeight: 300,
                fontSize: "clamp(13px,1.4vw,15px)",
                }}
            >
                No pressure, no commitment. Message me on WhatsApp and we'll have a
                casual conversation about whether this partnership makes sense for
                you.
            </p>
            <motion.a
                href="https://wa.me/2347025466321"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                scale: 1.05,
                boxShadow: "0 8px 40px rgba(37,211,102,0.45)",
                }}
                whileTap={{ scale: 0.97 }}
                style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                background: "#25D366",
                color: "#fff",
                borderRadius: 14,
                padding: "14px 36px",
                fontWeight: 700,
                fontSize: 15,
                textDecoration: "none",
                }}
            >
                <WaIcon /> Chat on WhatsApp
            </motion.a>
            </motion.div>
        </div>
        </section>
    );
};

export default Contact;
