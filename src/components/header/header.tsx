import { ActiveLink } from "../active-link";
import { Logo } from "../logo";

export const Header = () => {
  return (
    <header className="fixed top-0 w-full border-b border-white/10 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-7xl px-4 text-white sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Logo />
          <ActiveLink />
        </div>
      </div>
    </header>
  );
};
