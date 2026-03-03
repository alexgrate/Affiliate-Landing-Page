import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const navItems = [
  { label: "About", id: "about" },
  { label: "How It Works", id: "how-it-works" },
  { label: "Why Me", id: "why-me" },
  { label: "Trial", id: "trial" },
  { label: "Contact", id: "contact" },
];

const ease = [0.22, 1, 0.36, 1];
const stagger = (d = 0.11) => ({
  hidden: {},
  show: { transition: { staggerChildren: d, delayChildren: 0.05 } },
});
const fadeLeft = {
  hidden: { opacity: 0, x: -56, filter: "blur(8px)" },
  show: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.75, ease },
  },
};
const fadeUp = {
  hidden: { opacity: 0, y: 48, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.75, ease },
  },
};

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    useEffect(() => {
        const fn = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", fn);
        return () => window.removeEventListener("scroll", fn);
    }, []);
    const goto = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        setOpen(false);
    };

    return (
        <>
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease }}
            style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 200,
            padding: "0 clamp(20px,5vw,64px)",
            height: 70,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            background: scrolled ? "rgba(8,8,16,0.9)" : "transparent",
            backdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
            borderBottom: scrolled ? "1px solid var(--border2)" : "none",
            transition: "all 0.5s ease",
            }}
        >
            <motion.div
            whileHover={{ scale: 1.04 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            style={{
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 10,
            }}
            >
            <div
                style={{
                width: 36,
                height: 36,
                borderRadius: 10,
                background: "linear-gradient(135deg, var(--gold), var(--gold2))",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                }}
            >
                <span
                style={{
                    fontFamily: "Playfair Display, serif",
                    fontWeight: 900,
                    fontSize: 15,
                    color: "var(--bg)",
                }}
                >
                Zito
                </span>
            </div>
            <span
                style={{
                fontFamily: "Playfair Display, serif",
                fontWeight: 700,
                fontSize: 17,
                color: "var(--text)",
                }}
            >
                Connect
            </span>
            </motion.div>

            <nav
            style={{ display: "flex", gap: 28, alignItems: "center" }}
            className="desk-nav"
            >
            {navItems.map((n) => (
                <motion.button
                key={n.id}
                onClick={() => goto(n.id)}
                style={{
                    background: "none",
                    border: "none",
                    color: "var(--sub)",
                    fontSize: 13.5,
                    fontWeight: 400,
                    cursor: "pointer",
                }}
                whileHover={{ color: "var(--gold2)", y: -2 }}
                transition={{ duration: 0.2 }}
                >
                {n.label}
                </motion.button>
            ))}
            </nav>
            <motion.button
            className="desk-nav"
            onClick={() => goto("contact")}
            whileHover={{
                scale: 1.05,
                boxShadow: "0 0 26px rgba(201,168,76,0.45)",
            }}
            whileTap={{ scale: 0.96 }}
            style={{
                background: "linear-gradient(135deg, var(--gold), var(--gold2))",
                color: "var(--bg)",
                border: "none",
                borderRadius: 10,
                padding: "10px 22px",
                fontWeight: 600,
                fontSize: 13,
                cursor: "pointer",
            }}
            >
            Let's Work Together
            </motion.button>

            {/* Hamburger */}
            <motion.button
            className="mob-nav"
            onClick={() => setOpen(!open)}
            whileTap={{ scale: 0.9 }}
            style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 8,
                flexDirection: "column",
                gap: 5,
            }}
            >
            {[0, 1, 2].map((i) => (
                <motion.span
                key={i}
                style={{
                    display: "block",
                    width: 24,
                    height: 2,
                    background: "var(--gold)",
                    borderRadius: 2,
                }}
                animate={
                    open
                    ? i === 1
                        ? { opacity: 0, scaleX: 0 }
                        : i === 0
                        ? { rotate: 45, y: 7 }
                        : { rotate: -45, y: -7 }
                    : { opacity: 1, rotate: 0, y: 0, scaleX: 1 }
                }
                transition={{ duration: 0.25 }}
                />
            ))}
            </motion.button>
        </motion.header>

        <AnimatePresence>
            {open && (
            <motion.div
                initial={{ opacity: 0, y: -16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.28, ease }}
                style={{
                position: "fixed",
                top: 70,
                left: 0,
                right: 0,
                zIndex: 199,
                background: "rgba(8,8,16,0.97)",
                backdropFilter: "blur(24px)",
                borderBottom: "1px solid var(--border)",
                padding: "24px clamp(20px,5vw,64px) 32px",
                }}
            >
                <motion.div
                variants={stagger(0.07)}
                initial="hidden"
                animate="show"
                style={{ display: "flex", flexDirection: "column", gap: 2 }}
                >
                {navItems.map((n) => (
                    <motion.button
                    key={n.id}
                    variants={fadeLeft}
                    onClick={() => goto(n.id)}
                    style={{
                        background: "none",
                        border: "none",
                        color: "var(--text)",
                        fontFamily: "Playfair Display, serif",
                        fontSize: 26,
                        fontWeight: 700,
                        cursor: "pointer",
                        textAlign: "left",
                        padding: "10px 0",
                        borderBottom: "1px solid var(--border2)",
                    }}
                    >
                    {n.label}
                    </motion.button>
                ))}
                <motion.button
                    variants={fadeUp}
                    onClick={() => goto("contact")}
                    style={{
                    marginTop: 16,
                    background:
                        "linear-gradient(135deg, var(--gold), var(--gold2))",
                    color: "var(--bg)",
                    border: "none",
                    borderRadius: 12,
                    padding: "14px",
                    fontWeight: 700,
                    fontSize: 16,
                    cursor: "pointer",
                    }}
                >
                    Get Started Now →
                </motion.button>
                </motion.div>
            </motion.div>
            )}
        </AnimatePresence>

        <style>{`
            .desk-nav { display: flex !important; }
            .mob-nav  { display: none  !important; }
            @media(max-width:768px){
            .desk-nav { display: none !important; }
            .mob-nav  { display: flex !important; }
            }
        `}</style>
        </>
    );
};

export default Navbar;
