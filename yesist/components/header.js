// --- DYNAMIC PATH WORKAROUND ---
// This script checks if the current page is in a subfolder.
const isTrackPage = window.location.pathname.includes('/tracks/');
const basePath = isTrackPage ? '../' : '';

const headerHTML = `
<header class="site-header">
    <div class="container header-container">
        <div class="logo">
            <!-- ⭐ FIX: The 'basePath' variable is added to the start of paths -->
            <a href="${basePath}yesist_index.html"><img src="${basePath}images/IEEE-YESIST12-Logo-1024x307-1.png" alt="YESIST12 Logo"></a>
        </div>
        <nav class="main-nav">
            <ul>
                <!-- ⭐ FIX: All paths now use the dynamic 'basePath' variable -->
                <li><a href="${basePath}yesist_index.html">HOME</a></li>
                <li><a href="${basePath}about-us.html">ABOUT US</a></li>
                <li class="has-dropdown">
                    <a href="#">TRACKS</a>
                    <ul class="dropdown">
                        <li><a href="${basePath}tracks/innovtion_challenge.html">Innovation Challenge</a></li>
                        <li><a href="${basePath}tracks/junior_einstein.html">Junior Einstein</a></li>
                        <li><a href="${basePath}tracks/maker_fair.html">Maker Fair</a></li>
                        <li><a href="${basePath}tracks/wepower.html">WePOWER Special Track</a></li>
                        <li><a href="${basePath}tracks/special_track.html">Special Track</a></li>
                        <li><a href="${basePath}tracks/iengage.html">IEngage Track</a></li>
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

// This inserts the HTML at the top of the <body>
document.body.insertAdjacentHTML('afterbegin', headerHTML);

