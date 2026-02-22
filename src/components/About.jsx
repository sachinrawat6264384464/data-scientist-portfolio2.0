import React from 'react';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-24 bg-slate-900 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl font-black text-white md:text-5xl"
                    >
                        About Me
                    </motion.h2>
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "80px" }}
                        viewport={{ once: true }}
                        className="h-1.5 bg-brown mx-auto mt-4 rounded-full"
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
                        <div className="aspect-square rounded-3xl bg-white/5 overflow-hidden shadow-[0_0_30px_rgba(169,132,103,0.3)] border border-brown/50 p-4 backdrop-blur-md">
                            <div className="w-full h-full rounded-2xl bg-gradient-to-br from-slate-900 to-brown/10 flex items-center justify-center p-8 border border-white/5">
                                <p className="text-slate-300 italic text-center font-medium">
                                    "Data is a precious thing and will last longer than the systems themselves."
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
                                <h4 className="text-3xl font-black text-brown-light">0 - 1</h4>
                                <p className="text-sm text-slate-400 font-black uppercase tracking-widest">Years of Experience</p>
                            </div>
                            <div>
                                <h4 className="text-3xl font-black text-brown drop-shadow-[0_0_10px_rgba(169,132,103,0.4)]">25+</h4>
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
