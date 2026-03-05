import React from 'react';
import { motion } from 'framer-motion';

/* ─────────────────────────────────────────────────────────
   Avengers Character SVG Arts (Inline)
───────────────────────────────────────────────────────── */

export const IronManSVG = ({ size = 72 }) => (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
        {/* Head */}
        <rect x="22" y="10" width="36" height="34" rx="10" fill="#B91C1C" stroke="#EF4444" strokeWidth="1.5" />
        {/* Faceplate lines */}
        <rect x="28" y="22" width="10" height="5" rx="2" fill="#FCD34D" opacity="0.9" />
        <rect x="42" y="22" width="10" height="5" rx="2" fill="#FCD34D" opacity="0.9" />
        <rect x="30" y="30" width="20" height="3" rx="1.5" fill="#FCA5A5" opacity="0.6" />
        {/* Body */}
        <rect x="18" y="46" width="44" height="28" rx="8" fill="#991B1B" stroke="#EF4444" strokeWidth="1" />
        {/* Arc reactor */}
        <circle cx="40" cy="58" r="7" fill="#DBEAFE" opacity="0.9" stroke="#60A5FA" strokeWidth="1.5" />
        <circle cx="40" cy="58" r="3.5" fill="#3B82F6" opacity="0.95" />
        {/* Arms */}
        <rect x="5" y="46" width="11" height="22" rx="5" fill="#991B1B" stroke="#EF4444" strokeWidth="1" />
        <rect x="64" y="46" width="11" height="22" rx="5" fill="#991B1B" stroke="#EF4444" strokeWidth="1" />
        {/* Glow */}
        <circle cx="40" cy="58" r="10" fill="#3B82F6" opacity="0.08" />
    </svg>
);

export const CapShieldSVG = ({ size = 72 }) => (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
        <circle cx="40" cy="40" r="35" fill="#1D4ED8" />
        <circle cx="40" cy="40" r="27" fill="#EF4444" />
        <circle cx="40" cy="40" r="19" fill="#1D4ED8" />
        <circle cx="40" cy="40" r="11" fill="#FFFFFF" />
        {/* Star */}
        <polygon points="40,29 43,37 51,37 45,42 47,50 40,45 33,50 35,42 29,37 37,37" fill="#1D4ED8" />
        <circle cx="40" cy="40" r="35" stroke="#93C5FD" strokeWidth="1.5" fill="none" opacity="0.4" />
    </svg>
);

export const ThorSVG = ({ size = 72 }) => (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
        {/* Cape */}
        <ellipse cx="40" cy="55" rx="28" ry="22" fill="#991B1B" opacity="0.8" />
        {/* Body */}
        <rect x="24" y="38" width="32" height="28" rx="7" fill="#1D4ED8" />
        {/* Head */}
        <ellipse cx="40" cy="26" rx="14" ry="16" fill="#FBBF24" opacity="0.85" />
        {/* Helmet wings */}
        <ellipse cx="26" cy="22" rx="5" ry="8" fill="#9CA3AF" transform="rotate(-10 26 22)" />
        <ellipse cx="54" cy="22" rx="5" ry="8" fill="#9CA3AF" transform="rotate(10 54 22)" />
        {/* Eyes */}
        <ellipse cx="35" cy="25" rx="2.5" ry="2" fill="#1E3A8A" />
        <ellipse cx="45" cy="25" rx="2.5" ry="2" fill="#1E3A8A" />
        {/* Mjolnir handle */}
        <rect x="36" y="56" width="8" height="20" rx="2" fill="#78350F" />
        {/* Mjolnir head */}
        <rect x="26" y="50" width="28" height="14" rx="4" fill="#6B7280" stroke="#D1D5DB" strokeWidth="1" />
        {/* Lightning */}
        <path d="M60 10 L54 24 L60 24 L52 40" stroke="#FCD34D" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    </svg>
);

