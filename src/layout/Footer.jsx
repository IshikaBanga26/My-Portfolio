import { Github, Linkedin, Heart } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/IshikaBanga26", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/ishika-banga", label: "LinkedIn" },
];

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#milestones", label: "Milestones" },
  { href: "#contact", label: "Contact" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a href="#" className="text-xl hover:text-[var(--color-primary)] font-bold tracking-tight">
              IB<span className="text-[var(--color-primary)]">.</span>
            </a>
            <p className="text-sm text-[var(--muted-foreground)] mt-2">
              © {currentYear} Ishika Banga. All rights reserved.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-[var(--muted-foreground)] hover:text-[var(--color-secondary-foreground)] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="p-2 rounded-full glass hover:bg-[var(--primary)/10] hover:text-[var(--primary)] transition-all"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};