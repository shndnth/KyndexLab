document.addEventListener('DOMContentLoaded', () => {

    // ============================================
    // 1. HARMONIC DATA WAVES
    // ============================================
    const canvas = document.getElementById('bg-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let width, height;

        const config = {
            waveCount: 3,
            pointsCount: 100,
            colors: [
                'rgba(99, 102, 241, 0.5)',
                'rgba(168, 85, 247, 0.5)',
                'rgba(59, 130, 246, 0.3)'
            ],
            baseY: 0.5,
            amplitude: 80,
            speed: 0.005
        };

        let increment = 0;

        const setCanvasSize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            config.baseY = height / 2;
        };

        function animate() {
            ctx.clearRect(0, 0, width, height);
            increment += config.speed;

            for (let i = 0; i < config.waveCount; i++) {
                ctx.beginPath();
                ctx.lineWidth = 2;
                ctx.strokeStyle = config.colors[i];

                for (let j = 0; j < config.pointsCount; j++) {
                    const x = (j / (config.pointsCount - 1)) * width;

                    const frequency = j * 0.05 + increment + (i * 2);

                    const y = config.baseY + Math.sin(frequency) * config.amplitude;

                    if (j === 0) {
                        ctx.moveTo(x, y);
                    } else {
                        ctx.lineTo(x, y);
                    }
                }

                ctx.shadowBlur = 15;
                ctx.shadowColor = config.colors[i];
                ctx.stroke();
                ctx.shadowBlur = 0;
            }

            requestAnimationFrame(animate);
        }

        setCanvasSize();
        window.addEventListener('resize', setCanvasSize);
        animate();
    }

    // ============================================
    // 2. NAV BAR SCROLL EFFECT
    // ============================================
    const header = document.getElementById('header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // ============================================
    // 3. SCROLL REVEAL ANIMATIONS
    // ============================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));

    // ============================================
    // 4. MOBILE MENU TOGGLE
    // ============================================
    const mobileBtn = document.querySelector('.mobile-menu-toggle');
    const mobileOverlay = document.querySelector('.mobile-menu-overlay');
    const mobileLinks = document.querySelectorAll('.mobile-nav-links a');

    if (mobileBtn && mobileOverlay) {
        mobileBtn.addEventListener('click', () => {
            mobileBtn.classList.toggle('active');
            mobileOverlay.classList.toggle('active');
            document.body.style.overflow = mobileOverlay.classList.contains('active') ? 'hidden' : '';
        });

        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileBtn.classList.remove('active');
                mobileOverlay.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }

    // ============================================
    // 5. SMOOTH SCROLLING & ACTIVE LINK HIGHLIGHT
    // ============================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-links a');

        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (scrollY >= (sectionTop - 150)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    // ============================================
    // 6. PRIVACY POLICY & TERMS CARD TOGGLE
    // ============================================
    const legalCard = document.getElementById("legal-card");
    const legalTitle = document.getElementById("legal-title");
    const legalContent = document.getElementById("legal-content");

    const privacyBtn = document.getElementById("privacy-btn");
    const termsBtn = document.getElementById("terms-btn");
    const legalClose = document.getElementById("legal-close");

    const privacyText = `
    <h4>Privacy Policy</h4>
    <p>
    We respect your privacy. Any data submitted through this site is used only for communication purposes.
    No personal information is sold or shared with third parties.
    </p>
    `;

    const termsText = `
    <h4>Terms of Service</h4>
    <p>
    By using this website, you agree that all content is provided for informational purposes only.
    Unauthorized copying or misuse of materials is prohibited.
    </p>
    `;

    function openLegalCard(title, content) {
        legalTitle.innerText = title;
        legalContent.innerHTML = content;
        legalCard.classList.add("active");

        legalCard.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }

    privacyBtn.addEventListener("click", (e) => {
        e.preventDefault();
        openLegalCard("Privacy Policy", privacyText);
    });

    termsBtn.addEventListener("click", (e) => {
        e.preventDefault();
        openLegalCard("Terms of Service", termsText);
    });

    legalClose.addEventListener("click", () => {
        legalCard.classList.remove("active");
    });

});