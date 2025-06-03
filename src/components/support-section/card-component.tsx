// components/CardComponent.tsx
import React, { FC, ReactElement, cloneElement, isValidElement } from "react";

export type CardComponentProps = {
  title: string;
  subTitle: string;
  icon: ReactElement<{ className?: string; [key: string]: unknown }>;
  color: "bg-blue-400" | "bg-blue-300" | "bg-cyan-300" | "bg-cyan-200";
  subColor: string;
};

export const CardComponent: FC<CardComponentProps> = ({
  title,
  subTitle,
  icon,
  color,
  subColor,
}) => {
  const iconDefaultClasses = "h-6 w-6 text-white";
  let styledIcon = icon;

  if (isValidElement(icon)) {
    const currentClassName = icon.props.className ?? "";
    const newClassName = `${currentClassName} ${iconDefaultClasses}`.trim();
    styledIcon = cloneElement(icon, {
      ...icon?.props,
      className: newClassName,
    });
  }

  return (
    <div
      className={`flex flex-col text-left gap-2 rounded-lg p-6 md:p-12 ${color}`}
    >
      <div
        className={`flex h-12 w-12 items-center justify-center rounded-lg ${subColor} mb-4`}
      >
        {styledIcon}
      </div>
      <strong className="text-heading-sm text-gray-100">{title}</strong>
      <p className="text-body-sm text-gray-200">{subTitle}</p>
    </div>
  );
};
