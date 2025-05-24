import { cn } from "@/lib/utils";
import Link from "next/link";
import { useRouter } from "next/router";
import { Button } from "../ui/button";

type THeaderTitle = {
  title: string;
  href: string;
};

const headerTitles: THeaderTitle[] = [
  {
    title: "Início",
    href: "/",
  },
  {
    title: "Blog",
    href: "/blog",
  },
];

export const ActiveLink = () => {
  const router = useRouter();
  const { pathname } = router;
  return (
    <nav className="flex items-center gap-6">
      {headerTitles.map((item) => {
        let isActive = false;
        if (item.href === "/blog") {
          isActive = pathname.startsWith(item.href);
        } else {
          isActive = pathname === item.href;
        }
        return (
          <Link
            key={item.title}
            href={item.href}
            className={cn(
              "text-sm font-medium transition-colors hover:text-blue-500",
              isActive ? "text-blue-500" : "text-muted-foreground"
            )}
          >
            {item.title}
          </Link>
        );
      })}
      <Button className="rounded-full" variant="secondary" asChild>
        <Link href="/comecar">Começar</Link>
      </Button>
    </nav>
  );
};
