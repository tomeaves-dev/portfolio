export const projects = [
  {
    title: 'Eaves Rally',
    slug: 'eaves-rally',
    date: '2024-06-01',
    description: 'A simulation rally game featuring the iconic Lancia Delta, built in UE5 with realistic Chaos Vehicle physics and a handcrafted pace note system.',
    tags: {
      action: [],
      status: 'In Development',
      tech: ['UE5', 'Chaos Vehicles', 'Blueprints', 'GAS', 'PCG'],
    },
  },
  {
    title: 'Rolly Rush',
    slug: 'rolly-rush',
    date: '2024-01-01',
    description: 'A physics-based marble runner for iOS and Android — and a remake of Rollin\' Crazy, the first game I ever released at 13 years old.',
    tags: {
      action: [],
      status: 'In Development',
      tech: ['Godot', 'GDScript', 'C#', 'Physics', 'Mobile'],
    },
  },
  {
    title: 'Slime Climb',
    slug: 'slime-climb',
    date: '2022-11-01',
    description: 'A 72-hour game jam winner. Play as Hopper, a slime trapped in a wizard\'s tower with rising lava, and climb as high as you can using a physics-driven grapple arm.',
    tags: {
      action: [
        { label: 'Play Now', url: 'https://tommy-eaves-games.itch.io/slime-climb' },
      ],
      status: 'Released',
      tech: ['Unity', 'C#', 'Physics', 'Game Jam'],
    },
  },
  {
    title: 'Blaze',
    slug: 'blaze',
    date: '2023-01-01',
    description: 'A retro arcade shoot em up inspired by Geometry Wars, built in Unity with vector-style visuals, wave-based survival, and a unique boost-to-kill mechanic.',
    tags: {
      action: [
        { label: 'Play Now', url: 'https://tommy-eaves-games.itch.io/blaze' },
      ],
      status: 'Released',
      tech: ['Unity', 'C#', 'Physics', 'AI'],
    },
  },
  {
    title: 'Bevy Rogue',
    slug: 'bevy-rogue',
    date: '2025-01-01',
    description: 'A real-time roguelike built in Rust using Bevy and an ECS architecture. Features procedural map generation, field-of-view systems, and real-time player movement.',
    tags: {
      action: [],
      status: 'In Development',
      tech: ['Bevy', 'Rust', 'ECS', 'Open Source'],
    },
  },
  {
    title: 'Sol',
    slug: 'sol',
    date: '2023-06-01',
    description: 'A real-time solar system sandbox built in Unity, featuring physically-inspired planet shaders, free flight, and an orbit camera mode for each celestial body.',
    tags: {
      action: [
        { label: 'Play Now', url: 'https://tommy-eaves-games.itch.io/sol' },
      ],
      status: 'Released',
      tech: ['Unity', 'C#', 'Shader Graph', 'URP'],
    },
  },
  {
    title: 'tomeaves.dev',
    slug: 'portfolio',
    date: '2026-01-01',
    description: 'This portfolio website, built from scratch using Astro, HTML and CSS. Designed to be easy to update with new projects and blog posts.',
    tags: {
      action: [
        { label: 'Visit Site', url: 'https://tomeaves.dev' },
        { label: 'Source Code', url: 'https://github.com/tomeaves-dev/portfolio' },
      ],
      status: 'Released',
      tech: ['Astro', 'HTML', 'CSS', 'MDX', 'Node.js'],
    },
  },
];

export const allProjects = () => [...projects];

export const recentProjects = (n = 2) =>
  [...projects].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, n);
