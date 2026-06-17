import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
  color?: string;
}

const ProjectCard = ({
  title,
  description,
  technologies,
  githubUrl,
  liveUrl,
  featured = false,
  color = "bg-card",
}: ProjectCardProps) => {
  return (
    <div className={`group relative border-[3px] border-ink shadow-brutal hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-brutal-sm transition-all duration-200 ${color} ${featured ? "md:col-span-2" : ""}`}>
      <div className="flex items-center justify-between border-b-[3px] border-ink px-5 py-2 bg-background">
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 bg-accent border-2 border-ink" />
          <span className="w-3 h-3 bg-primary border-2 border-ink" />
          <span className="w-3 h-3 bg-mint border-2 border-ink" />
        </div>
        {featured && (
          <span className="text-[10px] font-bold uppercase tracking-widest bg-accent border-2 border-ink px-2 py-0.5">
            Featured
          </span>
        )}
      </div>

      <div className="p-6 md:p-7">
        <h3 className="font-display text-3xl md:text-4xl font-normal text-ink mb-3 leading-tight">
          {title}
        </h3>
        <p className="text-ink/80 mb-5 leading-relaxed">{description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech, i) => (
            <span key={i} className="px-2.5 py-1 bg-background border-[2px] border-ink text-xs font-bold text-ink">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {githubUrl && (
            <Button variant="outline" size="sm" asChild>
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" /> Code
              </a>
            </Button>
          )}
          {liveUrl && (
            <Button variant="secondary" size="sm" asChild>
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" /> Live Demo
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
