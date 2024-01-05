import { motion, useScroll } from "framer-motion";

export default function Cog() {
    const { scrollYProgress } = useScroll();

    return(
        <svg width="100" height="100" viewBox="0 0 100 100"
        style={{  
            position: "fixed",
            top: 0,
            left: 0,
            right: 0}}
        className="cogBg">

            <circle 
            cx="50"
            cy="50"
            r="30"
            pathLength="1"
            className="smallCogInner"
            />

            <motion.circle 
            cx="50"
            cy="50"
            r="30"
            pathLength="1"
            className="smallCog" 

            style={{ pathLength: scrollYProgress }} 
            />
        </svg>
        
    )
}