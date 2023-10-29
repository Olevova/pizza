'use client'
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react"; // Импортируйте useState

export default function AnimatePizza() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
        >
            {isHovered ? (
                <motion.div
                    animate={{
                        scale: [0.5, 1, 0.8, 1, 1],
                        rotate: [10, 0, 20, 80, 0],
                    }}
                    transition={{
                        duration: 2,
                        ease: "easeInOut",
                        times: [0, 0.2, 0.5, 0.8, 1],
                        repeat: Infinity,
                        repeatDelay: 0.2,
                    }}
                >   <span> OLEVOVA PIZZA </span>
                    <Image src="/pngegg.png" width={30} height={30} alt="pizza" />
                </motion.div>
            ) : (
                <Image src="/pngegg.png" width={30} height={30} alt="pizza" />
            )}
        </motion.div>
    );
}
