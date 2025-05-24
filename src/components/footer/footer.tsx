import Link from "next/link";
import { Logo } from "../logo";

type TFooterLink = {
  href: string;
  label: string;
};

const footerLinks: TFooterLink[] = [
  {
    href: "/termos-de-uso",
    label: "Termos de Uso",
  },
  {
    href: "/politica-de-privacidade",
    label: "Política de Privacidade",
  },
  {
    href: "/feedback",
    label: "Feedback",
  },
];

export const Footer = () => {
  return (
    <footer className="bg-gray-500">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex md:flex-row justify-between gap-8 py-8">
          <Logo />
          <nav className="flex flex-col md:flex-row items-center gap-4 text-sm text-blue-100">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-blue-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
