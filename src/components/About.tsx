import { Award, BookOpen, Code2, Sparkles } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Award,
      title: "4.0 GPA",
      description: "Dean's List every semester"
    },
    {
      icon: BookOpen,
      title: "Honours Specialization",
      description: "Computer Science"
    },
    {
      icon: Code2,
      title: "Full-Stack Developer",
      description: "Frontend & Backend"
    },
    {
      icon: Sparkles,
      title: "AI/ML Enthusiast",
      description: "Machine Learning Projects"
    }
  ];

  const skills = [
    "TypeScript", "React", "Next.js", "Node.js", "Python", 
    "PostgreSQL", "MongoDB", "Docker", "Git", "REST APIs",
    "Machine Learning", "TensorFlow", "OpenCV", "Java", "C++",
    "Tailwind CSS", "Supabase", "AWS", "Agile", "CI/CD"
  ];

  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
      
      <div className="container relative z-10 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-medium uppercase tracking-widest mb-4 block">
              About Me
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Driven by Curiosity,{" "}
              <span className="text-gradient">Powered by Code</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              I'm a Computer Science student at Western University with a passion for 
              building innovative solutions that make a real difference.
            </p>
          </div>

          {/* Highlights grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {highlights.map((item, index) => (
              <div 
                key={index}
                className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Bio & Skills */}
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <h3 className="font-display text-2xl font-semibold text-foreground">
                My Journey
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  As a student in the Honours Specialization program at Western University, 
                  I've maintained a perfect 4.0 GPA while diving deep into software development, 
                  algorithms, and artificial intelligence.
                </p>
                <p>
                  My passion lies in creating applications that solve real problems. From building 
                  a comprehensive lost and found system for my campus community to developing 
                  machine learning models for facial recognition, I love tackling challenging 
                  projects that push the boundaries of what's possible.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new technologies, contributing 
                  to open-source projects, and mentoring fellow students in their programming journey.
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-display text-2xl font-semibold text-foreground mb-6">
                Skills & Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 rounded-lg bg-secondary text-foreground text-sm font-medium border border-border hover:border-primary/50 hover:bg-surface-hover transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
