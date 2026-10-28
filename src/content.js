export const NAV = [
  ['work', 'Projects'], ['about', 'About'], ['journey', 'Journey'], ['skills', 'Skills'], ['contact', 'Contact'],
]

export const STAGES = [
  ['Push', 'code pushed', 'push       commit received from GitHub'],
  ['Install', 'npm ci', 'install    dependencies installed'],
  ['Test', 'Jest + Supertest', 'test       automated tests completed'],
  ['Build', 'Docker image', 'build      container image built'],
  ['Smoke test', 'health endpoint', 'health     container health check passed'],
  ['Publish', 'Docker Hub', 'publish    image tagged and pushed'],
]

export const SKILLS = {
  'DevOps & CI/CD': ['Git', 'GitHub', 'GitHub Actions', 'CI/CD Pipelines'],
  'Containers': ['Docker', 'Docker Compose', 'Docker Hub', 'Container Health Checks'],
  'Cloud (AWS)': ['EC2', 'IAM', 'S3', 'Security Groups', 'Basic AWS Networking'],
  'Linux & Scripting': ['Ubuntu', 'Bash', 'File Permissions', 'Users & Groups', 'Processes', 'systemd', 'Log Analysis'],
  'Networking': ['TCP/IP', 'HTTP/HTTPS', 'DNS', 'SSH', 'Ports'],
  'Web & Deployment': ['Node.js', 'Express.js', 'Nginx', 'PM2', 'REST APIs'],
  'Testing & Automation': ['npm', 'Jest', 'Supertest', 'Automated Testing'],
  'Core Computer Science': ['Operating Systems', 'Computer Networks', 'DBMS'],
}

export const SCRIPT = [
  '$ whoami', 'anmol karn | b.tech cse | graduating 2027',
  '$ cat focus.txt', 'linux, docker, github actions, aws, ci/cd',
  '$ ls projects/', 'task-manager  mini-devops-pipeline  infrawatch',
  '$ echo $GOAL', 'build reliable, repeatable delivery workflows',
].join('\\n')

export const STATS = [
  ['3', 'featured DevOps projects'],
  ['2027', 'B.Tech CSE graduation'],
  ['20+', 'people coordinated at Technoparv'],
]

export const TIMELINE = [
  { when: '2023', title: 'Started B.Tech CSE', text: 'IPS College of Technology & Management, Gwalior.' },
  { when: '2026', title: 'Head coordinator, Technoparv', text: 'Coordinated a team of 20+ people for the college tech fest.' },
  { when: 'Now', title: 'Building DevOps projects', text: 'Practising CI/CD, Docker, Linux automation, and AWS deployment through hands-on projects.' },
  { when: '2027', title: 'Graduating', text: 'Preparing for DevOps engineer fresher and internship opportunities.' },
]
