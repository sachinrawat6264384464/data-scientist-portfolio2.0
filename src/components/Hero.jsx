import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Download, X, FileText, Eye } from 'lucide-react';
import profileImg from './myimage.jpg';
import resume from './re.jpg';
import dd from './SACHIN RAWAT resume (1).pdf';

// ✅ STEP 1: Apni resume image yahan rename karke 'resumeImg.jpg' rakho
//            Location: src/components/resumeImg.jpg
// ✅ STEP 2: Neeche wali line uncomment karo (// hata do)
// import resumeImgSrc from './resumeImg.jpg';

// Jab tak image nahi daali, null rahega — modal mein placeholder dikhega
const resumeImgSrc = resume;
const resumeUrl = resume;

const Hero = () => {
    const [showResume, setShowResume] = useState(false);
    const [showResumeImg, setShowResumeImg] = useState(false);

    // Resume image — apni resume ki soft copy image yahan import karo
    // import resumeImg from './resume.jpg'; // <-- uncomment karke apni image daal do
    const resumeImg = dd; // placeholder (image import karne ke baad yahan naam dalo)
    const resumeUrl_local = './SACHIN RAWAT resume (1).pdf';

    return (
        <section id="home" className="min-h-screen pt-32 pb-16 flex items-center bg-slate-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <span className="inline-block py-1 px-4 rounded-full bg-brown-dark/10 text-brown-light text-sm font-black uppercase tracking-widest mb-6 border border-brown/20 neon-glow">
                            Welcome to my portfolio
                        </span>
                        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
                            I'm <span className="text-brown-light">Sachin Rawat</span>,
                            <br /> Data Scientist
                        </h1>
                        <p className="text-lg sm:text-xl text-slate-300 mb-10 max-w-lg leading-relaxed font-medium">
                            Transforming complex data into actionable insights using machine learning,
                            and modern engineering practices. Specialized in building
                            scalable data architectures and predictive models.
                        </p>

                        <div className="flex flex-wrap gap-4 items-center">

                            {/* Button 1 — Mini screen (PDF viewer) */}


                            {/* Button 2 — Resume Image */}
                            <button
                                onClick={() => setShowResumeImg(true)}
                                className="flex items-center gap-2 px-7 py-4 bg-white/5 hover:bg-brown/20 text-brown-light border border-brown/30 hover:border-brown-light rounded-xl font-black transition-all hover:-translate-y-1 backdrop-blur-md"
                            >
                                <FileText size={20} /> Resume
                            </button>

                            <div className="flex gap-4">
                                <a href="https://www.linkedin.com/in/sachin-rawatb/" className="p-3 rounded-xl bg-white/5 text-slate-400 border border-white/10 hover:border-light-purple hover:text-light-purple transition-all shadow-lg backdrop-blur-md hover:shadow-[0_0_20px_rgba(155,124,255,0.4)]">
                                    <Linkedin size={24} />
                                </a>
                                <a href="https://github.com/sachinrawat6264384464" className="p-3 rounded-xl bg-white/5 text-slate-400 border border-white/10 hover:border-light-purple hover:text-light-purple transition-all shadow-lg backdrop-blur-md hover:shadow-[0_0_20px_rgba(155,124,255,0.4)]">
                                    <Github size={24} />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative flex justify-center lg:justify-end"
                    >
                        <div className="relative w-80 h-80 sm:w-96 sm:h-96">
                            <div className="absolute inset-0 rounded-full border-2 border-dashed border-brown/50 animate-[spin_20s_linear_infinite]"></div>
                            <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-brown-dark/20 to-brown-light/20 p-2 shadow-2xl border border-white/10">
                                <img
                                    src={profileImg}
                                    alt="Profile"
                                    className="w-full h-full rounded-full object-cover shadow-2xl grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                                />
                            </div>
                            <div className="absolute -bottom-6 -left-6 glass p-6 rounded-2xl shadow-xl animate-bounce">
                                <div className="flex items-center gap-3">
                                    <div className="h-4 w-4 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.6)]"></div>
                                    <span className="font-black text-white uppercase tracking-widest text-sm">Available for Hire</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* ========================= */}
            {/* MODAL 1 — PDF Viewer      */}
            {/* ========================= */}
            <AnimatePresence>
                {showResume && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
                        onClick={() => setShowResume(false)}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 30 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 30 }}
                            transition={{ type: 'spring', duration: 0.4 }}
                            className="relative w-full max-w-4xl bg-slate-900 border border-brown/30 rounded-3xl shadow-[0_0_60px_rgba(169,132,103,0.3)] overflow-hidden flex flex-col max-h-[92vh]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-white/5 flex-shrink-0">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 rounded-xl bg-brown/20 border border-brown/30">
                                        <FileText size={18} className="text-brown-light" />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-black text-base">Sachin Rawat — Resume</h3>
                                        <p className="text-slate-400 text-xs font-medium">Data Scientist</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">

                                    {/* Download Button */}
                                    <a
                                        href={resumeImg}
                                        download="SACHIN RAWAT resume (1).pdf"
                                        className="flex items-center gap-2 px-4 py-2 bg-brown hover:bg-brown-light text-white rounded-xl text-sm font-black transition-all hover:shadow-[0_0_15px_rgba(169,132,103,0.4)]"
                                    >
                                        <Download size={16} /> Download Resume
                                    </a>
                                    {/* Close Button */}
                                    <button
                                        onClick={() => setShowResume(false)}
                                        className="p-2 rounded-xl bg-white/5 hover:bg-red-500/20 text-slate-400 hover:text-red-400 border border-white/10 transition-all"
                                    >
                                        <X size={20} />
                                    </button>
                                </div>
                            </div>
                            <div className="flex-1 bg-slate-950 min-h-0">
                                <iframe
                                    src={`${resumeUrl}#toolbar=0&navpanes=0&scrollbar=1`}
                                    title="Resume PDF Preview"
                                    className="w-full h-full min-h-[70vh]"
                                    style={{ border: 'none' }}
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* ================================ */}
            {/* MODAL 2 — Resume Image Viewer    */}
            {/* ================================ */}
            <AnimatePresence>
                {showResumeImg && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
                        onClick={() => setShowResumeImg(false)}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 30 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 30 }}
                            transition={{ type: 'spring', duration: 0.4 }}
                            className="relative w-full max-w-3xl bg-slate-900 border border-brown/30 rounded-3xl shadow-[0_0_60px_rgba(169,132,103,0.3)] overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Header */}
                            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-white/5">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 rounded-xl bg-brown/20 border border-brown/30">
                                        <FileText size={18} className="text-brown-light" />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-black text-base">Resume — Sachin Rawat</h3>
                                        <p className="text-slate-400 text-xs font-medium">Data Scientist</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    {/* Download button — sirf tab dikhega jab image ho */}

                                    <a
                                        href={resumeImg}
                                        download="SACHIN RAWAT resume (1).pdf"
                                        className="flex items-center gap-2 px-4 py-2 bg-brown hover:bg-brown-light text-white rounded-xl text-sm font-black transition-all hover:shadow-[0_0_15px_rgba(169,132,103,0.4)]"
                                    >
                                        <Download size={16} /> Download Resume
                                    </a>

                                    <button
                                        onClick={() => setShowResumeImg(false)}
                                        className="p-2 rounded-xl bg-white/5 hover:bg-red-500/20 text-slate-400 hover:text-red-400 border border-white/10 transition-all"
                                    >
                                        <X size={20} />
                                    </button>
                                </div>
                            </div>

                            {/* Image / Placeholder */}
                            <div className="max-h-[78vh] overflow-y-auto bg-slate-950">
                                {resumeImgSrc ? (
                                    <img
                                        src={resumeImgSrc}
                                        alt="Sachin Rawat Resume"
                                        className="w-full object-contain"
                                    />
                                ) : (
                                    <div className="flex flex-col items-center justify-center py-24 gap-4">
                                        <FileText size={56} className="text-brown/30" />
                                        <p className="text-sm font-black uppercase tracking-widest text-brown/40">Image Add Karni Hai</p>
                                        <p className="text-xs text-slate-600 text-center px-6">
                                            Step 1: Image ko <span className="text-brown-light">resumeImg.jpg</span> naam se<br />
                                            <span className="text-slate-500">src/components/</span> folder mein rakh do<br />
                                            Step 2: Hero.jsx mein line 9 uncomment karo
                                        </p>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Hero;
