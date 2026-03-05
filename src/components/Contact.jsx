import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Linkedin, Github, Twitter, CheckCircle, AlertCircle, MessageSquare, MessageCircle } from 'lucide-react';
import CharacterBanner, { DrStrangeSVG } from './CharacterBanner.jsx';
import CapShieldDecorative from './CapShieldDecorative.jsx';

const Contact = () => {
    const form = useRef();
    const [status, setStatus] = useState({
        sending: false,
        success: false,
        error: false
    });

    const sendEmail = async (e) => {
        e.preventDefault();
        setStatus({ sending: true, success: false, error: false });

        const SERVICE_ID = "service_iv7q3f7";
        const TEMPLATE_ID = "template_qi9az66";
        const PUBLIC_KEY = "a6rcx_3eCgYnLAKpR";

        try {
            const formData = new FormData(form.current);
            const templateParams = {
                from_name: formData.get('from_name'),
                from_email: formData.get('reply_to'), // This is the user's email
                reply_to: formData.get('reply_to'),   // This allows you to click "Reply" in Gmail
                message: formData.get('message')
            };

            const data = {
                service_id: SERVICE_ID,
                template_id: TEMPLATE_ID,
                user_id: PUBLIC_KEY,
                template_params: templateParams
            };

            const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                setStatus({ sending: false, success: true, error: false });
                form.current.reset();
                setTimeout(() => setStatus(prev => ({ ...prev, success: false })), 5000);
            } else {
                const errorText = await response.text();
                throw new Error(errorText || "Failed to send message");
            }
        } catch (error) {
            console.error("EmailJS Error details:", error);
            setStatus({ sending: false, success: false, error: error.message || "Failed to send message" });
            setTimeout(() => setStatus(prev => ({ ...prev, error: false })), 8000);
        }
    };
    return (
        <section id="contact" className="relative py-24 bg-slate-900 overflow-hidden">
            {/* Decorative Stars - High Density */}
            <CapShieldDecorative size={250} className="absolute -top-32 -left-20 opacity-[0.03] rotate-12" />
            <CapShieldDecorative size={120} className="absolute bottom-[20%] -right-10 opacity-[0.04] -rotate-12" />
            <CapShieldDecorative size={180} className="absolute top-[50%] left-[10%] opacity-[0.02] rotate-45" />
            <CapShieldDecorative size={320} className="absolute -bottom-40 right-[15%] opacity-[0.015] -rotate-90" />
            <CapShieldDecorative size={100} className="absolute top-[10%] right-[40%] opacity-[0.03]" />
            <CapShieldDecorative size={140} className="absolute bottom-[10%] left-[40%] opacity-[0.02] rotate-180" />
            <CapShieldDecorative size={80} className="absolute top-[25%] left-[45%] opacity-[0.04] rotate-12" />
            <CapShieldDecorative size={210} className="absolute bottom-[40%] right-[5%] opacity-[0.01] rotate-45" />
            <CapShieldDecorative size={60} className="absolute top-[60%] right-[25%] opacity-[0.05]" />
            <CapShieldDecorative size={160} className="absolute -top-10 left-[40%] opacity-[0.01]" />
            {/* Added 10 more for extreme density */}
            <CapShieldDecorative size={280} className="absolute -top-10 right-[-10%] opacity-[0.01] rotate-12" />
            <CapShieldDecorative size={75} className="absolute bottom-[15%] left-[5%] opacity-[0.035] -rotate-90" />
            <CapShieldDecorative size={135} className="absolute top-[40%] right-[35%] opacity-[0.02] rotate-180" />
            <CapShieldDecorative size={45} className="absolute bottom-[5%] left-[25%] opacity-[0.045]" />
            <CapShieldDecorative size={340} className="absolute bottom-[10%] left-[-15%] opacity-[0.008] rotate-45" />
            <CapShieldDecorative size={115} className="absolute top-[20%] left-[60%] opacity-[0.025]" />
            <CapShieldDecorative size={95} className="absolute bottom-[30%] right-[15%] opacity-[0.03] rotate-12" />
            <CapShieldDecorative size={175} className="absolute top-[5%] right-[50%] opacity-[0.015] -rotate-45" />
            <CapShieldDecorative size={65} className="absolute bottom-[50%] left-[45%] opacity-[0.04] rotate-180" />
            <CapShieldDecorative size={195} className="absolute top-[75%] right-[10%] opacity-[0.01] rotate-90" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl font-black text-white md:text-5xl"
                    >
                        {/* Avengers Character Banner */}
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
                            <CharacterBanner
                                name="Doctor Strange"
                                alias="Stephen Strange"
                                quote="We're in the endgame now — reach out and let's build something extraordinary."
                                color="#F97316"
                                icon={DrStrangeSVG}
                                align="right"
                            />
                        </div>
                        Get In Touch
                    </motion.h2>
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "80px" }}
                        viewport={{ once: true }}
                        className="h-1.5 bg-orange-600 mx-auto mt-4 rounded-full"
                    ></motion.div>
                    <p className="mt-4 text-slate-300 text-base lg:text-lg max-w-2xl mx-auto font-medium">
                        Have a project in mind or want to chat about AI? Feel free to reach out. I'm always open to new opportunities.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-12"
                    >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {[
                                { icon: <Mail className="text-orange-500" />, label: 'Email', value: 'sachinrawat6264384464@gmail.com', href: 'mailto:sachinrawat6264384464@gmail.com' },
                                { icon: <Phone className="text-orange-500" />, label: 'Phone', value: '+91 6264384464', href: 'tel:+916264384464' },
                                { icon: <MapPin className="text-orange-500" />, label: 'Location', value: 'Bhopal, MP, India', href: '#' },
                                { icon: <Linkedin className="text-orange-500" />, label: 'LinkedIn', value: 'Sachin Rawat', href: 'https://www.linkedin.com/in/sachin-rawatb/' }
                            ].map((item, idx) => (
                                <a
                                    key={idx}
                                    href={item.href}
                                    className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-orange-500/50 hover:shadow-[0_0_20px_rgba(249,115,22,0.15)] transition-all group backdrop-blur-md"
                                >
                                    <div className="p-3 rounded-2xl bg-orange-500/10 w-fit mb-4 group-hover:scale-110 transition-transform">
                                        {item.icon}
                                    </div>
                                    <p className="text-slate-400 text-xs font-black uppercase tracking-widest mb-1">{item.label}</p>
                                    <p className="text-white font-bold text-sm break-words">{item.value}</p>
                                </a>
                            ))}
                        </div>

                        <div className="flex gap-4 p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md">
                            {[
                                { icon: <Github size={24} />, href: 'https://github.com/sachinrawat6264384464', color: 'hover:text-white hover:bg-slate-800' },
                                { icon: <Linkedin size={24} />, href: 'https://www.linkedin.com/in/sachin-rawatb/', color: 'hover:text-white hover:bg-blue-600' }
                            ].map((social, idx) => (
                                <a
                                    key={idx}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`p-4 rounded-2xl bg-white/5 text-slate-400 border border-white/10 transition-all ${social.color} hover:border-transparent hover:-translate-y-1 shadow-lg`}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <form ref={form} onSubmit={sendEmail} className="p-8 sm:p-10 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-xl space-y-6 shadow-2xl relative overflow-hidden">
                            {/* Success Overlay */}
                            {status.success && (
                                <motion.div
                                    initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
                                    animate={{ opacity: 1, backdropFilter: "blur(10px)" }}
                                    className="absolute inset-0 bg-slate-900/60 z-20 flex flex-col items-center justify-center text-center p-6"
                                >
                                    <motion.div
                                        initial={{ scale: 0.5, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-4 border border-green-500/50"
                                    >
                                        <CheckCircle className="text-green-500" size={40} />
                                    </motion.div>
                                    <h3 className="text-2xl font-black text-white mb-2">Message Sent!</h3>
                                    <p className="text-slate-300 font-medium">Thank you for reaching out. I'll get back to you soon.</p>
                                </motion.div>
                            )}

                            {/* Error Message */}
                            {status.error && (
                                <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-2xl flex items-center gap-3 text-red-500 font-bold overflow-hidden">
                                    <AlertCircle size={20} className="flex-shrink-0" />
                                    <span className="text-sm">Error: {status.error}</span>
                                </div>
                            )}

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Your Name</label>
                                    <input
                                        type="text"
                                        name="from_name"
                                        required
                                        className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500/50 transition-all font-medium"
                                        placeholder="Tony Stark"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Email Address</label>
                                    <input
                                        type="email"
                                        name="reply_to"
                                        required
                                        className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500/50 transition-all font-medium"
                                        placeholder="tony@stark.com"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Message</label>
                                <textarea
                                    name="message"
                                    required
                                    rows="4"
                                    className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500/50 transition-all font-medium resize-none"
                                    placeholder="I am iron man..."
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                disabled={status.sending}
                                className="w-full py-5 bg-orange-600 hover:bg-orange-500 text-white rounded-2xl font-black uppercase tracking-widest transition-all shadow-lg shadow-orange-600/20 active:scale-[0.98] flex items-center justify-center gap-3 disabled:opacity-70"
                            >
                                {status.sending ? (
                                    "Sending..."
                                ) : (
                                    <>
                                        Send Message <Send size={20} />
                                    </>
                                )}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
