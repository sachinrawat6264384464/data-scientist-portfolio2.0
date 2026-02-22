import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Linkedin, Github, Twitter, CheckCircle, AlertCircle } from 'lucide-react';

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
                        className="h-1.5 bg-brown mx-auto mt-4 rounded-full"
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
                        <div className="bg-white/5 p-8 rounded-3xl shadow-2xl border border-brown/50 backdrop-blur-md">
                            <h3 className="text-xl font-black text-white mb-8">Contact Information</h3>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-white/5 rounded-xl text-brown-light shadow-inner border border-white/10">
                                        <Mail size={24} />
                                    </div>
                                    <div className="flex flex-col gap-1 min-w-0">
                                        <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">Email</p>
                                        <p className="text-white text-base sm:text-lg font-black break-all">sachinrawat6264384464@gmail.com</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-white/5 rounded-xl text-brown-light shadow-inner border border-white/10">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">Phone</p>
                                        <p className="text-white text-base sm:text-lg font-black">+91 6264384464</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-white/5 rounded-xl text-brown-light shadow-inner border border-white/10">
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
                                    <a href="https://www.linkedin.com/in/sachin-rawatb/" className="p-3 rounded-xl bg-white/5 text-slate-400 hover:bg-brown hover:text-white transition-all shadow-lg border border-white/10 hover:border-brown hover:shadow-[0_0_20px_rgba(169,132,103,0.4)]">
                                        <Linkedin size={20} />
                                    </a>
                                    <a href="https://github.com/sachinrawat6264384464" className="p-3 rounded-xl bg-white/5 text-slate-400 hover:bg-brown hover:text-white transition-all shadow-lg border border-white/10 hover:border-brown hover:shadow-[0_0_20px_rgba(169,132,103,0.4)]">
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
                        <form ref={form} onSubmit={sendEmail} className="bg-white/5 p-10 rounded-3xl shadow-2xl border border-brown/50 backdrop-blur-md relative overflow-hidden">
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
                                <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-2xl flex items-center gap-3 text-red-500 font-bold overflow-hidden">
                                    <AlertCircle size={20} className="flex-shrink-0" />
                                    <span className="text-sm">Error: {status.error}</span>
                                </div>
                            )}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div className="space-y-2">
                                    <label className="text-base font-black text-white ml-1">Full Name</label>
                                    <input
                                        type="text"
                                        name="from_name"
                                        placeholder="Enter your name"
                                        required
                                        className="w-full px-5 py-4 bg-white/5 border border-brown/30 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brown/20 focus:bg-white/10 text-white transition-all font-medium"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-base font-black text-white ml-1">Email Address</label>
                                    <input
                                        type="email"
                                        name="reply_to"
                                        placeholder="Enter your email"
                                        required
                                        className="w-full px-5 py-4 bg-white/5 border border-brown/30 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brown/20 focus:bg-white/10 text-white transition-all font-medium"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2 mb-8">
                                <label className="text-base font-black text-white ml-1">Message</label>
                                <textarea
                                    rows="5"
                                    name="message"
                                    placeholder="How can I help you?"
                                    required
                                    className="w-full px-5 py-4 bg-white/5 border border-brown/30 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brown/20 focus:bg-white/10 text-white transition-all resize-none font-medium"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                disabled={status.sending}
                                className={`w-full md:w-auto px-10 py-4 bg-brown text-white rounded-2xl font-black flex items-center justify-center gap-2 transition-all hover:-translate-y-1 ${status.sending ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-[0_0_20px_rgba(169,132,103,0.4)]'}`}
                            >
                                {status.sending ? 'Sending...' : 'Send Message'} <Send size={20} className={status.sending ? 'animate-pulse' : ''} />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
