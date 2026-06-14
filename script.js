// Aranya by Kumar Builders - Sovereign Interactivity Ecosystem

document.addEventListener('DOMContentLoaded', () => {
    
    // 0. Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
        
        // Close menu on link click
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }

    // 1. Overture Preloader
    const loader = document.getElementById('loader');
    const loaderLine = document.querySelector('.loader-line span');
    const loaderLogo = document.querySelector('.loader-logo');

    if (loader) {
        gsap.to(loaderLine, { width: '100%', duration: 1.5, ease: 'power2.inOut' });
        gsap.to(loaderLogo, { opacity: 1, y: 0, duration: 1, delay: 0.5 });
        
        setTimeout(() => {
            gsap.to(loader, {
                yPercent: -100,
                duration: 1,
                ease: 'expo.inOut',
                onComplete: () => {
                    loader.style.display = 'none';
                    document.body.style.overflow = 'auto';
                    triggerHeroAnimations();
                }
            });
        }, 2000);
    }

    // 2. Hero Animations
    function triggerHeroAnimations() {
        gsap.from('.hero h1', { y: 100, opacity: 0, duration: 1.5, ease: 'power4.out' });
        gsap.from('.hero p', { y: 50, opacity: 0, duration: 1.5, delay: 0.4, ease: 'power4.out' });
        gsap.from('.hero .btn', { y: 30, opacity: 0, duration: 1.2, delay: 0.8, ease: 'power4.out' });
    }

    // 3. Scroll Orchestration (GSAP ScrollTrigger)
    gsap.utils.toArray('section, .full-image-parallax').forEach(el => {
        gsap.from(el, {
            scrollTrigger: {
                trigger: el,
                start: 'top 85%',
                toggleActions: 'play none none none'
            },
            y: 60,
            opacity: 0,
            duration: 1.2,
            ease: 'power3.out'
        });
    });

    // 3.5 Image Parallax (Ecology)
    if(document.querySelector('.ecology-image-parallax img')) {
        gsap.to('.ecology-image-parallax img', {
            yPercent: 20,
            ease: 'none',
            scrollTrigger: {
                trigger: '.ecology-image-parallax',
                start: 'top bottom',
                end: 'bottom top',
                scrub: true
            }
        });
    }

    // 4. Opening Modal Logic
    const openingModal = document.getElementById('main-opening-modal');
    if (openingModal && !localStorage.getItem('aranya_opening_seen')) {
        setTimeout(() => {
            openingModal.classList.add('active');
            gsap.from('.opening-modal-container', { scale: 0.8, opacity: 0, duration: 0.8, ease: 'back.out(1.7)' });
        }, 5000);
    }

    document.getElementById('opening-close')?.addEventListener('click', () => {
        gsap.to('.opening-modal-container', { scale: 0.8, opacity: 0, duration: 0.5, onComplete: () => {
            openingModal.classList.remove('active');
            localStorage.setItem('aranya_opening_seen', 'true');
        }});
    });

    // 5. ROI Calculator Engine
    const yearsSlider = document.getElementById('years-slider');
    const yearsVal = document.getElementById('years-val');
    const resYears = document.getElementById('res-years');
    const projectedValue = document.getElementById('projected-value');

    if (yearsSlider) {
        yearsSlider.addEventListener('input', (e) => {
            const years = e.target.value;
            yearsVal.innerText = years;
            resYears.innerText = years;
            
            // Formula: Value = 1.47 * (1 + 0.122)^years
            const initial = 1.47;
            const growth = 0.122;
            const finalValue = initial * Math.pow(1 + growth, years);
            const appreciation = (((finalValue - initial) / initial) * 100).toFixed(0);
            
            projectedValue.innerText = `₹${finalValue.toFixed(2)} Cr`;
            projectedValue.nextElementSibling.innerText = `+${appreciation}% Est. Appreciation`;
        });
    }

    // 6. Magnetic Navbar Links & Scroll Effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    const magneticLinks = document.querySelectorAll('.nav-links a');
    magneticLinks.forEach(link => {
        link.addEventListener('mousemove', (e) => {
            const rect = link.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            gsap.to(link, {
                x: x * 0.3,
                y: y * 0.3,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
        
        link.addEventListener('mouseleave', () => {
            gsap.to(link, {
                x: 0,
                y: 0,
                duration: 0.5,
                ease: 'elastic.out(1, 0.3)'
            });
        });
    });

    // 8. Counter Animation for Market Stats
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
        const target = parseFloat(counter.innerText.replace(/[^0-9.]/g, ''));
        const suffix = counter.innerText.replace(/[0-9.]/g, '');
        
        counter.innerText = '0' + suffix;

        gsap.to(counter, {
            scrollTrigger: {
                trigger: counter,
                start: 'top 90%',
            },
            innerText: target,
            duration: 2,
            ease: 'power2.out',
            snap: { innerText: 0.1 },
            onUpdate: function() {
                const val = parseFloat(this.targets()[0].innerText);
                counter.innerText = (val % 1 === 0 ? val : val.toFixed(1)) + suffix;
            }
        });
    });

    // 9. Multi-step Form Logic
    let currentStep = 1;
    const totalSteps = 3;
    const profiler = document.getElementById('investmentProfiler');
    if (profiler) {
        const steps = profiler.querySelectorAll('.form-step');
        const dots = profiler.querySelectorAll('.dot');
        const nextBtn = document.getElementById('nextBtn');
        const prevBtn = document.getElementById('prevBtn');

        function updateStep(step) {
            steps.forEach(s => s.style.display = 'none');
            const targetStep = profiler.querySelector(`.form-step[data-step="${step}"]`);
            if (targetStep) targetStep.style.display = 'block';
            
            dots.forEach((dot, idx) => {
                dot.classList.toggle('active', idx < step);
            });

            prevBtn.style.display = step === 1 ? 'none' : 'block';
            nextBtn.innerText = step === totalSteps ? 'Complete' : 'Next Step';
            if (step === totalSteps) nextBtn.style.display = 'none';
        }

        profiler.querySelectorAll('.option-card').forEach(card => {
            card.addEventListener('click', function() {
                const stepOptions = this.parentElement.querySelectorAll('.option-card');
                stepOptions.forEach(opt => opt.classList.remove('selected'));
                this.classList.add('selected');
                
                setTimeout(() => {
                    if (currentStep < totalSteps) {
                        currentStep++;
                        updateStep(currentStep);
                    }
                }, 400);
            });
        });

        nextBtn.addEventListener('click', () => {
            if (currentStep < totalSteps) {
                currentStep++;
                updateStep(currentStep);
            }
        });

        prevBtn.addEventListener('click', () => {
            if (currentStep > 1) {
                currentStep--;
                updateStep(currentStep);
            }
        });
    }

    // 10. Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // 11. Breadcrumb Active State
    const breadcrumbLinks = document.querySelectorAll('.breadcrumb a');
    const sections = document.querySelectorAll('section, header');
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const top = section.offsetTop - 200;
            if (window.scrollY >= top) {
                current = section.getAttribute('id');
            }
        });
        breadcrumbLinks.forEach(link => {
            link.style.color = link.getAttribute('href') === '#' + current
                ? 'var(--secondary)'
                : 'rgba(255,255,255,0.5)';
        });
    });

    // 12. Live Inventory Sync Engine
    const grid = document.getElementById('plot-grid');
    const totalPlots = 85;
    let availableCount = 0;
    
    if (grid) {
        // Generate plots
        const plots = [];
        for (let i = 1; i <= totalPlots; i++) {
            const plot = document.createElement('div');
            plot.classList.add('plot-box');
            plot.innerText = i < 10 ? `0${i}` : i;
            plot.dataset.id = i;
            
            // Random initial status
            const rand = Math.random();
            if (rand < 0.3) {
                plot.classList.add('plot-sold');
                plot.dataset.status = 'sold';
            } else if (rand < 0.5) {
                plot.classList.add('plot-reserved');
                plot.dataset.status = 'reserved';
            } else {
                plot.classList.add('plot-avail');
                plot.dataset.status = 'avail';
                availableCount++;
            }
            
            grid.appendChild(plot);
            plots.push(plot);
        }
        
        // Initial counters
        document.getElementById('stat-total').innerText = totalPlots;
        const availCounter = document.getElementById('stat-avail');
        availCounter.innerText = availableCount;
        
        // Live Simulation Loop
        const names = ['S***', 'V***', 'A***', 'R***', 'M***', 'P***', 'N***', 'K***'];
        const sizes = ['2300 SQFT', '3500 SQFT', '5500 SQFT'];
        const feedList = document.getElementById('live-feed-list');
        
        setInterval(() => {
            // Find available plots
            const availablePlots = plots.filter(p => p.dataset.status === 'avail');
            if (availablePlots.length === 0) return;
            
            // Pick a random available plot and reserve it
            const targetPlot = availablePlots[Math.floor(Math.random() * availablePlots.length)];
            targetPlot.classList.remove('plot-avail');
            targetPlot.classList.add('plot-reserved');
            targetPlot.dataset.status = 'reserved';
            
            // Update counter
            availableCount--;
            
            // Animate counter update
            gsap.to(availCounter, {
                innerText: availableCount,
                duration: 0.5,
                snap: { innerText: 1 },
                color: '#ff9800', // Flash orange
                onComplete: () => {
                    gsap.to(availCounter, { color: 'var(--secondary)', duration: 0.5 });
                }
            });
            
            // Add to activity feed
            const randName = names[Math.floor(Math.random() * names.length)];
            const randSize = sizes[Math.floor(Math.random() * sizes.length)];
            const plotNum = targetPlot.innerText;
            
            const li = document.createElement('li');
            li.innerHTML = `<strong>Plot ${plotNum}</strong> (${randSize}) reserved by ${randName}`;
            feedList.insertBefore(li, feedList.firstChild);
            
            // Keep feed short
            if (feedList.children.length > 4) {
                feedList.removeChild(feedList.lastChild);
            }
            
        }, Math.floor(Math.random() * 15000) + 15000); // Trigger every 15-30 seconds
    }

    // 10. Smooth Scrolling (Lenis)
    if (typeof Lenis !== 'undefined') {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
            mouseMultiplier: 1,
            smoothTouch: false,
            touchMultiplier: 2,
            infinite: false,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
    }

    // 11. Data Counters
    const statCounters = document.querySelectorAll('.stat-counter');
    if (statCounters.length > 0) {
        statCounters.forEach(counter => {
            gsap.from(counter, {
                scrollTrigger: {
                    trigger: counter,
                    start: 'top 90%',
                    toggleActions: 'play none none none'
                },
                textContent: 0,
                duration: 2.5,
                ease: 'power1.out',
                snap: { textContent: 1 },
                stagger: 1,
            });
        });
    }

    // 12. Custom Cursor
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');
    
    if (cursorDot && cursorOutline) {
        window.addEventListener('mousemove', function (e) {
            const posX = e.clientX;
            const posY = e.clientY;
            
            cursorDot.style.left = `${posX}px`;
            cursorDot.style.top = `${posY}px`;
            
            cursorOutline.animate({
                left: `${posX}px`,
                top: `${posY}px`
            }, { duration: 500, fill: "forwards" });
        });

        document.querySelectorAll('a, button, .blueprint-link').forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursorOutline.classList.add('expand');
            });
            el.addEventListener('mouseleave', () => {
                cursorOutline.classList.remove('expand');
            });
        });
    }

    // 13. Multilingual Trust Engine (Marathi/English)
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        let currentLang = 'en';
        langToggle.addEventListener('click', () => {
            currentLang = currentLang === 'en' ? 'mr' : 'en';
            langToggle.textContent = currentLang === 'en' ? 'मराठी' : 'English';
            
            const translatableElements = document.querySelectorAll('.translatable');
            translatableElements.forEach(el => {
                if (el.hasAttribute(`data-${currentLang}`)) {
                    // Use a subtle fade effect for trust/premium feel
                    gsap.to(el, {
                        opacity: 0,
                        duration: 0.2,
                        onComplete: () => {
                            el.textContent = el.getAttribute(`data-${currentLang}`);
                            gsap.to(el, { opacity: 1, duration: 0.2 });
                        }
                    });
                }
            });
        });
    }
    }

    // 14. Construction Progress Bars
    const progressFills = document.querySelectorAll('.progress-bar-fill');
    if (progressFills.length > 0) {
        progressFills.forEach(bar => {
            const targetWidth = bar.getAttribute('data-width');
            gsap.to(bar, {
                scrollTrigger: {
                    trigger: bar,
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                },
                width: targetWidth + '%',
                duration: 2,
                ease: 'power3.out'
            });
        });

        // Also animate the percentage numbers
        const progressPercents = document.querySelectorAll('.progress-percent');
        progressPercents.forEach(counter => {
            const target = counter.getAttribute('data-target');
            gsap.to(counter, {
                scrollTrigger: {
                    trigger: counter,
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                },
                textContent: target,
                duration: 2,
                ease: 'power1.out',
                snap: { textContent: 1 },
                onUpdate: function() {
                    counter.textContent = Math.round(this.targets()[0].textContent) + '%';
                }
            });
        });
    }
    }

    // 15. ROI Calculator Engine
    const roiInvestment = document.getElementById('roi-investment');
    const roiYears = document.getElementById('roi-years');
    const roiResult = document.getElementById('roi-result');
    const roiInvestmentVal = document.getElementById('roi-investment-val');
    const roiYearsVal = document.getElementById('roi-years-val');

    if (roiInvestment && roiYears && roiResult) {
        const calculateROI = () => {
            const principal = parseFloat(roiInvestment.value);
            const years = parseInt(roiYears.value);
            const rate = 0.18; // 18% CAGR

            // Compound Interest: A = P(1 + r)^t
            const amount = principal * Math.pow(1 + rate, years);
            
            roiInvestmentVal.textContent = `₹ ${principal.toFixed(2)} Cr`;
            roiYearsVal.textContent = `${years} Year${years > 1 ? 's' : ''}`;
            roiResult.textContent = `₹ ${amount.toFixed(2)} Cr`;
        };

        roiInvestment.addEventListener('input', calculateROI);
        roiYears.addEventListener('input', calculateROI);
        calculateROI(); // Initial calculation
    }

    // 16. Interactive Masterplan Matrix
    const matrixGrid = document.getElementById('matrix-grid');
    if (matrixGrid) {
        const totalPlots = 185;
        for (let i = 1; i <= totalPlots; i++) {
            const plot = document.createElement('div');
            plot.classList.add('matrix-plot');
            plot.textContent = i;
            
            // Randomly assign status
            const rand = Math.random();
            let status = 'Available';
            if (rand > 0.85) {
                status = 'Sold Out';
                plot.classList.add('plot-sold');
            } else if (rand > 0.65) {
                status = 'Reserved';
                plot.classList.add('plot-reserved');
            } else {
                plot.classList.add('plot-available');
            }

            // Size assignment
            const size = (Math.floor(Math.random() * (5500 - 2200)) + 2200) + ' SQFT';

            // Tooltip
            const tooltip = document.createElement('div');
            tooltip.classList.add('plot-tooltip');
            tooltip.innerHTML = `<strong>Plot ${i}</strong><br>${size}<br><span style="color: ${status === 'Available' ? 'var(--secondary)' : (status === 'Sold Out' ? '#e74c3c' : '#999')}">${status}</span>`;
            plot.appendChild(tooltip);

            matrixGrid.appendChild(plot);
        }
    }

    // 17. AI Concierge Toggle
    const aiBtn = document.getElementById('ai-concierge-btn');
    const aiChat = document.getElementById('ai-chat-window');
    const aiClose = document.getElementById('close-chat');

    if (aiBtn && aiChat && aiClose) {
        aiBtn.addEventListener('click', () => {
            aiChat.style.display = 'flex';
            gsap.fromTo(aiChat, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.3, ease: 'power2.out' });
        });

        aiClose.addEventListener('click', () => {
            gsap.to(aiChat, { y: 50, opacity: 0, duration: 0.2, ease: 'power2.in', onComplete: () => { aiChat.style.display = 'none'; } });
        });
    }

});
