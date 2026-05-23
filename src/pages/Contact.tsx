import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, Phone, MapPin, Send, 
  ChevronRight, Globe, Github, Linkedin, 
  Sparkles, CheckCircle, Clock, 
  ArrowRight
} from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from 'react-router-dom';

const contactSchema = z.object({
  name: z.string().trim().min(1, 'Name is required').max(100, 'Name is too long'),
  email: z.string().trim().email('Invalid email address').max(255, 'Email is too long'),
  phone: z.string().trim().min(1, 'Phone number is required'),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().trim().min(1, 'Message is required').max(1000, 'Message is too long'),
});

type FormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', phone: '', service: '', message: '' });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactDetails = [
    { 
      icon: Phone, 
      label: 'Phone Number', 
      value: '+91 8341305025', 
      href: 'tel:+918341305025' 
    },
    { 
      icon: Mail, 
      label: 'Email Address', 
      value: 'gowthamkollati05@protonmail.com\ngowthamaha05@gmail.com', 
      href: ['mailto:gowthamkollati05@protonmail.com', 'mailto:gowthamaha05@gmail.com']
    },
    { 
      icon: Clock, 
      label: 'Opening Hour', 
      value: 'Mon — Fri: 9:00 AM — 6:00 PM', 
      href: null 
    },
    { 
      icon: MapPin, 
      label: 'Our Location', 
      value: '4-9-009, Kamisetty Street, Yanam\nPuducherry - 522464',
      href: 'https://maps.app.goo.gl/7C83cGUxNrspcnnm6' 
    },
  ];

  const services = [
    'Web Development',
    'Mobile App Development',
    'Blockchain Solutions',
    'UI/UX Design',
    'Cloud Architecture',
    'Other Inquiry'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    try {
      contactSchema.parse(formData);
      
      const subject = encodeURIComponent(`New Inquiry: ${formData.service} from ${formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nService: ${formData.service}\n\nMessage:\n${formData.message}`
      );
      
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      window.location.href = `mailto:gowthamkollati05@protonmail.com?subject=${subject}&body=${body}`;
      
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Partial<FormData> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as keyof FormData] = err.message;
          }
        });
        setErrors(fieldErrors);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const cornerStickers = [
    { id: 'contact', label: 'Contact', icon: Mail, ariaLabel: 'Jump to Contact section' },
  ];

  return (
    <Layout>
      <div className="bg-white min-h-screen relative overflow-hidden font-sans selection:bg-primary/10 selection:text-primary">
        {/* Header Section with Gradient Background */}
        <section className="relative pt-16 sm:pt-24 pb-8 sm:pb-12 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
          <div className="container-custom relative z-10 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-6xl md:text-7xl font-black font-heading text-foreground mb-4 sm:mb-6 tracking-tighter"
            >
              Contact Us
            </motion.h1>
            
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center justify-center gap-2 sm:gap-3 text-[10px] sm:text-sm font-bold uppercase tracking-widest text-muted-foreground"
            >
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <ChevronRight size={14} className="text-primary" />
              <span className="text-primary">Contact Us</span>
            </motion.div>
          </div>
        </section>

        {/* Info & Form Section */}
        <section className="pb-10 sm:pb-16 container-custom">
          <div className="grid lg:grid-cols-12 gap-8 sm:gap-12 items-start max-w-7xl mx-auto">
            
            {/* Left: Contact Information Card */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-4 bg-white border border-gray-100 rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.03)]"
            >
              <h3 className="text-xl sm:text-2xl font-black font-heading text-foreground mb-4 sm:mb-6 tracking-tighter uppercase">Contact Information</h3>
              <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-8 sm:mb-10 font-medium">
                Have questions or need help with your digital project? My team is always ready to assist you with professional solutions and reliable support.
              </p>

              <div className="space-y-6 sm:space-y-8">
                {contactDetails.map((detail, idx) => (
                  <div key={detail.label} className="group">
                    <div className="flex items-center gap-4 sm:gap-5">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm flex-shrink-0">
                        <detail.icon size={18} className="sm:w-5 sm:h-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[8px] sm:text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em] mb-1">{detail.label}</p>
                        {detail.href ? (
                          <div className="flex flex-col gap-1">
                            {detail.value.split('\n').map((line, i) => (
                              <a 
                                key={i}
                                href={Array.isArray(detail.href) ? detail.href[i] : detail.href} 
                                className="text-xs sm:text-sm font-bold text-foreground hover:text-primary transition-colors block leading-tight break-words"
                              >
                                {line}
                              </a>
                            ))}
                          </div>
                        ) : (
                          <p className="text-xs sm:text-sm font-bold text-foreground whitespace-pre-line leading-tight">{detail.value}</p>
                        )}
                      </div>
                    </div>
                    {idx < contactDetails.length - 1 && (
                      <div className="h-[1px] w-full bg-gray-50 mt-6 sm:mt-8" />
                    )}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right: Contact Form Card */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-8 bg-white border border-gray-100 rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 md:p-14 shadow-[0_20px_80px_rgba(0,0,0,0.05)] relative overflow-hidden"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-primary/5 rounded-full text-primary text-[8px] sm:text-[10px] font-black uppercase tracking-widest mb-6 sm:mb-8">
                <Sparkles size={12} className="text-primary" />
                Get In Touch
              </div>

              <h2 className="text-3xl sm:text-4xl font-black font-heading text-foreground mb-3 sm:mb-4 tracking-tighter uppercase">Get In Touch</h2>
              <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-8 sm:mb-12 max-w-2xl font-medium">
                We would love to hear about your project and help you grow your business online. Fill out the contact form and our team will get back to you soon with the best possible solution for your needs.
              </p>

              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="py-10 sm:py-12 text-center"
                  >
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6 sm:mb-8 shadow-lg shadow-green-100">
                      <CheckCircle size={32} className="sm:w-10 sm:h-10" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-black font-heading text-foreground mb-3 sm:mb-4 tracking-tighter uppercase">Success!</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground font-medium mb-8 sm:mb-10 max-w-xs mx-auto">
                      Your message has been sent successfully. I will get back to you shortly.
                    </p>
                    <button
                      onClick="{() => setIsSubmitted(false)}"
                      className="px-8 sm:px-12 py-4 sm:py-5 bg-primary text-white rounded-xl sm:rounded-2xl font-black text-[10px] sm:text-xs uppercase tracking-widest hover:bg-primary/90 transition-all duration-300 shadow-xl shadow-primary/20"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                      {/* Name */}
                      <div className="space-y-1.5 sm:space-y-2">
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Name"
                          className={`w-full bg-gray-50 border-2 ${errors.name ? 'border-red-100' : 'border-transparent'} focus:border-primary/20 focus:bg-white rounded-xl sm:rounded-2xl px-5 sm:px-6 py-3 sm:py-4 text-foreground focus:outline-none transition-all duration-300 font-bold text-xs sm:text-sm placeholder:text-gray-300 placeholder:font-normal`}
                        />
                        {errors.name && <p className="text-[9px] sm:text-[10px] text-red-500 font-bold ml-1">{errors.name}</p>}
                      </div>
                      
                      {/* Email */}
                      <div className="space-y-1.5 sm:space-y-2">
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Email Address"
                          className={`w-full bg-gray-50 border-2 ${errors.email ? 'border-red-100' : 'border-transparent'} focus:border-primary/20 focus:bg-white rounded-xl sm:rounded-2xl px-5 sm:px-6 py-3 sm:py-4 text-foreground focus:outline-none transition-all duration-300 font-bold text-xs sm:text-sm placeholder:text-gray-300 placeholder:font-normal`}
                        />
                        {errors.email && <p className="text-[9px] sm:text-[10px] text-red-500 font-bold ml-1">{errors.email}</p>}
                      </div>

                      {/* Phone */}
                      <div className="space-y-1.5 sm:space-y-2">
                        <input
                          type="text"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Phone Number"
                          className={`w-full bg-gray-50 border-2 ${errors.phone ? 'border-red-100' : 'border-transparent'} focus:border-primary/20 focus:bg-white rounded-xl sm:rounded-2xl px-5 sm:px-6 py-3 sm:py-4 text-foreground focus:outline-none transition-all duration-300 font-bold text-xs sm:text-sm placeholder:text-gray-300 placeholder:font-normal`}
                        />
                        {errors.phone && <p className="text-[9px] sm:text-[10px] text-red-500 font-bold ml-1">{errors.phone}</p>}
                      </div>

                      {/* Service Selection */}
                      <div className="space-y-1.5 sm:space-y-2">
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className={`w-full bg-gray-50 border-2 ${errors.service ? 'border-red-100' : 'border-transparent'} focus:border-primary/20 focus:bg-white rounded-xl sm:rounded-2xl px-5 sm:px-6 py-3 sm:py-4 text-foreground focus:outline-none transition-all duration-300 font-bold text-xs sm:text-sm appearance-none cursor-pointer ${formData.service === '' ? 'text-gray-300 font-normal' : 'text-foreground font-bold'}`}
                        >
                          <option value="" disabled>Service You're Interested</option>
                          {services.map(service => (
                            <option key={service} value={service} className="text-foreground font-bold">{service}</option>
                          ))}
                        </select>
                        {errors.service && <p className="text-[9px] sm:text-[10px] text-red-500 font-bold ml-1">{errors.service}</p>}
                      </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-1.5 sm:space-y-2">
                      <textarea
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Message"
                        className={`w-full bg-gray-50 border-2 ${errors.message ? 'border-red-100' : 'border-transparent'} focus:border-primary/20 focus:bg-white rounded-2xl sm:rounded-[2rem] px-5 sm:px-6 py-4 sm:py-5 text-foreground focus:outline-none transition-all duration-300 font-bold text-xs sm:text-sm resize-none placeholder:text-gray-300 placeholder:font-normal`}
                      />
                      {errors.message && <p className="text-[9px] sm:text-[10px] text-red-500 font-bold ml-1">{errors.message}</p>}
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center gap-3 sm:gap-4 px-8 sm:px-10 py-4 sm:py-5 bg-primary text-white rounded-xl sm:rounded-2xl font-black text-[10px] sm:text-xs uppercase tracking-[0.2em] shadow-xl shadow-primary/20 hover:bg-primary/90 transition-all duration-500 group w-full sm:w-auto justify-center"
                    >
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          Send Message
                          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </motion.button>
                  </form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        {/* Location Section */}
        <section className="pb-20 container-custom">
          <div className="max-w-7xl mx-auto text-center mb-10">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-full text-primary text-[10px] font-black uppercase tracking-widest mb-6"
            >
              <Sparkles size={12} className="text-primary" />
              Service Area
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-2xl sm:text-4xl md:text-5xl font-black font-heading text-foreground mb-4 tracking-tighter uppercase leading-[1.1] max-w-3xl mx-auto"
            >
              Available for Global Collaborations and Remote Meetings
            </motion.h2>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full h-[360px] sm:h-[460px] md:h-[500px] rounded-[2.5rem] md:rounded-[3rem] overflow-hidden border border-gray-100 shadow-[0_20px_60px_rgba(0,0,0,0.05)] relative group"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.146589389234!2d82.2132!3d16.7337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a38218158588887%3A0x8e8e8e8e8e8e8e8e!2sYanam%2C%20Puducherry!5e0!3m2!1sen!2sin!4v1716388424102!5m2!1sen!2sin" 
              className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-1000"
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </section>
      </div>
    </Layout>
  );
};

export default Contact;
