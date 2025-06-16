import { CourseList, MentorList } from "@/components";
import {
  Hero,
  Metrics,
  TopCategories,
  BecomeInstructorPromo,
} from "../components";

function HomePage() {
  return (
    <>
      <Hero />
      <Metrics />
      <TopCategories />
      <CourseList showSeeAllButton />
      <MentorList showSeeAllButton />
      <BecomeInstructorPromo />
    </>
  );
}

export default HomePage;
