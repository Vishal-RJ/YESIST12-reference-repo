document.addEventListener('DOMContentLoaded', function() {
    // Hamburger menu functionality
    //
    // --- THIS IS THE CRITICAL FIX ---
    // Changed getElementById to querySelector to find by CLASS
    //
    const hamburger = document.querySelector('.hamburger'); // Use .hamburger class
    const mainNav = document.querySelector('.main-nav');   // Use .main-nav class

    if (hamburger && mainNav) {
        hamburger.addEventListener('click', function() {
            mainNav.classList.toggle('nav-open');
            // Toggle icon between bars and times
            this.querySelector('i').classList.toggle('fa-bars');
            this.querySelector('i').classList.toggle('fa-times');
        });
    }

    // Dropdown menu toggle for mobile
    const dropdownToggles = document.querySelectorAll('.has-dropdown > a');
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function(event) {
            if (window.innerWidth <= 992) { // Only on smaller screens
                event.preventDefault();
                const parentLi = this.parentElement;
                parentLi.classList.toggle('active');

                // Close other open dropdowns (Ensure mainNav is defined correctly above)
                if (mainNav) {
                    const otherDropdowns = mainNav.querySelectorAll('.has-dropdown.active');
                    otherDropdowns.forEach(otherLi => {
                        if (otherLi !== parentLi) {
                            otherLi.classList.remove('active');
                        }
                    });
                }
            }
        });
    });

    // Close mobile nav when a link is clicked
    if (mainNav) {
        mainNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function(event) {
                // Only close if it's not a dropdown toggle
                if (!this.closest('.has-dropdown')) {
                    // Ensure hamburger is defined correctly above
                    if (mainNav.classList.contains('nav-open') && hamburger) {
                        mainNav.classList.remove('nav-open');
                        hamburger.querySelector('i').classList.remove('fa-times');
                        hamburger.querySelector('i').classList.add('fa-bars');
                    }
                }
            });
        });
    }

    // Close nav if clicking outside on mobile
    document.addEventListener('click', function(event) {
        // Ensure mainNav and hamburger are defined correctly above
        if (window.innerWidth <= 992 && mainNav && hamburger) {
            if (mainNav.classList.contains('nav-open') && !mainNav.contains(event.target) && !hamburger.contains(event.target)) {
                mainNav.classList.remove('nav-open');
                hamburger.querySelector('i').classList.remove('fa-times');
                hamburger.querySelector('i').classList.add('fa-bars');
            }
        }
    });


    // --- (Rest of your script.js code remains the same) ---

    // Scroll to top button functionality
    const scrollTopBtn = document.getElementById('scrollTopBtn'); // Assuming this ID exists in your footer.js or HTML

    window.addEventListener('scroll', function() {
        if (scrollTopBtn) {
            if (window.scrollY > 300) { // Show button after scrolling down 300px
                scrollTopBtn.classList.add('show');
            } else {
                scrollTopBtn.classList.remove('show');
            }
        }
    });

    if (scrollTopBtn) {
        scrollTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Map initialization for Global Reach section (Only runs if #map exists)
    const mapElement = document.getElementById('map');
    if (mapElement) {
        new jsVectorMap({
            selector: "#map",
            map: "world",
            markers: [
                { name: "Malaysia", coords: [4.2105, 101.9758] },
                { name: "India", coords: [20.5937, 78.9629] },
                { name: "USA", coords: [37.0902, -95.7129] },
                { name: "UK", coords: [55.3781, -3.4360] },
            ],
            regionStyle: {
                initial: { fill: '#D2E3F0' },
                hover: { fill: '#80B3E8' }
            },
            markerStyle: {
                initial: {
                    fill: '#FF5733',
                    stroke: '#FFF',
                    "stroke-width": 4,
                    "stroke-opacity": 0.5
                },
                hover: { fill: '#C70039' }
            },
            labels: {
                regions: {
                    render: function(code) { return; } // No labels
                }
            },
        });
    }

    // Scroll animation for sections
    const animateOnScroll = () => {
        const sections = document.querySelectorAll('.scroll-animate');
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const triggerPoint = window.innerHeight * 0.8;

            if (sectionTop < triggerPoint) {
                section.classList.add('in-view');
            } else {
                // Optional: remove class if you want animation to repeat when scrolling up
                // section.classList.remove('in-view');
            }
        });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run on load

    // Latest Updates Ticker (Only runs if elements exist)
    const updatesWrapper = document.querySelector('.updates-wrapper');
    const updateItems = document.querySelectorAll('.update-item');
    const prevUpdateBtn = document.getElementById('prev-update');
    const nextUpdateBtn = document.getElementById('next-update');
    let currentIndex = 0;

    if (updatesWrapper && updateItems.length > 0) {
        const showUpdate = (index) => {
            updatesWrapper.style.transform = `translateX(-${index * 100}%)`;
        };

        const updateButtons = () => {
            if (prevUpdateBtn) prevUpdateBtn.disabled = currentIndex === 0;
            if (nextUpdateBtn) nextUpdateBtn.disabled = currentIndex === updateItems.length - 1;
        };

        if (nextUpdateBtn) {
            nextUpdateBtn.addEventListener('click', () => {
                if (currentIndex < updateItems.length - 1) {
                    currentIndex++;
                    showUpdate(currentIndex);
                    updateButtons();
                }
            });
        }

        if (prevUpdateBtn) {
            prevUpdateBtn.addEventListener('click', () => {
                if (currentIndex > 0) {
                    currentIndex--;
                    showUpdate(currentIndex);
                    updateButtons();
                }
            });
        }

        // Initialize
        showUpdate(currentIndex);
        updateButtons();
    }
});
