import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaPaperPlane, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

const Contact = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/mjgebqbn", { 
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(''), 5000);
    }
  };

  const contactInfo = [
    { icon: <FaMapMarkerAlt />, title: "Location", details: "Khulna, Bangladesh", color: "from-red-200 to-pink-300" },
    { icon: <FaEnvelope />, title: "Email", details: "prorabeya2008@gmail.com", color: "from-blue-200 to-cyan-300" },
    { icon: <FaPhoneAlt />, title: "Phone", details: "+880 1611096577", color: "from-green-200 to-emerald-300" }
  ];

  const socialLinks = [
    { name: 'LinkedIn', icon: <FaLinkedin />, grad: 'from-blue-500 to-blue-500', url: 'https://www.linkedin.com/in/rabeya123/' },
    { name: 'GitHub', icon: <FaGithub />, grad: 'from-gray-400 to-gray-400', url: 'https://github.com/Rabeya-Khatun1' },
    { name: 'WhatsApp', icon: <FaWhatsapp />, grad: 'from-green-400 to-emerald-400', url: 'https://wa.me/8801611096577' },
    { name: 'Email', icon: <SiGmail />, grad: 'from-red-400 to-red-400', url: 'mailto:prorabeya2008@gmail.com' }
  ];

  // Common Input Styles
  const inputStyle = "w-full p-4 bg-white dark:bg-gray-700 border-2 border-transparent focus:border-blue-500 rounded-xl outline-none transition dark:text-white text-gray-900 shadow-sm";

  return (
    <section ref={sectionRef} id="contact" className="relative py-20 px-4 bg-white dark:bg-gray-900 overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">

        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={isInView ? { opacity: 1, y: 0 } : {}} 
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
            Get In <span className="text-blue-600">Touch</span>
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-sm md:text-base">
            I'm available for freelance or full-time projects. Fill out the form or reach me through social links.
          </p>
        </motion.div>

        {/* Contact Info Cards */}
        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((info, i) => (
            <motion.div 
              key={i} 
              whileHover={{ y: -5, scale: 1.02 }} 
              className="bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-700 flex items-center gap-4"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${info.color} text-white flex items-center justify-center text-2xl`}>
                {info.icon}
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">{info.title}</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{info.details}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Form + Sidebar */}
        <div className="grid lg:grid-cols-5 gap-8">
          
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={isInView ? { opacity: 1, y: 0 } : {}} 
            className="lg:col-span-3 bg-gray-50 dark:bg-gray-800 p-8 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-4">
                <input 
                  type="text" name="name" placeholder="Full Name" 
                  value={formData.name} onChange={handleInputChange} required 
                  className={inputStyle}
                />
                <input 
                  type="email" name="email" placeholder="Email Address" 
                  value={formData.email} onChange={handleInputChange} required 
                  className={inputStyle}
                />
              </div>
              <input 
                type="text" name="subject" placeholder="Subject" 
                value={formData.subject} onChange={handleInputChange} required 
                className={inputStyle}
              />
              <textarea 
                name="message" placeholder="Your Message" rows="5" 
                value={formData.message} onChange={handleInputChange} required 
                className={inputStyle}
              />
              
              <button 
                type="submit"
                disabled={isSubmitting} 
                className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition flex justify-center items-center gap-3 shadow-md disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <><FaPaperPlane /> Send Message</>
                )}
              </button>

              {submitStatus === 'success' && (
                <p className="text-green-500 text-center font-medium mt-2">✓ মেসেজটি সফলভাবে আমার কাছে পৌঁছেছে!</p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-500 text-center font-medium mt-2">❌ দুঃখিত, কোথাও ভুল হয়েছে। আবার চেষ্টা করুন।</p>
              )}
            </form>
          </motion.div>

          {/* Sidebar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={isInView ? { opacity: 1, y: 0 } : {}} 
            className="lg:col-span-2 flex flex-col gap-6"
          >
            <div className="bg-gray-900 dark:bg-gray-800 p-6 rounded-3xl text-white shadow-lg">
              <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((s, i) => (
                  <a 
                    key={i} 
                    href={s.url}          
                    target="_blank"     
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 p-3 rounded-xl bg-gradient-to-r ${s.grad} hover:scale-105 transition transform text-white`}
                  >
                    {s.icon} <span className="text-xs font-bold">{s.name}</span>
                  </a>
                ))}
              </div>
            </div>

           <div className="bg-blue-50 dark:bg-gray-700 p-6 rounded-3xl border border-blue-100 dark:border-gray-600 relative">
  <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-center lg:text-left">
    Available for Projects
  </h4>
  <p className="text-sm text-gray-600 dark:text-gray-300 text-center lg:text-left flex items-center justify-center lg:justify-start gap-2">
    <span className="w-3 h-3 bg-green-500 border-2 border-white rounded-full animate-pulse" />
    Response time: 7am - 1am
  </p>
</div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;