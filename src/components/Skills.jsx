import React from 'react';
import { motion } from 'framer-motion';
import { Database, Code, Layout, Server, LineChart, BrainCircuit, Zap } from 'lucide-react';

const Skills = () => {
    const skillCategories = [
        {
            title: 'Programming',
            icon: <BrainCircuit className="w-8 h-8 text-accent shadow-[0_0_10px_rgba(78,240,255,0.4)]" />,
            skills: ["Python", "NumPy", "Pandas"]

        },
        {
            title: 'ML Classification',
            icon: <BrainCircuit className="w-8 h-8 text-accent shadow-[0_0_10px_rgba(78,240,255,0.4)]" />,
            skills: ["Logistic Regression", "SVM", "KNN", "Decision Tree", "Random Forest", "Naive Bayes"]
        },
        {
            title: 'ML Regression',
            icon: <BrainCircuit className="w-8 h-8 text-accent shadow-[0_0_10px_rgba(78,240,255,0.4)]" />,
            skills: ["Linear Regression", "Ridge", "Lasso", "Random Forest Regressor"]
        },
        {
            title: 'Unsupervised Learning',
            icon: <BrainCircuit className="w-8 h-8 text-accent shadow-[0_0_10px_rgba(78,240,255,0.4)]" />,
            skills: ["KMeans", "DBSCAN", "PCA", "Hierarchical Clustering"]
        },
        {
            title: 'Boosting Techniques',
            icon: <BrainCircuit className="w-8 h-8 text-accent shadow-[0_0_10px_rgba(78,240,255,0.4)]" />,
            skills: ["AdaBoost", "Gradient Boosting", "XGBoost", "LightGBM", "CatBoost"]
        },

        {
            title: 'Visualization',
            icon: <LineChart className="w-8 h-8 text-light-purple shadow-[0_0_10px_rgba(155,124,255,0.4)]" />,
            skills: ['Power BI', 'Matplotlib', 'Seaborn', 'plotly'],
        },
        {
            title: 'Web Development',
            icon: <Code className="w-8 h-8 text-accent shadow-[0_0_10px_rgba(78,240,255,0.4)]" />,
            skills: ['Django', 'FastAPI', 'React', 'flask', 'Rest API', 'Tailwind CSS'],
        },
        {
            title: 'Data Engineering',
            icon: <Database className="w-8 h-8  shadow-[0_0_10px_rgba(155,124,255,0.4)]" />,
            skills: ['SQL']
        }
    ];

    const personalTraits = [
        { label: 'Quick Learner', emoji: '⚡' },
        { label: 'Problem Solver', emoji: '🧩' },
        { label: 'Explorer', emoji: '🔍' },
        { label: 'Dedicated', emoji: '💪' },
        { label: 'Punctual', emoji: '⏰' },
        { label: 'Team Player', emoji: '🤝' },
        { label: 'Analytical Thinker', emoji: '🧠' },
        { label: 'Strong Problem-Solving Mindset', emoji: '✔' },
        { label: 'Self-Driven Learner', emoji: '🚀' },
        { label: 'Curious About New Technologies', emoji: '🔬' },
        { label: 'Detail-Oriented', emoji: '🎯' },
        { label: 'Consistent & Disciplined', emoji: '📌' },
    ];

    return (
        <section id="skills" className="py-24 bg-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl font-black text-white md:text-5xl"
                    >
                        Core Expertise
                    </motion.h2>
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "80px" }}
                        viewport={{ once: true }}
                        className="h-1.5 bg-neon mx-auto mt-4 rounded-full"
                    ></motion.div>
                    <p className="mt-4 text-slate-300 text-base sm:text-lg max-w-2xl mx-auto font-medium">
                        A comprehensive set of skills across the data science and full-stack development spectrum.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white/5 p-8 rounded-3xl shadow-2xl border border-sky-400 hover:border-sky-400/40 transition-all duration-300 hover:-translate-y-1 group backdrop-blur-md hover:shadow-sky-400/40"
                        >
                            <div className="mb-6 p-4 rounded-2xl bg-white/5 w-fit group-hover:bg-light-purple/10 transition-colors shadow-inner border border-white/5 group-hover:neon-glow group-hover:text-light-purple hover:shadow-[0_0_15px_rgba(155,124,255,0.4)]">
                                {category.icon}
                            </div>
                            <h3 className="text-2xl font-black text-white group-hover:text-light-purple transition-colors mb-4">{category.title}</h3>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1.5 bg-white/5 text-slate-200 rounded-lg text-sm font-black uppercase tracking-wide group-hover:bg-light-purple/10 group-hover:text-light-purple border border-white/10 transition-all"
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
                    className="mt-10 bg-white/5 p-8 rounded-3xl border border-brown/50 hover:border-brown-light hover:shadow-[0_0_30px_rgba(169,132,103,0.25)] transition-all duration-300 group backdrop-blur-md"
                >
                    <div className="flex items-center gap-4 mb-6">
                        <div className="p-4 rounded-2xl bg-brown/10 w-fit border border-brown/20 group-hover:bg-brown/20 transition-colors">
                            <Zap className="w-8 h-8 text-brown-light" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-black text-white group-hover:text-brown-light transition-colors">Personal Traits</h3>
                            <p className="text-slate-400 text-sm font-medium mt-0.5">What drives me every day</p>
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        {personalTraits.map((trait) => (
                            <span
                                key={trait.label}
                                className="flex items-center gap-2 px-4 py-2.5 bg-brown/10 text-brown-light rounded-2xl text-sm font-black border border-brown/20 hover:bg-brown/25 hover:border-brown-light transition-all cursor-default"
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
