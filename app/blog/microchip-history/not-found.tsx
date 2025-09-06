import { cn } from '@/lib/utils';
import { spaceThemeColors } from './components/shared/theme';

export default function NotFound() {
  return (
    <div className={cn(
      "min-h-screen flex flex-col items-center justify-center p-4",
      spaceThemeColors.background.primary
    )}>
      <h1 className={cn(
        "text-6xl font-bold mb-6",
        "bg-clip-text text-transparent",
        spaceThemeColors.effects.particles
      )}>
        404
      </h1>
      <h2 className={cn(
        "text-3xl font-semibold mb-4",
        spaceThemeColors.text.accent
      )}>
        Page Not Found
      </h2>
      <p className={cn(
        "text-lg max-w-md text-center mb-8",
        spaceThemeColors.text.secondary
      )}>
        Sorry, we couldn&apos;t find the microchip history page you were looking for.
      </p>
      <a
        href="/blog"
        className={cn(
          "px-6 py-3 rounded-full font-medium transition-all duration-300",
          "border border-purple-500/30 backdrop-blur-sm",
          "bg-gradient-to-r from-purple-600 to-cyan-600",
          "text-white hover:scale-105 transform",
          spaceThemeColors.effects.glow
        )}
      >
        Return to Blog
      </a>
    </div>
  );
}
