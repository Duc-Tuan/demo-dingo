import Banner from "../../components/Banner";
import Intro_video_bg from "../../components/Intro_video_bg";
import Menu_food from "../../components/Menu_food";
function Menus() {
  return (
    <>
      <Banner other={true} name="Food Menu"/>
      <Menu_food />
      <Intro_video_bg />
    </>
  );
}

export default Menus;
