import { useEffect, useState } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import { Moon, Sun, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const update = () => {
      const scrolled = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? (scrolled / total) * 100 : 0);
    };
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  return progress;
}

const NAV_LINKS = ["About", "Skills", "Projects", "Experience", "Contact"];

export function Navigation() {
  const { theme, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const progress = useScrollProgress();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handler = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  return (
    <>
      {/* Scroll progress bar — sits above everything */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-0.5 bg-transparent pointer-events-none">
        <div
          className="h-full bg-accent transition-[width] duration-75 ease-linear"
          style={{ width: `${progress}%` }}
        />
      </div>

      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/95 backdrop-blur-xl border-b border-border shadow-sm"
            : "bg-background/75 backdrop-blur-md border-b border-transparent"
        }`}
      >
        <div className="container flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.a
            href="#"
            className="font-display font-bold text-xl md:text-2xl text-foreground hover:text-accent transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            PS
          </motion.a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="relative text-sm font-medium text-muted-foreground hover:text-accent transition-colors group"
              >
                {link}
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-accent rounded-full transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            {/* Theme toggle */}
            <motion.button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-secondary transition-colors focus-ring"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <Moon className="w-5 h-5 text-foreground" />
              ) : (
                <Sun className="w-5 h-5 text-foreground" />
              )}
            </motion.button>

            {/* Mobile hamburger */}
            <motion.button
              className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors focus-ring"
              onClick={() => setMobileOpen((v) => !v)}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait" initial={false}>
                {mobileOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <X className="w-5 h-5 text-foreground" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="open"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Menu className="w-5 h-5 text-foreground" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed top-16 left-0 right-0 z-40 bg-background/98 backdrop-blur-xl border-b border-border md:hidden shadow-lg"
          >
            <div className="container py-5 flex flex-col gap-1">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="text-base font-medium text-muted-foreground hover:text-accent transition-colors py-3 border-b border-border/50 last:border-0"
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
