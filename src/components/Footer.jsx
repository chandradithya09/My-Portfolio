import { Linkedin, Github, Instagram, ArrowUp } from 'lucide-react';

const socials = [
  {
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/chandradithya-gaddipati/',
    label: 'LinkedIn',
  },
  {
    icon: Github,
    href: 'https://github.com/chandradithya09',
    label: 'GitHub',
  },
  {
    icon: XIcon,
    href: 'https://x.com/Chandradithya_9',
    label: 'X (Twitter)',
  },
  {
    icon: Instagram,
    href: 'https://www.instagram.com/chandradithya_09/',
    label: 'Instagram',
  },
];

function XIcon({ size = 22 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className="text-white"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.260 8.502 11.24h-6.75l-5.676-7.502-6.123 7.502H.429L9.765 10.375 0 2.25h8.407L12 8.298zm-1.107 16.545L12 10.21l-5.88 8.604H3.01L12 5.05l8.99 13.745h-2.856z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="relative border-t border-border-subtle/40 bg-dark-bg-2/50 py-12 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-extrabold gradient-text mb-1">Chandradithya</h3>
            <p className="text-muted-text text-sm">
              Computer Science Undergraduate &amp; Future Tech Innovator
            </p>
          </div>

          {/* Socials */}
          <div className="flex gap-3">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-11 h-11 rounded-xl bg-card-bg border border-border-subtle flex items-center justify-center hover:bg-accent-pink hover:border-accent-pink hover:scale-110 transition-all duration-300"
              >
                {social.icon === XIcon ? (
                  <XIcon size={20} />
                ) : (
                  <social.icon size={20} className="text-light-text" />
                )}
              </a>
            ))}
          </div>

          {/* Back to top */}
          <a
            href="#home"
            className="group flex items-center gap-2 text-muted-text hover:text-accent-pink transition-colors duration-300"
          >
            <span className="text-sm">Back to Top</span>
            <span className="w-9 h-9 rounded-full border border-border-subtle flex items-center justify-center group-hover:border-accent-pink group-hover:bg-accent-pink/10 transition-all duration-300">
              <ArrowUp size={18} />
            </span>
          </a>
        </div>

        <div className="text-center mt-10 pt-6 border-t border-border-subtle/30">
          <p className="text-muted-text text-sm">
            &copy; {new Date().getFullYear()} Gaddipati Chandradithya. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
