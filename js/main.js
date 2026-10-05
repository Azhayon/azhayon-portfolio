/* ══════════════════════════════════════════
   NAVBAR — scroll behavior
══════════════════════════════════════════ */

const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});


/* ══════════════════════════════════════════
   NAVBAR — active link on scroll
══════════════════════════════════════════ */

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    const sectionTop    = section.offsetTop - 100;
    const sectionHeight = section.offsetHeight;
    if (window.scrollY >= sectionTop &&
        window.scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});


/* ══════════════════════════════════════════
   HAMBURGER — mobile menu toggle
══════════════════════════════════════════ */

const hamburger  = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('open');
  hamburger.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', isOpen);
});

// Close mobile menu when a link is clicked
document.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', false);
  });
});


/* ══════════════════════════════════════════
   TYPING ANIMATION — hero roles
══════════════════════════════════════════ */

const typingEl = document.getElementById('typingText');
const words    = ['Future Entrepreneur', 'Problem Solver', 'Open Source Fan'];
let wordIndex  = 0;
let charIndex  = 0;
let isDeleting = false;

function type() {
  if (!typingEl) return;

  const currentWord = words[wordIndex];

  if (isDeleting) {
    typingEl.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typingEl.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;
  }

  // Finished typing the word
  if (!isDeleting && charIndex === currentWord.length) {
    isDeleting = true;
    setTimeout(type, 1800);  // pause before deleting
    return;
  }

  // Finished deleting
  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex  = (wordIndex + 1) % words.length;
  }

  setTimeout(type, isDeleting ? 60 : 100);
}

type();


/* ══════════════════════════════════════════
   CONTACT FORM — Async submission
══════════════════════════════════════════ */

const contactForm = document.getElementById('contactForm');
const submitBtn   = document.getElementById('submitBtn');
const submitText  = document.getElementById('submitText');
const formSuccess = document.getElementById('formSuccess');
const formError   = document.getElementById('formError');

if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    submitBtn.disabled         = true;
    submitText.textContent     = 'Sending...';
    formSuccess.classList.remove('visible');
    formError.classList.remove('visible');

    try {
      const response = await fetch(contactForm.action, {
        method:  'POST',
        body:    new FormData(contactForm),
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        formSuccess.classList.add('visible');
        contactForm.reset();
        submitText.textContent = 'Message Sent!';
      } else {
        formError.classList.add('visible');
        submitText.textContent = 'Send Message';
      }
    } catch {
      formError.classList.add('visible');
      submitText.textContent = 'Send Message';
    } finally {
      submitBtn.disabled = false;
    }
  });
}