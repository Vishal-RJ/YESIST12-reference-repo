const headerHTML = `
<header class="site-header">
    <div class="container header-container">
        <div class="logo">
            <a href="yesist_index.html"><img src="images/IEEE-YESIST12-Logo-1024x307-1.png" alt="YESIST12 Logo"></a>
        </div>
        <nav class="main-nav">
            <ul>
                <li><a href="yesist_index.html">HOME    </a></li>
                <li><a href="about-us.html">ABOUT US</a></li>
                <li class="has-dropdown">
                    <a href="#tracks">TRACKS</a>
                    <ul class="dropdown">
                        <li><a href="innovation_challenge.html">Innovation Challenge</a></li>
                        <li><a href="junior_einstein.html">Junior Einstein</a></li>
                        <li><a href="maker_fair.html">Maker Fair</a></li>
                        <li><a href="wepower.html">WePOWER Special Track</a></li>
                        <li><a href="special_track.html">Special Track</a></li>
                        <li><a href="iengage.html">IEngage Track</a></li>
                    </ul>
                </li>
                <li class="has-dropdown">
                    <a href="#">OUR TEAM</a>
                    <ul class="dropdown">
                        <li><a href="#">Steering Committee</a></li>
                        <li><a href="#">Organizing Committee</a></li>
                    </ul>
                </li>
                <li><a href="#">SPONSORS</a></li>
                <li><a href="#">JURY</a></li>
                <li><a href="#">SUBMIT ABSTRACT</a></li>
            </ul>
        </nav>
        <button class="hamburger" aria-label="Toggle Navigation">
            <i class="fas fa-bars"></i>
        </button>
    </div>
</header>
`;

// This safer method adds the header after the page loads
document.addEventListener('DOMContentLoaded', () => {
    document.body.insertAdjacentHTML('afterbegin', headerHTML);
});