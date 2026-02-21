import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, Download } from 'lucide-react';

const Certificates = () => {
    const certificates = [
        {
            title: 'Google Data Analytics Professional',
            issuer: 'Coursera / Google',
            date: '2023',
            id: 'GDA-123456',
            icon: <Award className="w-10 h-10 text-accent shadow-[0_0_10px_rgba(78,240,255,0.4)]" />,
        },
        {
            title: 'Machine Learning Specialization',
            issuer: 'Stanford / DeepLearning.AI',
            date: '2022',
            id: 'MLS-789012',
            icon: <ShieldCheck className="w-10 h-10 text-light-purple shadow-[0_0_10px_rgba(155,124,255,0.4)]" />,
        },
        {
            title: 'AWS Certified Machine Learning',
            issuer: 'Amazon Web Services',
            date: '2023',
            id: 'AWS-ML-345',
            icon: <Award className="w-10 h-10 text-accent shadow-[0_0_10px_rgba(78,240,255,0.4)]" />,
        },
        {
            title: 'Big Data with Spark',
            issuer: 'Databricks',
            date: '2021',
            id: 'DB-SPARK-001',
            icon: <ShieldCheck className="w-10 h-10 text-accent shadow-[0_0_10px_rgba(78,240,255,0.4)]" />,
        },
        {
            title: 'Professional SQL Developer',
            issuer: 'Oracle',
            date: '2021',
            id: 'ORA-SQL-99',
            icon: <Award className="w-10 h-10 text-accent shadow-[0_0_10px_rgba(78,240,255,0.4)]" />,
        },
        {
            title: 'Deep Learning Specialization',
            issuer: 'DeepLearning.AI',
            date: '2023',
            id: 'DL-AI-456',
            icon: <ShieldCheck className="w-10 h-10 text-light-purple shadow-[0_0_10px_rgba(155,124,255,0.4)]" />,
        },
    ];

    return (
        <section id="certificates" className="py-24 bg-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl font-black text-white md:text-5xl"
                    >
                        Certifications
                    </motion.h2>
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "80px" }}
                        viewport={{ once: true }}
                        className="h-1.5 bg-neon mx-auto mt-4 rounded-full"
                    ></motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {certificates.map((cert, index) => (
                        <motion.div
                            key={cert.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-light-purple/40 hover:bg-white/10 transition-all duration-300 group backdrop-blur-md hover:neon-glow"
                        >
                            <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                                {cert.icon}
                            </div>
                            <h3 className="text-xl font-black text-white mb-2 leading-tight group-hover:text-light-purple transition-colors">{cert.title}</h3>
                            <p className="text-accent text-base font-bold mb-1">{cert.issuer}</p>
                            <p className="text-slate-400 text-sm font-medium mb-6">Issued {cert.date} • ID: {cert.id}</p>

                            <button className="flex items-center gap-2 text-slate-500 group-hover:text-light-purple transition-colors text-sm font-black uppercase tracking-widest">
                                <Download size={16} /> Download PDF
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certificates;
