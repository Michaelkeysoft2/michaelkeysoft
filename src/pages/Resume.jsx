import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Printer, Mail, Phone, MapPin, Briefcase, GraduationCap, Code, Award } from 'lucide-react';
import { useToast } from '../components/ToastContext';

const Resume = () => {
  const { addToast } = useToast();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handlePrint = () => {
    addToast('Opening print dialog... Set destination to "Save as PDF" to download.', 'info');
    setTimeout(() => {
      window.print();
    }, 500);
  };

  const skills = [
    { category: 'Frontend', items: ['React', 'Vite', 'JavaScript (ES6+)', 'Tailwind CSS', 'HTML5 & CSS3', 'Framer Motion'] },
    { category: 'Backend & DB', items: ['Node.js', 'Express.js', 'PostgreSQL', 'MongoDB', 'REST APIs', 'GraphQL'] },
    { category: 'DevOps & Services', items: ['Vercel', 'Netlify', 'Git & GitHub', 'Docker', 'AWS (S3, EC2)', 'WordPress'] },
    { category: 'IT & Consulting', items: ['Office 365 Support', 'Network Troubleshooting', 'Linux/Windows Admin', 'Technical Consulting'] }
  ];

  return (
    <div className="pt-24 pb-20 bg-gray-50 dark:bg-[#0a0f1d] text-gray-800 dark:text-gray-200 min-h-screen transition-colors duration-300 print:bg-white print:text-black print:pt-0 print:pb-0">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl print:max-w-full">
        
        {/* Navigation Bar (hidden in print) */}
        <div className="flex justify-between items-center mb-8 print:hidden">
          <Link to="/" className="inline-flex items-center text-accent font-semibold hover:translate-x-[-4px] transition-transform">
            <ArrowLeft size={18} className="mr-2" /> Back to Home
          </Link>
          <button
            onClick={handlePrint}
            className="px-5 py-2.5 bg-accent hover:bg-accent/90 text-white rounded-full font-bold flex items-center shadow-lg shadow-accent/20 transition-all transform hover:-translate-y-0.5"
          >
            <Printer size={18} className="mr-2" /> Print / Save as PDF
          </button>
        </div>

        {/* Resume Sheet */}
        <div className="bg-white dark:bg-[#0d1527] rounded-[32px] p-8 sm:p-12 shadow-2xl border border-gray-100 dark:border-gray-800/50 print:shadow-none print:border-none print:p-0 print:rounded-none transition-colors">
          
          {/* Header */}
          <div className="border-b border-gray-100 dark:border-gray-800/80 pb-8 mb-8 print:pb-6 print:mb-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-primary dark:text-white print:text-black print:text-3xl">
                  Michael Olayiwola
                </h1>
                <p className="text-accent font-bold text-lg sm:text-xl mt-1 print:text-blue-600 print:text-base">
                  Full Stack Software Engineer &amp; IT Specialist
                </p>
              </div>
              
              {/* Contact Grid */}
              <div className="space-y-2 text-sm text-gray-500 dark:text-gray-400 print:text-black">
                <a href="mailto:michaelkeysoft@gmail.com" className="flex items-center hover:text-accent transition-colors">
                  <Mail size={16} className="mr-2 text-accent print:text-black" /> michaelkeysoft@gmail.com
                </a>
                <div className="flex items-center">
                  <Phone size={16} className="mr-2 text-accent print:text-black" /> 08039579410
                </div>
                <div className="flex items-center">
                  <MapPin size={16} className="mr-2 text-accent print:text-black" /> Ibadan, Nigeria
                </div>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="mb-10 print:mb-6">
            <h2 className="text-xl font-bold text-primary dark:text-white print:text-black mb-3 flex items-center border-b border-gray-100 dark:border-gray-800/50 pb-2 print:text-base print:pb-1">
              <Award size={20} className="mr-2 text-accent print:text-black" /> Professional Summary
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed print:text-black">
              Results-driven Full Stack Developer with over 2 years of experience building scalable web applications and delivering reliable IT solutions. Proven expertise in modern React/Vite/Node.js tech stacks. Adept at turning client requirements into high-performing websites and automating digital operations. Committed to writing clean, maintainable code and solving complex technical challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 print:grid-cols-3">
            
            {/* Left Column (Skills & Education) */}
            <div className="md:col-span-1 space-y-8 print:space-y-6">
              
              {/* Skills Section */}
              <div>
                <h2 className="text-xl font-bold text-primary dark:text-white print:text-black mb-4 flex items-center border-b border-gray-100 dark:border-gray-800/50 pb-2 print:text-base print:pb-1">
                  <Code size={20} className="mr-2 text-accent print:text-black" /> Core Skills
                </h2>
                <div className="space-y-4">
                  {skills.map(cat => (
                    <div key={cat.category}>
                      <h4 className="text-xs font-extrabold text-accent uppercase tracking-wider mb-1.5 print:text-black print:text-[10px]">
                        {cat.category}
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {cat.items.map(item => (
                          <span key={item} className="px-2 py-1 bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 text-gray-600 dark:text-gray-300 rounded text-xs font-medium print:bg-white print:border-gray-300 print:text-black">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div>
                <h2 className="text-xl font-bold text-primary dark:text-white print:text-black mb-4 flex items-center border-b border-gray-100 dark:border-gray-800/50 pb-2 print:text-base print:pb-1">
                  <GraduationCap size={20} className="mr-2 text-accent print:text-black" /> Education
                </h2>
                <div>
                  <h4 className="font-bold text-primary dark:text-white text-sm sm:text-base print:text-black print:text-sm">
                    University of Ibadan
                  </h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 print:text-black">
                    Ibadan, Nigeria
                  </p>
                  <p className="text-xs text-accent font-semibold mt-1 print:text-black">
                    Graduated: 2023
                  </p>
                </div>
              </div>

            </div>

            {/* Right Column (Experience) */}
            <div className="md:col-span-2 space-y-8 print:space-y-6">
              
              <div>
                <h2 className="text-xl font-bold text-primary dark:text-white print:text-black mb-4 flex items-center border-b border-gray-100 dark:border-gray-800/50 pb-2 print:text-base print:pb-1">
                  <Briefcase size={20} className="mr-2 text-accent print:text-black" /> Work History
                </h2>
                
                <div className="space-y-6 print:space-y-4">
                  {/* Job 1 - MichaelKeysoft */}
                  <div>
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-bold text-primary dark:text-white text-base print:text-black print:text-sm">
                          Founder &amp; Principal Engineer
                        </h4>
                        <p className="text-sm text-accent font-semibold print:text-blue-600 print:text-xs">
                          MichaelKeysoft
                        </p>
                      </div>
                      <span className="text-xs text-gray-400 dark:text-gray-500 font-semibold print:text-black">
                        2025 – Present
                      </span>
                    </div>
                    <ul className="list-disc list-outside ml-4 mt-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400 space-y-1.5 print:text-black">
                      <li>Designed and deployed custom responsive React web platforms for corporate clients.</li>
                      <li>Built e-commerce solutions integrated with secure Paystack and Flutterwave payment checkouts.</li>
                      <li>Provided managed IT consulting services, Office 365 tenant setups, and system support.</li>
                      <li>Implemented automated continuous integration/deployment pipeline workflows using Vercel.</li>
                    </ul>
                  </div>

                  {/* Job 2 - Freelance */}
                  <div>
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-bold text-primary dark:text-white text-base print:text-black print:text-sm">
                          Web Developer &amp; Tech Consultant
                        </h4>
                        <p className="text-sm text-accent font-semibold print:text-blue-600 print:text-xs">
                          Freelance / Independent Contractor
                        </p>
                      </div>
                      <span className="text-xs text-gray-400 dark:text-gray-500 font-semibold print:text-black">
                        2025 – 2026
                      </span>
                    </div>
                    <ul className="list-disc list-outside ml-4 mt-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400 space-y-1.5 print:text-black">
                      <li>Developed and customized CMS themes (WordPress) and custom JavaScript landing pages.</li>
                      <li>Managed local hosting servers, database configuration (MySQL/PostgreSQL), and site migrations.</li>
                      <li>Helped small business clients optimize websites for search engines (SEO), boosting visitor reach by 35%.</li>
                    </ul>
                  </div>

                  {/* Job 3 - LOGIXSEVEN */}
                  <div>
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-bold text-primary dark:text-white text-base print:text-black print:text-sm">
                          Software Developer
                        </h4>
                        <p className="text-sm text-accent font-semibold print:text-blue-600 print:text-xs">
                          LOGIXSEVEN
                        </p>
                      </div>
                      <span className="text-xs text-gray-400 dark:text-gray-500 font-semibold print:text-black">
                        2024 – 2026
                      </span>
                    </div>
                    <ul className="list-disc list-outside ml-4 mt-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400 space-y-1.5 print:text-black">
                      <li>Built and maintained responsive websites and web applications using HTML, CSS, JavaScript, and React.</li>
                      <li>Collaborated on software development projects using Git and GitHub for version control.</li>
                      <li>Applied modern web development best practices to create user-friendly and performant interfaces.</li>
                      <li>Debugged, tested, and improved application functionality to enhance user experience.</li>
                      <li>Strengthened problem-solving and software development skills through practical project work and continuous learning.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Notable Projects */}
              <div>
                <h2 className="text-xl font-bold text-primary dark:text-white print:text-black mb-4 flex items-center border-b border-gray-100 dark:border-gray-800/50 pb-2 print:text-base print:pb-1">
                  <Award size={20} className="mr-2 text-accent print:text-black" /> Key Projects
                </h2>
                
                <div className="space-y-4 print:space-y-3">
                  <div>
                    <h4 className="font-bold text-primary dark:text-white text-sm sm:text-base print:text-black print:text-sm">
                      SHC Healthcare Staffing Portal
                    </h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400 print:text-black">
                      Led the build of a clinician staffing application. Implemented transactional scheduling, real-time calendars, and instant status updates. Reduced administrative hours by 40%.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-primary dark:text-white text-sm sm:text-base print:text-black print:text-sm">
                      FoodPrice Comparison E-Commerce Platform
                    </h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400 print:text-black">
                      Developed a high-speed catalog of 10,000+ items with lazy loading, virtual scrolling, and debounced searching. Optimized CDN caching for 1.2s average load time.
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Resume;
