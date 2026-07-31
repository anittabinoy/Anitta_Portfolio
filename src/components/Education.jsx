import { motion } from 'framer-motion';
import { GraduationCap, Award, Star } from 'lucide-react';

const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Marian College Kuttikkanam (Autonomous)",
    year: "2024–2026"
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "MES College Nedumkandam",
    year: "2020–2023"
  }
];

const certifications = [
  "NPTEL (IIT Roorkee): Business Analytics & Data Mining Modeling using R",
  "Kaggle Learn: Data Cleaning, Pandas, Data Visualization, Feature Engineering, Intro to Machine Learning",
  "IBM Cognitive Class: Data Science Methodology, Data Science Tools, Prompt Engineering",
  "Red Hat System Administration I (RH124)",
  "Red Hat System Administration II (RH134)"
];

const achievements = [
  "Active National Service Scheme (NSS) volunteer.",
  "Participated in community service and social outreach activities.",
  "Developed leadership, teamwork, communication, and organizational skills through NSS programs."
];

const Education = () => {
  return (
    <section id="education" className="py-20 px-6 md:px-12 bg-slate-50/50 dark:bg-slate-900/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Background</h2>
          <div className="h-1 w-20 bg-primary-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education Column */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
              <GraduationCap className="text-primary-600" />
              Education
            </h3>
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 dark:before:via-slate-700 before:to-transparent">
              {education.map((edu, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white dark:border-slate-900 bg-primary-600 text-white shrink-0 z-10 shadow">
                    <GraduationCap size={16} />
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-card p-5 rounded-xl ml-4 md:ml-0">
                    <span className="text-sm font-semibold text-primary-600 dark:text-primary-400">{edu.year}</span>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white mt-1">{edu.degree}</h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">{edu.institution}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications & Achievements Column */}
          <div className="space-y-12">
            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                <Award className="text-primary-600" />
                Certifications
              </h3>
              <div className="glass-card p-6">
                <ul className="space-y-4">
                  {certifications.map((cert, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="mt-1 w-2 h-2 rounded-full bg-primary-500 shrink-0"></div>
                      <span className="text-slate-700 dark:text-slate-300 text-sm md:text-base leading-snug">{cert}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Achievements */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                <Star className="text-primary-600" />
                Achievements
              </h3>
              <div className="glass-card p-6">
                <ul className="space-y-4">
                  {achievements.map((ach, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="mt-1 w-2 h-2 rounded-full bg-primary-500 shrink-0"></div>
                      <span className="text-slate-700 dark:text-slate-300 text-sm md:text-base leading-snug">{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
