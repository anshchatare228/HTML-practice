document.addEventListener('DOMContentLoaded', () => {
        // --- 1. Magical Particle Background ---
    const canvas = document.getElementById('particleCanvas');
    let ctx = null;

    if (canvas) {
        ctx = canvas.getContext('2d');

        let particles = [];
        const particleCount = 100;

        function resize() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }

        window.addEventListener('resize', resize);
        resize();

        class Particle {
            constructor() {
                this.init();
            }

            init() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 2 + 0.5;
                this.speedX = Math.random() * 0.5 - 0.25;
                this.speedY = Math.random() * -0.5 - 0.1; // Float upwards
                this.opacity = Math.random() * 0.5 + 0.2;
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                // Reset if out of bounds
                if (this.y < 0) {
                    this.y = canvas.height;
                    this.x = Math.random() * canvas.width;
                }
            }

            draw() {
                ctx.fillStyle = `rgba(212, 175, 55, ${this.opacity})`; // Gold color
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        function initParticles() {
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => {
                p.update();
                p.draw();
            });
            requestAnimationFrame(animate);
        }

        initParticles();
        animate();
    } else {
        console.warn('No #particleCanvas found — skipping particle background.');
    }


    // --- 2. Scroll Reveal Animation ---
    // This finds all elements with the 'reveal' class and animates them as you scroll
    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    };

    const revealObserver = new IntersectionObserver(revealCallback, {
        threshold: 0.5 // Trigger when 50% of the element is visible
    });

    document.querySelectorAll('.reveal, .scroll-fade').forEach(el => {
        revealObserver.observe(el);
    });


    // --- 3. Smooth Header Transition ---
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('py-2', 'bg-slate-950/80');
            nav.classList.remove('py-4', 'bg-transparent');
        } else {
            nav.classList.add('py-4');
            nav.classList.remove('py-2', 'bg-slate-950/80');
        }
    });
});
