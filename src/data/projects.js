export const projects = [
  {
    title: 'bevy_rogue',
    slug: 'bevy-rogue',
    date: '2025-01-01',
    description:
      'A real-time roguelike built in Rust using Bevy and an ECS architecture. Features procedural map generation, field-of-view systems, and real-time player movement.',
    tags: {
      action: [],
      status: 'In Development',
      tech: ['Bevy', 'Rust', 'ECS', 'Open Source'],
    },
  },
  {
    title: 'RollyRush',
    slug: 'rolly-rush',
    date: '2024-06-01',
    description:
      'A physics-based marble runner where you tilt, dodge and boost your way through increasingly chaotic obstacle courses.',
    tags: {
      action: [],
      status: 'In Development',
      tech: ['Godot', 'GDScript', 'Physics'],
    },
  },
];

export const recentProjects = (n = 2) =>
  [...projects].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, n);

export const allProjects = () =>
  [...projects].sort((a, b) => new Date(b.date) - new Date(a.date));