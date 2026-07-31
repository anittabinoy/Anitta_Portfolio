import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    role: "Data Analyst Intern",
    company: "Infocrita Private Limited",
    duration: "Nov 2025 – Feb 2026",
    responsibilities: [
      "Performed data cleaning, preprocessing, and transformation using Python and Pandas.",
      "Conducted exploratory data analysis to identify patterns and trends.",
      "Generated reports and visualizations using Matplotlib and Excel.",
      "Applied feature engineering techniques to improve analytical outcomes.",
      "Collaborated on project documentation and analytical reporting."
    ]
  },
  {
    role: "Computer Instructor",
    company: "St. Joseph Public School Kunnumbhagam",
    duration: "Jun 2023 – Mar 2024",
    responsibilities: [
      "Taught computer fundamentals and digital literacy to students from Class 1 to Class 5.",
      "Prepared lesson plans and learning materials for practical and theoretical sessions.",
      "Assisted students with computer lab activities and basic programming concepts.",
      "Developed communication, leadership, and classroom management skills.",
      "Collaborated with faculty members to improve student learning outcomes."
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6 md:px-12 bg-slate-50/50 dark:bg-slate-900/30">
      <div className="container mx-auto max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Professional Experience</h2>
          <div className="h-1 w-20 bg-primary-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-slate-200 dark:bg-slate-700"></div>

          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative flex flex-col md:flex-row gap-8 mb-16 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-primary-600 border-4 border-white dark:border-slate-900 flex items-center justify-center z-10 shadow-lg">
                <Briefcase size={16} className="text-white" />
              </div>

              <div className="md:w-1/2 pl-12 md:pl-0">
                <div className={`glass-card p-6 md:p-8 ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}>
                  <div className="flex flex-col mb-4">
                    <span className="text-sm font-semibold text-primary-600 dark:text-primary-400 mb-1">{exp.duration}</span>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">{exp.role}</h3>
                    <span className="text-slate-600 dark:text-slate-400 font-medium">{exp.company}</span>
                  </div>
                  <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-primary-500 mt-1.5 text-xs">▹</span>
                        <span className="text-sm md:text-base">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="hidden md:block md:w-1/2"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
