const resumeData = {
  name: 'Your Name',
  title: 'Frontend Developer & Problem Solver',
  summary:
    'I build modern, responsive, and user-friendly web experiences with a strong focus on clean code, accessibility, and thoughtful design.',
  about:
    'I am a dedicated developer with experience crafting polished digital products for startups and clients. My work combines technical precision with a strong eye for user experience, turning ideas into engaging and reliable web interfaces.',
  facts: ['Based in Your City', 'Open to remote opportunities', 'Passionate about UI/UX and performance'],
  experience: [
    {
      role: 'Frontend Developer',
      company: 'Example Studio',
      period: '2022 — Present',
      details: 'Led the redesign of client-facing web experiences and improved page performance by 35%.'
    },
    {
      role: 'Web Developer Intern',
      company: 'Bright Labs',
      period: '2021 — 2022',
      details: 'Built landing pages and internal dashboards while collaborating with designers and product teams.'
    }
  ],
  projects: [
    {
      title: 'Portfolio Platform',
      description: 'A sleek, responsive portfolio site with custom animations and a content-first layout.',
      tags: ['HTML', 'CSS', 'JavaScript']
    },
    {
      title: 'E-commerce UI',
      description: 'A conversion-focused storefront experience with accessible components and smooth interactions.',
      tags: ['React', 'UI Design', 'Accessibility']
    },
    {
      title: 'Analytics Dashboard',
      description: 'A data-rich dashboard designed to surface metrics clearly for non-technical users.',
      tags: ['Charting', 'JavaScript', 'UX']
    }
  ],
  skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Git', 'Figma', 'Responsive Design', 'Accessibility'],
  contact: {
    text: 'I am currently open to freelance work, collaborations, and full-time opportunities. Let’s connect and create something meaningful.',
    email: 'your@email.com'
  }
};

const heroName = document.getElementById('hero-name');
const heroTitle = document.getElementById('hero-title');
const heroSummary = document.getElementById('hero-summary');
const aboutText = document.getElementById('about-text');
const factsList = document.getElementById('facts-list');
const experienceList = document.getElementById('experience-list');
const projectsGrid = document.getElementById('projects-grid');
const skillsList = document.getElementById('skills-list');
const contactText = document.getElementById('contact-text');
const contactEmail = document.getElementById('contact-email');
const year = document.getElementById('year');
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

heroName.textContent = resumeData.name;
heroTitle.textContent = resumeData.title;
heroSummary.textContent = resumeData.summary;
aboutText.textContent = resumeData.about;

factsList.innerHTML = resumeData.facts.map((fact) => `<li>${fact}</li>`).join('');

experienceList.innerHTML = resumeData.experience
  .map(
    (item) => `
      <article class="timeline-item">
        <h3>${item.role}</h3>
        <p class="meta">${item.company} • ${item.period}</p>
        <p>${item.details}</p>
      </article>
    `
  )
  .join('');

projectsGrid.innerHTML = resumeData.projects
  .map(
    (project) => `
      <article class="project-card">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="tag-list">
          ${project.tags.map((tag) => `<span>${tag}</span>`).join('')}
        </div>
      </article>
    `
  )
  .join('');

skillsList.innerHTML = resumeData.skills.map((skill) => `<span>${skill}</span>`).join('');
contactText.textContent = resumeData.contact.text;
contactEmail.href = `mailto:${resumeData.contact.email}`;
contactEmail.textContent = `Email ${resumeData.contact.email}`;
year.textContent = new Date().getFullYear();

menuToggle?.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

navLinks?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});
