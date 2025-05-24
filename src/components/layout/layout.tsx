import { Footer } from "../footer";
import { Header } from "../header";

type TLayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: TLayoutProps) => {
  return (
    <div className="relative flex flex-col min-h-screen dark">
      <Header />
      <main className="flex-1 flex flex-col mb-12">{children}</main>
      <Footer />
    </div>
  );
};
