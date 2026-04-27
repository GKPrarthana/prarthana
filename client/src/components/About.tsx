import { useEffect, useRef, useState } from "react";
import { ABOUT_CONTENT } from "@/lib/constants";
import { motion, useInView } from "framer-motion";

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  useEffect(() => {
    if (!inView) return;
    let current = 0;
    const duration = 1400;
    const interval = 16;
    const increment = target / (duration / interval);

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, interval);

    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

const STATS = [
  { num: 2, suffix: "+", label: "Years Experience" },
  { num: 10, suffix: "+", label: "Projects Completed" },
  { num: 20, suffix: "+", label: "Technologies" },
  { num: 6, suffix: "", label: "Certifications" },
];

export function About() {
  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Section header */}
          <div className="mb-12">
            <div className="accent-line mb-4" />
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
              {ABOUT_CONTENT.title}
            </h2>
          </div>

          {/* Content */}
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            {ABOUT_CONTENT.description}
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-12 border-t border-border">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2 tabular-nums">
                  <AnimatedCounter target={stat.num} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
