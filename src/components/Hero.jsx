import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Download, Mail, Phone } from 'lucide-react';
import profileImg from '../assets/hero.png';

const GithubIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a5.5 5.5 0 0 0-1.5-3.8 5.5 5.5 0 0 0-.1-3.8s-1.2-.4-3.9 1.4a13.3 13.3 0 0 0-7 0C6.2 1.8 5 2.2 5 2.2a5.5 5.5 0 0 0-.1 3.8A5.5 5.5 0 0 0 3.4 9.8c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path>
  </svg>
);

const LinkedinIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect width="4" height="12" x="2" y="9"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-12 px-6 md:px-12 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-primary-600 font-medium mb-2 tracking-wide uppercase text-sm md:text-base"
            >
              Hello, I am
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight leading-tight"
            >
              Anitta Binoy
            </motion.h1>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-700 dark:text-slate-300 mb-6 h-[40px] sm:h-[48px]"
            >
              <span className="mr-2">I am a</span>
              <TypeAnimation
                sequence={[
                  'Python Developer', 2000,
                  'Django Developer', 2000,
                  'React Developer', 2000,
                  'Full-Stack Developer', 2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-primary-600 dark:text-primary-400"
              />
            </motion.div>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-slate-600 dark:text-slate-400 text-base md:text-lg leading-relaxed mb-8 max-w-2xl mx-auto md:mx-0"
            >
              Passionate Software Engineer with hands-on experience in Python, Django, React, REST APIs, PostgreSQL, AI-powered applications, data analysis, and automation. I enjoy building scalable, user-friendly software solutions and solving real-world problems.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start mb-10"
            >
              <a href="https://drive.google.com/file/d/1QVLvsufQ-O0l6YVGV0o2pTBTsmkiundf/view?usp=sharing" target="_blank" rel="noreferrer" className="px-6 py-3 rounded-full bg-primary-600 hover:bg-primary-700 text-white font-medium transition-all shadow-lg shadow-primary-600/30 hover:shadow-primary-600/50 hover:-translate-y-1 flex items-center gap-2 w-full sm:w-auto justify-center">
                <Download size={20} />
                Resume
              </a>
              <a href="#projects" className="px-6 py-3 rounded-full glass text-slate-900 dark:text-white font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition-all hover:-translate-y-1 w-full sm:w-auto justify-center text-center">
                View Projects
              </a>
              <a href="#contact" className="px-6 py-3 rounded-full border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white font-medium hover:border-primary-600 hover:text-primary-600 dark:hover:border-primary-400 dark:hover:text-primary-400 transition-all hover:-translate-y-1 w-full sm:w-auto justify-center text-center">
                Contact Me
              </a>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center justify-center md:justify-start gap-4 text-slate-500 dark:text-slate-400"
            >
              <a href="https://github.com/anittabinoy" target="_blank" rel="noreferrer" className="hover:text-primary-600 hover:scale-110 transition-all p-3 glass-card rounded-full shadow-md" aria-label="GitHub">
                <GithubIcon size={22} />
              </a>
              <a href="https://linkedin.com/in/anittabinoy" target="_blank" rel="noreferrer" className="hover:text-primary-600 hover:scale-110 transition-all p-3 glass-card rounded-full shadow-md" aria-label="LinkedIn">
                <LinkedinIcon size={22} />
              </a>
              <a href="mailto:anittathressiyabinoy@gmail.com" className="hover:text-primary-600 hover:scale-110 transition-all p-3 glass-card rounded-full shadow-md" aria-label="Email">
                <Mail size={22} />
              </a>
              <a href="tel:+919497263752" className="hover:text-primary-600 hover:scale-110 transition-all p-3 glass-card rounded-full shadow-md" aria-label="Phone">
                <Phone size={22} />
              </a>
            </motion.div>
          </div>
          
          {/* Decorative/Image Side */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="flex-1 relative w-full max-w-sm md:max-w-md mx-auto"
          >
            <div className="aspect-square rounded-[2rem] md:rounded-[3rem] bg-gradient-to-tr from-primary-400 to-blue-600 opacity-20 blur-3xl absolute inset-0 animate-pulse"></div>
            <div className="relative z-10 p-2 rounded-[2rem] md:rounded-[3rem] bg-gradient-to-tr from-primary-500 via-blue-500 to-transparent rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="aspect-square rounded-[2rem] md:rounded-[3rem] bg-slate-200 dark:bg-slate-800 flex items-center justify-center overflow-hidden border-8 border-white dark:border-slate-900 -rotate-3 hover:rotate-0 transition-transform duration-500">
                <img src={profileImg} alt="Anitta Binoy" className="w-full h-full object-cover" />
              </div>
            </div>
            
            {/* Floating badges */}
            <motion.div 
              animate={{ y: [0, -10, 0] }} 
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute -right-6 top-10 glass-card px-4 py-2 rounded-xl flex items-center gap-2 shadow-xl z-20"
            >
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="text-sm font-medium text-slate-700 dark:text-slate-200">Open to Work</span>
            </motion.div>
            
            <motion.div 
              animate={{ y: [0, 10, 0] }} 
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
              className="absolute -left-6 bottom-20 glass-card px-4 py-2 rounded-xl flex items-center gap-2 shadow-xl z-20"
            >
              <span className="text-sm font-bold text-primary-600 dark:text-primary-400">MCA</span>
              <span className="text-xs text-slate-500 dark:text-slate-400">Graduate</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
