import LayoutDefault from "../../layouts/LayoutDefault";
import Chefs from "./Chefs";

function Chef() {
  return (
    <LayoutDefault other={true} name="Experienced Chefs">
      <Chefs />
    </LayoutDefault>
  );
}

export default Chef;
