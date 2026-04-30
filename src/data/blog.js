export const posts = [
  {
    title: 'Getting Started with Bevy and Rust',
    slug: 'getting-started-bevy-rust',
    date: '2025-01-15',
    excerpt: 'My first impressions of building a roguelike in Rust with Bevy — the ECS architecture, the borrow checker, and why I chose it over alternatives.',
    tags: ['Devlog', 'Rust', 'Bevy', 'bevy_rogue'],
    readingTime: 5,
  },
];

export const recentPosts = (n = 2) =>
  [...posts].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, n);

export const allPosts = () =>
  [...posts].sort((a, b) => new Date(b.date) - new Date(a.date));