import { SKILLS } from "@/lib/constants";
import { motion } from "framer-motion";
import { Brain, Code2, Wrench, Layout } from "lucide-react";

const ICONS: Record<string, typeof Brain> = {
  "AI & ML": Brain,
  "Engineering": Code2,
  "Tools & Platforms": Wrench,
  "Frontend": Layout,
};

export function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="container">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="accent-line mb-4" />
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            Skills & Expertise
          </h2>
          <p className="text-lg text-muted-foreground mt-4">
            A comprehensive toolkit for building intelligent systems
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILLS.map((group, groupIdx) => {
            const Icon = ICONS[group.category] ?? Brain;
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: groupIdx * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-card border border-border rounded-2xl p-6 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5 overflow-hidden"
              >
                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />

                {/* Icon */}
                <div className="relative w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/15 transition-colors">
                  <Icon className="w-5 h-5 text-accent" />
                </div>

                <h3 className="relative text-base font-semibold text-foreground mb-4">
                  {group.category}
                </h3>

                {/* Skill pills */}
                <div className="relative flex flex-wrap gap-2">
                  {group.items.map((skill, i) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.85 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.28,
                        delay: groupIdx * 0.1 + i * 0.045,
                      }}
                      viewport={{ once: true }}
                      className="text-xs px-2.5 py-1 rounded-full bg-accent/10 text-accent/85 border border-accent/20 hover:bg-accent/20 hover:border-accent/40 hover:text-accent transition-colors cursor-default select-none"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