export const SpiderManSVG = ({ size = 72 }) => (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
        {/* Body */}
        <ellipse cx="40" cy="52" rx="20" ry="24" fill="#DC2626" />
        {/* Legs */}
        <line x1="20" y1="60" x2="5" y2="75" stroke="#DC2626" strokeWidth="5" strokeLinecap="round" />
        <line x1="60" y1="60" x2="75" y2="75" stroke="#DC2626" strokeWidth="5" strokeLinecap="round" />
        <line x1="22" y1="54" x2="5" y2="60" stroke="#DC2626" strokeWidth="4" strokeLinecap="round" />
        <line x1="58" y1="54" x2="75" y2="60" stroke="#DC2626" strokeWidth="4" strokeLinecap="round" />
        {/* Head */}
        <circle cx="40" cy="26" r="18" fill="#DC2626" />
        {/* Eyes */}
        <ellipse cx="34" cy="23" rx="6" ry="7" fill="white" />
        <ellipse cx="46" cy="23" rx="6" ry="7" fill="white" />
        <ellipse cx="34" cy="23" rx="4" ry="5" fill="#1E40AF" />
        <ellipse cx="46" cy="23" rx="4" ry="5" fill="#1E40AF" />
        {/* Spider web lines */}
        <path d="M40 8 L40 26" stroke="#991B1B" strokeWidth="1" opacity="0.5" />
        <path d="M22 14 L40 26" stroke="#991B1B" strokeWidth="1" opacity="0.5" />
        <path d="M58 14 L40 26" stroke="#991B1B" strokeWidth="1" opacity="0.5" />
        <ellipse cx="40" cy="18" rx="10" ry="3" stroke="#991B1B" strokeWidth="1" opacity="0.4" fill="none" />
    </svg>
);

export const HulkSVG = ({ size = 72 }) => (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
        {/* Body massive */}
        <rect x="12" y="40" width="56" height="38" rx="10" fill="#16A34A" />
        {/* Arms huge */}
        <rect x="0" y="36" width="16" height="32" rx="8" fill="#15803D" />
        <rect x="64" y="36" width="16" height="32" rx="8" fill="#15803D" />
        {/* Neck */}
        <rect x="30" y="33" width="20" height="12" rx="4" fill="#16A34A" />
        {/* Head */}
        <ellipse cx="40" cy="24" rx="20" ry="22" fill="#22C55E" />
        {/* Brow ridge */}
        <ellipse cx="40" cy="16" rx="17" ry="7" fill="#16A34A" />
        {/* Eyes angry */}
        <ellipse cx="33" cy="22" rx="4" ry="3.5" fill="white" />
        <ellipse cx="47" cy="22" rx="4" ry="3.5" fill="white" />
        <ellipse cx="33" cy="23" rx="2.5" ry="2.5" fill="#1E3A8A" />
        <ellipse cx="47" cy="23" rx="2.5" ry="2.5" fill="#1E3A8A" />
        {/* Angry brow slash */}
        <line x1="28" y1="16" x2="38" y2="19" stroke="#15803D" strokeWidth="3" strokeLinecap="round" />
        <line x1="52" y1="16" x2="42" y2="19" stroke="#15803D" strokeWidth="3" strokeLinecap="round" />
        {/* Pants ripped */}
        <rect x="22" y="58" width="15" height="20" rx="4" fill="#7C3AED" />
        <rect x="43" y="58" width="15" height="20" rx="4" fill="#7C3AED" />
    </svg>
);

