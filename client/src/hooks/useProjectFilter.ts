import { useState, useMemo } from "react";

export function useProjectFilter(projects: any[]) {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const categories = useMemo(() => {
    const cats = new Set(projects.map((p) => p.category));
    return ["all", ...Array.from(cats)];
  }, [projects]);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") {
      return projects;
    }
    return projects.filter((p) => p.category === activeFilter);
  }, [projects, activeFilter]);

  return {
    activeFilter,
    setActiveFilter,
    categories,
    filteredProjects,
  };
}
