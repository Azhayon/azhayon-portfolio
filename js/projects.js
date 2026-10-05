/* ══════════════════════════════════════════
   PROJECTS — Filter logic
══════════════════════════════════════════ */

const projectTabs  = document.querySelectorAll('.projects__tab');
const projectCards = document.querySelectorAll('.project-card');

projectTabs.forEach(tab => {
  tab.addEventListener('click', () => {

    // 1. Update active tab
    projectTabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    // 2. Filter cards
    const filter = tab.dataset.filter;

    projectCards.forEach(card => {
      if (filter === 'all' || card.dataset.category === filter) {
        card.classList.remove('hidden');

        // Re-trigger the entrance animation
        card.style.animation = 'none';
        card.offsetHeight;   // force reflow
        card.style.animation = '';
      } else {
        card.classList.add('hidden');
      }
    });

  });
});