import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 px-6 md:px-12 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
      <div className="container mx-auto max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">About Me</h2>
          <div className="h-1 w-20 bg-primary-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="glass-card p-8 md:p-12 relative overflow-hidden">
          {/* Decorative blob */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-200/50 dark:bg-primary-900/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-10"
          >
            <p className="text-slate-700 dark:text-slate-300 text-lg md:text-xl leading-relaxed mb-6">
              I am an <span className="font-semibold text-primary-600 dark:text-primary-400">MCA graduate</span> passionate about full-stack software development. I specialize in <span className="font-semibold text-slate-900 dark:text-white">Python, Django, React, REST API development, PostgreSQL, and AI-assisted applications.</span>
            </p>
            <p className="text-slate-700 dark:text-slate-300 text-lg md:text-xl leading-relaxed mb-6">
              I enjoy building scalable web applications, learning new technologies, and solving challenging problems. My projects range from tuition management platforms with AI summarization to e-commerce sites and automated data analysis workflows.
            </p>
            <p className="text-slate-700 dark:text-slate-300 text-lg md:text-xl leading-relaxed">
              I am currently seeking <span className="font-semibold text-primary-600 dark:text-primary-400">Software Engineer and Full-Stack Developer</span> opportunities where I can contribute to impactful projects while continuously improving my technical skills.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
