import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Briefcase, MapPin, ArrowUpRight, Shield, Zap } from 'lucide-react';
import CapShieldDecorative from './CapShieldDecorative.jsx';

/* ────────────────────────────────────────────────────────────── */
/*  AVENGERS badge SVG inline – no external import needed         */
/* ────────────────────────────────────────────────────────────── */

const AvengersA = () => (
    <svg viewBox="0 0 60 70" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <polygon points="30,2 58,18 58,52 30,68 2,52 2,18" fill="rgba(200,30,30,0.15)" stroke="#C41E3A" strokeWidth="2" />
        <text x="50%" y="58%" dominantBaseline="middle" textAnchor="middle" fill="#C41E3A" fontSize="28" fontWeight="900" fontFamily="Georgia, serif">A</text>
    </svg>
);

const Experience = () => {
    const experiences = [
        {
            company: 'Academy of Skill Development',
            role: 'Machine Learning Intern',
            period: 'Nov 2024 – Dec 2024',
            location: 'India',
            description: 'Completed industrial training and internship focused on Machine Learning. Worked on real-world ML projects including data preprocessing, model building, and evaluation.',
            tech: ['Python', 'Scikit-Learn', 'Pandas', 'NumPy', 'Machine Learning'],
            type: 'Internship',
            hero: 'Iron Man',
            heroColor: '#C41E3A',
            heroQuote: '"Sometimes you gotta run before you can walk."',
        },
        {
            company: 'AFFY Informatics Private Limited',
            role: 'Data Analysis Trainee',
            period: 'Aug 2024',
            location: 'Gwalior, India',
            description: 'Completed professional training in Data Analysis with Python. Performed exploratory data analysis, data cleaning, and visualization on real datasets.',
            tech: ['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'Data Analysis'],
            type: 'Training',
            hero: 'Captain America',
            heroColor: '#1E5FA8',
            heroQuote: '"I can do this all day."',
        },
        {
            company: 'Simplilearn',
            role: 'Machine Learning (Python) — Certified',
            period: 'Dec 2025',
            location: 'Online',
            description: 'Completed comprehensive Machine Learning using Python certification. Covered regression, classification, clustering, and model evaluation techniques.',
            tech: ['Python', 'TensorFlow', 'Scikit-Learn', 'ML Algorithms'],
            type: 'Certification',
            hero: 'Thor',
            heroColor: '#6A5ACD',
            heroQuote: '"Bring me Thanos!" — but make it ML.',
        },
        {
            company: 'Kaggle',
            role: 'Community Member & Python Coder',
            period: '2024 – Present',
            location: 'Online',
            description: 'Active Kaggle community member with 1+ year on the platform. Earned Python Coder badge. Participated in data science competitions and shared notebooks.',
            tech: ['Python', 'Kaggle Notebooks', 'Data Science', 'Competitions'],
            type: 'Community',
            hero: 'Spider-Man',
            heroColor: '#C41E3A',
            heroQuote: '"With great power comes great responsibility."',
        },
    ];

    const typeColors = {
        Internship: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
        Training: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
        Certification: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
        Program: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
        Community: 'bg-rose-500/10 text-rose-400 border-rose-500/30',
    };

    return (
        <section id="experience" className="relative py-24 bg-slate-900 overflow-hidden">
            {/* Decorative Stars - High Density */}
            <CapShieldDecorative size={220} className="absolute top-40 -right-20 opacity-[0.03] rotate-12" />
            <CapShieldDecorative size={130} className="absolute bottom-[20%] -left-10 opacity-[0.04] -rotate-12" />
            <CapShieldDecorative size={150} className="absolute top-[60%] right-[10%] opacity-[0.02] rotate-45" />
            <CapShieldDecorative size={280} className="absolute -top-10 left-[5%] opacity-[0.015] -rotate-90" />
            <CapShieldDecorative size={100} className="absolute bottom-[40%] right-[30%] opacity-[0.03]" />
            <CapShieldDecorative size={120} className="absolute top-[10%] left-[40%] opacity-[0.02] rotate-180" />
            <CapShieldDecorative size={80} className="absolute bottom-[5%] right-[15%] opacity-[0.04] rotate-12" />
            <CapShieldDecorative size={160} className="absolute top-[75%] left-[25%] opacity-[0.015]" />
            <CapShieldDecorative size={60} className="absolute bottom-[60%] right-[5%] opacity-[0.05]" />
            <CapShieldDecorative size={190} className="absolute top-[30%] left-[15%] opacity-[0.01] rotate-45" />
            {/* Added 10 more for extreme density */}
            <CapShieldDecorative size={240} className="absolute bottom-[-20%] right-[-10%] opacity-[0.01] rotate-12" />
            <CapShieldDecorative size={70} className="absolute top-[15%] left-[30%] opacity-[0.035]" />
            <CapShieldDecorative size={125} className="absolute bottom-[25%] left-[45%] opacity-[0.02] rotate-180" />
            <CapShieldDecorative size={45} className="absolute top-[50%] right-[25%] opacity-[0.045]" />
            <CapShieldDecorative size={330} className="absolute top-[60%] -left-32 opacity-[0.008] -rotate-45" />
            <CapShieldDecorative size={110} className="absolute bottom-[10%] left-[10%] opacity-[0.025]" />
            <CapShieldDecorative size={90} className="absolute top-[80%] right-[15%] opacity-[0.03] rotate-90" />
            <CapShieldDecorative size={170} className="absolute top-[5%] left-[15%] opacity-[0.015] rotate-12" />
            <CapShieldDecorative size={55} className="absolute bottom-[35%] right-[40%] opacity-[0.04] rotate-180" />
            <CapShieldDecorative size={200} className="absolute top-[40%] right-[2%] opacity-[0.01] -rotate-12" />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Avengers Banner */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative mb-12 rounded-3xl overflow-hidden"
                >
                    {/* Background gradient */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-[#1a0000] to-black" />
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(196,30,58,0.15)_0%,_transparent_70%)]" />
                    {/* Red line top & bottom */}
                    <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#C41E3A] to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#C41E3A] to-transparent" />

                    <div className="relative flex items-center justify-between px-8 py-6 gap-6">
                        <div className="flex items-center gap-5">
                            <AvengersA />
                            <div>
                                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#C41E3A] mb-0.5">Marvel Initiative</p>
                                <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                                    AVENGERS <span className="text-[#C41E3A]">ASSEMBLE</span>
                                </h3>
                                <p className="text-slate-400 text-xs mt-1 font-medium">Every hero has an origin story. Here's mine.</p>
                            </div>
                        </div>
                        <Shield className="w-10 h-10 text-[#C41E3A]/40 flex-shrink-0" />
                    </div>
                </motion.div>

                {/* Section Header */}
                <div className="text-center mb-14">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl font-black text-white md:text-5xl"
                    >
                        Professional Experience
                    </motion.h2>
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "80px" }}
                        viewport={{ once: true }}
                        className="h-1.5 bg-red-600 mx-auto mt-4 rounded-full"
                    ></motion.div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-400 mt-4 text-base font-medium max-w-lg mx-auto"
                    >
                        Internships, Trainings & Certifications that shaped my journey
                    </motion.p>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.company + index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative bg-white/[0.03] rounded-3xl border border-white/10 overflow-hidden group transition-all duration-500 flex flex-col"
                            style={{ borderColor: exp.heroColor + '30' }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = exp.heroColor + '80';
                                e.currentTarget.style.boxShadow = `0 0 40px ${exp.heroColor}20`;
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                                e.currentTarget.style.boxShadow = 'none';
                            }}
                        >
                            {/* Decorative Background Icon */}
                            <div className="absolute -bottom-4 -right-4 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500">
                                <Shield size={100} style={{ color: exp.heroColor }} />
                            </div>

                            {/* Top Accent Bar */}
                            <div className="h-1.5 w-full opacity-60 group-hover:opacity-100 transition-opacity" style={{ backgroundColor: exp.heroColor }} />

                            {/* Avengers hero accent badge (top-right corner) */}
                            <div
                                className="absolute top-4 right-4 flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-[10px] font-black uppercase tracking-wider opacity-60 group-hover:opacity-100 transition-opacity"
                                style={{ borderColor: exp.heroColor + '50', color: exp.heroColor, backgroundColor: exp.heroColor + '15' }}
                            >
                                <Zap size={10} style={{ color: exp.heroColor }} />
                                {exp.hero}
                            </div>

                            <div className="p-6 sm:p-7">
                                {/* Header Row */}
                                <div className="flex items-start justify-between gap-3 mb-4 pr-20">
                                    <div className="flex-1">
                                        <span className={`inline-block text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full border mb-3 ${typeColors[exp.type]}`}>
                                            {exp.type}
                                        </span>
                                        <h3 className="text-xl font-black text-white leading-tight transition-colors" style={{ color: exp.heroColor }}>
                                            {exp.role}
                                        </h3>
                                    </div>
                                </div>

                                {/* Company + Meta */}
                                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mb-4 text-sm">
                                    <span className="flex items-center gap-1.5 font-bold" style={{ color: exp.heroColor }}>
                                        <Briefcase size={13} />
                                        {exp.company}
                                    </span>
                                    <span className="flex items-center gap-1.5 text-slate-500 font-medium">
                                        <Calendar size={13} />
                                        {exp.period}
                                    </span>
                                    <span className="flex items-center gap-1.5 text-slate-500 font-medium">
                                        <MapPin size={13} />
                                        {exp.location}
                                    </span>
                                </div>

                                {/* Description */}
                                <p className="text-slate-400 text-sm leading-relaxed mb-4 font-medium">
                                    {exp.description}
                                </p>

                                {/* Avengers Quote */}
                                <p
                                    className="text-xs italic font-bold mb-4 opacity-70 group-hover:opacity-100 transition-opacity"
                                    style={{ color: exp.heroColor }}
                                >
                                    {exp.heroQuote}
                                </p>

                                {/* Tech Tags */}
                                <div className="flex flex-wrap gap-2">
                                    {exp.tech.map((t) => (
                                        <span
                                            key={t}
                                            className="px-2.5 py-1 bg-white/5 text-slate-300 border border-white/10 rounded-lg text-[11px] font-bold tracking-wider uppercase transition-all cursor-default"
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.backgroundColor = exp.heroColor + '20';
                                                e.currentTarget.style.color = exp.heroColor;
                                                e.currentTarget.style.borderColor = exp.heroColor + '40';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)';
                                                e.currentTarget.style.color = '#cbd5e1';
                                                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                                            }}
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Captain America Shield Decorative Watermark */}
                <div className="absolute bottom-10 left-10 hidden lg:block">
                    <CapShieldDecorative size={150} />
                </div>
            </div>
        </section>
    );
};

export default Experience;
