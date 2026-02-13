import { ReactNode, useMemo } from 'react';

const symbols = ['</', '{}', '()', '=>', '[]', 'const', 'let', 'function', '&&', '||', '++', '--', '+=', 'console.log()', '<section />'];

const Layout = ({ children }: { children: ReactNode }) => {
  const decorativeItems = useMemo(
    () =>
      Array.from({ length: 50 }).map((_, index) => ({
        key: index,
        left: `${(index * 37) % 100}%`,
        top: `${(index * 29) % 100}%`,
        animationDelay: `${(index % 8) * 0.8}s`,
        fontSize: `${0.6 + (index % 6) * 0.2}rem`,
        opacity: 0.45 + (index % 5) * 0.1,
        symbol: symbols[index % symbols.length],
      })),
    []
  );

  return (
    <div className="min-h-screen w-full relative">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-background focus:text-foreground focus:px-4 focus:py-2 focus:rounded-md focus:shadow"
      >
        Skip to content
      </a>
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-background to-background dark:from-primary/10 dark:via-background dark:to-background"></div>

        <div className="absolute inset-0 opacity-30 dark:opacity-20">
          <div className="absolute w-full h-full">
            {decorativeItems.map((item) => (
              <div
                key={item.key}
                className="absolute animate-float"
                style={{
                  left: item.left,
                  top: item.top,
                  animationDelay: item.animationDelay,
                  fontSize: item.fontSize,
                  opacity: item.opacity,
                }}
              >
                {item.symbol}
              </div>
            ))}
          </div>
        </div>

        <div className="absolute inset-0 bg-grid-small-primary/[0.2] dark:bg-grid-small-white/[0.2]" />
      </div>

      {children}
    </div>
  );
};

export default Layout;
