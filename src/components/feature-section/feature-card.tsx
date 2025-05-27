import { ReactNode } from "react";

export interface FeatureCardProps {
  tag: string;
  title: string;
  children?: ReactNode;
  className?: string;
}

export const FeatureCard = ({
  tag,
  title,
  children,
  className,
}: FeatureCardProps) => {
  return (
    <div
      className={`flex flex-col gap-4 rounded-lg bg-gray-500 p-6 md:p-12 ${className}`}
    >
      <span className="text-body-tag w-fit rounded-sm bg-blue-400 px-2 py-1 uppercase text-blue-200">
        {tag}
      </span>
      <h2 className="text-heading-lg text-gray-100">{title}</h2>
      {children}
    </div>
  );
};
