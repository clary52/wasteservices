document.addEventListener('DOMContentLoaded', function () {

    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');

    if (navToggle) {
        navToggle.addEventListener('click', function () {
            navMenu.classList.toggle('active');

            const spans = navToggle.querySelectorAll('span');
            if (navMenu.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(6px, 6px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(6px, -6px)';
            } else {
                spans.forEach(span => {
                    span.style.transform = 'none';
                    span.style.opacity = '1';
                });
            }
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (!target) return;

            const offset = 80;
            const y = target.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        });
    });

    // Active menu highlight
    function highlightActiveSection() {
        const sections = document.querySelectorAll('section[id]');
        let scrollPos = window.scrollY + 120;

        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');

            if (scrollPos >= top && scrollPos < top + height) {
                navLinks.forEach(link => {
                    link.classList.toggle(
                        'active',
                        link.getAttribute('href') === `#${id}`
                    );
                });
            }
        });
    }

    window.addEventListener('scroll', highlightActiveSection);
    highlightActiveSection();
});
// Navbar scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});
// Animate statistics numbers
const statNumbers = document.querySelectorAll('.stat-number');
const animateNumber = (element) => {
    const target = +element.dataset.target;
    const suffix = element.dataset.suffix || '';
    let current = 0;
    const increment = Math.ceil(target / 9999);

    const updateNumber = () => {
        current += increment;
        if (current >= target) {
            element.textContent = target + suffix;
            element.classList.add('active');
        } else {
            element.textContent = current + suffix;
            requestAnimationFrame(updateNumber);
        }
    };

    updateNumber();
};
const statsObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateNumber(entry.target);
            statsObserver.unobserve(entry.target); // una sola volta
        }
    });
}, {
    threshold: 0.6
});

statNumbers.forEach(stat => {
    statsObserver.observe(stat);
});