import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ArrowRight, X, Sparkles, Box, Trophy } from 'lucide-react';
import cus from './cus.png';
import win from './win.png';
import jj from './jj.png';
import hh from './hh.png';
import dd from './ddpng.png';
import nn from './nn.png';
import student from './student.jpg';
import sales from './sales.jpg';
import solar from './solar.jpg';
import re from './port.jpg';
import sipl from './sipl.jpg';
import acro from './las.jpg';
import django from './django1.jpg';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            title: 'customer churn prediction',
            description: 'Customer Churn Prediction + RFM Segmentation (Machine Learning Project) I recently worked on an exciting Customer Analytics project where I combined RFM Analysis + Churn Prediction to understand customer behavior and improve retention strategies.',
            fullDetail: "1 Customer Segmentation using RFM (Recency, Frequency, Monetary)2 Predicting whether a customer will Churn (Yes/No) using Machine LearningFinding actionable insights to help businesses reduce customer lossKey Steps I Performed:Data Cleaning & PreprocessingFeature Engineering (RFM Scoring + Segmentation)Customer Segmentation into categories ",
            performance: 'accuracy score Y_train 0.73 and accuracy_score y_test 0.72.',
            tech: ['Python', 'pandas', 'Scikit-Learn', 'RFM', 'Churn Prediction'],
            image: cus,
            github: 'https://github.com/sachinrawat6264384464/Machine-Learning-Projects-Bigner-To-Advanced-Journey-Start-/blob/main/machine%20learning%20practice%20projects/customer%20churn%20prediction.ipynb',
            demo: 'https://www.linkedin.com/posts/sachin-rawatb_machinelearning-datascience-customersegmentation-activity-7429739695590518785-7OGa?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE6IRoUBzGzrkp84sI5KXdxL5plTuWQg3uc',
            type: 'featured'
        },
        {
            title: '🍷Wine Quality Clustering',
            description: 'Predictive analytics platform for e-commerce that increased inventory accuracy by 25% using XGBoost.',
            fullDetail: 'To group wines into meaningful segments and analyze how these clusters relate to actual wine quality ratings.🧠 What I Did✅ Cleaned & standardized the dataset✅ Applied K-Means Clustering (k=4) for segmentation✅ Used PCA (2D Visualization) to visualize cluster separation✅ Performed Cluster vs Quality Relationship Analysis ✅ Interpreted clusters into real-world quality groups📊 Key Insights (Cluster Quality Analysis)I analyzed average quality per cluster and found clear differences:🔹 Cluster 1 → High Quality Segment (Avg Quality ≈ 6.00)🔹 Cluster 3 → Good Quality Segment (Avg Quality ≈ 5.87)🔹 Cluster 0 → Average Wines (Avg Quality ≈ 5.30)🔹 Cluster 2 → Rare / Low Quality Profile (Avg Quality ≈ 5.29, only 24 samples)',
            performance: 'Reduced stockouts by 30% and improved inventory turnover ratio by 1.8x within 6 months.',
            tech: ['Pandas', 'Numpy', 'Scikit-learn (K-Means, PCA, StandardScaler)', 'Matplotlib', 'Seaborn'],
            image: win,
            github: 'https://github.com/sachinrawat6264384464/Machine-Learning-Projects-Bigner-To-Advanced-Journey-Start-/blob/main/machine%20learning%20practice%20projects/winequality.ipynb',
            demo: 'https://www.linkedin.com/posts/sachin-rawatb_machinelearning-unsupervisedlearning-kmeans-activity-7429125190392999936-P5mE?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE6IRoUBzGzrkp84sI5KXdxL5plTuWQg3uc',
            type: 'featured'
        },
        {
            title: '🚀 A/B Testing using Hypothesis Testing ',
            description: ' To check if the Treatment group leads to a higher conversion rate than the Control group using statistical hypothesis testing.',
            fullDetail: 'To check if the Treatment group leads to a higher conversion rate than the Control group using statistical hypothesis testing.📌 Dataset Structuregroup → control / treatmentconverted → 0 (not converted) / 1 (converted)🔍 Steps Performed✅ Data Cleaning & Exploration ✅ Group-wise conversion rate calculation ✅ Hypothesis Setup:H0: Conversion rate(Control) = Conversion rate(Treatment)H1: Conversion rate(Treatment) > Conversion rate(Control)✅ Applied Z-Test for Proportions ✅ Checked statistical significance using p-value ✅ Final business decision based on results📊 Results📌 Z-Statistic: 1.23 📌 P-Value: 0.216Since p-value > 0.05, the result is not statistically significant, meaning:',
            performance: 'Achieved clear cluster separation, with ~80% revenue driven by top 20–30% customers.',
            tech: ['kaggle', 'Z-test', 'A/B Testing', 'Hypothesis Testing', 'Python', 'Pandas', 'Numpy'],
            image: jj,
            github: '#',
            demo: 'https://www.linkedin.com/posts/sachin-rawatb_datascience-aabrbabrtesting-hypothesistesting-activity-7429864770364919808-i1MM?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE6IRoUBzGzrkp84sI5KXdxL5plTuWQg3uc',
            type: 'featured'
        },
        {
            title: 'Customer Segmentation using RFM Analysis ',
            description: 'his project shows how Machine Learning + RFM analytics can help businesses take smarter decisions in:📌 Marketing📌 Customer retention📌 Revenue optimization📌 Sales strategy',
            fullDetail: 'I recently completed a Customer Segmentation project using RFM Analysis on the Superstore dataset from Kaggle. I engineered Recency, Frequency, and Monetary features, applied data scaling, and performed K-Means clustering to identify high-value, at-risk, and churned customers. Using PCA for validation and Pareto (80/20) analysis, I discovered that a small percentage of customers were contributing the majority of revenue — with a significant portion coming from customers who are now at risk. This project highlights how Machine Learning + Business Analytics can drive smarter decisions in customer retention, targeted marketing, and revenue optimization.',
            performance: 'Achieved clear cluster separation, with ~80% revenue driven by top 20–30% customers.',
            tech: ['Python', 'Pandas', 'Scikit-learn', 'Matplotlib', 'RFM', 'KMeans', 'PCA', 'StandardScaler'],
            image: hh,
            github: 'https://github.com/sachinrawat6264384464/Machine-Learning-Projects-Bigner-To-Advanced-Journey-Start-/blob/main/machine%20learning%20practice%20projects/sample-superstore.ipynb',
            demo: 'https://www.linkedin.com/posts/sachin-rawatb_machinelearning-datascience-customersegmentation-activity-7429506003513069568-fqkb?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE6IRoUBzGzrkp84sI5KXdxL5plTuWQg3uc',
            type: 'featured'
        },
        {
            title: 'Credit Card Customer Segmentation',
            description: 'I recently completed a Credit Card Customer Segmentation project using K-Means clustering, ',
            fullDetail: '🚀 I recently completed a Credit Card Customer Segmentation project using K-Means clustering, where I analyzed customer behavior to generate actionable business insights. After data cleaning and feature scaling, I determined the optimal clusters using Elbow Method and Silhouette Score, followed by PCA visualization for validation.',
            performance: 'Achieved well-separated clusters with a strong Silhouette Score, indicating effective and meaningful customer segmentation.',
            tech: ['PCA Visualization', 'K-Means', 'Pandas', 'Matplotlib'],
            image: dd,
            github: 'https://github.com/sachinrawat6264384464/Machine-Learning-Projects-Bigner-To-Advanced-Journey-Start-/blob/main/machine%20learning%20practice%20projects/credit%20card%20segmentation.ipynb',
            demo: 'https://www.linkedin.com/posts/sachin-rawatb_machinelearning-datascience-kmeans-activity-7428389069602209792-0HkZ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE6IRoUBzGzrkp84sI5KXdxL5plTuWQg3uc',
            type: 'featured'
        },
        {
            title: 'Iris Flower Segmentation ',
            description: 'I recently completed an Unsupervised Learning project on Iris Flower Segmentation using K-Means clustering on the famous Iris dataset. ',
            fullDetail: '🚀 I recently completed an Unsupervised Learning project on Iris Flower Segmentation using K-Means clustering on the famous Iris dataset. Without using labels during training, I performed feature selection, scaling, optimal K selection (Elbow Method), and evaluated clusters using Silhouette Score. The results showed better separation using petal features (0.67) compared to all features (0.47), .',
            performance: 'Achieved a strong Silhouette Score of 0.67 with clear cluster separation, validating effective unsupervised segmentation.',
            tech: ['K-Means', 'Pandas', 'Matplotlib'],
            image: nn,
            github: 'https://github.com/sachinrawat6264384464/Machine-Learning-Projects-Bigner-To-Advanced-Journey-Start-/blob/main/machine%20learning%20practice%20projects/Iris%20Flower%20Clustering.ipynb',
            demo: 'https://www.linkedin.com/posts/sachin-rawatb_machinelearning-unsupervisedlearning-kmeans-activity-7428249128024952833-N2T_?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE6IRoUBzGzrkp84sI5KXdxL5plTuWQg3uc',
            type: 'featured'
        },
    ];

    const webProjects = [
        {
            title: 'Personal Portfolio Website – ML & Full Stack Developer',

            description: 'A modern, responsive portfolio website showcasing my expertise in Machine Learning, Data Science, and Full Stack Development using Django and React.',

            fullDetail: 'Designed and developed a fully responsive personal portfolio to highlight my end-to-end projects in Machine Learning, Data Science, and Web Development. The website features dynamic project sections, smooth UI interactions, and structured content presentation. Implemented clean component-based architecture, optimized performance, and ensured cross-device compatibility. The portfolio includes detailed project case studies such as ML predictive models, data analysis dashboards, and full-stack applications built with React and Django.',
            performance: 'Achieved 95+ score on Lighthouse for Performance, Accessibility, and SEO.',
            tech: ['React', 'Tailwind CSS', 'EmailJS'],
            image: re,
            github: 'https://github.com/sachinrawat6264384464/data-scientist-portfolio2.0',

            type: 'featured'
        },
        {
            title: 'Full Stack Stock Management System',

            description: 'A complete end-to-end stock management system built using React and Django to handle inventory tracking, product management, and real-time stock updates.',

            fullDetail: 'Developed a full-stack inventory management application with React frontend and Django REST backend. Implemented product CRUD operations, stock quantity tracking, authentication system, API integration, and dynamic dashboard. Designed a responsive UI with reusable React components and connected it with Django REST APIs for seamless data flow. Integrated MySQL for persistent data storage and ensured secure backend handling.',

            performance: 'Improved inventory tracking efficiency by automating stock updates and reducing manual errors. Optimized API calls and frontend rendering for faster dashboard performance and smooth user experience.',

            tech: ['React.js', 'Django', 'Django REST Framework', 'MySQL', 'JavaScript', 'HTML', 'tailwindCSS', 'REST API'],
            image: django,
            github: 'https://github.com/sachinrawat6264384464/Stock_Manager',

            type: 'featured'
        },
        {
            title: 'Full Stack Library Management System',

            description: 'A complete Django-based library management system with integrated frontend, backend, and database handling for efficient book and user management.',

            fullDetail: 'Developed a fully functional library management system using Django, implementing both frontend and backend within a single framework. The system includes book management (add, update, delete), member registration, issue/return tracking, fine calculation logic, and admin control panel. Integrated MySQL for persistent data storage and implemented authentication with role-based access control. Designed responsive templates using HTML, CSS, and Django Template Engine to ensure smooth user interaction.',

            performance: 'Streamlined book issuing and return workflows, reducing manual record-keeping efforts and improving operational efficiency. Optimized database queries and backend logic for faster response time and scalable performance.',

            tech: ['Django', 'Python', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'Django ORM', 'Authentication System'],
            image: acro,
            github: 'https://github.com/sachinrawat6264384464/Lakshya-library-mz3c',

            type: 'featured'
        }
    ];

    const miniProjects = [
        {
            title: 'Student Habits vs Academic Performance Prediction (Machine Learning Project)',
            shortDesc: 'I analyzed how student lifestyle habits impact academic performance',
            fullDetail: 'In this project, I analyzed how student lifestyle habits impact academic performance and built a Linear Regression model to predict exam scores. After proper data preprocessing (cleaning, encoding, and outlier removal), the model achieved an R² score of 0.90, explaining 90% of the variance in performance. The low MSE, MAE, and RMSE values indicate strong prediction accuracy. This project helped me implement the complete machine learning pipeline from data preparation to model evaluation ',
            tech: ['Python', 'Pandas', 'Linear Regression', 'Scikit-learn', 'Matplotlib'],
            image: student,
            type: 'mini'
        },
        {
            title: '🚀 Sales Prediction using Machine Learning (Regression Project) 📊',
            shortDesc: 'I used machine learning algorithms to predict future sales based on historical data.',
            fullDetail: 'In this project, I predicted sales based on advertising spend across TV, Radio, Social Media, and Influencer categories. I performed data preprocessing, encoded categorical features, and trained multiple regression models including Decision Tree, Random Forest, XGBoost, and Gradient Boosting. After evaluating models using MAE, RMSE, and R² Score, Gradient Boosting performed the best with an R² of 0.9989. This project demonstrates how machine learning can support marketing budget optimization and business decision-making 🚀📊',
            tech: ['Python', 'Pandas', 'xgboost', 'RandomForestRegressor', 'decisionTreeRegressor', 'gradientBoostingRegressor', 'Scikit-learn', 'Matplotlib'],
            image: sales,
            type: 'mini'
        },
        {
            title: 'Sonar Rock vs Mine Prediction',
            shortDesc: 'I built a Sonar Rock vs Mine classification system using a Random Forest classifier',
            fullDetail: 'In this project, I built a Sonar Rock vs Mine classification system using a Random Forest classifier to detect whether a sonar signal represents a rock or a mine. I performed data preprocessing and feature scaling, then trained and evaluated the model using accuracy, recall, and a confusion matrix. The model achieved 85.71% accuracy with a strong recall score of 82.14%, which is crucial since missing a mine can be dangerous.',
            tech: ['Sklearn', 'Matplotlib', 'pandas', 'Randomforestclassifier'],
            image: solar,
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
                            className="h-1.5 bg-brown mt-4 rounded-full"
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
                            className="group bg-white/5 rounded-3xl overflow-hidden hover:shadow-[0_0_30px_rgba(169,132,103,0.3)] border border-brown/50 hover:border-brown-light transition-all duration-300 backdrop-blur-md"
                        >
                            <div className="relative aspect-video overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-brown/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 backdrop-blur-sm">
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 border border-white/20 rounded-full text-white hover:bg-brown hover:text-white transition-all transform scale-90 group-hover:scale-100 backdrop-blur-md">
                                        <Github size={20} />
                                    </a>
                                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 border border-white/20 rounded-full text-white hover:bg-brown hover:text-white transition-all transform scale-90 delay-75 group-hover:scale-100 backdrop-blur-md">
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
                                <h3 className="text-2xl font-black text-white mb-3 group-hover:text-brown-light transition-colors">{project.title}</h3>
                                <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6 font-medium line-clamp-2">
                                    {project.description}
                                </p>
                                <button
                                    onClick={() => setSelectedProject(project)}
                                    className="w-full py-3 bg-brown/10 text-brown-light rounded-xl text-sm font-black border border-brown/20 hover:bg-brown hover:text-white transition-all"
                                >
                                    View Details
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
                            <span className="text-brown-light">#</span> Mini Projects
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
                                className="group relative bg-white/5 p-6 rounded-3xl border border-brown/50 hover:border-brown-light hover:shadow-[0_0_20px_rgba(169,132,103,0.2)] transition-all backdrop-blur-md"
                            >
                                <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-5">
                                    <img src={mini.image} alt={mini.title} className="w-full h-full object-cover grayscale-[50%] group-hover:grayscale-0 transition-all duration-500" />
                                </div>
                                <h4 className="text-xl font-black text-white mb-2 group-hover:text-brown-light transition-colors">{mini.title}</h4>
                                <p className="text-slate-400 text-sm mb-6 line-clamp-2 font-medium">{mini.shortDesc}</p>

                                <button
                                    onClick={() => setSelectedProject(mini)}
                                    className="w-full py-3 bg-brown/10 text-brown-light rounded-xl text-sm font-black border border-brown/20 hover:bg-brown hover:text-white transition-all"
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
                            className="bg-gradient-to-br from-brown-dark/20 to-brown-light/20 p-6 rounded-3xl border border-brown/50 flex flex-col items-center justify-center text-center space-y-4 hover:shadow-[0_0_40px_rgba(169,132,103,0.4)] transition-all cursor-pointer group"
                        >
                            <div className="p-4 bg-white/10 rounded-full border border-white/10 group-hover:scale-110 transition-transform">
                                <Trophy className="text-brown-light" size={32} />
                            </div>
                            <div>
                                <h4 className="text-2xl font-black text-white">25+ Projects</h4>
                                <p className="text-slate-200 text-sm font-bold uppercase tracking-widest mt-1">Explored & Built</p>
                            </div>
                            <a
                                href="https://github.com/sachinrawat6264384464"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-brown-light font-black text-sm group-hover:translate-x-1 transition-all"
                            >
                                See Full GitHub <ArrowRight size={16} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/sachin-rawatb"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-brown-light font-black text-sm group-hover:translate-x-1 transition-all"
                            >
                                See LinkedIn <ArrowRight size={16} />
                            </a>
                        </motion.div>
                    </div>
                </div>

                {/* Web Development Section - MOVED & STYLED DIFFERENTLY */}
                <div className="pt-24 border-t border-white/5 mt-24">
                    <div className="flex border-b border-white/10 pb-6 mb-16 items-center justify-between">
                        <div>
                            <motion.h2
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="text-4xl font-black text-white flex items-center gap-3"
                            >
                                <Box className="text-brown-light" /> Web Apps & Dev
                            </motion.h2>
                            <p className="text-slate-400 mt-2 font-medium tracking-wide">Full-stack solutions and responsive web experiences.</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {webProjects.map((project, index) => (
                            <motion.div
                                key={project.title}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group bg-white/5 rounded-3xl overflow-hidden hover:shadow-[0_0_30px_rgba(169,132,103,0.3)] border border-brown/50 hover:border-brown-light transition-all duration-300 backdrop-blur-md"
                            >
                                <div className="relative aspect-video overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-brown/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 backdrop-blur-sm">
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 border border-white/20 rounded-full text-white hover:bg-brown hover:text-white transition-all transform scale-90 group-hover:scale-100 backdrop-blur-md">
                                            <Github size={20} />
                                        </a>
                                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 border border-white/20 rounded-full text-white hover:bg-brown hover:text-white transition-all transform scale-90 delay-75 group-hover:scale-100 backdrop-blur-md">
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
                                    <h3 className="text-2xl font-black text-white mb-3 group-hover:text-brown-light transition-colors">{project.title}</h3>
                                    <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6 font-medium line-clamp-2">
                                        {project.description}
                                    </p>
                                    <button
                                        onClick={() => setSelectedProject(project)}
                                        className="w-full py-3 bg-brown/10 text-brown-light rounded-xl text-sm font-black border border-brown/20 hover:bg-brown hover:text-white transition-all"
                                    >
                                        View Details
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Project Modal Popup */}
            <AnimatePresence>
                {selectedProject && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-5">
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedProject(null)}
                            className="fixed inset-0 bg-black/70 backdrop-blur-md"
                        ></motion.div>

                        {/* Modal Box */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 30 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 30 }}
                            transition={{ type: 'spring', duration: 0.4 }}
                            className="relative w-full max-w-3xl bg-slate-900 border border-white/10 rounded-3xl shadow-[0_0_60px_rgba(0,0,0,0.6)] z-[101] overflow-hidden flex flex-col sm:flex-row max-h-[90vh]"
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-3 right-3 z-20 p-2 bg-black/50 hover:bg-brown/60 text-white rounded-full transition-all backdrop-blur-sm"
                            >
                                <X size={18} />
                            </button>

                            {/* LEFT — Image Panel */}
                            {selectedProject.image && (
                                <div className="w-full sm:w-2/5 h-52 sm:h-auto flex-shrink-0 relative">
                                    <img
                                        src={selectedProject.image}
                                        alt={selectedProject.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-slate-900/60 to-transparent" />
                                </div>
                            )}

                            {/* RIGHT — Scrollable Content */}
                            <div className="flex-1 overflow-y-auto p-5 sm:p-7 flex flex-col">
                                <div className="flex items-center gap-2 text-brown-light mb-2">
                                    <Sparkles size={14} />
                                    <span className="text-[10px] font-black uppercase tracking-[0.2em]">Project Insights</span>
                                </div>

                                <h3 className="text-xl sm:text-2xl font-black text-white mb-4 leading-tight pr-6">
                                    {selectedProject.title}
                                </h3>

                                <div className="space-y-4 mb-5">
                                    <div>
                                        <p className="text-brown-light text-[9px] font-black uppercase tracking-widest mb-1.5 opacity-70">Description</p>
                                        <p className="text-slate-300 text-sm leading-relaxed font-medium">
                                            {selectedProject.fullDetail || selectedProject.description}
                                        </p>
                                    </div>

                                    {selectedProject.performance && (
                                        <div>
                                            <p className="text-brown-light text-[9px] font-black uppercase tracking-widest mb-1.5 opacity-70">Impact & Performance</p>
                                            <p className="text-slate-200 text-sm font-black leading-relaxed italic border-l-2 border-brown pl-3">
                                                &ldquo;{selectedProject.performance}&rdquo;
                                            </p>
                                        </div>
                                    )}
                                </div>

                                {/* Tech Badges */}
                                <div className="flex flex-wrap gap-1.5 mb-5">
                                    {selectedProject.tech.map(t => (
                                        <span key={t} className="px-2.5 py-1 bg-brown/10 text-brown-light rounded-lg text-[11px] font-black border border-brown/20">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                {/* Back Button */}
                                <div className="mt-auto pt-2">
                                    <button
                                        onClick={() => setSelectedProject(null)}
                                        className="w-full py-3 bg-brown text-white rounded-2xl font-black shadow-lg shadow-brown/20 hover:shadow-brown/40 transition-all active:scale-[0.98] text-sm"
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
