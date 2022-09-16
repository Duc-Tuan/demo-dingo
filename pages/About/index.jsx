import LayoutDefault from "../../layouts/LayoutDefault";
import Abouts from './About';

function About() {
  return (
    <LayoutDefault other={true} name="About Us">
      <Abouts/>
    </LayoutDefault>
  );
}

export default About;
