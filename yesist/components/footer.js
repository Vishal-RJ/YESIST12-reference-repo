const footerHTML = `
<footer class="site-footer">
    <video class="footer-video-bg" autoplay muted loop playsinline>
        <source src="Videos/FooterBG.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
    <div class="footer-container container">
        <div class="footer-column footer-logo">
            <img src="images/IEEE-YESIST12-Logo-1024x307-1.png" alt="YESIST12 Logo">
            <p>Use of this website signifies your agreement to the <a href="#" class="ieee-terms">IEEE Terms and Conditions</a>. A not-for-profit organization, IEEE is the world's largest technical professional organization dedicated to advancing technology for the benefit of humanity.</p>
        </div>
        
        <div class="footer-column">
            <h3>Quick Links</h3>
            <ul>
                <li><a href="yesist_index.html">Home</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Sitemap</a></li>
                <li><a href="#">IEEE Privacy Policy</a></li>
            </ul>
        </div>
        
        <div class="footer-column">
            <h3>Get In Touch</h3>
            <div class="contact-info">
                <p><i class="fas fa-envelope"></i> support@ieeeyesist12.org</p>
                <p>Get more updates</p>
                <div class="social-icons">
                    <a href="#" class="social-icon" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
                    <a href="#" class="social-icon" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                    <a href="#" class="social-icon" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
                    <a href="#" class="social-icon" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
                    <a href="#" class="social-icon" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
                </div>
            </div>
        </div>
    </div>
    <div class="footer-bottom">
        <p>Copyright &copy; <span id="copyright-year">2025</span> IEEE YESIST12. All rights reserved.</p>
    </div>
</footer>
`;

// This safer method adds the footer after the page loads
document.addEventListener('DOMContentLoaded', () => {
    const mainScript = document.querySelector('script[src="script.js"]');
    if (mainScript) {
        mainScript.insertAdjacentHTML('beforebegin', footerHTML);
    } else {
        document.body.insertAdjacentHTML('beforeend', footerHTML);
    }
});