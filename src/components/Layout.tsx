
import { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen w-full relative">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-background focus:text-foreground focus:px-4 focus:py-2 focus:rounded-md focus:shadow"
      >
        Skip to content
      </a>
      {/* Dynamic Programming Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {/* Theme-aware gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-background to-background dark:from-primary/10 dark:via-background dark:to-background"></div>
        
        {/* Programming elements layer */}
        <div className="absolute inset-0 opacity-30 dark:opacity-20">
          <div className="absolute w-full h-full">
            {Array.from({ length: 50 }).map((_, i) => (
              <div
                key={i}
                className="absolute animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 8}s`,
                  fontSize: `${Math.random() * 1.2 + 0.5}rem`,
                  opacity: Math.random() * 0.4 + 0.5
                }}
              >
                {['</', '{}', '()', '=>', '[]', 'const', 'let', 'function', '&&', '||', '++', '--', '+=', 'console.log()', '<section />'][Math.floor(Math.random() * 15)]}
              </div>
            ))}
          </div>
        </div>

        {/* Matrix-like grid effect */}
        <div className="absolute inset-0 bg-grid-small-primary/[0.2] dark:bg-grid-small-white/[0.2]" />
      </div>
      
      {children}
    </div>
  );
};

export default Layout;
