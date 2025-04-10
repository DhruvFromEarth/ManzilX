import React from 'react';
import '../styles/ManzilXLanding.css';

const ManzilXLanding = () => {
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
          {[1, 2, 3, 4].map(num => (
            <div key={num} className="college-card">
              <img src={`/college${num}.jpg`} alt={`College ${num}`} />
              <a href={`/brochure${num}.pdf`} download className="download-btn">
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
