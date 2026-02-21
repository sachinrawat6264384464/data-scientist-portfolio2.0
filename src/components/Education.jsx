import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, School, BookOpen, MapPin, Calendar } from 'lucide-react';

const Education = () => {
    const educationData = [
        {
            type: "Degree",
            title: "B.Tech in Information Technology",
            institution: "Acropolis Institute of Technology and Research (AITR)",
            location: "Indore, Madhya Pradesh",
            duration: "2025 - 2028",
            university: "RGPV University",
            description: "Currently pursuing Bachelor of Technology in Information Technology, focusing on software development and data-driven solutions.",
            icon: <GraduationCap className="h-8 w-8 text-accent" />,
            image: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2686&auto=format&fit=crop"
        },
        {
            type: "Diploma",
            title: "Diploma in Information Technology",
            institution: "Dr. Bhim Rao Ambedkar Polytechnic College",
            location: "Gwalior, Madhya Pradesh",
            duration: "2022 - 2025",
            university: "RGPV University",
            description: "Completed Polytechnic Diploma in Information Technology with a strong foundation in core IT principles and technical skills.",
            icon: <School className="h-8 w-8 text-light-purple" />,
            image: "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=2670&auto=format&fit=crop"
        },
        {
            type: "Schooling",
            title: "Secondary School (10th)",
            institution: "Secondary Education Board",
            location: "Madhya Pradesh",
            duration: "Passout 2022",
            university: "Board of Secondary Education",
            description: "Successfully completed secondary education with a focus on science and mathematics.",
            icon: <BookOpen className="h-8 w-8 text-accent" />,
            image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2622&auto=format&fit=crop"
        }
    ];

    return (
        <section id="education" className="py-24 bg-slate-900 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                        className="h-1.5 bg-neon mx-auto mt-4 rounded-full"
                    ></motion.div>
                    <p className="mt-4 text-slate-300 text-base sm:text-lg max-w-2xl mx-auto font-medium">
                        My educational journey and the institutions that have shaped my technical foundation.
                    </p>
                </div>

                <div className="space-y-12">
                    {educationData.map((edu, index) => (
                        <motion.div
                            key={edu.title}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group relative flex flex-col lg:flex-row gap-8 bg-white/5 p-8 rounded-[2.5rem] border border-white/10 hover:border-light-purple/30 transition-all duration-500 backdrop-blur-md overflow-hidden hover:shadow-purple-glow"
                        >
                            {/* Background decoration */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl -z-10 group-hover:bg-light-purple/10 transition-colors"></div>

                            {/* Image Part */}
                            <div className="w-full lg:w-1/3 aspect-video lg:aspect-square rounded-3xl overflow-hidden shadow-2xl border border-white/5">
                                <img
                                    src={edu.image}
                                    alt={edu.institution}
                                    className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                                />
                            </div>

                            {/* Content Part */}
                            <div className="flex-1 flex flex-col justify-center">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-3 bg-white/5 rounded-2xl shadow-inner border border-white/5 group-hover:neon-glow group-hover:text-light-purple transition-all duration-300">
                                        {edu.icon}
                                    </div>
                                    <span className="text-accent text-sm font-black uppercase tracking-widest px-4 py-1.5 bg-white/5 rounded-full border border-white/10">
                                        {edu.type}
                                    </span>
                                </div>

                                <h3 className="text-2xl sm:text-3xl font-black text-white group-hover:text-light-purple transition-colors mb-4">
                                    {edu.title}
                                </h3>

                                <div className="space-y-3 mb-6">
                                    <div className="flex items-center gap-2 text-slate-300 font-bold">
                                        <School size={18} className="text-accent" />
                                        {edu.institution}
                                    </div>
                                    <div className="flex items-center gap-2 text-slate-400 font-medium">
                                        <MapPin size={18} />
                                        {edu.location}
                                    </div>
                                    <div className="flex items-center gap-2 text-slate-400 font-medium">
                                        <Calendar size={18} />
                                        {edu.duration} • <span className="text-light-purple font-black">{edu.university}</span>
                                    </div>
                                </div>

                                <p className="text-slate-300 text-lg leading-relaxed font-medium line-clamp-3">
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
