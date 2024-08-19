"use client";

import Link from "next/link";
import { TButtonProps } from "./props";

export default function Button({
  isLink,
  href = "/",
  type = "button",
  onClick,
  icon,
  text,
  className = "",
}: TButtonProps) {
  const baseClasses =
    "w-full flex items-center justify-center py-2 px-4 rounded-md text-sm font-medium text-white bg-primary hover:bg-stone-800";

  return isLink ? (
    <Link href={href} className={`${baseClasses} ${className}`}>
      {icon && <img src={icon} alt="" className="w-5 h-5 mr-2" />}
      {text}
    </Link>
  ) : (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${className}`}
    >
      {icon && <img src={icon} alt="" className="w-5 h-5 mr-2" />}
      {text}
    </button>
  );
}
