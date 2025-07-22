export const getPageTitle = (pathname: string): string => {
  const segments = pathname.split("/").filter(Boolean);

  if (segments.length === 0) return "Dashboard";

  if (segments[0] === "courses") {
    if (segments[1] === "add") {
      return segments[2] ? "Edit Course" : "Add Course";
    }
    if (segments[1]) {
      return "Course Details";
    }
    return "Courses";
  }

  if (segments[0] === "chapter") {
    return "Chapter";
  }

  const lastSegment = segments[segments.length - 1];
  return lastSegment.charAt(0).toUpperCase() + lastSegment.slice(1);
};
