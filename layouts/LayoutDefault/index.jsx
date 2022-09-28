import { useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import $ from 'jquery';

function LayoutDefault({ children, other }) {
  useEffect(() => {
    other && $('main').css('margin-top','107px');
  }, [])

  return (
    <>
      <Header other={other}/>
        <main>
          {children}
        </main>
      <Footer />
    </>
  );
}

export default LayoutDefault;
