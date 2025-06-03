import { HeartHandshake, PaintbrushVertical, Store } from "lucide-react";
import { PT_Sans_Caption } from "next/font/google";
import { CardComponent, CardComponentProps } from "./card-component";

const ptSansCaption = PT_Sans_Caption({
  subsets: ["latin"],
  weight: ["700"],
});

const cardData: CardComponentProps[] = [
  {
    title: "Personalise seu site",
    subTitle:
      "Adicione sua logo, favicon, cores no seu catalogo e tenha tudo com a sua cara.",
    icon: <PaintbrushVertical />,
    color: "bg-blue-400",
    subColor: "bg-blue-300",
  },
  {
    title: "Venda de qualquer loja",
    subTitle:
      "Não importa a loja, o Site.Set permite que você insira qualquer link de afiliado.",
    icon: <Store />,
    color: "bg-cyan-300",
    subColor: "bg-cyan-200",
  },
  {
    title: "Receba suporte amigável",
    subTitle:
      "Nossa equipe estará sempre pronta para te atender para ajudar no que for preciso.",
    icon: <HeartHandshake />,
    color: "bg-blue-400",
    subColor: "bg-blue-300",
  },
];

export const SupportSection = () => {
  return (
    <section className="container pb-8 md:py-10 bg-gray-700">
      <div className="flex flex-col items-center gap-12">
        <h2
          className={`${ptSansCaption.className} text-balance text-center text-heading-xl text-gray-100`}
        >
          Sua loja de afiliados, simples, do jeito que deveria ser
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {cardData.map((card, index) => (
            <CardComponent
              key={+index}
              title={card.title}
              subTitle={card.subTitle}
              icon={card.icon}
              color={card.color}
              subColor={card.subColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
