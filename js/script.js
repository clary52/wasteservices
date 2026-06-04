document.addEventListener('DOMContentLoaded', function () {

    // ── Mobile nav toggle ──────────────────────────────────
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu   = document.querySelector('.nav-menu');
    const navLinks  = document.querySelectorAll('.nav-menu a');

    if (navToggle) {
        navToggle.addEventListener('click', function () {
            navMenu.classList.toggle('active');
            const spans = navToggle.querySelectorAll('span');
            if (navMenu.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(6px, 6px)';
                spans[1].style.opacity   = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(6px, -6px)';
            } else {
                spans.forEach(s => { s.style.transform = 'none'; s.style.opacity = '1'; });
            }
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle?.querySelectorAll('span').forEach(s => {
                s.style.transform = 'none'; s.style.opacity = '1';
            });
        });
    });

    // ── Smooth scroll ──────────────────────────────────────
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (!target) return;
            e.preventDefault();
            window.scrollTo({ top: target.getBoundingClientRect().top + window.pageYOffset - 80, behavior: 'smooth' });
        });
    });

    // ── Active nav highlight (IntersectionObserver) ────────
    // Più preciso dello scroll + offsetTop: usa l'observer nativo
    const sections = Array.from(document.querySelectorAll('section[id]'));

    const navObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    const isActive = link.getAttribute('href') === `#${id}`;
                    link.classList.toggle('active', isActive);
                    // Pill indicator: aggiunge/rimuove classe con transizione
                    if (isActive) {
                        link.setAttribute('aria-current', 'true');
                    } else {
                        link.removeAttribute('aria-current');
                    }
                });
            }
        });
    }, {
        rootMargin: '-30% 0px -60% 0px', // attiva quando la sezione occupa la fascia centrale dello schermo
        threshold: 0
    });

    sections.forEach(s => navObserver.observe(s));

    // ── Navbar scroll shadow + colore ─────────────────────
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        header?.classList.toggle('scrolled', window.scrollY > 50);
    }, { passive: true });

    // ── Scroll Reveal ──────────────────────────────────────
    const revealEls = document.querySelectorAll('.reveal, .reveal-up, .reveal-left, .reveal-right');

    const revealObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach(el => revealObserver.observe(el));

    // ── Animate stat numbers ───────────────────────────────
    const animateNumber = (el) => {
        const target   = +el.dataset.target;
        const suffix   = el.dataset.suffix || '';
        const duration = 1400;
        const start    = performance.now();
        const tick = (now) => {
            const eased = 1 - Math.pow(1 - Math.min((now - start) / duration, 1), 3);
            el.textContent = Math.round(eased * target) + suffix;
            if (eased < 1) requestAnimationFrame(tick);
            else el.classList.add('active');
        };
        requestAnimationFrame(tick);
    };

    const statsObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateNumber(entry.target);
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.stat-number').forEach(el => statsObserver.observe(el));
});
