import Teams from "../../components/Teams";
import Intro_video_bg from "../../components/Intro_video_bg";
import Banner from "../../components/Banner";

function Chefs() {
  return (
    <>
      <Banner other={true} name="Experienced Chefs"/>

      <Teams />
      <Intro_video_bg />
    </>
  );
}

export default Chefs;
