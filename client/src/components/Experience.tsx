import { EXPERIENCE, EDUCATION } from "@/lib/constants";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="container max-w-4xl">
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
            Experience & Education
          </h2>
        </motion.div>

        {/* Professional experience */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-xl font-semibold text-foreground mb-10 flex items-center gap-3"
          >
            <span className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
              <Briefcase className="w-4 h-4 text-accent" />
            </span>
            Professional Experience
          </motion.h3>

          <div className="space-y-8">
            {EXPERIENCE.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group relative pl-8 border-l-2 border-accent/20 hover:border-accent/60 transition-colors duration-300"
              >
                {/* Timeline dot */}
                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-accent border-4 border-background group-hover:ring-2 group-hover:ring-accent/40 transition-all" />

                <div className="bg-card/50 group-hover:bg-card border border-border/50 group-hover:border-accent/30 rounded-xl p-5 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2 gap-1">
                    <h4 className="text-base font-semibold text-foreground">
                      {exp.role}
                    </h4>
                    <span className="text-xs text-muted-foreground bg-secondary px-2.5 py-1 rounded-full border border-border w-fit">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-accent font-medium text-sm mb-2">{exp.company}</p>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>

                  <ul className="space-y-2">
                    {exp.achievements.map((a, i) => (
                      <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-1.5" />
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-xl font-semibold text-foreground mb-10 flex items-center gap-3"
          >
            <span className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
              <GraduationCap className="w-4 h-4 text-accent" />
            </span>
            Education
          </motion.h3>

          <div className="space-y-5">
            {EDUCATION.map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group bg-card border border-border rounded-xl p-5 hover:border-accent/40 transition-all duration-300 hover:shadow-md hover:shadow-accent/5"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2 gap-1">
                  <h4 className="text-base font-semibold text-foreground leading-snug">
                    {edu.degree}
                  </h4>
                  <span className="text-xs text-muted-foreground bg-secondary px-2.5 py-1 rounded-full border border-border w-fit">
                    {edu.period}
                  </span>
                </div>
                <p className="text-accent font-medium text-sm">{edu.institution}</p>
                <p className="text-xs text-muted-foreground mt-1">{edu.location}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
