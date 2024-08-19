import { TButtonProps } from "@/components/Button/props";

export const buttons: TButtonProps[] = [
  {
    id: "sign in",
    text: `Sign In`,
    className: `border border-gray-300 md:w-32 `,
    isLink: true,
    href: "/auth/login",
  },
  // {
  //   id: "sign up",
  //   text: `Đăng ký`,
  //   className: `ml-2 md:w-32 !bg-secondary !text-primary hover:!bg-gray-100`,
  // },
];

export const links = [
  {
    id: 1,
    name: "Landing Page",
    url: "/landing",
  },
];
