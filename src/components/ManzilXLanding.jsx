import React from 'react';
import '../styles/ManzilXLanding.css';

const ManzilXLanding = () => {

  const colleges = [
    {
      img: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914',
      brochure: '/brochure1.pdf',
      name: 'IIT Delhi'
    },
    {
      img: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc',
      brochure: '/brochure2.pdf',
      name: 'IIM Bangalore'
    },
    {
      img: 'https://images.unsplash.com/photo-1614851099511-20c905f1e4d5',
      brochure: '/brochure3.pdf',
      name: 'NIT Trichy'
    },
  ];

  return (
    <div className="landing-container">
      <header className="landing-header">
        <img src="/logo.png" alt="ManzilX Logo" className="logo" />
        <h1>ManzilX</h1>
        <p>Your path to the right course starts here</p>
      </header>

      <section className="hero-section">
        <h2>Smart Testing. Trusted Guidance.</h2>
        <p>
          Discover courses from top educators and institutions through our personalized career guidance platform.
        </p>
        <a href="#register" className="cta-button">Get Free Counseling</a>
      </section>

      <section className="features-section">
        <div className="feature">
          <h3>🔍 Smart Recommendations</h3>
          <p>We use aptitude testing and your interests to guide you to the best courses.</p>
        </div>
        <div className="feature">
          <h3>🎓 Trusted Partners</h3>
          <p>Partnered with top colleges and educators to ensure verified content.</p>
        </div>
        <div className="feature">
          <h3>📞 Personalized Help</h3>
          <p>Get expert counseling over phone and chat to make the right decision.</p>
        </div>
      </section>

      <section className="college-showcase">
        <h2>Trusted By These Institutions</h2>
        <div className="colleges">
          {colleges.map((college, idx) => (
            <div key={idx} className="college-card">
              <img src={college.img} alt={college.name} />
              <a href={college.brochure} download className="download-btn">
                Download Brochure
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ManzilXLanding;
