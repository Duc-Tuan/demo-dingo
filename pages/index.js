import LayoutDefault from "../layouts/LayoutDefault";
import Homes from "./Homes";

export default function Home() {
  return (
    <div className="App">
      <LayoutDefault>
        <Homes />
      </LayoutDefault>
    </div>
  );
}
