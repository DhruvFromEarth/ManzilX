import '../styles/Footer.css';

export default function Footer() {
  return (
    <footer className="footer-section">

      {/* Newsletter Signup */}
      <div className="newsletter">
        <h2>Subscribe to our Newsletter</h2>
        <p>Stay updated with new, career tips, and accurated course!</p>
        <form>
          <input type="email" placeholder="Enter your email" required />
          <button type="submit" id='submit-btn'>Subscribe</button>
        </form>
      </div>

      {/* Main Footer Content */}
      <div className="footer-container">
      <p>For any query mail at <a href="mailto:AdarshKiMailId@gmail.com">AdarshKiMailId@gmail.com</a></p>
        <p>&copy; {new Date().getFullYear()} ManzilX. All rights reserved.</p>
      </div>

      {/* <div className="footer-links">
        <a href="/">Privacy Policy</a> | 
        <a href="/">Terms of Service</a> | 
        <a href="/">Contact</a>
        </div> */}
    </footer>
  );
}