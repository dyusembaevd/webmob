import { BloggersList } from "@/entities/blogger/ui/BloggersList";
import { MainLayout } from "@/shared/layouts";
import { HomeHeader } from "@/widgets/HomeHeader";

export default function Home() {
  return (
    <MainLayout hasFooter={true}>
      <HomeHeader />
      <div className="min-h-[calc(100dvh-300px)] w-full bg-[#1717190A]">
        <BloggersList />
      </div>
    </MainLayout>
  );
}
