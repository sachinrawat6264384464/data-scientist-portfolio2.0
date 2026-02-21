import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Linkedin, Github, Twitter } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl font-black text-white md:text-5xl"
                    >
                        Get In Touch
                    </motion.h2>
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "80px" }}
                        viewport={{ once: true }}
                        className="h-1.5 bg-neon mx-auto mt-4 rounded-full"
                    ></motion.div>
                    <p className="mt-4 text-slate-300 text-base lg:text-lg max-w-2xl mx-auto font-medium">
                        Have a project in mind or want to chat about AI? Feel free to reach out. I'm always open to new opportunities.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="bg-white/5 p-8 rounded-3xl shadow-2xl border border-white/10 backdrop-blur-md">
                            <h3 className="text-xl font-black text-white mb-8">Contact Information</h3>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-white/5 rounded-xl text-accent shadow-inner border border-white/10">
                                        <Mail size={24} />
                                    </div>
                                    <div className="flex flex-col gap-1 min-w-0">
                                        <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">Email</p>
                                        <p className="text-white text-base sm:text-lg font-black break-all">sachinrawat6264384464@gmail.com</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-white/5 rounded-xl text-accent shadow-inner border border-white/10">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">Phone</p>
                                        <p className="text-white text-base sm:text-lg font-black">+91 6264384464</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-white/5 rounded-xl text-accent shadow-inner border border-white/10">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">Location</p>
                                        <p className="text-white text-base sm:text-lg font-black">indore,madhya pradesh</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-12 pt-8 border-t border-white/10">
                                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6 text-center">Follow Me</p>
                                <div className="flex justify-center gap-4">
                                    <a href="https://www.linkedin.com/in/sachin-rawatb/" className="p-3 rounded-xl bg-white/5 text-slate-400 hover:bg-light-purple hover:text-slate-900 transition-all shadow-lg border border-white/10 hover:border-light-purple hover:shadow-[0_0_20px_rgba(155,124,255,0.4)]">
                                        <Linkedin size={20} />
                                    </a>
                                    <a href="https://github.com/sachinrawat6264384464" className="p-3 rounded-xl bg-white/5 text-slate-400 hover:bg-light-purple hover:text-slate-900 transition-all shadow-lg border border-white/10 hover:border-light-purple hover:shadow-[0_0_20px_rgba(155,124,255,0.4)]">
                                        <Github size={20} />
                                    </a>

                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-2"
                    >
                        <form className="bg-white/5 p-10 rounded-3xl shadow-2xl border border-white/10 backdrop-blur-md">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div className="space-y-2">
                                    <label className="text-base font-black text-white ml-1">Full Name</label>
                                    <input
                                        type="text"
                                        placeholder="Enter your name"
                                        className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-light-purple/20 focus:bg-white/10 text-white transition-all font-medium"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-base font-black text-white ml-1">Email Address</label>
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-light-purple/20 focus:bg-white/10 text-white transition-all font-medium"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2 mb-8">
                                <label className="text-base font-black text-white ml-1">Message</label>
                                <textarea
                                    rows="5"
                                    placeholder="How can I help you?"
                                    className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-light-purple/20 focus:bg-white/10 text-white transition-all resize-none font-medium"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full md:w-auto px-10 py-4 bg-neon text-slate-900 rounded-2xl font-black flex items-center justify-center gap-2 transition-all hover:-translate-y-1"
                            >
                                Send Message <Send size={20} />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
