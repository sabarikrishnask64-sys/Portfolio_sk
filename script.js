const resumeData = {
  name: 'Sabarikrishna S',
  title: 'Electronics & Communication Diploma Student',
  summary:
    'I am a responsible and passionate learner focused on electronics, communication systems, and practical technical problem solving.',
  about:
    'Responsible and passionate about delivering outstanding quality and service. Creative and always up for new challenges, I enjoy working with teammates and building good professional relationships while learning new technical skills.',
  facts: [
    'Based in Karimugal, Ernakulam',
    'Diploma in Electronics & Communication (2023–2025)',
    'Strong interest in PCB designing, soldering, and Arduino programming'
  ],
  experience: [
    {
      role: 'Internship',
      company: 'BSNL',
      period: '15/05/2023 – 03/06/2023',
      details: 'Completed a three-week internship focused on practical exposure in communication and technical operations.'
    },
    {
      role: 'Internship',
      company: 'IHRD Finishing School',
      period: '01/04/2024 – 26/04/2024',
      details: 'Completed a three-week internship gaining exposure to hands-on technical learning and workplace discipline.'
    }
  ],
  projects: [
    {
      title: 'Electronics Learning',
      description: 'Developing practical skills in electronics fundamentals, communication systems, and troubleshooting.',
      tags: ['Electronics', 'Communication', 'Problem Solving']
    },
    {
      title: 'PCB Designing',
      description: 'Exploring circuit layout design and practical implementation of hardware solutions.',
      tags: ['PCB', 'Hardware', 'Design']
    },
    {
      title: 'Arduino Programming',
      description: 'Building confidence in embedded programming and hands-on electronics projects.',
      tags: ['Arduino', 'Programming', 'Embedded']
    }
  ],
  skills: ['C Programming', 'Python Basics', 'PCB Designing', 'Soldering', 'Arduino Programming', 'Communication Skills', 'Teamwork', 'Technical Learning'],
  contact: {
    text: 'I am open to learning opportunities, internships, and collaborations in electronics and communication. Feel free to connect with me.',
    email: 'sabarikrishnask64@gmail.com'
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
contactEmail.href = `mailto:${resumeData.contact.email}`;
year.textContent = new Date().getFullYear();

menuToggle?.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

navLinks?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});
