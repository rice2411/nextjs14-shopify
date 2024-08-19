import AuthLayout from "@/layout/auth";

export default function LoginLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return <AuthLayout>{children}</AuthLayout>;
}
