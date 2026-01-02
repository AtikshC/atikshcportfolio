import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";

interface ProjectCardProps {
  title: string;
  description: string;
  image?: string;
  video?: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

const ProjectCard = ({
  title,
  description,
  image,
  video,
  technologies,
  githubUrl,
  liveUrl,
  featured = false
}: ProjectCardProps) => {
  return (
    <div 
      className={`group relative rounded-2xl overflow-hidden border border-border bg-card transition-all duration-500 hover:border-primary/30 ${
        featured ? 'md:col-span-2 md:row-span-2' : ''
      }`}
    >
      {/* Media container */}
      <div className={`relative overflow-hidden ${featured ? 'aspect-video' : 'aspect-[4/3]'}`}>
        {video ? (
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-secondary flex items-center justify-center">
            <span className="text-muted-foreground">No preview</span>
          </div>
        )}
        
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Featured badge */}
        {featured && (
          <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
            Featured Project
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground mb-4 line-clamp-3">
          {description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.slice(0, 5).map((tech, index) => (
            <span 
              key={index}
              className="px-2 py-1 rounded-md bg-secondary text-xs text-muted-foreground"
            >
              {tech}
            </span>
          ))}
          {technologies.length > 5 && (
            <span className="px-2 py-1 rounded-md bg-secondary text-xs text-muted-foreground">
              +{technologies.length - 5} more
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          {githubUrl && (
            <Button variant="outline" size="sm" asChild>
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                Code
              </a>
            </Button>
          )}
          {liveUrl && (
            <Button variant="gold" size="sm" asChild>
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Demo
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
