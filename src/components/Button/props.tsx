export type TButtonProps = {
  id: string;
  text: string;
  icon?: string;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset" | undefined;
  isLink?: boolean;
  href?: string;
};
