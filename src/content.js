export const NAV = [
  ['work', 'Work'], ['about', 'About'], ['journey', 'Journey'], ['skills', 'Skills'], ['contact', 'Contact'],
]

export const STAGES = [
  ['Push', 'commit on main', 'push    received commit on main'],
  ['Build', 'install, compile', 'build   dependencies installed, app compiled'],
  ['Test', 'run checks', 'test    all checks passed'],
  ['Dockerize', 'package image', 'docker  image built and tagged'],
  ['Deploy', 'start container', 'deploy  container started'],
  ['Live', 'health check', 'health  /api/health returned 200'],
]

export const SKILLS = {
  'Cloud and delivery': ['AWS', 'Docker', 'GitHub Actions', 'Linux'],
  Languages: ['Python', 'JavaScript', 'Node.js'],
  Web: ['React', 'Vite', 'Express', 'MongoDB'],
  'Version control': ['Git', 'GitHub'],
}

export const SCRIPT = [
  '$ whoami', 'anmol karn, b.tech cse (2027), gwalior',
  '$ cat focus.txt', 'linux, docker, aws, ci/cd pipelines',
  '$ ls projects/', 'code2cloud  technoparv-2026  linux-fundamentals',
  '$ echo $NEXT', 'real docker builds and aws deploys for code2cloud',
].join('\n')

export const STATS = [
  ['20+', 'people led at Technoparv'],
  ['2027', 'graduation year'],
  ['6', 'pipeline stages in Code2Cloud'],
]

export const TIMELINE = [
  { when: '2023', title: 'Started B.Tech CSE', text: 'IPS College of Technology & Management, Gwalior.' },
  { when: '2026', title: 'Head coordinator, Technoparv', text: 'Led a team of 20+ people through planning and running the tech fest.' },
  { when: 'Now', title: 'Building Code2Cloud', text: 'A CI/CD platform with Astha Jain, while studying Linux fundamentals on my own.' },
  { when: '2027', title: 'Graduating', text: 'Aiming for a DevOps fresher role.' },
]
