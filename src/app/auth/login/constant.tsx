import { TButtonProps } from "@/components/Button/props";

export const buttons: TButtonProps[] = [
  {
    id: "google",
    text: `Đăng nhập bằng Google`,
    icon: `/images/google.svg`,
    className:
      "bg-secondary !text-primary border boder-primary hover:!bg-gray-100",
  },
  {
    id: "facebook",
    text: `Đăng nhập bằng Facebook`,
    icon: `/images/facebook.svg`,
    className:
      "bg-secondary !text-primary border boder-primary hover:!bg-gray-100 my-2",
  },
];
