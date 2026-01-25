import { Award, BookOpen, Code2, Sparkles, Trophy, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  const highlights = [
    {
      icon: Award,
      title: "4.0 GPA",
      description: "Dean's List 2024-2025"
    },
    {
      icon: GraduationCap,
      title: "Honours Specialization",
      description: "Computer Science @ Western"
    },
    {
      icon: Code2,
      title: "Full-Stack Developer",
      description: "React, Node.js, Python"
    },
    {
      icon: Sparkles,
      title: "AI/ML Research",
      description: "Adversarial Machine Learning"
    },
    {
      icon: Trophy,
      title: "Hackathon Winner",
      description: "3rd Place University-wide"
    }
  ];

  const skills = {
    "Languages": ["Python", "JavaScript", "TypeScript", "Java", "HTML/CSS"],
    "Frameworks": ["React.js", "React Native", "Node.js", "Flask", "Flutter", "Tailwind CSS"],
    "Tools & Platforms": ["Git", "GitHub", "SQLite", "Google Cloud", "VS Code", "Figma"],
    "Expertise": ["Full-Stack Development", "Machine Learning", "Real-Time Systems", "API Integration"]
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />
      
      <div className="container relative z-10 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-primary text-sm font-medium uppercase tracking-widest mb-4 block">
              About Me
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Driven by Curiosity,{" "}
              <span className="text-gradient">Powered by Code</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Computer Science student at Western University with a passion for 
              building innovative solutions that make a real difference.
            </p>
          </motion.div>

          {/* Highlights grid */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {highlights.map((item, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 group card-interactive"
                whileHover={{ scale: 1.05 }}
              >
                <motion.div 
                  className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors"
                  whileHover={{ rotate: 10 }}
                >
                  <item.icon className="w-6 h-6 text-primary" />
                </motion.div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Bio & Skills */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
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
                  My passion lies in creating applications that solve real problems. From conducting 
                  research in adversarial machine learning to building voice-AI integration systems 
                  at a startup, I thrive on tackling challenging projects that push boundaries.
                </p>
                <p>
                  I've been recognized with awards including 3rd place at a university-wide hackathon 
                  and Google Cloud's Generative AI Certification. When I'm not coding, you'll find me 
                  mentoring fellow students and organizing tech events.
                </p>
              </div>

              {/* Awards */}
              <div className="pt-4">
                <h4 className="font-display text-lg font-semibold text-foreground mb-4">Awards & Certifications</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-secondary/50 border border-border">
                    <Trophy className="w-5 h-5 text-primary" />
                    <span className="text-sm text-foreground">University Hackathon - 3rd Place (Strik, Baldinelli, Moniz Ltd. Prize)</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-secondary/50 border border-border">
                    <Award className="w-5 h-5 text-primary" />
                    <span className="text-sm text-foreground">Google Cloud – Generative AI Certification</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="font-display text-2xl font-semibold text-foreground mb-6">
                Skills & Technologies
              </h3>
              <div className="space-y-6">
                {Object.entries(skills).map(([category, items]) => (
                  <div key={category}>
                    <h4 className="text-sm font-medium text-primary uppercase tracking-wider mb-3">
                      {category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {items.map((skill, index) => (
                        <motion.span 
                          key={index}
                          className="px-4 py-2 rounded-lg bg-secondary/50 text-foreground text-sm font-medium border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 cursor-default"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
