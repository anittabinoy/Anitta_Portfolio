import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="py-8 px-6 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-slate-600 dark:text-slate-400 text-sm font-medium text-center md:text-left">
          &copy; {new Date().getFullYear()} Anitta Binoy. All rights reserved.
        </div>
        
        <button 
          onClick={scrollToTop}
          className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800 hover:bg-primary-100 dark:hover:bg-primary-900/50 text-slate-600 dark:text-slate-400 hover:text-primary-600 flex items-center justify-center transition-colors focus:outline-none"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
