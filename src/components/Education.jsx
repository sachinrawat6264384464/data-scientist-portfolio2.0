import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, School, BookOpen, MapPin, Calendar, ArrowUpRight } from 'lucide-react';
import sco from './school.jpg';
import poly from './diplomaa.jpg';
import acro from './acro.jpg';

const Education = () => {
    const educationData = [
        {
            type: 'Degree',
            title: 'B.Tech in Information Technology',
            institution: 'Acropolis Institute of Technology and Research (AITR)',
            location: 'Indore, Madhya Pradesh',
            duration: '2025 - 2028',
            university: 'RGPV University',
            description: 'Currently pursuing Bachelor of Technology in Information Technology, focusing on software development and data-driven solutions.',
            icon: <GraduationCap className="h-7 w-7" />,
            image: acro,
            status: 'Pursuing',
        },
        {
            type: 'Diploma',
            title: 'Diploma in Information Technology',
            institution: 'Dr. Bhim Rao Ambedkar Polytechnic College',
            location: 'Gwalior, Madhya Pradesh',
            duration: '2022 - 2025',
            university: 'RGPV University',
            description: 'Completed Polytechnic Diploma in Information Technology with a strong foundation in core IT principles and technical skills.',
            icon: <School className="h-7 w-7" />,
            image: poly,
            status: 'Completed',
        },
        {
            type: 'Schooling',
            title: 'Secondary School (10th)',
            institution: 'Secondary Education Board',
            location: 'Madhya Pradesh',
            duration: 'Passout 2022',
            university: 'Board of Secondary Education',
            description: 'Successfully completed secondary education with a focus on science and mathematics.',
            icon: <BookOpen className="h-7 w-7" />,
            image: sco,
            status: 'Completed',
        },
    ];

    const typeColors = {
        Degree: 'from-emerald-500/20 to-emerald-500/5 border-emerald-500/30',
        Diploma: 'from-amber-500/20 to-amber-500/5 border-amber-500/30',
        Schooling: 'from-blue-500/20 to-blue-500/5 border-blue-500/30',
    };

    const badgeColors = {
        Degree: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
        Diploma: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
        Schooling: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
    };

    const statusColors = {
        Pursuing: 'bg-green-500/10 text-green-400 border-green-500/30',
        Completed: 'bg-slate-500/10 text-slate-400 border-slate-500/30',
    };

    return (
        <section id="education" className="py-24 bg-slate-900 border-t border-white/5">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl font-black text-white md:text-5xl"
                    >
                        Academic Background
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
                        My educational journey and the institutions that shaped my technical foundation
                    </motion.p>
                </div>

                {/* Cards Grid — 3 columns on large, 1 on mobile */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {educationData.map((edu, index) => (
                        <motion.div
                            key={edu.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            className="group relative bg-white/[0.03] rounded-3xl border border-white/10 hover:border-brown/40 overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(169,132,103,0.15)] flex flex-col"
                        >
                            {/* Image Section */}
                            <div className="relative w-full h-48 overflow-hidden">
                                <img
                                    src={edu.image}
                                    alt={edu.institution}
                                    className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                                />
                                {/* Gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />

                                {/* Type badge on image */}
                                <div className="absolute top-4 left-4">
                                    <span className={`inline-block text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full border backdrop-blur-md ${badgeColors[edu.type]}`}>
                                        {edu.type}
                                    </span>
                                </div>

                                {/* Status badge */}
                                <div className="absolute top-4 right-4">
                                    <span className={`inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full border backdrop-blur-md ${statusColors[edu.status]}`}>
                                        {edu.status === 'Pursuing' && <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />}
                                        {edu.status}
                                    </span>
                                </div>

                                {/* Icon at bottom of image */}
                                <div className="absolute bottom-3 right-4 p-2.5 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 text-brown-light group-hover:bg-brown group-hover:text-white group-hover:rotate-12 transition-all duration-300">
                                    {edu.icon}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 flex flex-col flex-1">
                                <h3 className="text-lg font-black text-white leading-tight group-hover:text-brown-light transition-colors mb-3">
                                    {edu.title}
                                </h3>

                                <div className="space-y-2 mb-4">
                                    <div className="flex items-center gap-2 text-brown-light text-sm font-bold">
                                        <School size={14} />
                                        {edu.institution}
                                    </div>
                                    <div className="flex items-center gap-2 text-slate-500 text-xs font-medium">
                                        <MapPin size={13} />
                                        {edu.location}
                                    </div>
                                    <div className="flex items-center gap-2 text-slate-500 text-xs font-medium">
                                        <Calendar size={13} />
                                        {edu.duration}
                                    </div>
                                </div>

                                {/* University Badge */}
                                <div className="mb-4">
                                    <span className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest px-3 py-1.5 bg-brown/10 text-brown-light border border-brown/20 rounded-lg">
                                        <GraduationCap size={12} />
                                        {edu.university}
                                    </span>
                                </div>

                                {/* Description */}
                                <p className="text-slate-400 text-sm leading-relaxed font-medium mt-auto">
                                    {edu.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
