// Single source of truth: the React app uses this as a fallback,
// and the server seeds MongoDB with it on first run.
const projects = [
  {
    slug: 'code2cloud',
    title: 'Code2Cloud',
    tag: 'In progress',
    summary:
      'A CI/CD platform for college teams. Connect a GitHub repo and Code2Cloud builds, tests, containerizes and deploys it, then gives you a live URL with health checks and logs. Built with Astha Jain.',
    stack: ['React', 'Vite', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    status: [
      { state: 'built', label: 'Built', text: 'Sign-up, login, project management and a dashboard' },
      { state: 'sim', label: 'Simulated', text: 'Pipeline stages, logs, and the failure and redeploy flow' },
      { state: 'next', label: 'Next', text: 'Real Docker builds and AWS deployment' },
    ],
  },
  {
    slug: 'technoparv-2026',
    title: 'Technoparv 2026',
    big: '20+',
    summary: "Head coordinator for my college's tech fest, leading a team of 20+ people through planning and running the event.",
  },
  {
    slug: 'linux-fundamentals',
    title: 'Linux Fundamentals',
    big: '$_',
    summary: 'A self-study course on the filesystem, permissions, users and groups, and processes, with daily hands-on practice in the terminal.',
  },
]
export default projects
