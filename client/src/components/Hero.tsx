import { useEffect, useRef, useState } from "react";
import { HERO_CONTENT, SITE_CONFIG } from "@/lib/constants";
import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, MapPin, Briefcase } from "lucide-react";

const ACCENT_RGBA = "201, 166, 30";

function NeuralCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    window.addEventListener("mousemove", onMouseMove);

    type P = { x: number; y: number; vx: number; vy: number; r: number; a: number };
    const mkParticle = (): P => ({
      x: Math.random() * (canvas.width || 800),
      y: Math.random() * (canvas.height || 600),
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45,
      r: Math.random() * 1.4 + 0.5,
      a: Math.random() * 0.45 + 0.15,
    });

    const N = 62;
    const particles: P[] = Array.from({ length: N }, mkParticle);

    const draw = () => {
      const W = canvas.width;
      const H = canvas.height;
      ctx.clearRect(0, 0, W, H);

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = W;
        if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H;
        if (p.y > H) p.y = 0;

        const dx = p.x - mx;
        const dy = p.y - my;
        const d2 = dx * dx + dy * dy;
        if (d2 < 8100) {
          const d = Math.sqrt(d2);
          p.x += (dx / d) * 0.9;
          p.y += (dy / d) * 0.9;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${ACCENT_RGBA}, ${p.a})`;
        ctx.fill();
      }

      for (let i = 0; i < N; i++) {
        for (let j = i + 1; j < N; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 125) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(${ACCENT_RGBA}, ${0.13 * (1 - dist / 125)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      ro.disconnect();
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
}

const PHRASES = [
  "Crafting intelligent solutions that bridge data and real-world impact.",
  "Building production-ready AI systems with RAG & LLM architectures.",
  "Turning complex data into clarity through engineering excellence.",
];

function TypewriterText() {
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    const phrase = PHRASES[phraseIdx];
    if (!deleting) {
      if (charIdx < phrase.length) {
        const t = setTimeout(() => {
          setDisplayed(phrase.slice(0, charIdx + 1));
          setCharIdx((c) => c + 1);
        }, 42);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setDeleting(true), 2800);
        return () => clearTimeout(t);
      }
    } else {
      if (charIdx > 0) {
        const t = setTimeout(() => {
          setDisplayed(phrase.slice(0, charIdx - 1));
          setCharIdx((c) => c - 1);
        }, 22);
        return () => clearTimeout(t);
      } else {
        setDeleting(false);
        setPhraseIdx((i) => (i + 1) % PHRASES.length);
      }
    }
  }, [charIdx, deleting, phraseIdx]);

  return (
    <span>
      {displayed}
      <span className="inline-block w-0.5 h-[1.1em] bg-accent ml-0.5 animate-pulse align-middle" />
    </span>
  );
}

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.18, delayChildren: 0.25 } },
};

const item = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: "easeOut" } },
};

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <NeuralCanvas />
        <div className="absolute top-0 left-1/4 w-[520px] h-[520px] bg-accent/8 rounded-full blur-[130px]" />
        <div className="absolute bottom-0 right-1/4 w-[380px] h-[380px] bg-accent/5 rounded-full blur-[100px]" />
        <div className="absolute inset-0 hero-grid-bg opacity-[0.025]" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="container max-w-6xl mx-auto px-6"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column */}
          <motion.div variants={container} className="text-center lg:text-left">
            {/* Availability badge */}
            <motion.div variants={item} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-accent/25 text-accent text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                Available for opportunities
              </span>
            </motion.div>

            {/* Name with gradient */}
            <motion.h1
              variants={item}
              className="font-display font-bold leading-tight mb-6"
            >
              <span className="block text-foreground text-2xl md:text-3xl font-medium mb-1">
                Hi, I'm
              </span>
              <span className="block gradient-text text-5xl md:text-6xl lg:text-7xl">
                {SITE_CONFIG.name.split(" ")[0]}
              </span>
              <span className="block text-foreground/80 text-3xl md:text-4xl lg:text-5xl font-semibold mt-1">
                {SITE_CONFIG.name.split(" ").slice(1).join(" ")}
              </span>
            </motion.h1>

            {/* Typewriter subheadline */}
            <motion.div
              variants={item}
              className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed min-h-[4rem]"
            >
              <TypewriterText />
            </motion.div>

            {/* Meta info pills */}
            <motion.div
              variants={item}
              className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground mb-10"
            >
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary border border-border">
                <Briefcase className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                {SITE_CONFIG.title}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary border border-border">
                <MapPin className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                {SITE_CONFIG.location}
              </span>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary border border-border hover:border-accent hover:text-accent transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                {SITE_CONFIG.email}
              </a>
            </motion.div>

            {/* CTAs */}
            <motion.div
              variants={item}
              className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-accent-foreground rounded-xl font-semibold transition-all shadow-lg shadow-accent/20 focus-ring"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                {HERO_CONTENT.cta}
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-border text-foreground rounded-xl font-semibold hover:border-accent hover:text-accent transition-all focus-ring"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                Get in Touch
              </motion.a>
              <motion.a
                href="/resume.pdf"
                download="prarthana-resume.pdf"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 border border-accent/40 text-accent rounded-xl font-semibold hover:bg-accent/10 transition-all focus-ring"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                <Download className="w-4 h-4" />
                Download CV
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right column — profile photo */}
          <motion.div
            variants={item}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Outer glow */}
              <div className="absolute -inset-6 rounded-full bg-accent/8 blur-2xl animate-pulse-subtle" />

              {/* Outer orbit */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-7 rounded-full border border-dashed border-accent/20"
              />
              {/* Inner orbit */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-3 rounded-full border border-dashed border-accent/15"
              />

              {/* Photo */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[370px] lg:h-[370px] rounded-full overflow-hidden border-2 border-accent/30 shadow-2xl shadow-accent/10">
                <img
                  src="/portrait1.png"
                  alt="Prarthana Sewmini"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating badge — experience */}
              <motion.div
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.1, duration: 0.5 }}
                className="absolute -right-4 md:-right-8 top-10 glass border border-accent/20 rounded-2xl px-4 py-2.5 shadow-lg"
              >
                <div className="text-xs text-muted-foreground">Experience</div>
                <div className="text-sm font-bold text-accent">2+ Years</div>
              </motion.div>

              {/* Floating badge — projects */}
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.3, duration: 0.5 }}
                className="absolute -left-4 md:-left-8 bottom-14 glass border border-accent/20 rounded-2xl px-4 py-2.5 shadow-lg"
              >
                <div className="text-xs text-muted-foreground">Projects</div>
                <div className="text-sm font-bold text-accent">10+ Built</div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center pointer-events-none"
        >
          <div className="text-muted-foreground text-[10px] tracking-widest uppercase mb-2">
            Scroll
          </div>
          <div className="w-5 h-9 border border-muted-foreground/40 rounded-full flex items-start justify-center p-1.5 mx-auto">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-1.5 bg-accent rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
