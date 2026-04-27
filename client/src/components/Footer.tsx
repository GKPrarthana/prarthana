import { SITE_CONFIG } from "@/lib/constants";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-secondary/50 border-t border-border py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="font-display font-bold text-xl text-foreground mb-2">
              {SITE_CONFIG.name}
            </h3>
            <p className="text-sm text-muted-foreground">
              {SITE_CONFIG.title}
            </p>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-foreground mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {["About", "Skills", "Projects", "Experience", "Contact"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="hover:text-accent transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-foreground mb-4">Connect</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href={SITE_CONFIG.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={SITE_CONFIG.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={SITE_CONFIG.links.email}
                  className="hover:text-accent transition-colors"
                >
                  Email
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © 2025 {SITE_CONFIG.name}. All rights reserved.
          </p>

          {/* Scroll to top */}
          <motion.button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 p-2 rounded-lg hover:bg-secondary transition-colors focus-ring"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5 text-foreground" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
