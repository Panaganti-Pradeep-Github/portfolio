// Dark Mode Toggle
const themeBtn = document.getElementById('theme-toggle');
themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  themeBtn.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});

// Smooth Scroll
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});

// Scroll Animations
const faders = document.querySelectorAll('.fade-in, .slide-left, .slide-right, .project-card');
const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;
  faders.forEach(fader => {
    const faderTop = fader.getBoundingClientRect().top;
    if(faderTop < triggerBottom){
      fader.classList.add('show');
    }
  });
};
window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

// Animate Skill Bars
const skillBars = document.querySelectorAll('.progress');
const animateSkills = () => {
  const triggerBottom = window.innerHeight * 0.85;
  skillBars.forEach(bar => {
    const barTop = bar.getBoundingClientRect().top;
    if(barTop < triggerBottom){
      bar.style.width = bar.getAttribute('data-width');
    }
  });
};
window.addEventListener('scroll', animateSkills);
animateSkills();
