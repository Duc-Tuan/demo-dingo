import { useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

import $ from 'jquery';
import Banner from "../../components/Banner";

function LayoutDefault({ children, other, name }) {
  useEffect(() => {
    other && $('main').css('margin-top','107px');
  }, [])
  return (
    <>
      <Header other={other}/>
        <main>
          <Banner other={other} name={name}/>
          {children}
        </main>
      <Footer />
    </>
  );
}

export default LayoutDefault;
