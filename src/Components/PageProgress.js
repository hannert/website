import { motion, useScroll } from "framer-motion";

export default function PageProgress() {

    const { scrollYProgress } = useScroll();

    return(
        <motion.div style = {{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            height: "10px",
            background: "red",
            transformOrigin: "0%",

            scaleX: scrollYProgress 
        }} />
    )
}