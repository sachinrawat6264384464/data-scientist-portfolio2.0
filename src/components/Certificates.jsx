import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ShieldCheck, X, ZoomIn, ExternalLink } from 'lucide-react';
import ffy from './ffy.jpg';
import sipl from './sipl.jpg';
import unnati from './unnati.jpg';
import intern from './inter1jpg.jpg';
import kaggle from './kaggle.jpg';
import aws from './aws.jpg';
import ibm from './IBMDATA.jpg';
import awsml from './AWSML.jpg';
import CharacterBanner, { CapShieldSVG } from './CharacterBanner.jsx';
import CapShieldDecorative from './CapShieldDecorative.jsx';

const Certificates = () => {
    const [selectedCert, setSelectedCert] = useState(null);

    const certificates = [

        {
            title: 'Industrial Training & Internship (Machine Learning)',
            issuer: 'Academy of Skill Development',
            date: 'Nov/2024–Dec/2024',
            id: 'ACD/DAT/DR./MOV/62638',
            icon: <Award className="w-8 h-8 text-brown-light shadow-[0_0_10px_rgba(169,132,103,0.4)]" />,
            image: intern,
        },
        {
            title: 'Machine Learning using Python',
            issuer: 'Simplilearn',
            date: 'Dec/2025',
            id: '9819785',
            icon: <ShieldCheck className="w-8 h-8 text-brown shadow-[0_0_10px_rgba(169,132,103,0.4)]" />,
            image: sipl,
        },
        {
            title: 'Data Analysis With Python',
            issuer: 'AFFY Informatics Private Limited',
            date: 'Aug/2024',
            id: 'AI/IN24/GWL/2405240',
            icon: <Award className="w-8 h-8 text-brown-light shadow-[0_0_10px_rgba(169,132,103,0.4)]" />,
            image: ffy,
        },
        {
            title: 'Introduction to Generative AI – Art of the Possible',
            issuer: 'AWS Skills Builder',
            date: 'Feb/2026',
            id: '----',
            icon: <ShieldCheck className="w-8 h-8 text-brown-light shadow-[0_0_10px_rgba(169,132,103,0.4)]" />,
            image: aws,
        },
        {
            title: 'Soft Skills Development',
            issuer: 'SGBS UNNATI Foundation',
            date: 'Sep/2024',
            id: '----',
            icon: <ShieldCheck className="w-8 h-8 text-brown-light shadow-[0_0_10px_rgba(169,132,103,0.4)]" />,
            image: unnati,
        },
        {
            title: 'Kaggle Python Coder / 1 Year on Kaggle / Kaggle Community Member',
            issuer: 'Kaggle Badges',
            date: '2024',
            id: 'kaggle',
            icon: <Award className="w-8 h-8 text-brown-light shadow-[0_0_10px_rgba(169,132,103,0.4)]" />,
            image: kaggle,
        },
        {
            title: 'DATA Fundamentals & Text Analytics',
            issuer: 'IBM SkillsBuild',
            date: '2026',
            id: 'IBM-2026',
            icon: <Award className="w-8 h-8 text-teal-400 shadow-[0_0_10px_rgba(45,212,191,0.4)]" />,
            image: ibm,
        },
        {
            title: 'Introduction to Machine Learning: Art of the Possible',
            issuer: 'AWS SkillsBuild',
            date: '2026',
            id: 'AWS-2026',
            icon: <ShieldCheck className="w-8 h-8 text-violet-400 shadow-[0_0_10px_rgba(139,92,246,0.4)]" />,
            image: awsml,
        },
    ];

    return (
        <section id="certificates" className="relative py-24 bg-slate-900 overflow-hidden">
            {/* Decorative Stars - High Density */}
            <CapShieldDecorative size={180} className="absolute top-10 -left-10 opacity-[0.03] rotate-12" />
            <CapShieldDecorative size={120} className="absolute bottom-[10%] -right-10 opacity-[0.04] -rotate-12" />
            <CapShieldDecorative size={140} className="absolute top-[60%] left-[10%] opacity-[0.02] rotate-45" />
            <CapShieldDecorative size={250} className="absolute -top-20 -right-20 opacity-[0.015]" />
            <CapShieldDecorative size={80} className="absolute top-[30%] left-[15%] opacity-[0.03] rotate-180" />
            <CapShieldDecorative size={110} className="absolute bottom-[40%] right-[30%] opacity-[0.02] -rotate-45" />
            <CapShieldDecorative size={60} className="absolute top-[10%] left-[45%] opacity-[0.04]" />
            <CapShieldDecorative size={200} className="absolute bottom-[5%] left-[30%] opacity-[0.01]" />
            <CapShieldDecorative size={70} className="absolute top-[75%] left-[5%] opacity-[0.025]" />
            <CapShieldDecorative size={160} className="absolute bottom-[25%] right-[10%] opacity-[0.02] rotate-12" />
            {/* Added 10 more for extreme density */}
            <CapShieldDecorative size={260} className="absolute bottom-[-15%] -left-15 opacity-[0.01] rotate-90" />
            <CapShieldDecorative size={65} className="absolute top-[15%] left-[35%] opacity-[0.035]" />
            <CapShieldDecorative size={135} className="absolute bottom-[20%] right-[15%] opacity-[0.02] rotate-180" />
            <CapShieldDecorative size={45} className="absolute top-[45%] right-[5%] opacity-[0.045]" />
            <CapShieldDecorative size={310} className="absolute top-[50%] left-[25%] opacity-[0.008] -rotate-45" />
            <CapShieldDecorative size={105} className="absolute bottom-[10%] left-[45%] opacity-[0.025]" />
            <CapShieldDecorative size={85} className="absolute top-[80%] right-[40%] opacity-[0.03] rotate-12" />
            <CapShieldDecorative size={155} className="absolute top-[20%] right-[25%] opacity-[0.015] -rotate-90" />
            <CapShieldDecorative size={55} className="absolute bottom-[45%] right-[2%] opacity-[0.04] rotate-180" />
            <CapShieldDecorative size={195} className="absolute top-[40%] left-[3%] opacity-[0.01] -rotate-12" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl font-black text-white md:text-5xl"
                    >  {/* Avengers Character Banner */}
                        <div className="mt-8">
                            <CharacterBanner
                                name="Captain America"
                                alias="Steve Rogers"
                                quote="I can do this all day. Every certification earned, every skill unlocked."
                                color="#3B82F6"
                                icon={CapShieldSVG}
                                align="center"
                            />
                        </div>
                        Certifications
                    </motion.h2>
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "80px" }}
                        viewport={{ once: true }}
                        className="h-1.5 bg-brown mx-auto mt-4 rounded-full"
                    ></motion.div>
                    <p className="mt-4 text-slate-400 text-base font-medium max-w-lg mx-auto">
                        Verified credentials and achievements in Data Science, ML & AI
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {certificates.map((cert, index) => (
                        <motion.div
                            key={cert.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.08 }}
                            className="rounded-2xl bg-white/[0.03] border border-blue-500/30 hover:border-blue-400/60 hover:bg-white/[0.06] transition-all duration-300 group backdrop-blur-md hover:shadow-[0_0_25px_rgba(59,130,246,0.2)] overflow-hidden flex flex-col"
                        >
                            {/* Certificate Image Area */}
                            <div
                                className="relative w-full h-44 bg-white/5 flex items-center justify-center overflow-hidden cursor-pointer"
                                onClick={() => cert.image && setSelectedCert(cert)}
                            >
                                {cert.image ? (
                                    <>
                                        <img
                                            src={cert.image}
                                            alt={cert.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                                            <ZoomIn className="w-9 h-9 text-white drop-shadow-lg" />
                                        </div>
                                    </>
                                ) : (
                                    <div className="flex flex-col items-center gap-3">
                                        <div className="w-14 h-14 rounded-full border-2 border-dashed border-blue-500/40 flex items-center justify-center bg-white/5">
                                            <Award className="w-7 h-7 text-blue-500/50" />
                                        </div>
                                        <span className="text-xs text-slate-500 font-medium bg-white/5 px-3 py-1 rounded-full border border-white/10">Certificate Pending Upload</span>
                                    </div>
                                )}
                            </div>

                            {/* Card Body */}
                            <div className="p-4 flex flex-col flex-1">
                                <div className="mb-3 group-hover:scale-110 transition-transform duration-300 w-fit">
                                    {cert.icon}
                                </div>
                                <h3 className="text-sm font-black text-white mb-1.5 leading-tight group-hover:text-blue-400 transition-colors line-clamp-2">{cert.title}</h3>
                                <p className="text-blue-400 text-xs font-bold mb-1">{cert.issuer}</p>
                                <p className="text-slate-500 text-xs font-medium mb-3">Issued {cert.date} • ID: {cert.id}</p>

                                <div className="mt-auto">
                                    {cert.image ? (
                                        <button
                                            onClick={() => setSelectedCert(cert)}
                                            className="w-full flex items-center justify-center gap-2 py-2 rounded-xl border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-black uppercase tracking-widest hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300"
                                        >
                                            <ExternalLink size={12} />
                                            View Certificate
                                        </button>
                                    ) : (
                                        <div className="w-full flex items-center justify-center gap-2 py-2 rounded-xl border border-white/10 bg-white/5 text-slate-600 text-xs font-black uppercase tracking-widest cursor-not-allowed">
                                            <ExternalLink size={12} />
                                            Coming Soon
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
