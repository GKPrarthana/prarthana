import { PROJECTS } from "@/lib/constants";
import { useProjectFilter } from "@/hooks/useProjectFilter";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

export function Projects() {
  const { activeFilter, setActiveFilter, categories, filteredProjects } =
    useProjectFilter(PROJECTS);

  return (
    <section id="projects" className="section-padding bg-secondary/30">
      <div className="container">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="accent-line mb-4" />
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground mt-4">
            Problem → Approach → Impact
          </p>
        </motion.div>

        {/* Filter buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all capitalize ${
                activeFilter === category
                  ? "bg-accent text-accent-foreground shadow-md shadow-accent/20"
                  : "bg-card border border-border text-muted-foreground hover:border-accent/50 hover:text-accent"
              }`}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 24 }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className="group relative bg-card border border-border rounded-2xl overflow-hidden hover:border-accent/50 transition-all duration-300 hover:shadow-xl hover:shadow-accent/5 flex flex-col"
              >
                {/* Accent top bar on hover */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                {/* Project image */}
                <div className="relative h-48 overflow-hidden bg-muted flex-shrink-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start gap-3 p-4">
                    <motion.a
                      href="#"
                      className="p-2 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 shadow-lg"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => e.preventDefault()}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </motion.a>
                    <motion.a
                      href="#"
                      className="p-2 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 shadow-lg"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => e.preventDefault()}
                    >
                      <Github className="w-4 h-4" />
                    </motion.a>
                  </div>
                </div>

                {/* Project info */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="text-lg font-semibold text-foreground leading-snug">
                      {project.title}
                    </h3>
                    <span className="flex-shrink-0 text-xs px-2.5 py-1 rounded-full bg-accent/10 text-accent border border-accent/20 font-medium">
                      {project.category}
                    </span>
                  </div>

                  <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Problem & Impact */}
                  <div className="space-y-3 mb-5 pb-5 border-b border-border flex-1">
                    <div>
                      <p className="text-[10px] font-bold text-accent uppercase tracking-wider mb-1">
                        Problem
                      </p>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {project.problem}
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-accent uppercase tracking-wider mb-1">
                        Impact
                      </p>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {project.impact}
                      </p>
                    </div>
                  </div>

                  {/* Tech badges */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 4).map((tech: string) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-0.5 rounded-md bg-secondary text-muted-foreground border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="text-xs px-2 py-0.5 text-muted-foreground">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
