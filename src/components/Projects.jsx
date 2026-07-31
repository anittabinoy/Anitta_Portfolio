import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const GithubIcon = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a5.5 5.5 0 0 0-1.5-3.8 5.5 5.5 0 0 0-.1-3.8s-1.2-.4-3.9 1.4a13.3 13.3 0 0 0-7 0C6.2 1.8 5 2.2 5 2.2a5.5 5.5 0 0 0-.1 3.8A5.5 5.5 0 0 0 3.4 9.8c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path>
  </svg>
);

const projects = [
  {
    title: "EduSphere – Tuition Management",
    description: "A full-stack tuition management platform that digitizes offline tuition center operations with AI-powered text summarization for study materials.",
    technologies: ["React.js", "Django REST Framework", "SQLite", "REST APIs"],
    features: ["Role-based auth", "Attendance", "Scheduling", "AI summarization"],
    github: "#",
    live: "#"
  },
  {
    title: "Green Guardians",
    description: "A waste collection management platform connecting households, collectors, and administrators for Haritha Karma Sena.",
    technologies: ["Django", "PostgreSQL", "HTML", "CSS", "JavaScript"],
    features: ["Collection tracking", "Online payments", "Role dashboards"],
    github: "#",
    live: "#"
  },
  {
    title: "Online Music Store",
    description: "A complete e-commerce platform for purchasing music products with inventory and order management.",
    technologies: ["Python Flask", "MySQL", "HTML5", "CSS3", "Bootstrap"],
    features: ["Shopping cart", "Inventory", "Payment module"],
    github: "#",
    live: "#"
  },
  {
    title: "Automated Feedback Analyzer",
    description: "An RPA solution that automates customer feedback collection and keyword-based sentiment analysis.",
    technologies: ["UiPath Studio", "Excel Automation"],
    features: ["Excel processing", "Sentiment classification", "Reduced manual effort"],
    github: "#",
    live: "#"
  },
  {
    title: "Time Craft",
    description: "An e-commerce platform dedicated to watches, featuring catalog browsing and order management.",
    technologies: ["Django", "HTML", "CSS", "Bootstrap", "SQLite"],
    features: ["Product catalog", "Shopping cart", "CRUD operations"],
    github: "#",
    live: "#"
  },
  {
    title: "Machine Learning Projects",
    description: "A collection of predictive models including Linear Regression, Logistic Regression, and K-Nearest Neighbors.",
    technologies: ["Python", "Scikit-learn", "Pandas", "NumPy"],
    features: ["Data preprocessing", "Feature engineering", "Model evaluation"],
    github: "#",
    live: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 md:px-12">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Featured Projects</h2>
          <div className="h-1 w-20 bg-primary-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card flex flex-col h-full group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <div className="flex gap-3 text-slate-500 dark:text-slate-400">
                    <a href={project.github} className="hover:text-primary-600 transition-colors"><GithubIcon size={20} /></a>
                    <a href={project.live} className="hover:text-primary-600 transition-colors"><ExternalLink size={20} /></a>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-400 mb-6 flex-1 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="text-xs font-mono text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20 px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
