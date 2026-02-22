import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Download, ArrowRight } from 'lucide-react';
import profileImg from './myimage.jpg';

const Hero = () => {
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
                            <button className="flex items-center gap-2 px-8 py-4 bg-brown hover:bg-brown-light text-white rounded-xl font-black transition-all hover:-translate-y-1 shadow-[0_0_20px_rgba(169,132,103,0.3)]">
                                Download Resume <Download size={20} />
                            </button>

                            <div className="flex gap-4 ml-2">
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
        </section>
    );
};

export default Hero;
