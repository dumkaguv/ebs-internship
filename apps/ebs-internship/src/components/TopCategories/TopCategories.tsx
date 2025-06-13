import { Section, Container } from "@/components";
import { RoutesEnum } from "@/config/routesEnum";
import { Link } from "react-router-dom";

const TopCategories = () => {
  return (
    <Container>
      <Section
        title="Top Categories"
        endAdornment={<Link to={RoutesEnum.COURSES}>See All</Link>}
      >
        
      </Section>
    </Container>
  );
};

export default TopCategories;
