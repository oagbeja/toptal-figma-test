import TopComponent from "@/components/top-component";
import Bulletin from "@/components/bulletin";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className='flex flex-col gap-[96px] bg-white w-full h-auto'>
      {/* hero */}
      <TopComponent />

      {/* Text */}
      <Bulletin />

      {/* Footer */}
      <Footer />
    </div>
  );
}
