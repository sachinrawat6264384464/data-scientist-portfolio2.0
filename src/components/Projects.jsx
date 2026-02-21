import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ArrowRight, X, Sparkles, Box, Trophy } from 'lucide-react';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            title: 'AI Sentiment Analyzer',
            description: 'A deep learning project using Transformer models to analyze sentiment across 1M+ tweets in real-time.',
            fullDetail: 'An advanced NLP system built on BERT architecture, fine-tuned for high-velocity tweet analysis with custom tokenization.',
            performance: 'Processed 1.2M tweets/hour with 89% sentiment accuracy and <50ms latency.',
            tech: ['Python', 'PyTorch', 'FastAPI', 'Redis'],
            image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2670&auto=format&fit=crop',
            github: '#',
            demo: '#',
            type: 'featured'
        },
        {
            title: 'Sales Forecast Engine',
            description: 'Predictive analytics platform for e-commerce that increased inventory accuracy by 25% using XGBoost.',
            fullDetail: 'A sophisticated time-series forecasting model that integrates seasonal trends and promotional periods for retail optimization.',
            performance: 'Reduced stockouts by 30% and improved inventory turnover ratio by 1.8x within 6 months.',
            tech: ['Python', 'Scikit-Learn', 'AWS', 'Looker'],
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop',
            github: '#',
            demo: '#',
            type: 'featured'
        },
        {
            title: 'Healthcare Data Pipeline',
            description: 'Robust ETL pipeline processing sensitive medical data with Kafka and Spark for real-time monitoring.',
            fullDetail: 'A high-throughput data infrastructure designed for HIPAA compliance, featuring automated data masking and schema validation.',
            performance: 'Ingested 500GB of daily clinical data with zero downtime and 99.9% data integrity.',
            tech: ['Kafka', 'Spark', 'PostgreSQL', 'Docker'],
            image: 'https://images.unsplash.com/photo-1576091160550-2173bdb999ef?q=80&w=2670&auto=format&fit=crop',
            github: '#',
            demo: '#',
            type: 'featured'
        },
        {
            title: 'Fraud Detection System',
            description: 'Real-time financial transaction monitoring using anomaly detection algorithms to prevent credit card fraud.',
            fullDetail: 'An ensemble learning framework that detects suspicious patterns in milliseconds, reducing false positives through behavioral analysis.',
            performance: 'Detected $2.4M in potential fraudulent transactions with 94% precision and 1:5000 false positive rate.',
            tech: ['Python', 'H2O.ai', 'Kubernetes', 'MongoDB'],
            image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2670&auto=format&fit=crop',
            github: '#',
            demo: '#',
            type: 'featured'
        },
        {
            title: 'Customer Churn Predictor',
            description: 'An end-to-end ML solution for telecom companies to identify at-risk customers with 92% precision.',
            fullDetail: 'A classification system utilizing deep neural networks to analyze usage patterns and predict high-risk churn windows.',
            performance: 'Enabled target retention campaigns that reduced churn by 18% in the first quarter.',
            tech: ['XGBoost', 'Pandas', 'Flask', 'PowerBI'],
            image: 'https://images.unsplash.com/photo-1551288049-bbbda536339a?q=80&w=2670&auto=format&fit=crop',
            github: '#',
            demo: '#',
            type: 'featured'
        },
        {
            title: 'Object Detection Bot',
            description: 'Computer Vision model deployed on edge devices for automated security surveillance in industrial zones.',
            fullDetail: 'Optimized YOLO architecture specifically designed for low-power edge deployment, featuring custom object tracking logic.',
            performance: 'Achieved 30 FPS on embedded devices with 95% mAP (mean Average Precision).',
            tech: ['YOLOv8', 'OpenCV', 'TensorRT', 'C++'],
            image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop',
            github: '#',
            demo: '#',
            type: 'featured'
        },
    ];

    const miniProjects = [
        {
            title: 'Movie Recommendation Sys',
            shortDesc: 'A sleek content-based filter using cosine similarity.',
            fullDetail: 'A personalized movie recommendation system built using Python and Scikit-learn. It analyzes 5,000+ movie datasets to suggest titles based on genres and user preferences using TF-IDF Vectorizer.',
            tech: ['Python', 'Pandas', 'Streamlit'],
            image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2659&auto=format&fit=crop',
            type: 'mini'
        },
        {
            title: 'Stock Price Tracker',
            shortDesc: 'Real-time visualization of market trends using Yahoo Finance API.',
            fullDetail: 'A dynamic dashboard that fetches live stock price data using the yfinance library. It features interactive Plotly charts and technical indicators like Moving Averages for quick market analysis.',
            tech: ['Python', 'Plotly', 'YFinance'],
            image: 'https://images.unsplash.com/photo-1611974717535-7dd0c11432f4?q=80&w=2670&auto=format&fit=crop',
            type: 'mini'
        },
        {
            title: 'Iris Flower Classifier',
            shortDesc: 'Classic ML project identifying species with KNN.',
            fullDetail: 'The "Hello World" of Machine Learning. A KNN classifier that distinguishes between Iris Setosa, Versicolor, and Virginica species based on sepal and petal measurements with 98.5% accuracy.',
            tech: ['Sklearn', 'Matplotlib', 'Numpy'],
            image: 'https://images.unsplash.com/photo-1599305445671-ac291c95ada9?q=80&w=2669&auto=format&fit=crop',
            type: 'mini'
        }
    ];

    return (
        <section id="projects" className="py-24 bg-slate-900 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl font-black text-white md:text-5xl"
                        >
                            Featured Projects
                        </motion.h2>
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "80px" }}
                            viewport={{ once: true }}
                            className="h-1.5 bg-neon mt-4 rounded-full"
                        ></motion.div>
                    </div>
                </div>

                {/* Main Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group bg-white/5 rounded-3xl overflow-hidden shadow-2xl border border-white/10 hover:border-light-purple/30 transition-all duration-300 backdrop-blur-md"
                        >
                            <div className="relative aspect-video overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 backdrop-blur-sm">
                                    <a href={project.github} className="p-3 bg-white/5 border border-white/20 rounded-full text-white hover:bg-accent hover:text-slate-900 transition-all transform scale-90 group-hover:scale-100 backdrop-blur-md">
                                        <Github size={20} />
                                    </a>
                                    <a href={project.demo} className="p-3 bg-white/5 border border-white/20 rounded-full text-white hover:bg-accent hover:text-slate-900 transition-all transform scale-90 delay-75 group-hover:scale-100 backdrop-blur-md">
                                        <ExternalLink size={20} />
                                    </a>
                                </div>
                            </div>

                            <div className="p-8">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.map((t) => (
                                        <span key={t} className="px-2.5 py-1 bg-white/5 text-slate-200 rounded-lg text-xs font-black uppercase border border-white/10 hover:border-light-purple/40 transition-all">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="text-2xl font-black text-white mb-3 group-hover:text-light-purple transition-colors">{project.title}</h3>
                                <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6 font-medium line-clamp-2">
                                    {project.description}
                                </p>
                                <button
                                    onClick={() => setSelectedProject(project)}
                                    className="inline-flex items-center gap-2 text-accent font-black text-sm hover:text-light-purple transition-all group/link"
                                >
                                    View Details <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Mini Projects Subsection */}
                <div className="pt-24 border-t border-white/5">
                    <div className="mb-12">
                        <motion.h3
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl font-black text-white"
                        >
                            <span className="text-accent">#</span> Mini Projects
                        </motion.h3>
                        <p className="text-slate-400 mt-2 font-medium">Small-scale implementations and logic exploration.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {miniProjects.map((mini, idx) => (
                            <motion.div
                                key={mini.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="group relative bg-white/5 p-6 rounded-3xl border border-white/10 hover:border-accent/30 transition-all backdrop-blur-md"
                            >
                                <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-5">
                                    <img src={mini.image} alt={mini.title} className="w-full h-full object-cover grayscale-[50%] group-hover:grayscale-0 transition-all duration-500" />
                                </div>
                                <h4 className="text-xl font-black text-white mb-2 group-hover:text-accent transition-colors">{mini.title}</h4>
                                <p className="text-slate-400 text-sm mb-6 line-clamp-2 font-medium">{mini.shortDesc}</p>
                                <button
                                    onClick={() => setSelectedProject(mini)}
                                    className="w-full py-3 bg-accent/5 text-accent rounded-xl text-sm font-black border border-accent/20 hover:bg-accent hover:text-slate-900 transition-all"
                                >
                                    More Detail
                                </button>
                            </motion.div>
                        ))}

                        {/* View All Card */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-br from-accent/20 to-light-purple/20 p-6 rounded-3xl border border-accent/30 flex flex-col items-center justify-center text-center space-y-4 shadow-[0_0_30px_rgba(78,240,255,0.1)] hover:shadow-[0_0_40px_rgba(78,240,255,0.2)] transition-all cursor-pointer group"
                        >
                            <div className="p-4 bg-white/10 rounded-full border border-white/10 group-hover:scale-110 transition-transform">
                                <Trophy className="text-accent" size={32} />
                            </div>
                            <div>
                                <h4 className="text-2xl font-black text-white">25+ Projects</h4>
                                <p className="text-slate-200 text-sm font-bold uppercase tracking-widest mt-1">Explored & Built</p>
                            </div>
                            <a
                                href="https://github.com/sachinrawat6264384464"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-accent font-black text-sm group-hover:translate-x-1 transition-all"
                            >
                                See Full GitHub <ArrowRight size={16} />
                            </a>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Project Modal Popup */}
            <AnimatePresence>
                {selectedProject && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedProject(null)}
                            className="absolute inset-0 bg-slate-900/90 backdrop-blur-xl"
                        ></motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.8, y: 20 }}
                            className={`relative w-full ${selectedProject.type === 'featured' ? 'max-w-xl' : 'max-w-2xl'} bg-slate-900 border border-white/10 rounded-[2.5rem] shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden z-[101]`}
                        >
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-6 right-6 p-2 bg-white/5 hover:bg-red-500/20 text-white hover:text-red-500 rounded-full transition-all z-10"
                            >
                                <X size={24} />
                            </button>

                            <div className="flex flex-col md:flex-row h-full">
                                {selectedProject.type === 'mini' && (
                                    <div className="w-full md:w-1/2 aspect-square">
                                        <img
                                            src={selectedProject.image}
                                            alt={selectedProject.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                )}
                                <div className="flex-1 p-8 md:p-10 flex flex-col justify-center">
                                    <div className="flex items-center gap-2 text-accent mb-4">
                                        <Sparkles size={18} />
                                        <span className="text-xs font-black uppercase tracking-[0.2em]">Project Insights</span>
                                    </div>
                                    <h3 className="text-3xl font-black text-white mb-6 leading-tight">
                                        {selectedProject.title}
                                    </h3>

                                    <div className="space-y-6 mb-8">
                                        <div>
                                            <p className="text-accent text-[10px] font-black uppercase tracking-widest mb-1.5 opacity-60">Description</p>
                                            <p className="text-slate-300 text-base leading-relaxed font-medium">
                                                {selectedProject.fullDetail || selectedProject.description}
                                            </p>
                                        </div>

                                        {selectedProject.performance && (
                                            <div>
                                                <p className="text-neon text-[10px] font-black uppercase tracking-widest mb-1.5 opacity-60">Impact & Performance</p>
                                                <p className="text-slate-200 text-base font-black leading-relaxed italic border-l-2 border-neon pl-4">
                                                    "{selectedProject.performance}"
                                                </p>
                                            </div>
                                        )}
                                    </div>

                                    <div className="flex flex-wrap gap-2 mb-10">
                                        {selectedProject.tech.map(t => (
                                            <span key={t} className="px-4 py-2 bg-accent/10 text-accent rounded-xl text-xs font-black border border-accent/20 transition-all">
                                                {t}
                                            </span>
                                        ))}
                                    </div>

                                    <button
                                        onClick={() => setSelectedProject(null)}
                                        className="w-full py-4 bg-neon text-slate-900 rounded-2xl font-black shadow-lg shadow-accent/20 hover:shadow-accent/40 transition-all active:scale-[0.98]"
                                    >
                                        Back to Projects
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Projects;
