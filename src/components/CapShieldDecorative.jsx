import React from 'react';
import { motion } from 'framer-motion';

const CapShieldDecorative = ({ size = 120, className = "" }) => (
    <motion.div
        animate={{
            rotate: [0, 360],
            scale: [1, 1.05, 1]
        }}
        transition={{
            rotate: { duration: 40, repeat: Infinity, ease: "linear" },
            scale: { duration: 10, repeat: Infinity, ease: "easeInOut" }
        }}
        className={`pointer-events-none select-none opacity-[0.05] ${className}`}
        style={{ width: size, height: size }}
    >
        <svg width="100%" height="100%" viewBox="0 0 80 80" fill="none">
            <circle cx="40" cy="40" r="35" fill="#1D4ED8" />
            <circle cx="40" cy="40" r="27" fill="#EF4444" />
            <circle cx="40" cy="40" r="19" fill="#1D4ED8" />
            <circle cx="40" cy="40" r="11" fill="#FFFFFF" />
            <polygon points="40,29 43,37 51,37 45,42 47,50 40,45 33,50 35,42 29,37 37,37" fill="#1D4ED8" />
        </svg>
    </motion.div>
);

export default CapShieldDecorative;
