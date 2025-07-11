import { CourseList, MentorList } from "@/components";
import {
  Hero,
  Metrics,
  TopCategories,
  BecomeInstructorPromo,
} from "@/features/home/components";

export const HomePage = () => {
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
};
