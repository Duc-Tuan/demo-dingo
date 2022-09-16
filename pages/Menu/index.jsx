import LayoutDefault from "../../layouts/LayoutDefault";
import Menus from "./Menus";

function Menu() {
  return (
    <LayoutDefault other={true} name="Food Menu">
        <Menus />
    </LayoutDefault>
  );
}

export default Menu;