export const AntManSVG = ({ size = 72 }) => (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
        {/* Helmet dome */}
        <ellipse cx="40" cy="28" rx="22" ry="22" fill="#B91C1C" />
        {/* Helmet inner face plate */}
        <ellipse cx="40" cy="30" rx="15" ry="14" fill="#1E1B1B" />
        {/* Visor red glow */}
        <ellipse cx="40" cy="30" rx="13" ry="9" fill="#EF4444" opacity="0.25" />
        {/* Visor eyes */}
        <ellipse cx="33" cy="28" rx="5" ry="4" fill="#EF4444" opacity="0.9" />
        <ellipse cx="47" cy="28" rx="5" ry="4" fill="#EF4444" opacity="0.9" />
        <ellipse cx="33" cy="28" rx="3" ry="2.5" fill="#FCA5A5" opacity="0.8" />
        <ellipse cx="47" cy="28" rx="3" ry="2.5" fill="#FCA5A5" opacity="0.8" />
        {/* Antennae */}
        <line x1="33" y1="7" x2="37" y2="14" stroke="#991B1B" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="47" y1="7" x2="43" y2="14" stroke="#991B1B" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="33" cy="6" r="2.5" fill="#FCD34D" />
        <circle cx="47" cy="6" r="2.5" fill="#FCD34D" />
        {/* Body suit */}
        <rect x="22" y="48" width="36" height="28" rx="8" fill="#991B1B" />
        {/* Chest emblem */}
        <circle cx="40" cy="59" r="6" fill="#EF4444" opacity="0.8" stroke="#FCD34D" strokeWidth="1" />
        <circle cx="40" cy="59" r="3" fill="#FCD34D" opacity="0.9" />
        {/* Arms */}
        <rect x="6" y="48" width="14" height="22" rx="7" fill="#7F1D1D" stroke="#EF4444" strokeWidth="1" />
        <rect x="60" y="48" width="14" height="22" rx="7" fill="#7F1D1D" stroke="#EF4444" strokeWidth="1" />
        {/* Shrinking effect rings */}
        <circle cx="40" cy="40" r="36" stroke="#EF4444" strokeWidth="0.8" opacity="0.12" fill="none" strokeDasharray="3 4" />
        <circle cx="40" cy="40" r="28" stroke="#FCD34D" strokeWidth="0.8" opacity="0.10" fill="none" strokeDasharray="2 5" />
    </svg>
);

export const DrStrangeSVG = ({ size = 72 }) => (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
        {/* Cloak */}
        <ellipse cx="40" cy="58" rx="28" ry="20" fill="#B91C1C" />
        <ellipse cx="40" cy="70" rx="22" ry="10" fill="#991B1B" />
        {/* Body */}
        <rect x="26" y="40" width="28" height="24" rx="6" fill="#1E3A8A" />
        {/* Head */}
        <ellipse cx="40" cy="26" rx="14" ry="16" fill="#FBBF24" opacity="0.85" />
        {/* Silver temples (grey streaks) */}
        <rect x="27" y="18" width="5" height="10" rx="2.5" fill="#E2E8F0" opacity="0.8" />
        <rect x="48" y="18" width="5" height="10" rx="2.5" fill="#E2E8F0" opacity="0.8" />
        {/* Eyes */}
        <ellipse cx="35" cy="25" rx="2.5" ry="2" fill="#1E3A8A" />
        <ellipse cx="45" cy="25" rx="2.5" ry="2" fill="#1E3A8A" />
        {/* Eye of Agamotto */}
        <ellipse cx="40" cy="45" rx="6" ry="4" fill="#F59E0B" opacity="0.9" stroke="#FCD34D" strokeWidth="1" />
        <ellipse cx="40" cy="45" rx="3" ry="2" fill="#92400E" />
        {/* Magic circles */}
        <circle cx="40" cy="40" r="35" stroke="#F59E0B" strokeWidth="1" opacity="0.2" fill="none" strokeDasharray="4 3" />
        <circle cx="40" cy="40" r="26" stroke="#F97316" strokeWidth="1" opacity="0.2" fill="none" strokeDasharray="3 4" />
        {/* Magic glow */}
        <path d="M10 40 Q15 30 10 20" stroke="#F59E0B" strokeWidth="2" fill="none" opacity="0.5" />
        <path d="M70 40 Q65 30 70 20" stroke="#F59E0B" strokeWidth="2" fill="none" opacity="0.5" />
    </svg>
);

