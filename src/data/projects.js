export const projects = [
  {
    title: 'Template',
    slug: 'template',
    date: '0000-00-00',
    description:
      'This is a template project description.',
    tags: {
      action: [],
      status: 'TODO',
      tech: ['Tech1', 'Tech2', 'Tech3'],
    },
  },
];

export const recentProjects = (n = 2) =>
  [...projects].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, n);

export const allProjects = () =>
  [...projects].sort((a, b) => new Date(b.date) - new Date(a.date));