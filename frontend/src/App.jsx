import React, { useState, useEffect, useRef } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';

// --- ICONS (using inline SVGs for simplicity and performance) ---
const LogoIcon = () => (
  <svg height="40" viewBox="0 0 160 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 0L40 40H0L20 0Z" fill="#00cc99"/>
    <text x="50" y="30" fontFamily="Arial, sans-serif" fontSize="30" fill="#FFFFFF" fontWeight="bold">ManzilX</text>
  </svg>
);

const MenuIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
    </svg>
);

const CloseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
);

// --- MOCK DATA ---
const colleges = [
    { name: "Prestige Institute", image: "https://placehold.co/500x300/002a24/00e6a8?text=Prestige", brochure: "/brochure.pdf" },
    { name: "Amity University", image: "https://placehold.co/500x300/002a24/00e6a8?text=Amity", brochure: "/brochure.pdf" },
    { name: "Chandigarh University", image: "https://placehold.co/500x300/002a24/00e6a8?text=Chandigarh", brochure: "/brochure.pdf" },
    { name: "Jain University", image: "https://placehold.co/500x300/002a24/00e6a8?text=Jain", brochure: "/brochure.pdf" },
];

const jobListings = [
    { title: "Senior Enrollment Advisor", description: "Guide prospective students through the admissions process for our partner universities." },
    { title: "Digital Marketing Specialist", description: "Manage our online presence and lead generation campaigns to attract new students." },
    { title: "Backend Developer (Node.js)", description: "Maintain and enhance our backend systems, APIs, and database integrations." },
];

const features = [
    { icon: '🔍', title: 'Smart Recommendations', text: 'We use aptitude testing and your interests to guide you to the best courses.' },
    { icon: '🎓', title: 'Trusted Partners', text: 'Partnered with top colleges and educators to ensure verified content.' },
    { icon: '📞', title: 'Personalized Help', text: 'Get expert counseling over phone and chat to make the right decision.' },
];

// --- API CONFIG ---
const API_BASE_URL = 'http://localhost:5001/api'; // Replace with your deployed backend URL

// --- UTILITY COMPONENTS ---
const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
};

// --- CORE COMPONENTS ---

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const handleScrollLink = (targetId) => {
        setIsOpen(false);
        // If we are not on the homepage, navigate there first
        if (location.pathname !== '/') {
            navigate('/');
            // Use a timeout to allow the page to re-render before scrolling
            setTimeout(() => {
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        } else {
            // Already on the homepage, just scroll
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    const NavLinks = () => (
        <>
            <a href="#colleges" onClick={(e) => { e.preventDefault(); handleScrollLink('colleges'); }} className="text-white hover:text-[#00cc99] transition duration-300 px-3 py-2 rounded-md text-sm font-medium cursor-pointer">Colleges</a>
            <Link to="/form" onClick={() => setIsOpen(false)} className="text-white hover:text-[#00cc99] transition duration-300 px-3 py-2 rounded-md text-sm font-medium">Enrollment Form</Link>
            <Link to="/careers" onClick={() => setIsOpen(false)} className="text-white hover:text-[#00cc99] transition duration-300 px-3 py-2 rounded-md text-sm font-medium">Careers</Link>
        </>
    );

    return (
        <nav className="bg-black bg-opacity-80 backdrop-blur-md shadow-lg sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <Link to="/" className="text-white font-bold text-xl">
                            <LogoIcon />
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <NavLinks />
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none">
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? <CloseIcon /> : <MenuIcon />}
                        </button>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col">
                        <NavLinks />
                    </div>
                </div>
            )}
        </nav>
    );
};

const HeroSection = () => {
    const handleScrollToColleges = () => {
        document.getElementById('colleges')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="bg-black text-white text-center py-20 lg:py-32 px-4">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-3 leading-tight">
                <span className="text-[#00cc99]">ManzilX</span>
            </h1>
            <h2 className="text-2xl md:text-4xl font-bold mb-4">Your Path to the Right Course Starts Here</h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Discover courses from top educators and institutions through our personalized career guidance platform.
            </p>
            <button onClick={handleScrollToColleges} className="bg-[#00cc99] hover:bg-[#00e6a8] text-black font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-lg shadow-[#00cc99]/30">
                Get Free Counseling
            </button>
        </div>
    );
};

