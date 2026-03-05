import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Music, Users, Globe, BookOpen, Camera } from 'lucide-react';
import CharacterBanner, { SpiderManSVG } from './CharacterBanner.jsx';
import CapShieldDecorative from './CapShieldDecorative.jsx';

const Extracurricular = () => {
    const activities = [
        {
            id: 1,
            title: 'Volunteer in Carrier Development Cell',
            category: 'Department of Training and Placement',
            description: 'Organized and coordinated various events, workshops, and activities to support student career development and placement preparation.',
            icon: <Users className="w-6 h-6" />,
            color: 'blue',
            tags: ['Networking', 'Tech Talks', 'Team Work', 'Communication Skills'],
        },
        {
            id: 2,
            title: 'Online Learning',
            category: 'Learning',
            description: 'Consistently pursuing online courses and self-study on platforms like Coursera, Kaggle, and YouTube to expand knowledge horizons .',
            icon: <BookOpen className="w-6 h-6" />,
            color: 'emerald',
            tags: ['Coursera', 'Kaggle', 'Self-Study', 'YouTube', 'IBM', 'AWS'],
        },
        {
            id: 3,
            title: 'web Team Member',
            category: 'ACM(Club)-AITR CHAPTER (INDORE)',
            description: 'Actively participating many events  and hackathons ,Organized and coordinated various events, workshops, and activities skills and gain exposure.',
            icon: <Users className="w-6 h-6" />,
            color: 'amber',
            tags: ['Meetups', 'Team Management', 'website Management', 'ACM CLUB'],
        },
        {
            id: 4,
            title: 'SoftWare Team Member',
            category: 'CSI(Club)-AITR (INDORE)',
            description: 'Actively participating many events  and hackathons ,Organized and coordinated various events, workshops, and activities skills and gain exposure.',
            icon: <Users className="w-6 h-6" />,
            color: 'cyan',
            tags: ['Meetups', 'Team Management', 'Software Work Management', 'CSI CLUB'],
        },
        {
            id: 5,
            title: 'Technical Team Member',
            category: 'DCC(Club)-AITR (INDORE)',
            description: 'Actively participating many events  and hackathons ,Organized and coordinated various events, workshops, and activities skills and gain exposure.',
            icon: <Users className="w-6 h-6" />,
            color: 'pink',
            tags: ['communication Skills', 'Meetups', 'Team Management', 'Technical Work Management'],
        },
    ];


    const colorMap = {
        blue: {
            border: 'border-blue-500/30 hover:border-blue-400/60',
            icon: 'bg-blue-500/10 border-blue-500/20 text-blue-400',
            badge: 'bg-blue-500/10 text-blue-300 border-blue-500/20',
            shadow: 'hover:shadow-blue-500/10',
        },
        emerald: {
            border: 'border-emerald-500/30 hover:border-emerald-400/60',
            icon: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400',
            badge: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',
            shadow: 'hover:shadow-emerald-500/10',
        },
        amber: {
            border: 'border-amber-500/30 hover:border-amber-400/60',
            icon: 'bg-amber-500/10 border-amber-500/20 text-amber-400',
            badge: 'bg-amber-500/10 text-amber-300 border-amber-500/20',
            shadow: 'hover:shadow-amber-500/10',
        },
        violet: {
            border: 'border-violet-500/30 hover:border-violet-400/60',
            icon: 'bg-violet-500/10 border-violet-500/20 text-violet-400',
            badge: 'bg-violet-500/10 text-violet-300 border-violet-500/20',
            shadow: 'hover:shadow-violet-500/10',
        },
        pink: {
            border: 'border-pink-500/30 hover:border-pink-400/60',
            icon: 'bg-pink-500/10 border-pink-500/20 text-pink-400',
            badge: 'bg-pink-500/10 text-pink-300 border-pink-500/20',
            shadow: 'hover:shadow-pink-500/10',
        },
        cyan: {
            border: 'border-cyan-500/30 hover:border-cyan-400/60',
            icon: 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400',
            badge: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20',
            shadow: 'hover:shadow-cyan-500/10',
        },
    };

    return (
        <section id="extracurricular" className="relative py-24 bg-slate-900 overflow-hidden">
            {/* Decorative Stars - High Density */}
            <CapShieldDecorative size={220} className="absolute -top-20 -right-20 opacity-[0.03] rotate-45" />
            <CapShieldDecorative size={140} className="absolute bottom-[10%] left-[5%] opacity-[0.04] -rotate-12" />
            <CapShieldDecorative size={160} className="absolute top-[40%] right-[10%] opacity-[0.02] rotate-12" />
            <CapShieldDecorative size={300} className="absolute top-[10%] -left-32 opacity-[0.015] -rotate-45" />
            <CapShieldDecorative size={90} className="absolute bottom-[20%] right-[5%] opacity-[0.03] rotate-180" />
            <CapShieldDecorative size={120} className="absolute top-[60%] left-[15%] opacity-[0.02] rotate-90" />
            <CapShieldDecorative size={60} className="absolute top-[15%] right-[30%] opacity-[0.04]" />
            <CapShieldDecorative size={180} className="absolute -bottom-10 right-[25%] opacity-[0.01] rotate-12" />
            <CapShieldDecorative size={50} className="absolute top-[35%] left-[45%] opacity-[0.05]" />
            <CapShieldDecorative size={110} className="absolute bottom-[35%] right-[40%] opacity-[0.015]" />
            {/* Added 10 more for extreme density */}
            <CapShieldDecorative size={240} className="absolute bottom-[-15%] -right-10 opacity-[0.01] rotate-90" />
            <CapShieldDecorative size={70} className="absolute top-[5%] left-[35%] opacity-[0.03]" />
            <CapShieldDecorative size={130} className="absolute bottom-[5%] left-[50%] opacity-[0.02] rotate-180" />
            <CapShieldDecorative size={40} className="absolute top-[55%] right-[40%] opacity-[0.045]" />
            <CapShieldDecorative size={350} className="absolute top-[30%] left-[-15%] opacity-[0.008] -rotate-12" />
            <CapShieldDecorative size={105} className="absolute bottom-[45%] left-[25%] opacity-[0.02]" />
            <CapShieldDecorative size={85} className="absolute top-[25%] right-[15%] opacity-[0.035] rotate-45" />
            <CapShieldDecorative size={165} className="absolute top-[5%] right-[60%] opacity-[0.01] -rotate-90" />
            <CapShieldDecorative size={55} className="absolute bottom-[60%] left-[5%] opacity-[0.05] rotate-12" />
            <CapShieldDecorative size={205} className="absolute top-[50%] right-[3%] opacity-[0.01] rotate-180" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Header */}
                <div className="text-center mb-14">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl font-black text-white md:text-5xl"
                    >
                        {/* Avengers Character Banner */}
                        <div className="mt-8">
                            <CharacterBanner
                                name="Spider-Man"
                                alias="Peter Parker"
                                quote="With great power comes great responsibility — and even greater curiosity."
                                color="#EF4444"
                                icon={SpiderManSVG}
                                align="left"
                            />
                        </div>
                        Extracurricular
                    </motion.h2>
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "80px" }}
                        viewport={{ once: true }}
                        className="h-1.5 bg-red-600 mx-auto mt-4 rounded-full"
                    ></motion.div>
                    <p className="mt-4 text-slate-400 text-base font-medium max-w-xl mx-auto">
                        Beyond code — activities that fuel my curiosity, creativity, and growth.
                    </p>
                </div>

                {/* Activity Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {activities.map((activity, index) => {
                        const c = colorMap[activity.color] || colorMap.blue;
                        return (
                            <motion.div
                                key={activity.id}
                                initial={{ opacity: 0, y: 25 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.08 }}
                                className={`bg-white/[0.03] rounded-2xl border ${c.border} hover:shadow-lg ${c.shadow} transition-all duration-300 hover:-translate-y-1 group backdrop-blur-md p-5`}
                            >
                                {/* Icon + Category */}
                                <div className="flex items-center gap-3 mb-4">
                                    <div className={`p-2.5 rounded-xl border ${c.icon} flex-shrink-0`}>
                                        {activity.icon}
                                    </div>
                                    <span className={`text-[10px] font-black uppercase tracking-[0.2em] px-2 py-0.5 rounded-full border ${c.badge}`}>
                                        {activity.category}
                                    </span>
                                </div>

                                {/* Title */}
                                <h3 className="text-base font-black text-white mb-2 leading-tight">
                                    {activity.title}
                                </h3>

                                {/* Description */}
                                <p className="text-slate-400 text-sm leading-relaxed mb-4 font-medium">
                                    {activity.description}
                                </p>

                                {/* Tags */}
                                {activity.tags.length > 0 && (
                                    <div className="flex flex-wrap gap-1.5">
                                        {activity.tags.map((tag) => (
                                            <span key={tag} className={`px-2 py-0.5 rounded-md text-xs font-bold border ${c.badge}`}>
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </motion.div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};

export default Extracurricular;
