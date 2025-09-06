export const spaceThemeColors = {
  background: {
    primary: 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900',
    secondary: 'bg-gradient-to-r from-purple-900/20 to-blue-900/20',
    card: 'bg-black/40 backdrop-blur-md border border-purple-500/20',
    glass: 'bg-white/5 backdrop-blur-lg border border-purple-400/30'
  },
  text: {
    primary: 'text-white',
    secondary: 'text-purple-200',
    accent: 'text-cyan-400',
    highlight: 'text-purple-400'
  },
  effects: {
    glow: 'shadow-lg shadow-purple-500/25',
    neon: 'shadow-[0_0_20px_rgba(147,51,234,0.5)]',
    particles: 'bg-gradient-to-r from-purple-400 to-cyan-400'
  }
} as const;

export const spaceAnimations = {
  fadeInUp: {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.6, ease: "easeOut" }
  },
  glowPulse: {
    animate: {
      boxShadow: [
        '0 0 20px rgba(147,51,234,0.3)',
        '0 0 40px rgba(147,51,234,0.6)',
        '0 0 20px rgba(147,51,234,0.3)'
      ]
    },
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
  }
} as const;
