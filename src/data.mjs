// Portfolio project data. Keep descriptions aligned with implemented features.
const projects = [
  {
    slug: 'task-manager-devops',
    title: 'Task Manager — DevOps',
    tag: 'Featured project',
    summary:
      'A Node.js and Express task manager packaged with Docker and delivered through a GitHub Actions workflow. The workflow deploys to AWS EC2 over SSH and includes an application health check.',
    stack: ['Node.js', 'Express', 'Docker', 'GitHub Actions', 'AWS EC2', 'Linux'],
    github: 'https://github.com/anmolkarn271/Task_Manager-DevOps',
    status: [
      { state: 'built', label: 'Application', text: 'Node.js + Express task manager containerized with Docker' },
      { state: 'built', label: 'CI/CD', text: 'GitHub Actions workflow for build and SSH-based EC2 deployment' },
      { state: 'sim', label: 'Reliability', text: 'Health checks, persistent volume configuration, and rollback logic' },
    ],
  },
  {
    slug: 'mini-devops-pipeline',
    title: 'Mini DevOps CI/CD Pipeline',
    summary:
      'A compact CI/CD workflow for a Node.js application. GitHub Actions runs Jest and Supertest, builds a Docker image, smoke-tests the container, and publishes the image to Docker Hub using repository secrets.',
    stack: ['Node.js', 'Jest', 'Supertest', 'Docker', 'GitHub Actions', 'Docker Hub'],
    github: 'https://github.com/anmolkarn271/mini-DevOps-pipeline',
  },
  {
    slug: 'infrawatch',
    title: 'InfraWatch',
    big: 'bash$',
    summary:
      'A Linux system-monitoring and automation project using Bash to inspect system health, including CPU, memory, disk usage, uptime, processes, and network information, with configurable thresholds and systemd integration.',
    stack: ['Linux', 'Ubuntu', 'Bash', 'systemd', 'Monitoring'],
    github: 'https://github.com/anmolkarn271/InfraWatch',
  },
]

export default projects
