import "/styles/globals.css";
import "/styles/animate.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.css";
import { StoreProvider } from "../Store";
import LayoutDefault from "../layouts/LayoutDefault";


function MyApp({ Component, pageProps }) {
  return (
    <StoreProvider>
      <LayoutDefault other={true}>
        <Component {...pageProps} />
      </LayoutDefault>
    </StoreProvider>
  );
}

export default MyApp;
