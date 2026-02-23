import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ShieldCheck, X, ZoomIn, ExternalLink } from 'lucide-react';
import ffy from './ffy.jpg';
import sipl from './sipl.jpg';
import unnati from './unnati.jpg';
import intern from './inter1jpg.jpg';
import kaggle from './kaggle.jpg';
import aws from './aws.jpg';
const Certificates = () => {
    const [selectedCert, setSelectedCert] = useState(null);

    const certificates = [
        {
            title: 'Industrial training and internship (Machin Learning)',
            issuer: 'Academy of skill Development',
            date: 'Nov/2024-Dec/2024',
            id: 'ACD/DAT/DR./MOV/62638',
            icon: <Award className="w-10 h-10 text-brown-light shadow-[0_0_10px_rgba(169,132,103,0.4)]" />,
            image: intern, // e.g. '/certificates/cert1.jpg'
        },
        {
            title: 'Machine Learning using Python',
            issuer: 'Simplilearn',
            date: 'Dec/2025',
            id: '9819785',
            icon: <ShieldCheck className="w-10 h-10 text-brown shadow-[0_0_10px_rgba(169,132,103,0.4)]" />,
            image: sipl,
        },
        {
            title: 'Data Analysis With Python',
            issuer: 'AFFY Informatics Private Limited',
            date: 'Aug/2024',
            id: 'AI/IN24/GWL/2405240',
            icon: <Award className="w-10 h-10 text-brown-light shadow-[0_0_10px_rgba(169,132,103,0.4)]" />,
            image: ffy,
        },
        {
            title: 'Introduction to Generative AI – Art of the Possible',
            issuer: 'AWS skills builder',
            date: 'Feb/2026',
            id: '----',
            icon: <ShieldCheck className="w-10 h-10 text-brown-light shadow-[0_0_10px_rgba(169,132,103,0.4)]" />,
            image: aws,
        },
        {
            title: 'Soft Skills Development',
            issuer: 'SGBS UNNATI Foundation',
            date: 'Sep/2024',
            id: '----',
            icon: <ShieldCheck className="w-10 h-10 text-brown-light shadow-[0_0_10px_rgba(169,132,103,0.4)]" />,
            image: unnati,
        },
        {
            title: 'Kaggle Python Coder /1 year on Kaggle/Kaggle Community Member ',
            issuer: 'Kaggle Badges',
            date: '2024',
            id: 'kaggle',
            icon: <Award className="w-10 h-10 text-brown-light shadow-[0_0_10px_rgba(169,132,103,0.4)]" />,
            image: kaggle,
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
                        className="h-1.5 bg-brown mx-auto mt-4 rounded-full"
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
                            className="rounded-3xl bg-white/5 border-t-2 border-t-brown/50 border-l-2 border-l-brown/50 border-r-2 border-r-brown-light/50 border-b-2 border-b-brown-light/50 hover:bg-white/10 transition-all duration-300 group backdrop-blur-md hover:shadow-[0_0_20px_rgba(169,132,103,0.2)] overflow-hidden flex flex-col"
                        >
                            {/* Certificate Image Area — Larger & Prominent */}
                            <div
                                className="relative w-full h-52 bg-white/5 flex items-center justify-center overflow-hidden cursor-pointer"
                                onClick={() => cert.image && setSelectedCert(cert)}
                            >
                                {cert.image ? (
                                    <>
                                        <img
                                            src={cert.image}
                                            alt={cert.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                        {/* Hover overlay */}
                                        <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                                            <ZoomIn className="w-10 h-10 text-white drop-shadow-lg" />
                                        </div>
                                    </>
                                ) : (
                                    <div className="flex flex-col items-center gap-2">
                                        <div className="w-16 h-16 rounded-full border-2 border-dashed border-brown/30 flex items-center justify-center">
                                            <Award className="w-8 h-8 text-brown/40" />
                                        </div>
                                        <span className="text-xs text-brown/40 font-medium">No Image</span>
                                    </div>
                                )}
                            </div>

                            {/* Card Body */}
                            <div className="p-6 flex flex-col flex-1">
                                <div className="mb-4 group-hover:scale-110 transition-transform duration-300 w-fit">
                                    {cert.icon}
                                </div>
                                <h3 className="text-lg font-black text-white mb-2 leading-tight group-hover:text-brown-light transition-colors">{cert.title}</h3>
                                <p className="text-brown-light text-base font-bold mb-1">{cert.issuer}</p>
                                <p className="text-slate-400 text-sm font-medium mb-4">Issued {cert.date} • ID: {cert.id}</p>

                                <div className="mt-auto">
                                    {cert.image ? (
                                        <button
                                            onClick={() => setSelectedCert(cert)}
                                            className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border border-brown/30 bg-brown/10 text-brown-light text-xs font-black uppercase tracking-widest hover:bg-brown hover:text-white hover:border-brown transition-all duration-300"
                                        >
                                            <ExternalLink size={14} />
                                            View Certificate
                                        </button>
                                    ) : (
                                        <div className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border border-white/10 bg-white/5 text-slate-600 text-xs font-black uppercase tracking-widest cursor-not-allowed">
                                            <ExternalLink size={14} />
                                            View Certificate
                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Image Lightbox Modal */}
            <AnimatePresence>
                {selectedCert && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
                        onClick={() => setSelectedCert(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ type: 'spring', duration: 0.4 }}
                            className="relative max-w-3xl w-full bg-slate-900 rounded-3xl overflow-hidden border border-brown/30 shadow-[0_0_40px_rgba(169,132,103,0.3)]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedCert(null)}
                                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-brown/60 transition-colors"
                            >
                                <X size={20} />
                            </button>
                            <img
                                src={selectedCert.image}
                                alt={selectedCert.title}
                                className="w-full object-contain max-h-[75vh]"
                            />
                            <div className="p-5 border-t border-brown/20">
                                <h3 className="text-white font-black text-lg">{selectedCert.title}</h3>
                                <p className="text-brown-light text-sm mt-1">{selectedCert.issuer} • {selectedCert.date}</p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Certificates;
