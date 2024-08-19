import Feature from "@/components/Feature";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Intro from "@/components/Intro";

export default function Landing() {
  return (
    <div className="bg-primary  text-secondary h-full flex flex-col justify-center ">
      <Header />
      <Intro />
      <Feature />
      <Footer />
    </div>
  );
}
