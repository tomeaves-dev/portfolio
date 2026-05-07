export const posts = [
  {
    title: 'Template',
    slug: 'template',
    date: '0000-00-00',
    excerpt: 'Template excerpt blah blah blah',
    tags: ['Tag1', 'Tag2', 'Tag3'],
    readingTime: 5,
  },
];

export const recentPosts = (n = 2) =>
  [...posts].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, n);

export const allPosts = () =>
  [...posts].sort((a, b) => new Date(b.date) - new Date(a.date));