const FeaturesSection = () => (
    <div className="features-section bg-[#060606e6] py-16 px-4 sm:px-6 lg:px-8">
       <style>{`
          .features-section {
              display: flex;
              justify-content: center;
              flex-wrap: wrap;
              gap: 2rem;
              padding: 4rem 2rem;
          }
          .feature {
              background: #002a24;
              color: #00e6a8;
              transition: transform 0.3s ease, box-shadow 0.3s ease;
              width: 100%;
              max-width: 320px;
              border-radius: 12px;
              padding: 2rem;
              text-align: center;
              border: 1px solid #004d40;
          }
          .feature:hover {
              transform: translateY(-8px);
              box-shadow: 0 0 25px #00e6a88f;
          }
           .feature .icon {
                font-size: 2.5rem;
                margin-bottom: 1rem;
                display: block;
            }
          .feature h3 {
              font-size: 1.4rem;
              font-weight: 600;
              margin-bottom: 1rem;
          }
          .feature p {
              font-size: 1rem;
              font-weight: 400;
              color: #d0f5ee;
          }
        `}</style>
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-8">
        {features.map((feature, index) => (
            <div key={index} className="feature">
                <span className="icon">{feature.icon}</span>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
            </div>
        ))}
      </div>
    </div>
);

const CollegesSection = () => (
    <div id="colleges" className="bg-black py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-white mb-12">Trusted By These Institutions</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {colleges.map((college, index) => (
                    <div key={index} className="bg-[#001a16] rounded-lg overflow-hidden shadow-lg transform hover:-translate-y-2 transition-transform duration-300 ease-in-out group">
                        <img src={college.image} alt={college.name} className="w-full h-48 object-cover"/>
                        <div className="p-6 text-center">
                            <h3 className="font-bold text-xl text-white mb-4">{college.name}</h3>
                            <a href={college.brochure} download className="inline-block bg-[#00cc99] hover:bg-[#00e6a8] text-black font-bold py-2 px-6 rounded-full transition duration-300">
                                Download Brochure
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

const Footer = () => (
    <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
                <p className="font-semibold">Contact Us</p>
                <p className="text-sm text-gray-400">Email: contact@manzilx.com</p>
                <p className="text-sm text-gray-400">Phone: +91 12345 67890</p>
            </div>
            <div className="flex space-x-6">
                <Link to="/careers" className="text-gray-400 hover:text-[#00cc99] transition">Careers</Link>
                <a href="#" className="text-gray-400 hover:text-[#00cc99] transition">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-[#00cc99] transition">Terms of Service</a>
            </div>
        </div>
         <div className="bg-black py-4 px-4 sm:px-6 lg:px-8 text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} ManzilX. All Rights Reserved.
        </div>
    </footer>
);


// --- PAGES ---

const HomePage = () => (
    <>
        <HeroSection />
        <FeaturesSection />
        <CollegesSection />
    </>
);

const FormPage = () => {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', interestedCollege: colleges[0].name });
    const [status, setStatus] = useState({ loading: false, message: '', error: false });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ loading: true, message: '', error: false });
        try {
            const payload = { ...formData, source: 'Website Form' };
            const response = await fetch(`${API_BASE_URL}/students/submit`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });
            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.msg || 'Something went wrong');
            }
            setStatus({ loading: false, message: 'Thank you! Your form has been submitted. We will contact you shortly.', error: false });
            setFormData({ name: '', email: '', phone: '', interestedCollege: colleges[0].name });
        } catch (error) {
            setStatus({ loading: false, message: error.message, error: true });
        }
    };

    return (
        <div className="min-h-screen bg-black flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 bg-[#001a16] p-10 rounded-xl shadow-2xl shadow-[#00cc99]/20">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-white">Enrollment Form</h2>
                    <p className="mt-2 text-center text-sm text-gray-400">
                        Take the first step towards your MBA
                    </p>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div className="rounded-md shadow-sm -space-y-px flex flex-col gap-4">
                        <input name="name" type="text" required value={formData.name} onChange={handleChange} className="w-full bg-gray-800 text-white border-gray-700 rounded-md p-3 focus:ring-[#00cc99] focus:border-[#00cc99]" placeholder="Full Name" />
                        <input name="email" type="email" required value={formData.email} onChange={handleChange} className="w-full bg-gray-800 text-white border-gray-700 rounded-md p-3 focus:ring-[#00cc99] focus:border-[#00cc99]" placeholder="Email Address" />
                        <input name="phone" type="tel" required value={formData.phone} onChange={handleChange} className="w-full bg-gray-800 text-white border-gray-700 rounded-md p-3 focus:ring-[#00cc99] focus:border-[#00cc99]" placeholder="Phone Number" />
                        <select name="interestedCollege" value={formData.interestedCollege} onChange={handleChange} className="w-full bg-gray-800 text-white border-gray-700 rounded-md p-3 focus:ring-[#00cc99] focus:border-[#00cc99]">
                            {colleges.map(c => <option key={c.name} value={c.name}>{c.name}</option>)}
                        </select>
                    </div>
                    <div>
                        <button type="submit" disabled={status.loading} className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-black bg-[#00cc99] hover:bg-[#00e6a8] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00e6a8] disabled:bg-gray-500">
                            {status.loading ? 'Submitting...' : 'Submit Inquiry'}
                        </button>
                    </div>
                </form>
                {status.message && (
                    <p className={`mt-2 text-center text-sm ${status.error ? 'text-red-500' : 'text-green-400'}`}>
                        {status.message}
                    </p>
                )}
            </div>
        </div>
    );
};

