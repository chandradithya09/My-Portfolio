import { useState } from 'react';
import { MapPin, Phone, Mail, Send, CheckCircle2, Loader2 } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { SectionHeading } from './About';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Address',
    lines: [
      'Flat No. 501, North Block, Lakshmi\'s Prestige',
      'Mayuri Nagar, Miyapur, Hyderabad, Telangana — 500049',
    ],
  },
  {
    icon: Phone,
    title: 'Phone',
    lines: ['+91 95028 35293'],
  },
  {
    icon: Mail,
    title: 'Email',
    lines: ['chandradithya.9@gmail.com'],
  },
];

export default function Contact() {
  const { ref, visible } = useScrollReveal();
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    const form = e.target;
    const formData = new FormData(form);

    try {
      const res = await fetch('https://formspree.io/f/xpwlpvvr', {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setStatus('success');
        form.reset();
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="section-padding relative">
      <div className="absolute bottom-0 left-1/4 w-72 h-72 rounded-full bg-accent-pink/5 blur-3xl pointer-events-none" />

      <div ref={ref} className={`container mx-auto reveal ${visible ? 'visible' : ''}`}>
        <SectionHeading
          title="Get In Touch"
          subtitle="Ready to discuss opportunities, collaborations, or just want to say hello? I'd love to hear from you."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          {/* Contact info */}
          <div className="glass-card rounded-2xl p-8 md:p-10">
            <p className="text-muted-text text-base md:text-lg mb-8 leading-relaxed">
              I'm always open to discussing new opportunities, innovative projects, or potential
              collaborations. Whether you're a recruiter, fellow developer, or someone with an
              exciting project idea, feel free to reach out.
            </p>

            <div className="space-y-5">
              {contactInfo.map((info, i) => (
                <div key={i} className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-accent-pink/10 flex items-center justify-center group-hover:bg-accent-pink/20 group-hover:scale-110 transition-all duration-300">
                    <info.icon size={20} className="text-accent-pink" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">{info.title}</h4>
                    {info.lines.map((line, j) => (
                      <p key={j} className="text-muted-text text-sm">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="glass-card rounded-2xl p-8 md:p-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">Send a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <FormField label="Name" name="name" type="text" placeholder="Your full name" />
              <FormField
                label="Email"
                name="email"
                type="email"
                placeholder="your.email@example.com"
              />
              <FormField
                label="Subject"
                name="subject"
                type="text"
                placeholder="What's this about?"
              />
              <div>
                <label
                  htmlFor="message"
                  className="block text-muted-text text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  placeholder="Tell me about your project or opportunity..."
                  className="w-full p-3.5 rounded-xl bg-dark-bg/80 border border-border-subtle focus:border-accent-pink focus:ring-2 focus:ring-accent-pink/20 outline-none transition-all duration-300 text-light-text placeholder:text-muted-text/60 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'submitting' || status === 'success'}
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-accent-pink to-accent-pink-dark text-white px-8 py-4 rounded-full font-semibold text-base w-full hover:shadow-lg hover:shadow-accent-pink/40 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === 'submitting' && (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    Sending...
                  </>
                )}
                {status === 'success' && (
                  <>
                    <CheckCircle2 size={20} />
                    Message Sent!
                  </>
                )}
                {(status === 'idle' || status === 'error') && (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>

              {status === 'error' && (
                <p className="text-red-400 text-sm text-center">
                  Something went wrong. Please try again or email me directly.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function FormField({ label, name, type, placeholder }) {
  return (
    <div>
      <label htmlFor={name} className="block text-muted-text text-sm font-medium mb-2">
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        required
        placeholder={placeholder}
        className="w-full p-3.5 rounded-xl bg-dark-bg/80 border border-border-subtle focus:border-accent-pink focus:ring-2 focus:ring-accent-pink/20 outline-none transition-all duration-300 text-light-text placeholder:text-muted-text/60"
      />
    </div>
  );
}
