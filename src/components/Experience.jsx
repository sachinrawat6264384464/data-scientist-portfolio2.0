import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Briefcase, MapPin, ArrowUpRight } from 'lucide-react';

const Experience = () => {
    const experiences = [
        {
            company: 'Academy of Skill Development',
            role: 'Machine Learning Intern',
            period: 'Nov 2024 - Dec 2024',
            location: 'India',
            description: 'Completed industrial training and internship focused on Machine Learning. Worked on real-world ML projects including data preprocessing, model building, and evaluation.',
            tech: ['Python', 'Scikit-Learn', 'Pandas', 'NumPy', 'Machine Learning'],
            type: 'Internship',
        },
        {
            company: 'AFFY Informatics Private Limited',
            role: 'Data Analysis Trainee',
            period: 'Aug 2024',
            location: 'Gwalior, India',
            description: 'Completed professional training in Data Analysis with Python. Performed exploratory data analysis, data cleaning, and visualization on real datasets.',
            tech: ['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'Data Analysis'],
            type: 'Training',
        },
        {
            company: 'Simplilearn',
            role: 'Machine Learning (Python) — Certified',
            period: 'Dec 2025',
            location: 'Online',
            description: 'Completed comprehensive Machine Learning using Python certification. Covered regression, classification, clustering, and model evaluation techniques.',
            tech: ['Python', 'TensorFlow', 'Scikit-Learn', 'ML Algorithms'],
            type: 'Certification',
        },

        {
            company: 'Kaggle',
            role: 'Community Member & Python Coder',
            period: '2024 - Present',
            location: 'Online',
            description: 'Active Kaggle community member with 1+ year. Earned Python Coder badge. Participated in data science competitions and shared notebooks.',
            tech: ['Python', 'Kaggle Notebooks', 'Data Science', 'Competitions'],
            type: 'Community',
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
        <section id="experience" className="py-24 bg-slate-900">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
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
                        className="h-1.5 bg-brown mx-auto mt-4 rounded-full"
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
                            className="relative bg-white/[0.03] rounded-3xl border border-white/10 hover:border-brown/50 overflow-hidden group transition-all duration-500 hover:shadow-[0_0_40px_rgba(169,132,103,0.15)]"
                        >
                            {/* Top Accent Bar */}
                            <div className="h-1 w-full bg-gradient-to-r from-brown-dark via-brown to-brown-light opacity-60 group-hover:opacity-100 transition-opacity" />

                            <div className="p-6 sm:p-7">
                                {/* Header Row */}
                                <div className="flex items-start justify-between gap-3 mb-4">
                                    <div className="flex-1">
                                        {/* Type Badge */}
                                        <span className={`inline-block text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full border mb-3 ${typeColors[exp.type]}`}>
                                            {exp.type}
                                        </span>
                                        <h3 className="text-xl font-black text-white leading-tight group-hover:text-brown-light transition-colors">
                                            {exp.role}
                                        </h3>
                                    </div>
                                    <div className="p-2.5 rounded-2xl bg-brown/10 border border-brown/20 text-brown-light group-hover:bg-brown group-hover:text-white group-hover:rotate-45 transition-all duration-300 flex-shrink-0">
                                        <ArrowUpRight size={18} />
                                    </div>
                                </div>

                                {/* Company + Meta */}
                                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mb-4 text-sm">
                                    <span className="flex items-center gap-1.5 text-brown-light font-bold">
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
                                <p className="text-slate-400 text-sm leading-relaxed mb-5 font-medium">
                                    {exp.description}
                                </p>

                                {/* Tech Tags */}
                                <div className="flex flex-wrap gap-2">
                                    {exp.tech.map((t) => (
                                        <span
                                            key={t}
                                            className="px-2.5 py-1 bg-white/5 text-slate-300 border border-white/10 rounded-lg text-[11px] font-bold tracking-wider uppercase hover:bg-brown/20 hover:text-brown-light hover:border-brown/30 transition-all cursor-default"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
