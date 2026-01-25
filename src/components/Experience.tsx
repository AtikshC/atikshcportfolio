import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineering Intern",
      company: "SalesCode.ai",
      location: "Remote",
      period: "Jun 2025 – Sep 2025",
      description: [
        "Developed voice-AI integration modules (Python, Node.js) for real-time speech recognition and intent parsing",
        "Built microservices to preprocess audio streams, orchestrate ASR/NLU pipelines, and manage user sessions",
        "Collaborated with UX designers to wireframe voice-driven flows and integrated features into React Native clients"
      ],
      type: "internship"
    },
    {
      title: "Research Intern",
      company: "Western University",
      location: "London, ON",
      period: "May 2025 – Sep 2025",
      description: [
        "Led applied research in adversarial machine learning, designing CNN-robustness experiments in PyTorch",
        "Implemented and benchmarked defensive strategies against patch-based attacks",
        "Leveraged NumPy and Pandas for complex data analysis, generating technical visualizations in Matplotlib"
      ],
      type: "research"
    },
    {
      title: "Developer",
      company: "Western Developers Society",
      location: "London, ON",
      period: "Nov 2024 – Apr 2025",
      description: [
        "Designed and implemented React Native features with Firebase backend for campus mobile applications",
        "Facilitated workflows: sprint planning, code reviews, CI/CD pipelines with GitHub Actions",
        "Mentored junior developers and maintained coding standards across the team"
      ],
      type: "club"
    },
    {
      title: "Hack Western Organizer & Peer Mentor",
      company: "Western University",
      location: "London, ON",
      period: "Nov 2025",
      description: [
        "Supported event logistics, onboarding, and technical mentorship for Hack Western participants",
        "Worked with professors and TAs to mentor first-year CS students and support their academic development"
      ],
      type: "volunteer"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <section id="experience" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      <div className="absolute top-1/2 -right-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container relative z-10 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-primary text-sm font-medium uppercase tracking-widest mb-4 block">
              Experience
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Where I've <span className="text-gradient">Worked</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Professional experience in software engineering, research, and community leadership.
            </p>
          </motion.div>

          {/* Timeline */}
          <motion.div 
            className="relative"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent md:-translate-x-1/2" />

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative flex flex-col md:flex-row gap-8 mb-12 last:mb-0 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background md:-translate-x-1/2 z-10 shadow-lg shadow-primary/30" />
                
                {/* Content */}
                <div className={`flex-1 ml-8 md:ml-0 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <motion.div 
                    className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 group hover:shadow-lg hover:shadow-primary/5"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className={`flex items-center gap-2 mb-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full uppercase tracking-wide">
                        {exp.type}
                      </span>
                    </div>
                    
                    <h3 className="font-display text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                      {exp.title}
                    </h3>
                    
                    <div className={`flex flex-wrap items-center gap-3 text-sm text-muted-foreground mb-4 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      <span className="flex items-center gap-1">
                        <Briefcase className="w-4 h-4" />
                        {exp.company}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </span>
                    </div>
                    
                    <ul className={`space-y-2 text-muted-foreground text-sm ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                      {exp.description.map((item, i) => (
                        <li key={i} className={`flex items-start gap-2 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
                
                {/* Empty space for timeline alignment */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
