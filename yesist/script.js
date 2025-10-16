document.addEventListener("DOMContentLoaded", function () {
    // --- Hamburger Menu Toggle ---
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.main-nav');
    if (hamburger && nav) {
        hamburger.addEventListener('click', () => {
            nav.classList.toggle('nav-open');
        });
    }

    // --- Footer Copyright Year ---
    const yearSpan = document.getElementById('copyright-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // --- Scroll-to-Top Button ---
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    if (scrollTopBtn) {
        window.onscroll = function () {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                scrollTopBtn.classList.add('show');
            } else {
                scrollTopBtn.classList.remove('show');
            }
        };
        scrollTopBtn.addEventListener('click', function () {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // --- Scroll Animations ---
    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("in-view");
                scrollObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.scroll-animate').forEach(el => {
        scrollObserver.observe(el);
    });

    // --- FAQ Accordion ---
    document.querySelectorAll(".faq-item").forEach((item) => {
        const question = item.querySelector('.faq-question');
        if (question) {
            question.addEventListener("click", () => {
                const wasActive = item.classList.contains("active");
                document.querySelectorAll(".faq-item").forEach((i) => {
                    if (i !== item) { i.classList.remove("active"); }
                });
                if (!wasActive) { item.classList.add("active"); }
            });
        }
    });

    // --- Interactive World Map ---
    if (document.getElementById('map') && typeof jsVectorMap !== 'undefined') {
        const hostData = {
            'ID': { event: 'Grand Finale', year: 2026 },
            'MY': { event: 'Grand Finale', year: 2025 },
            'TN': { event: 'Grand Finale', year: 2024 },
            'EG': { event: 'Grand Finale', year: 2023 },
            'IN': { event: 'Grand Finale / AISYWLC', year: '2022, 2017, 2016' },
            'TH': { event: 'Grand Finale', year: 2019 },
            'LK': { event: 'Grand Finale', year: 2018 }
        };
        const hostColors = {};
        const greenColor = '#28a745';
        for (const countryCode in hostData) { hostColors[countryCode] = greenColor; }
        new jsVectorMap({
            selector: '#map', map: 'world', zoomButtons: false, zoomOnScroll: false,
            regionStyle: { initial: { fill: '#e0e0e0' }, hover: { fill: greenColor } },
            series: { regions: [{ values: hostColors, attribute: 'fill' }] },
            onRegionTooltipShow(event, tooltip, code) {
                if (hostData[code]) {
                    const eventInfo = hostData[code];
                    tooltip.html(`<b>${tooltip.text()}</b><br><b>Event:</b> ${eventInfo.event}<br><b>Year(s):</b> ${eventInfo.year}`);
                } else { event.preventDefault(); }
            }
        });
    }

    // --- Latest Updates Slider ---
    const wrapper = document.querySelector('.updates-wrapper');
    const items = document.querySelectorAll('.update-item');
    const prevBtn = document.getElementById('prev-update');
    const nextBtn = document.getElementById('next-update');

    if (wrapper && items.length > 0 && prevBtn && nextBtn) {
        let currentIndex = 0;
        const totalItems = items.length;

        function showUpdate(index) {
            const offset = -index * 100;
            wrapper.style.transform = `translateX(${offset}%)`;
        }

        function nextUpdate() {
            currentIndex = (currentIndex + 1) % totalItems;
            showUpdate(currentIndex);
        }

        function prevUpdate() {
            currentIndex = (currentIndex - 1 + totalItems) % totalItems;
            showUpdate(currentIndex);
        }

        nextBtn.addEventListener('click', nextUpdate);
        prevBtn.addEventListener('click', prevUpdate);

        let autoScroll = setInterval(nextUpdate, 5000);

        const panel = document.querySelector('.updates-panel');
        panel.addEventListener('mouseenter', () => clearInterval(autoScroll));
        panel.addEventListener('mouseleave', () => autoScroll = setInterval(nextUpdate, 5000));
        
        showUpdate(currentIndex);
    }

    // --- Prize Number Counter Animation ---
    const counterObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counters = entry.target.querySelectorAll('.counter');
                counters.forEach(counter => {
                    const updateCount = () => {
                        const target = +counter.getAttribute('data-value');
                        const count = +counter.innerText;
                        const increment = target / 100;

                        if (count < target) {
                            counter.innerText = Math.ceil(count + increment);
                            setTimeout(updateCount, 15);
                        } else {
                            counter.innerText = target.toLocaleString('en-US'); 
                        }
                    };
                    updateCount();
                });
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    const rewardsSection = document.getElementById('rewards');
    if (rewardsSection) {
        counterObserver.observe(rewardsSection);
    }
});