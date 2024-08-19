import Image from "next/image";

export default function AuthLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen flex ">
      {/* Form Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center bg-primary p-8 h-screen">
        {children}
      </div>

      {/* Image Section */}
      <div className="hidden md:block w-1/2">
        <img
          src="/images/vercel.svg"
          alt="Login Image"
          className="object-none h-full w-full"
        />
      </div>
    </div>
  );
}
