import { CoursesList } from "@/components/CoursesList";
import { Hero, Metrics, TopCategories } from "../components";

function HomePage() {
  return (
    <>
      <Hero />
      <Metrics />
      <TopCategories />
      <CoursesList showSeeAllButton />
    </>
  );
}

export default HomePage;
