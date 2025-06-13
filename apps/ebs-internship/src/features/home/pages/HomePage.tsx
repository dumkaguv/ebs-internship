import { CourseList, MentorList } from "@/components";
import { Hero, Metrics, TopCategories } from "../components";

function HomePage() {
  return (
    <>
      <Hero />
      <Metrics />
      <TopCategories />
      <CourseList showSeeAllButton />
      <MentorList showSeeAllButton />
    </>
  );
}

export default HomePage;
