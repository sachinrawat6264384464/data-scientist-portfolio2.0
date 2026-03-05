import React from 'react';
import { motion } from 'framer-motion';
import { Database, Code, Layout, Server, LineChart, BrainCircuit, Zap, MessageSquare } from 'lucide-react';
import CharacterBanner, { ThorSVG } from './CharacterBanner.jsx';
import CapShieldDecorative from './CapShieldDecorative.jsx';

const Skills = () => {
    const skillCategories = [
        {
            title: 'Programming',
            icon: <BrainCircuit className="w-6 h-6 text-sky-400" />,
            color: 'sky',
            skills: ["Python", "NumPy", "Pandas", 'C++', 'Java']
        },
        {
            title: 'ML Classification',
            icon: <BrainCircuit className="w-6 h-6 text-violet-400" />,
            color: 'violet',
            skills: ["Logistic Regression", "SVM", "KNN", "Decision Tree", "Random Forest", "Naive Bayes"]
        },
        {
            title: 'ML Regression',
            icon: <BrainCircuit className="w-6 h-6 text-emerald-400" />,
            color: 'emerald',
            skills: ["Linear Regression", "Ridge", "Lasso", "RF Regressor"]
        },
        {
            title: 'Unsupervised Learning',
            icon: <BrainCircuit className="w-6 h-6 text-pink-400" />,
            color: 'pink',
            skills: ["KMeans", "DBSCAN", "PCA", "Hierarchical Clustering"]
        },
        {
            title: 'Boosting Techniques',
            icon: <Zap className="w-6 h-6 text-amber-400" />,
            color: 'amber',
            skills: ["AdaBoost", "Gradient Boosting", "XGBoost", "LightGBM", "CatBoost"]
        },
        {
            title: 'NLP',
            icon: <MessageSquare className="w-6 h-6 text-teal-400" />,
            color: 'teal',
            skills: ["Text Preprocessing", "Tokenization", "TF-IDF", "Word2Vec", "Sentiment Analysis", "NLTK"]
        },
        {
            title: 'Visualization',
            icon: <LineChart className="w-6 h-6 text-orange-400" />,
            color: 'orange',
            skills: ['Power BI', 'Matplotlib', 'Seaborn', 'Plotly'],
        },
        {
            title: 'Web Development',
            icon: <Code className="w-6 h-6 text-cyan-400" />,
            color: 'cyan',
            skills: ['Django', 'FastAPI', 'React', 'Flask', 'Rest API', 'Tailwind CSS'],
        },
        {
            title: 'Data Engineering',
            icon: <Database className="w-6 h-6 text-indigo-400" />,
            color: 'indigo',
            skills: ['SQL', 'MySQL', 'PostgreSQL']
        }
    ];

    const colorMap = {
        sky: 'border-sky-500/30 hover:border-sky-400/60 hover:shadow-sky-500/10',
        violet: 'border-violet-500/30 hover:border-violet-400/60 hover:shadow-violet-500/10',
        emerald: 'border-emerald-500/30 hover:border-emerald-400/60 hover:shadow-emerald-500/10',
        pink: 'border-pink-500/30 hover:border-pink-400/60 hover:shadow-pink-500/10',
        amber: 'border-amber-500/30 hover:border-amber-400/60 hover:shadow-amber-500/10',
        teal: 'border-teal-500/30 hover:border-teal-400/60 hover:shadow-teal-500/10',
        orange: 'border-orange-500/30 hover:border-orange-400/60 hover:shadow-orange-500/10',
        cyan: 'border-cyan-500/30 hover:border-cyan-400/60 hover:shadow-cyan-500/10',
        indigo: 'border-indigo-500/30 hover:border-indigo-400/60 hover:shadow-indigo-500/10',
    };

    const badgeMap = {
        sky: 'bg-sky-500/10 text-sky-300 border-sky-500/20',
        violet: 'bg-violet-500/10 text-violet-300 border-violet-500/20',
        emerald: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',
        pink: 'bg-pink-500/10 text-pink-300 border-pink-500/20',
        amber: 'bg-amber-500/10 text-amber-300 border-amber-500/20',
        teal: 'bg-teal-500/10 text-teal-300 border-teal-500/20',
        orange: 'bg-orange-500/10 text-orange-300 border-orange-500/20',
        cyan: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20',
        indigo: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/20',
    };

    const iconBgMap = {
        sky: 'bg-sky-500/10 border-sky-500/20',
        violet: 'bg-violet-500/10 border-violet-500/20',
        emerald: 'bg-emerald-500/10 border-emerald-500/20',
        pink: 'bg-pink-500/10 border-pink-500/20',
        amber: 'bg-amber-500/10 border-amber-500/20',
        teal: 'bg-teal-500/10 border-teal-500/20',
        orange: 'bg-orange-500/10 border-orange-500/20',
        cyan: 'bg-cyan-500/10 border-cyan-500/20',
        indigo: 'bg-indigo-500/10 border-indigo-500/20',
    };

    const personalTraits = [
        { label: 'Quick Learner', emoji: '⚡' },
        { label: 'Team Player', emoji: '🤝' },
        { label: 'Analytical Thinker', emoji: '🧠' },
        { label: 'Strong Problem-Solving Mindset', emoji: '✔' },
        { label: 'Self-Driven Learner', emoji: '🚀' },
        { label: 'Curious About New Technologies', emoji: '🔬' },
        { label: 'Detail-Oriented', emoji: '🎯' },
        { label: 'Consistent & Disciplined', emoji: '📌' },
    ];

    return (
        <section id="skills" className="relative py-20 bg-slate-900 overflow-hidden">
            {/* Decorative Stars - High Density */}
            <CapShieldDecorative size={200} className="absolute -top-24 left-[10%] opacity-[0.03]" />
            <CapShieldDecorative size={120} className="absolute bottom-[10%] right-[5%] opacity-[0.04] rotate-12" />
            <CapShieldDecorative size={150} className="absolute top-[40%] -left-10 opacity-[0.02] -rotate-45" />
            <CapShieldDecorative size={250} className="absolute top-[10%] -right-20 opacity-[0.015] rotate-180" />
            <CapShieldDecorative size={60} className="absolute bottom-[30%] left-[15%] opacity-[0.03]" />
            <CapShieldDecorative size={100} className="absolute top-[60%] left-[45%] opacity-[0.02] rotate-12" />
            <CapShieldDecorative size={80} className="absolute bottom-[5%] left-[40%] opacity-[0.04]" />
            <CapShieldDecorative size={140} className="absolute top-[15%] right-[25%] opacity-[0.02] -rotate-90" />
            <CapShieldDecorative size={40} className="absolute bottom-[40%] right-[30%] opacity-[0.05]" />
            <CapShieldDecorative size={180} className="absolute -bottom-10 right-[15%] opacity-[0.01]" />
            {/* Added 10 more for extreme density */}
            <CapShieldDecorative size={260} className="absolute top-[30%] -right-32 opacity-[0.01] rotate-45" />
            <CapShieldDecorative size={75} className="absolute top-[5%] left-[30%] opacity-[0.035]" />
            <CapShieldDecorative size={145} className="absolute bottom-[20%] right-[35%] opacity-[0.02] rotate-12" />
            <CapShieldDecorative size={45} className="absolute top-[55%] left-[5%] opacity-[0.04]" />
            <CapShieldDecorative size={310} className="absolute bottom-[-5%] left-[60%] opacity-[0.008] -rotate-12" />
            <CapShieldDecorative size={115} className="absolute top-[45%] right-[10%] opacity-[0.025]" />
            <CapShieldDecorative size={85} className="absolute bottom-[15%] left-[25%] opacity-[0.03]" />
            <CapShieldDecorative size={155} className="absolute top-[20%] left-[45%] opacity-[0.015] rotate-180" />
            <CapShieldDecorative size={55} className="absolute bottom-[45%] right-[2%] opacity-[0.04] rotate-90" />
            <CapShieldDecorative size={195} className="absolute top-[75%] left-[50%] opacity-[0.01] -rotate-45" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl font-black text-white md:text-5xl"
                    >   {/* Avengers Character Banner */}
                        <CharacterBanner
                            name="Thor"
                            alias="Focusing on the Goal"
                            quote="Whosoever holds this hammer, if they be worthy, shall possess the power of Thor."
                            color="#F59E0B"
                            icon={ThorSVG}
                            align="left"
                        />
                        Core Expertise
                    </motion.h2>
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "80px" }}
                        viewport={{ once: true }}
                        className="h-1.5 bg-amber-500 mx-auto mt-4 rounded-full"
                    ></motion.div>
                    <p className="mt-4 text-slate-300 text-base sm:text-lg max-w-2xl mx-auto font-medium">
                        A comprehensive set of skills across the data science and full-stack development spectrum.
                    </p>
                </div>

                {/* Compact Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((cat, idx) => (
                        <motion.div
                            key={cat.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="bg-white/5 p-8 rounded-3xl border border-amber-500/30 hover:shadow-[0_0_30px_rgba(245,158,11,0.2)] hover:border-amber-400 group transition-all duration-300 backdrop-blur-md"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className={`p-3 rounded-2xl bg-amber-500/10 text-amber-500 border border-amber-500/20 group-hover:scale-110 transition-transform`}>
                                    {cat.icon}
                                </div>
                                <h3 className="text-xl font-black text-white">{cat.title}</h3>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {cat.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-4 py-2 bg-white/5 text-slate-300 border border-white/10 rounded-xl text-sm font-bold tracking-wide hover:bg-amber-500/20 hover:text-amber-400 hover:border-amber-500/30 transition-all cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Personal Traits Box */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mt-6 bg-white/[0.03] p-5 rounded-2xl border border-amber-500/30 hover:border-amber-400/60 hover:shadow-[0_0_30px_rgba(245,158,11,0.2)] transition-all duration-300 group backdrop-blur-md"
                >
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/20 group-hover:bg-amber-500/20 transition-colors">
                            <Zap className="w-5 h-5 text-amber-400" />
                        </div>
                        <div>
                            <h3 className="text-lg font-black text-white group-hover:text-amber-400 transition-colors">Personal Traits</h3>
                            <p className="text-slate-400 text-xs font-medium">What drives me every day</p>
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {personalTraits.map((trait) => (
                            <span
                                key={trait.label}
                                className="flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 text-amber-300 rounded-xl text-xs font-black border border-amber-500/20 hover:bg-amber-500/25 hover:border-amber-400 transition-all cursor-default"
                            >
                                <span>{trait.emoji}</span>
                                {trait.label}
                            </span>
                        ))}
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Skills;
