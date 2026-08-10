import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, GitBranch, CheckCircle, Smartphone, Laptop, Sparkles } from 'lucide-react';

const caseStudiesData = {
  shc: {
    title: 'SHC Healthcare Staffing',
    category: 'Healthcare Platform',
    image: '/projects/shc.png',
    liveLink: 'https://shc-project.vercel.app/',
    githubLink: 'https://github.com/Michaelkeysoft2/SHC-Project',
    clientProblem: 'SHC Healthcare Staffing struggled to match qualified clinicians with hospital shifts using manual spreadsheets and phone calls. This slow, error-prone matching process caused critical shifts to go unfilled and placed a massive operational burden on coordinators.',
    goals: 'Build an automated, real-time portal where healthcare providers can post shifts and qualified clinicians can search, claim, and log hours instantly. Optimize the database layer to handle concurrent scheduling without conflicts.',
    planning: 'Conducted interviews with registered nurses and administrators. Designed a mobile-first shift calendar interface, wireframed shift detail drawers, and planned server infrastructure for instant push updates when new shifts are published.',
    design: 'A clean, highly accessible, and user-friendly interface. Designed with large tap targets for on-the-go nurses, color-coded status badges, and simple navigation elements that reduce cognitive load during busy workdays.',
    techs: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
    challenges: 'Preventing duplicate shift bookings when hundreds of active clinicians click "Claim Shift" at the exact same second, which was causing database race conditions and double-bookings.',
    solutions: 'Implemented an optimistic UI update mechanism on the front end and backed it with transaction-level SQL write locks in the database. When a shift claim begins, the shift is locked for 15 seconds, and any concurrent claim requests are immediately queued and failed gracefully with helpful notifications.',
    results: [
      '98% shift fill rate within 2 hours of posting',
      '40% reduction in agency administrative scheduling hours',
      'Average clinician shift-claim time reduced to under 30 seconds'
    ]
  },
  foodprice: {
    title: 'FoodPrice Solution',
    category: 'E-commerce & Fintech',
    image: '/projects/foodprice.png',
    liveLink: 'https://foodprice-solution.vercel.app/',
    githubLink: 'https://github.com/Michaelkeysoft2/foodprice-solution',
    clientProblem: 'Consumers found it difficult to compare volatile food prices across local supermarkets, while local vendors lacked a lightweight digital storefront to list prices and offer checkout services directly to shoppers.',
    goals: 'Create a fast, responsive price comparison engine and e-commerce portal. The platform must load tens of thousands of food items instantly, provide price index graphs, and host a seamless cart-checkout flow.',
    planning: 'Mapped out data structures for thousands of product listings. Designed search indices to enable fast autocomplete, and mapped the checkout funnel to minimize user friction during billing.',
    design: 'A vibrant, modern, food-focused e-commerce template. Built with grid layouts, multi-layer filters (by category, price, store location), and optimized search inputs to ensure users find deals in seconds.',
    techs: ['React', 'Node.js', 'Express', 'Tailwind CSS', 'Vercel'],
    challenges: 'Serving over 10,000 items with product images created significant loading times, lagging UI scrolls, and high bandwidth consumption, which negatively affected SEO and conversion rates.',
    solutions: 'Implemented virtual list rendering to only render items visible in the viewport, alongside lazy-loaded images and local caching. Configured edge-based CDN routing on Vercel to cache data responses, dropping page load speeds by 95%.',
    results: [
      'Page load times reduced to 1.2s (A+ Performance rating)',
      'Cart checkout abandonment rate reduced by 28%',
      'Currently handles 50,000+ monthly unique visitors'
    ]
  },
  softtap: {
    title: 'SoftTap VTU & Billing',
    category: 'Fintech & Utility Payments',
    image: '/projects/softtap.png',
    liveLink: 'https://softtap.vercel.app/',
    githubLink: 'https://github.com/Michaelkeysoft2/softtap',
    clientProblem: 'VTU and utility billing platforms in Nigeria frequently experience transaction delays, unstable provider API endpoints, and insecure wallet funding, causing customer frustration and user churn.',
    goals: 'Build a highly responsive, automated VTU platform that enables users to purchase cheap data, top up airtime, pay TV subscriptions, fund electricity meters, and buy educational result pins with instant fulfillment.',
    planning: 'Analyzed vendor VTU API structures and payment gateway webhooks. Designed intuitive, simplified dashboard routing and responsive payment forms for quick user interactions.',
    design: 'A premium, high-converting dark-theme interface with clean glassmorphic panels, vibrant emerald accent colors, and simplified tabbed navigation for hassle-free payments.',
    techs: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
    challenges: 'Ensuring instantaneous transaction processing (under 5 seconds) while relying on external API networks that often suffer from downtime or rate-limiting.',
    solutions: 'Developed an automated retry queue system that processes transactions asynchronously. Integrated webhooks and instant-notification feedback loops to credit user accounts and verify carrier updates in under 3 seconds.',
    results: [
      'Average transaction completion time of under 3 seconds',
      'Wallet auto-funding system reduces manual verification to 0%',
      '99.9% success rate with automated transaction retry queue'
    ]
  }
};

