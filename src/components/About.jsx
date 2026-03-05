import React from 'react';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';
import CharacterBanner, { HulkSVG } from './CharacterBanner.jsx';
import CapShieldDecorative from './CapShieldDecorative.jsx';

const About = () => {
    return (
        <section id="about" className="relative py-24 bg-slate-900 overflow-hidden">
            {/* Decorative Stars - High Density */}
            <CapShieldDecorative size={160} className="absolute top-10 -right-20 opacity-[0.03] rotate-12" />
            <CapShieldDecorative size={100} className="absolute bottom-[20%] -left-10 opacity-[0.04] -rotate-12" />
            <CapShieldDecorative size={140} className="absolute top-[60%] right-[15%] opacity-[0.02] rotate-45" />
            <CapShieldDecorative size={200} className="absolute -bottom-20 -right-20 opacity-[0.015]" />
            <CapShieldDecorative size={70} className="absolute top-[30%] left-[10%] opacity-[0.03] rotate-90" />
            <CapShieldDecorative size={110} className="absolute bottom-[40%] right-[5%] opacity-[0.02] -rotate-45" />
            <CapShieldDecorative size={50} className="absolute top-[10%] left-[40%] opacity-[0.04]" />
            <CapShieldDecorative size={180} className="absolute bottom-[10%] left-[20%] opacity-[0.01]" />
            <CapShieldDecorative size={90} className="absolute top-[70%] left-[2%] opacity-[0.025]" />
            {/* Added 10 more for extreme density */}
            <CapShieldDecorative size={240} className="absolute -top-10 -left-10 opacity-[0.01] rotate-12" />
            <CapShieldDecorative size={60} className="absolute top-[15%] right-[30%] opacity-[0.035]" />
            <CapShieldDecorative size={130} className="absolute bottom-[5%] right-[25%] opacity-[0.02]" />
            <CapShieldDecorative size={40} className="absolute top-[45%] left-[25%] opacity-[0.05]" />
            <CapShieldDecorative size={300} className="absolute top-[10%] left-[60%] opacity-[0.008] -rotate-90" />
            <CapShieldDecorative size={110} className="absolute bottom-[15%] left-[5%] opacity-[0.025] rotate-180" />
            <CapShieldDecorative size={80} className="absolute top-[80%] right-[10%] opacity-[0.04]" />
            <CapShieldDecorative size={150} className="absolute top-[25%] right-[45%] opacity-[0.015]" />
            <CapShieldDecorative size={55} className="absolute bottom-[35%] left-[45%] opacity-[0.03]" />
            <CapShieldDecorative size={190} className="absolute top-[50%] left-[5%] opacity-[0.01] rotate-45" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl font-black text-white md:text-5xl"
                    >
                        {/* Avengers Character Banner */}
                        <div className="mt-10">
                            <CharacterBanner
                                name="Hulk"
                                alias="Sachin Rawat"
                                quote="That's my secret — I'm always Learning and Improving."
                                color="#22C55E"
                                icon={HulkSVG}
                                align="right"
                            />
                        </div>
                        About Me
                    </motion.h2>
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "80px" }}
                        viewport={{ once: true }}
                        className="h-1.5 bg-green-500 mt-4 rounded-full"
                    ></motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="aspect-square rounded-3xl bg-white/5 overflow-hidden shadow-[0_0_30px_rgba(34,197,94,0.3)] border border-green-500/50 p-4 backdrop-blur-md">
                            <div className="w-full h-full rounded-2xl bg-gradient-to-br from-slate-900 to-green-500/10 flex items-center justify-center p-8 border border-white/5">
                                <p className="text-slate-300 italic text-center font-medium">
                                    " 🔥 CORE COMPETENCIES<br></br>
                                    Machine Learning & Predictive Modeling,
                                    Ensemble & Boosting Algorithms,
                                    End-to-End ML Pipeline Development,
                                    Feature Engineering & Data Cleaning,
                                    Model Evaluation & Optimization,
                                    REST API & ML Model Deployment,
                                    Customer Segmentation & Business Analytics
                                    "
                                </p>
                            </div>
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -top-6 -right-6 h-24 w-24 bg-brown/10 rounded-full blur-2xl -z-10"></div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h3 className="text-3xl sm:text-4xl font-black text-white mb-6">
                            Passionate Data Scientist & Engineer
                        </h3>
                        <div className="space-y-6 text-slate-300 text-lg sm:text-xl leading-relaxed font-medium">
                            <p>
                                I am an aspiring Data Scientist passionate about transforming raw data into meaningful insights. I specialize in Python, Machine Learning, and Data Analysis, and I enjoy solving real-world problems using data-driven approaches.
                            </p>
                            <p>
                                I have hands-on experience in building projects such as predictive models, AI-based applications, and data visualization dashboards. I am continuously learning and improving my skills in Deep Learning, Big Data technologies, and advanced analytics to build scalable and impactful solutions.
                            </p>
                            <p>
                                My goal is to leverage data science to create intelligent systems that solve practical business and societal problems.
                            </p>
                        </div>

                        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-6">
                            <div>
                                <h4 className="text-3xl font-black text-green-400">0 - 1</h4>
                                <p className="text-sm text-slate-400 font-black uppercase tracking-widest">Years of Experience</p>
                            </div>
                            <div>
                                <h4 className="text-3xl font-black text-green-500 drop-shadow-[0_0_10px_rgba(34,197,94,0.4)]">25+</h4>
                                <p className="text-sm text-slate-400 font-black uppercase tracking-widest">Projects Completed</p>
                            </div>
                            <div>
                                <h4 className="text-3xl font-black text-white flex items-center gap-2 mb-1">
                                    <Github className="w-6 h-6 text-slate-400" />
                                    50+
                                </h4>
                                <p className="text-sm text-slate-400 font-black uppercase tracking-widest">Repositories</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
