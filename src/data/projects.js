export const projects = [
  {
    title: 'bevy_rogue',
    description:
      'A real-time roguelike built in Rust using Bevy and an ECS architecture. Features procedural map generation, field-of-view systems, and real-time player movement.',
    engine: 'Bevy / Rust',
    status: 'In Development',
    itch: '#',
    slug: 'bevy-rogue',
    date: '2025-01-01',
  },
  {
    title: 'RollyRush',
    description:
      'A physics-based marble runner where you tilt, dodge and boost your way through increasingly chaotic obstacle courses.',
    engine: 'Godot',
    status: 'In Development',
    itch: '#',
    slug: 'rolly-rush',
    date: '2024-06-01',
  },
];

export const recentProjects = (n = 2) =>
  [...projects].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, n);

export const allProjects = () =>
  [...projects].sort((a, b) => new Date(b.date) - new Date(a.date));