import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Briefcase, MapPin } from 'lucide-react';

const Experience = () => {
    const experiences = [
        {
            company: 'DataTech Solutions',
            role: 'Senior Data Scientist',
            period: '2021 - Present',
            location: 'New York, NY',
            description: 'Lead a team of 5 data scientists in developing predictive models for financial services. Improved model accuracy by 15% contributing to $2M+ in savings.',
            tech: ['Python', 'TensorFlow', 'PostgreSQL', 'AWS'],
        },
        {
            company: 'AI Research Lab',
            role: 'Machine Learning Engineer',
            period: '2019 - 2021',
            location: 'San Francisco, CA',
            description: 'Developed Natural Language Processing pipelines for sentiment analysis and entity recognition. Optimized latency by 40%.',
            tech: ['PyTorch', 'HuggingFace', 'FastAPI', 'Docker'],
        },
        {
            company: 'Insight Analytics',
            role: 'Junior Data Analyst',
            period: '2017 - 2019',
            location: 'Austin, TX',
            description: 'Built automated dashboards and reporting systems for executive stakeholders. Performed exploratory data analysis on large datasets.',
            tech: ['SQL', 'Tableau', 'Pandas', 'Excel'],
        },
    ];

    return (
        <section id="experience" className="py-24 bg-slate-900">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
                        className="h-1.5 bg-neon mx-auto mt-4 rounded-full"
                    ></motion.div>
                </div>

                <div className="space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.company + index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative pl-8 border-l-2 border-white/5"
                        >
                            {/* Timeline Marker */}
                            <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-neon border-4 border-slate-900"></div>

                            <div className="bg-white/5 p-8 rounded-3xl shadow-2xl border border-white/10 hover:border-accent/30 transition-all duration-300 backdrop-blur-md group">
                                <div className="flex flex-wrap justify-between items-start mb-4 gap-4">
                                    <div>
                                        <h3 className="text-2xl font-black text-white group-hover:text-accent transition-colors">{exp.role}</h3>
                                        <div className="flex items-center gap-2 mt-1 text-accent font-semibold uppercase text-xs tracking-wider">
                                            <Briefcase size={14} />
                                            {exp.company}
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-end text-sm text-slate-400">
                                        <div className="flex items-center gap-1.5 font-medium">
                                            <Calendar size={14} />
                                            {exp.period}
                                        </div>
                                        <div className="flex items-center gap-1.5 mt-1">
                                            <MapPin size={14} />
                                            {exp.location}
                                        </div>
                                    </div>
                                </div>

                                <p className="text-slate-300 text-base sm:text-lg mb-6 leading-relaxed font-medium">
                                    {exp.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {exp.tech.map((t) => (
                                        <span key={t} className="px-3 py-1 bg-white/5 text-slate-200 border border-white/10 rounded-full text-xs font-black tracking-widest uppercase hover:bg-accent hover:text-slate-900 transition-all">
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
