import React, { useState, useEffect } from 'react';
import { Menu, X, Shield, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isProjectsOpen, setIsProjectsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const menuItems = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Experience', href: '#experience' },
        {
            name: 'Projects',
            href: '#projects',
            dropdown: [
                { name: 'Machine Learning', href: '#ml-projects' },
                { name: 'NLP Projects', href: '#nlp-projects' },
                { name: 'Web Projects', href: '#web-projects' },
            ]
        },
        { name: 'Certificates', href: '#certificates' },
        { name: 'Education', href: '#education' },
        { name: 'Extra', href: '#extracurricular' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-3 shadow-[0_0_20px_rgba(239,68,68,0.3)]' : 'bg-transparent py-5'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2 group cursor-pointer">
                        <Shield className="h-8 w-8 text-red-600 neon-glow group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(239,68,68,0.5)]" />
                        <span className="text-2xl font-black text-white tracking-tight group-hover:text-red-500 transition-colors">DataScientist</span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8 items-center">
                        {menuItems.map((item) => (
                            item.dropdown ? (
                                <div
                                    key={item.name}
                                    className="relative"
                                    onMouseEnter={() => setIsProjectsOpen(true)}
                                    onMouseLeave={() => setIsProjectsOpen(false)}
                                >
                                    <button
                                        onClick={() => setIsProjectsOpen(!isProjectsOpen)}
                                        className="flex items-center gap-1 text-sm font-bold text-slate-300 hover:text-red-500 font-black tracking-wide transition-colors group"
                                    >
                                        {item.name}
                                        <ChevronDown size={14} className={`transition-transform duration-200 ${isProjectsOpen ? 'rotate-180' : ''}`} />
                                    </button>

                                    <AnimatePresence>
                                        {isProjectsOpen && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                                transition={{ duration: 0.2 }}
                                                className="absolute top-full left-0 mt-2 w-56 bg-slate-900/95 backdrop-blur-xl border border-white/10 rounded-2xl p-2 shadow-[0_10px_40px_rgba(0,0,0,0.5)] z-50"
                                            >
                                                {item.dropdown.map((sub) => (
                                                    <a
                                                        key={sub.name}
                                                        href={sub.href}
                                                        className="block px-4 py-2 text-sm font-bold text-slate-300 hover:text-red-500 hover:bg-white/5 rounded-xl transition-all"
                                                    >
                                                        {sub.name}
                                                    </a>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ) : (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="text-sm font-bold text-slate-300 hover:text-red-500 font-black tracking-wide transition-colors"
                                >
                                    {item.name}
                                </a>
                            )
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-white p-2 focus:outline-none hover:text-red-500 transition-colors"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden glass animate-in fade-in slide-in-from-top-4 duration-200">
                    <div className="px-4 pt-2 pb-6 space-y-1 bg-slate-900/95 backdrop-blur-xl border-b border-white/5">
                        {menuItems.map((item) => (
                            <div key={item.name}>
                                {item.dropdown ? (
                                    <>
                                        <button
                                            onClick={() => setIsProjectsOpen(!isProjectsOpen)}
                                            className="w-full flex justify-between items-center px-3 py-3 text-lg font-black text-slate-200 hover:text-red-500 hover:bg-white/5 rounded-xl transition-all"
                                        >
                                            {item.name}
                                            <ChevronDown size={20} className={`transition-transform duration-200 ${isProjectsOpen ? 'rotate-180' : ''}`} />
                                        </button>
                                        <AnimatePresence>
                                            {isProjectsOpen && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: 'auto', opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    className="overflow-hidden bg-white/5 rounded-xl mt-1 ml-3"
                                                >
                                                    {item.dropdown.map((sub) => (
                                                        <a
                                                            key={sub.name}
                                                            href={sub.href}
                                                            onClick={() => {
                                                                setIsOpen(false);
                                                                setIsProjectsOpen(false);
                                                            }}
                                                            className="block px-6 py-3 text-base font-bold text-slate-300 hover:text-red-500 transition-all border-l-2 border-red-600/20"
                                                        >
                                                            {sub.name}
                                                        </a>
                                                    ))}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </>
                                ) : (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        onClick={() => setIsOpen(false)}
                                        className="block px-3 py-3 text-lg font-black text-slate-200 hover:text-red-500 hover:bg-white/5 rounded-xl transition-all"
                                    >
                                        {item.name}
                                    </a>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
