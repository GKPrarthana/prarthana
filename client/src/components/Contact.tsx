import { SITE_CONFIG } from "@/lib/constants";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, ExternalLink, FileDown } from "lucide-react";

export function Contact() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="contact" className="section-padding bg-secondary/30">
      <div className="container max-w-4xl text-center">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Section header */}
          <motion.div variants={item} className="mb-12">
            <div className="accent-line mx-auto mb-4" />
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Let's Connect
            </h2>
            <p className="text-lg text-muted-foreground">
              Open to collaborations, opportunities, and conversations about AI, data science, and building intelligent systems.
            </p>
          </motion.div>

          {/* Contact options */}
          <motion.div
            variants={item}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            {[
              {
                icon: Mail,
                label: "Email",
                value: SITE_CONFIG.email,
                href: SITE_CONFIG.links.email,
              },
              {
                icon: Linkedin,
                label: "LinkedIn",
                value: "Prarthana Sewmini",
                href: SITE_CONFIG.links.linkedin,
              },
              {
                icon: Github,
                label: "GitHub",
                value: "prarthana-sewmini",
                href: SITE_CONFIG.links.github,
              },
            ].map((contact, idx) => {
              const Icon = contact.icon;
              return (
                <motion.a
                  key={idx}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={item}
                  className="bg-card border border-border rounded-lg p-6 hover:border-accent transition-colors group"
                  whileHover={{ y: -4 }}
                >
                  <Icon className="w-8 h-8 text-accent mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <p className="text-sm text-muted-foreground mb-1">
                    {contact.label}
                  </p>
                  <p className="font-medium text-foreground text-sm">
                    {contact.value}
                  </p>
                </motion.a>
              );
            })}
          </motion.div>

          {/* CTA buttons */}
          <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href={SITE_CONFIG.links.email}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-accent-foreground rounded-xl font-semibold hover:bg-accent/90 transition-all shadow-lg shadow-accent/20 focus-ring"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              Send me an email
              <ExternalLink className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="/resume.pdf"
              download="prarthana-resume.pdf"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-accent/40 text-accent rounded-xl font-semibold hover:bg-accent/10 transition-all focus-ring"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <FileDown className="w-5 h-5" />
              Download Resume
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
