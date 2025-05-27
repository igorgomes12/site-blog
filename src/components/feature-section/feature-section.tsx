import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { FeatureCard, FeatureCardProps } from "./feature-card";

const features: FeatureCardProps[] = [
  {
    tag: "Simples",
    title: "Crie um catálogo de produtos online em poucos minutos",
  },
  {
    tag: "Prático",
    title: "Venda para seu público através de uma plataforma única",
  },
];

export const FeatureSection = () => {
  const callToActionButton = (
    <Button asChild className="w-full gap-2 rounded-full md:w-fit">
      <Link href="/criar-loja">
        Criar loja grátis
        <ArrowRight />
      </Link>
    </Button>
  );

  return (
    <section className="container grid grid-cols-1 gap-6 bg-gray-700 pb-8 pt-8 md:grid-cols-2 md:py-10">
           {features.map((feature) => (
        <FeatureCard
          key={feature.tag}
          tag={feature.tag}
          title={feature.title}
        />
      ))}

      <div className="col-span-full">
        <div className="grid grid-cols-1 gap-12 rounded-lg bg-gray-500 p-6 md:grid-cols-2 md:gap-4 md:p-12">
          <div className="flex flex-col gap-4">
            <span className="text-body-tag w-fit rounded-sm bg-blue-400 px-2 py-1 uppercase text-blue-200">
              Personalizável
            </span>

            <h2 className="text-heading-lg text-gray-100">
              Tenha uma loja online personalizada com a cara da sua marca
            </h2>

            <div className="hidden mt-auto md:flex">{callToActionButton}</div>
          </div>

          <div className="flex w-full flex-col items-center justify-center">
            <div className="w-full max-w-md overflow-hidden">
              <Image
                src="/feature-section.svg"
                alt="Features"
                width={440}
                height={330}
                className="h-full w-full object-contain"
              />
            </div>

            <div className="mt-4 w-full md:hidden">{callToActionButton}</div>
          </div>
        </div>
      </div>
    </section>
  );
};