const CaseStudy = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const data = caseStudiesData[projectId];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  if (!data) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-[#0a0f1d] flex flex-col items-center justify-center p-6 text-center">
        <h2 className="text-3xl font-bold text-primary dark:text-white mb-4">Case Study Not Found</h2>
        <p className="text-gray-500 dark:text-gray-400 mb-6">The project you are looking for does not exist.</p>
        <Link to="/" className="px-6 py-3 bg-accent text-white rounded-full font-bold">
          Go Back Home
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20 bg-gray-50 dark:bg-[#0a0f1d] text-gray-800 dark:text-gray-200 transition-colors duration-300 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        
        {/* Back Link */}
        <Link to="/#projects" className="inline-flex items-center text-accent font-semibold mb-8 hover:translate-x-[-4px] transition-transform">
          <ArrowLeft size={18} className="mr-2" /> Back to Projects
        </Link>

        {/* Hero Section */}
        <div className="mb-12">
          <span className="text-accent font-bold uppercase tracking-widest text-sm block mb-2">{data.category}</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-primary dark:text-white mb-6 leading-tight">
            {data.title}
          </h1>

          <div className="flex flex-wrap gap-4 mt-6">
            <a 
              href={data.liveLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 bg-accent hover:bg-accent/90 text-white rounded-full font-bold flex items-center shadow-lg shadow-accent/20 hover:shadow-accent/40 transition-all transform hover:-translate-y-0.5"
            >
              <ExternalLink size={18} className="mr-2" /> Live Demo
            </a>
            <a 
              href={data.githubLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white dark:bg-[#0d1527] border border-gray-200 dark:border-gray-800 text-primary dark:text-white rounded-full font-bold flex items-center hover:bg-gray-50 dark:hover:bg-gray-900 transition-all transform hover:-translate-y-0.5"
            >
              <GitBranch size={18} className="mr-2" /> GitHub Repository
            </a>
          </div>
        </div>

        {/* Visual Mockups Gallery (Laptop & Mobile) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-center bg-[#0d1527]/5 dark:bg-[#0d1527]/50 rounded-[40px] p-6 sm:p-10 border border-gray-200/50 dark:border-gray-800/40">
          {/* Laptop Mockup */}
          <div className="lg:col-span-8">
            <div className="relative mx-auto max-w-[512px] md:max-w-full">
              {/* Laptop screen frame */}
              <div className="relative rounded-t-2xl border-4 border-gray-800 dark:border-gray-700 bg-gray-900 overflow-hidden aspect-[16/10] shadow-2xl">
                <img 
                  src={data.image} 
                  alt="Desktop View" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Laptop keyboard base */}
              <div className="relative bg-gray-700 dark:bg-gray-600 rounded-b-2xl h-4 w-[105%] -left-[2.5%] shadow-xl"></div>
              <div className="relative bg-gray-600 dark:bg-gray-500 rounded-b-xl h-2 w-[20%] mx-auto shadow-md"></div>
            </div>
          </div>

          {/* Mobile Mockup */}
          <div className="lg:col-span-4 flex justify-center">
            {/* Mobile phone frame */}
            <div className="relative border-[8px] border-gray-800 dark:border-gray-700 rounded-[36px] w-[200px] sm:w-[240px] aspect-[9/19] bg-gray-900 overflow-hidden shadow-2xl">
              {/* Camera Notch */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-4 bg-gray-800 rounded-full z-20"></div>
              <img 
                src={data.image} 
                alt="Mobile View" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Grid Case details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">
          
          {/* Left Columns: Text Content */}
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h3 className="text-2xl font-bold text-primary dark:text-white mb-4">Client Problem</h3>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">{data.clientProblem}</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary dark:text-white mb-4">Project Goals</h3>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">{data.goals}</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary dark:text-white mb-4">Planning & Execution</h3>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">{data.planning}</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary dark:text-white mb-4">UI/UX Design Strategy</h3>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">{data.design}</p>
            </div>

            <div className="p-8 bg-accent/5 dark:bg-accent/10 border border-accent/10 dark:border-accent/20 rounded-[32px]">
              <h3 className="text-2xl font-bold text-primary dark:text-white mb-4 flex items-center">
                <Sparkles className="text-accent mr-2" />
                Technical Challenge & Solution
              </h3>
              <h4 className="font-bold text-primary dark:text-white mb-2 text-lg">Challenge:</h4>
              <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed mb-6">{data.challenges}</p>
              <h4 className="font-bold text-primary dark:text-white mb-2 text-lg">Solution:</h4>
              <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">{data.solutions}</p>
            </div>
          </div>

          {/* Right Column: Metadata & Results */}
          <div className="space-y-10">
            {/* Tech Stack Box */}
            <div className="bg-white dark:bg-[#0d1527] p-8 rounded-[32px] shadow-lg border border-gray-100 dark:border-gray-800/80">
              <h3 className="text-xl font-bold text-primary dark:text-white mb-6">Technologies Used</h3>
              <div className="flex flex-wrap gap-2.5">
                {data.techs.map(tech => (
                  <span key={tech} className="px-4 py-2 bg-accent/10 dark:bg-accent/20 text-accent dark:text-accent-light rounded-2xl text-sm font-bold">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Results Box */}
            <div className="bg-primary text-white p-8 rounded-[32px] shadow-lg relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent"></div>
              <h3 className="text-xl font-bold mb-6 relative z-10">Project Results</h3>
              <ul className="space-y-4 relative z-10">
                {data.results.map((result, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-5.5 h-5.5 text-accent-light mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-white/95 text-base font-medium leading-normal">{result}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Contact Form link */}
            <div className="bg-white dark:bg-[#0d1527] p-8 rounded-[32px] shadow-lg border border-gray-100 dark:border-gray-800/80 text-center">
              <h4 className="font-bold text-primary dark:text-white mb-3 text-lg">Need a similar solution?</h4>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-6 leading-relaxed">
                Let's discuss how we can build a high-performing system tailored to your exact business operations.
              </p>
              <button
                onClick={() => {
                  navigate('/#contact');
                }}
                className="w-full py-3 bg-accent hover:bg-accent/90 text-white rounded-2xl font-bold text-sm shadow-md"
              >
                Get Started Today
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default CaseStudy;
