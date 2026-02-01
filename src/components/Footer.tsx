import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.a
            href="#home"
            className="text-xl font-heading font-bold gradient-text"
            whileHover={{ scale: 1.05 }}
          >
            Anas.dev
          </motion.a>

          <div className="flex items-center gap-1 text-muted-foreground text-sm">
            Made with
            <Heart className="w-4 h-4 text-primary fill-primary mx-1" />
            © {new Date().getFullYear()} All rights reserved.
          </div>

          <nav className="flex gap-6">
            {['Privacy', 'Terms', 'Sitemap'].map((link) => (
              <a
                key={link}
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