export const BlackPantherSVG = ({ size = 72 }) => (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
        {/* Body */}
        <rect x="20" y="40" width="40" height="36" rx="8" fill="#1E1B4B" stroke="#A78BFA" strokeWidth="1" />
        {/* Arms */}
        <rect x="6" y="40" width="13" height="26" rx="6" fill="#1E1B4B" stroke="#A78BFA" strokeWidth="1" />
        <rect x="61" y="40" width="13" height="26" rx="6" fill="#1E1B4B" stroke="#A78BFA" strokeWidth="1" />
        {/* Vibranium pattern */}
        <path d="M25 52 Q40 44 55 52" stroke="#7C3AED" strokeWidth="1.5" fill="none" opacity="0.7" />
        <path d="M25 58 Q40 50 55 58" stroke="#7C3AED" strokeWidth="1.5" fill="none" opacity="0.5" />
        {/* Necklace */}
        <ellipse cx="40" cy="42" rx="10" ry="3" stroke="#A78BFA" strokeWidth="1.5" fill="none" />
        {/* Head */}
        <ellipse cx="40" cy="24" rx="16" ry="18" fill="#0F0F1A" stroke="#7C3AED" strokeWidth="1.5" />
        {/* Panther ears */}
        <polygon points="25,12 20,4 30,10" fill="#0F0F1A" stroke="#7C3AED" strokeWidth="1" />
        <polygon points="55,12 60,4 50,10" fill="#0F0F1A" stroke="#7C3AED" strokeWidth="1" />
        {/* Eyes glowing */}
        <ellipse cx="34" cy="23" rx="4" ry="3" fill="#A78BFA" />
        <ellipse cx="46" cy="23" rx="4" ry="3" fill="#A78BFA" />
        <ellipse cx="34" cy="23" rx="2" ry="1.5" fill="white" opacity="0.9" />
        <ellipse cx="46" cy="23" rx="2" ry="1.5" fill="white" opacity="0.9" />
    </svg>
);

export const WandaSVG = ({ size = 72 }) => (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
        {/* Chaos magic aura */}
        <ellipse cx="40" cy="40" rx="36" ry="36" fill="#EF4444" opacity="0.07" />
        <path d="M10 30 Q5 40 12 50" stroke="#EF4444" strokeWidth="2" fill="none" opacity="0.5" />
        <path d="M70 30 Q75 40 68 50" stroke="#EF4444" strokeWidth="2" fill="none" opacity="0.5" />
        {/* Body */}
        <rect x="22" y="42" width="36" height="30" rx="8" fill="#991B1B" />
        {/* Arms out with magic */}
        <rect x="6" y="42" width="14" height="18" rx="7" fill="#991B1B" />
        <rect x="60" y="42" width="14" height="18" rx="7" fill="#991B1B" />
        {/* Magic orbs on hands */}
        <circle cx="10" cy="62" r="5" fill="#F87171" opacity="0.9" />
        <circle cx="70" cy="62" r="5" fill="#F87171" opacity="0.9" />
        <circle cx="10" cy="62" r="7" stroke="#EF4444" strokeWidth="1" fill="none" opacity="0.5" />
        <circle cx="70" cy="62" r="7" stroke="#EF4444" strokeWidth="1" fill="none" opacity="0.5" />
        {/* Head */}
        <ellipse cx="40" cy="26" rx="14" ry="16" fill="#FBBF24" opacity="0.85" />
        {/* Crown/Tiara */}
        <path d="M26 18 L32 10 L40 15 L48 10 L54 18" stroke="#EF4444" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        {/* Eyes glowing red */}
        <ellipse cx="35" cy="25" rx="2.5" ry="2.5" fill="#EF4444" />
        <ellipse cx="45" cy="25" rx="2.5" ry="2.5" fill="#EF4444" />
    </svg>
);

