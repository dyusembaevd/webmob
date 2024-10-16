import { BloggersList } from "@/entities/blogger/ui/BloggersList";
import { BottomNavbar } from "@/widgets/BottomNavbar";
import { Footer } from "@/widgets/Footer";
import { HomeHeader } from "@/widgets/HomeHeader";

export default function Home() {
  return (
    <div className="flex w-full flex-col ">
      <HomeHeader />
      <div
        className="min-h-[calc(100dvh-300px)] w-full bg-[#1717190A] pt-4
      "
      >
        <BloggersList />
      </div>
      <div className="fixed bottom-5 flex w-full items-center justify-center px-5">
        <BottomNavbar />
      </div>
      <Footer />
    </div>
  );
}
