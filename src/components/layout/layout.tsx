import { Inter } from "next/font/google";
import { Footer } from "../footer";
import { Header } from "../header";

type TLayoutProps = {
  children: React.ReactNode;
};

const inter = Inter({ subsets: ["latin"] });

export const Layout = ({ children }: TLayoutProps) => {
  return (
    <div
      className={`${inter.className} relative flex flex-col min-h-screen bg-gray-700`}
    >
      <Header />
      <main className="flex-1 flex flex-col mb-12">{children}</main>
      <Footer />
    </div>
  );
};
