import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, Github, Linkedin, ExternalLink, CheckCircle, MessageCircle } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import SectionTitle from '@/components/ui/SectionTitle';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().trim().min(1, 'Name is required').max(100, 'Name must be less than 100 characters'),
  email: z.string().trim().email('Invalid email address').max(255, 'Email must be less than 255 characters'),
  message: z.string().trim().min(1, 'Message is required').max(1000, 'Message must be less than 1000 characters'),
});

type FormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactInfo = [
    { icon: Mail, label: 'Email (Proton)', value: 'gowthamkollati05@protonmail.com', href: 'mailto:gowthamkollati05@protonmail.com' },
    { icon: Mail, label: 'Email (Gmail)', value: 'gowthamaha05@gmail.com', href: 'mailto:gowthamaha05@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+91 8341305025', href: 'tel:+918341305025' },
    { icon: MessageCircle, label: 'WhatsApp', value: '+91 8341305025', href: 'https://wa.me/918341305025' },
  ];

  const socialLinks = [
    { icon: Github, label: 'GitHub', href: 'https://github.com/KollatiGowtham?tab=repositories' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/gowtham-venkata-bhaskar-kollati-6988452a4' },
    { label: 'Fiverr', href: 'https://www.upwork.com/freelancers/~0150865053849b8da6?mp_source=share', text: 'Fiverr' },
    { label: 'Upwork', href: 'https://www.fiverr.com/s/xXVQEE1', text: 'Upwork' },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    try {
      const validatedData = contactSchema.parse(formData);
      
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
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

  return (
    <Layout>
      <div className="pt-24 pb-16">
        <section className="section-padding">
          <div className="container-custom">
            <SectionTitle
              title="Contact Me"
              subtitle="Let's work together"
            />

            <div className="space-y-12 max-w-5xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Connect With Me */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-card rounded-2xl p-8 shadow-card border border-border h-full">
                    <h3 className="font-heading font-semibold text-xl text-foreground mb-6">
                      Connect With Me
                    </h3>
                    <div className="space-y-4">
                      {socialLinks.map((link) => (
                        <a
                          key={link.label}
                          href={link.href}
                          target="_blank"

                          rel="noopener noreferrer"
                          className="flex items-center gap-3 px-4 py-3 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors group"
                        >
                          {link.icon ? (
                            <link.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                          ) : (
                            <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                          )}
                          <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                            {link.text || link.label}
                          </span>
                        </a>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Contact Details */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-card rounded-2xl p-8 shadow-card border border-border h-full">
                    <h3 className="font-heading font-semibold text-xl text-foreground mb-6">
                      Contact Information
                    </h3>
                    <div className="space-y-4">
                      {contactInfo.map((item) => (
                        <a
                          key={item.label}
                          href={item.href}
                          className="flex items-center gap-4 p-4 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors group"
                        >
                          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <item.icon className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">{item.label}</p>
                            <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                              {item.value}
                            </p>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="bg-card rounded-2xl p-8 shadow-card border border-border">
                  <h3 className="font-heading font-semibold text-xl text-foreground mb-6">
                    Send a Message
                  </h3>

                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-8"
                    >
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent flex items-center justify-center">
                        <CheckCircle className="w-8 h-8 text-primary" />
                      </div>
                      <h4 className="font-heading font-semibold text-lg text-foreground mb-2">
                        Message Sent!
                      </h4>
                      <p className="text-muted-foreground mb-4">
                        Thank you for reaching out. I'll get back to you soon.
                      </p>
                      <button
                        onClick={() => setIsSubmitted(false)}
                        className="text-primary hover:underline"
                      >
                        Send another message
                      </button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      {/* Name Field */}
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-lg border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all ${
                            errors.name ? 'border-destructive' : 'border-input'
                          }`}
                          placeholder="Your name"
                        />
                        {errors.name && (
                          <p className="mt-1 text-sm text-destructive">{errors.name}</p>
                        )}
                      </div>

                      {/* Email Field */}
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-lg border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all ${
                            errors.email ? 'border-destructive' : 'border-input'
                          }`}
                          placeholder="email@gmail.com"
                        />
                        {errors.email && (
                          <p className="mt-1 text-sm text-destructive">{errors.email}</p>
                        )}
                      </div>

                      {/* Message Field */}
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={5}
                          className={`w-full px-4 py-3 rounded-lg border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none ${
                            errors.message ? 'border-destructive' : 'border-input'
                          }`}
                          placeholder="How can I help you?"
                        />
                        {errors.message && (
                          <p className="mt-1 text-sm text-destructive">{errors.message}</p>
                        )}
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        onClick={() => {
                          const subject = encodeURIComponent(`Contact Form: ${formData.name}`);
                          const body = encodeURIComponent(
                            `Name: ${formData.name}\nEmail: ${formData.email}\nMessage:\n${formData.message}`
                          );
                          window.location.href = `mailto:gowthamkollati05@protonmail.com,gowthamaha05@gmail.com?subject=${subject}&body=${body}`;
                        }}
                      >
                        {isSubmitting ? (
                          'Sending...'
                        ) : (
                          <>
                            Send Message
                            <Send size={18} />
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Contact;
