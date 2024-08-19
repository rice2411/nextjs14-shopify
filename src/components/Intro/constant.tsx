import { TButtonProps } from "@/components/Button/props";

export const buttons: TButtonProps[] = [
  {
    id: "1",
    text: `Get Started`,
    className: `border border-gray-300 md:w-32  !py-3 bg-secondary !text-primary hover:!bg-gray-100 my-2`,
    isLink: true,
    href: "/auth/login",
  },
  {
    id: "2",
    text: `Learn Next.js`,
    className: `border border-gray-300 md:w-32  md:ml-2 !py-3`,
    isLink: true,
    href: "/auth/login",
  },
];
