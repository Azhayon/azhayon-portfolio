/* ══════════════════════════════════════════
   SCROLL ANIMATIONS — General Elements
══════════════════════════════════════════ */
const animatedElements = document.querySelectorAll('.fade-up, .fade-in');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // animate once only
    }
  });
}, {
  threshold: 0.12,       // trigger when 12% of element is visible
  rootMargin: '0px 0px -40px 0px'  // slight offset from bottom
});

animatedElements.forEach(el => observer.observe(el));


/* ══════════════════════════════════════════
   SKILLS — Tab Filter Logic
══════════════════════════════════════════ */
const skillTabs  = document.querySelectorAll('.skills__tab');
const skillCards = document.querySelectorAll('.skill-card');

skillTabs.forEach(tab => {
  tab.addEventListener('click', () => {

    // 1. Update active tab style
    skillTabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    // 2. Show / hide skill cards
    const filter = tab.dataset.filter;

    skillCards.forEach(card => {
      if (filter === 'all' || card.dataset.category === filter) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });
  });
});


/* ══════════════════════════════════════════
   SKILLS — Skill Bar Animation on Scroll
══════════════════════════════════════════ */
function animateSkillBars() {
  const bars = document.querySelectorAll('.skill-bar__fill');
  bars.forEach(bar => {
    const targetWidth = bar.dataset.width + '%';
    bar.style.width = targetWidth;
  });
}

// Trigger once the skills section enters the viewport
const skillsSection = document.querySelector('.skills');

const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateSkillBars();
      skillObserver.unobserve(entry.target); // only animate once
    }
  });
}, { threshold: 0.2 });

if (skillsSection) {
  skillObserver.observe(skillsSection);
}