const JobApplicationModal = ({ isOpen, onClose, jobTitle }) => {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', resume: '' });
    const [status, setStatus] = useState({ loading: false, message: '', error: false });
    const fileInputRef = useRef(null);

    useEffect(() => {
      // Reset form when modal opens for a new job
      setFormData({ name: '', email: '', phone: '', resume: '' });
      setStatus({ loading: false, message: '', error: false });
    }, [isOpen, jobTitle]);

    if (!isOpen) return null;
    
    const handleChange = (e) => {
        if (e.target.name === 'resume') {
            setFormData({ ...formData, resume: e.target.files[0] ? e.target.files[0].name : '' });
        } else {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        }
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ loading: true, message: '', error: false });
        try {
            // Note: This does not actually upload the file, just its name.
            // A real implementation would use FormData and a service like multer on the backend.
            const payload = { ...formData, jobTitle };
            const response = await fetch(`${API_BASE_URL}/careers/apply`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });
            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.msg || 'Something went wrong');
            }
            setStatus({ loading: false, message: 'Application submitted successfully!', error: false });
            setTimeout(onClose, 2000);
        } catch (error) {
            setStatus({ loading: false, message: error.message, error: true });
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
            <div className="bg-[#001a16] rounded-lg shadow-xl w-full max-w-lg p-6 relative">
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white">&times;</button>
                <h3 className="text-2xl font-bold text-white mb-2">Apply for {jobTitle}</h3>
                <p className="text-gray-400 mb-6">Fill out the form below to submit your application.</p>
                 <form className="space-y-4" onSubmit={handleSubmit}>
                    <input name="name" type="text" required onChange={handleChange} className="w-full bg-gray-800 text-white border-gray-700 rounded-md p-3 focus:ring-[#00cc99] focus:border-[#00cc99]" placeholder="Full Name" />
                    <input name="email" type="email" required onChange={handleChange} className="w-full bg-gray-800 text-white border-gray-700 rounded-md p-3 focus:ring-[#00cc99] focus:border-[#00cc99]" placeholder="Email Address" />
                    <input name="phone" type="tel" required onChange={handleChange} className="w-full bg-gray-800 text-white border-gray-700 rounded-md p-3 focus:ring-[#00cc99] focus:border-[#00cc99]" placeholder="Phone Number" />
                    <div>
                        <label className="text-sm text-gray-400">Resume (Optional)</label>
                         <input name="resume" type="file" ref={fileInputRef} onChange={handleChange} accept=".pdf,.doc,.docx" className="w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#00cc99] file:text-black hover:file:bg-[#00e6a8]"/>
                    </div>
                    <button type="submit" disabled={status.loading} className="w-full py-3 px-4 bg-[#00cc99] hover:bg-[#00e6a8] text-black font-bold rounded-md transition duration-300 disabled:bg-gray-500">
                        {status.loading ? 'Submitting...' : 'Submit Application'}
                    </button>
                </form>
                {status.message && (
                    <p className={`mt-4 text-center text-sm ${status.error ? 'text-red-500' : 'text-green-400'}`}>
                        {status.message}
                    </p>
                )}
            </div>
        </div>
    );
};

const CareersPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedJob, setSelectedJob] = useState('');

    const handleApplyClick = (title) => {
        setSelectedJob(title);
        setIsModalOpen(true);
    };

    return (
        <div className="bg-black text-white min-h-screen py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-extrabold text-center mb-4">Work With Us</h2>
                <p className="text-lg text-gray-300 text-center mb-12">
                    Be a part of a team that's transforming career guidance in India.
                </p>
                <div className="space-y-8">
                    {jobListings.map((job, index) => (
                        <div key={index} className="bg-[#002a24] p-8 rounded-lg shadow-lg flex flex-col md:flex-row justify-between items-center gap-6 border border-[#004d40]">
                            <div>
                                <h3 className="text-2xl font-bold text-[#00e6a8]">{job.title}</h3>
                                <p className="text-gray-300 mt-2">{job.description}</p>
                            </div>
                            <button onClick={() => handleApplyClick(job.title)} className="bg-[#00cc99] hover:bg-[#00e6a8] text-black font-bold py-2 px-6 rounded-full transition duration-300 whitespace-nowrap">
                                Apply Now
                            </button>
                        </div>
                    ))}
                </div>
            </div>
            <JobApplicationModal 
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                jobTitle={selectedJob}
            />
        </div>
    );
};

// --- MAIN APP COMPONENT ---
export default function App() {
    return (
        <Router>
            <ScrollToTop />
            <div className="bg-black">
                <Navbar />
                <main>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/form" element={<FormPage />} />
                        <Route path="/careers" element={<CareersPage />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}