export const HawkeyeSVG = ({ size = 72 }) => (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
        {/* Body */}
        <rect x="22" y="40" width="36" height="34" rx="8" fill="#1F2937" />
        {/* Purple accent */}
        <rect x="22" y="40" width="36" height="6" rx="3" fill="#7C3AED" opacity="0.7" />
        {/* Arms */}
        <rect x="8" y="40" width="13" height="22" rx="6" fill="#1F2937" />
        <rect x="59" y="40" width="13" height="22" rx="6" fill="#1F2937" />
        {/* Head */}
        <ellipse cx="40" cy="26" rx="14" ry="16" fill="#FBBF24" opacity="0.85" />
        {/* Mask/visor */}
        <rect x="27" y="20" width="26" height="10" rx="4" fill="#374151" opacity="0.9" />
        {/* Eyes behind visor */}
        <ellipse cx="35" cy="25" rx="3" ry="2" fill="#8B5CF6" />
        <ellipse cx="45" cy="25" rx="3" ry="2" fill="#8B5CF6" />
        {/* Bow held up */}
        <path d="M62 8 Q72 30 62 52" stroke="#78350F" strokeWidth="3" fill="none" />
        {/* Arrow */}
        <line x1="62" y1="30" x2="30" y2="30" stroke="#D1D5DB" strokeWidth="2" />
        <polygon points="30,28 22,30 30,32" fill="#D1D5DB" />
        {/* Arrow feathers */}
        <path d="M62 28 L66 26" stroke="#EF4444" strokeWidth="1.5" />
        <path d="M62 30 L66 30" stroke="#EF4444" strokeWidth="1.5" />
        <path d="M62 32 L66 34" stroke="#EF4444" strokeWidth="1.5" />
    </svg>
);

/* ─────────────────────────────────────────────────────────
   Character Banner Component
───────────────────────────────────────────────────────── */
const CharacterBanner = ({
    name,        // e.g. "Iron Man"
    alias,       // e.g. "Tony Stark"
    quote,       // character quote
    color,       // primary hex color
    bgFrom,      // tailwind gradient from class
    icon: Icon,  // SVG component
    align = 'left', // 'left' or 'right'
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-2xl mb-10"
            style={{
                background: `linear-gradient(135deg, ${color}18 0%, #0f172a 60%)`,
                border: `1px solid ${color}40`,
                boxShadow: `0 0 30px ${color}15`,
            }}
        >
            {/* Top line */}
            <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: `linear-gradient(90deg, transparent, ${color}, transparent)` }} />

            <div className={`flex items-center gap-5 px-6 py-4 ${align === 'right' ? 'flex-row-reverse' : ''}`}>
                {/* Character SVG */}
                <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                    className="flex-shrink-0"
                >
                    <Icon size={72} />
                </motion.div>

                {/* Text */}
                <div className={align === 'right' ? 'text-right' : ''}>
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] mb-0.5" style={{ color }}>
                        Marvel Initiative
                    </p>
                    <h4 className="text-xl font-black text-white">{name}
                        <span className="text-sm font-bold text-slate-400 ml-2">/ {alias}</span>
                    </h4>
                    <p className="text-sm italic mt-1 font-medium" style={{ color: `${color}cc` }}>
                        "{quote}"
                    </p>
                </div>

                {/* Background watermark letter */}
                <div
                    className="absolute right-6 top-1/2 -translate-y-1/2 text-[90px] font-black opacity-[0.04] leading-none select-none pointer-events-none"
                    style={{ color }}
                >
                    {name[0]}
                </div>
            </div>

            {/* Bottom line */}
            <div className="absolute bottom-0 left-0 right-0 h-0.5" style={{ background: `linear-gradient(90deg, transparent, ${color}60, transparent)` }} />
        </motion.div>
    );
};

export default CharacterBanner;
