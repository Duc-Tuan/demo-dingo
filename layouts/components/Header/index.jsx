/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import Button from "../../../components/Button";
import Menu from "../../../components/Menu_navbar";
import { routers } from "../../../router/index";
import $ from "jquery";
import Link from "next/link";
import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCartPlus } from "@fortawesome/free-solid-svg-icons";
import Cart from "../../../components/Carts";
import Tippy from "@tippyjs/react/headless";

function Header({ other }) {
  // const [show, setShow] = useState();
  useEffect(() => {
    const auto = () => {
      $(".main_menu").css("background", "white");
      $(".menu_btn a").css("border", "2px solid #ff6426");
    };

    other && auto();

    $(window).scroll(function () {
      var window_top = $(window).scrollTop() + 1;
      if (window_top > 50) {
        $(".main_menu").addClass("menu_fixed animated fadeInDown");
      } else {
        $(".main_menu").removeClass("menu_fixed animated fadeInDown");
      }
    });

    $(window).scroll(function () {
      var window_top = $(window).scrollTop() + 1;
      if (window_top > 50) {
        $(".main_menu").addClass("menu_fixed animated fadeInDown");
      } else {
        $(".main_menu").removeClass("menu_fixed animated fadeInDown");
      }
    });
  }, []);

  const handleClick = () => {
    document.querySelector("#navbarSupportedContent").classList.toggle("show");
  };
  return (
    <>
      <Head>
        <title>Dingo</title>
        <meta
          name="description"
          content="Learn NextJs + TypeScript with fun :P"
        />
        <link rel="icon" href="/logo.png" />
      </Head>

      <header className="main_menu home_menu">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <nav className="navbar navbar-expand-lg navbar-light">
                <Link href="/">
                  <a className="navbar-brand">
                    <img src="/images/logo.png" alt="logo" />
                  </a>
                </Link>

                <Button onClick={handleClick} className={"navbar-toggler"}>
                  <FontAwesomeIcon icon={faBars} />
                </Button>

                <div
                  id="navbarSupportedContent"
                  className="collapse navbar-collapse main-menu-item justify-content-end"
                >
                  <ul className="navbar-nav">
                    {routers.map((router, index) => {
                      return (
                        <Menu
                          key={index}
                          path={router.path}
                          dropdown={router.dropdown}
                          classnames={"nav-link"}
                        >
                          {router.name}
                        </Menu>
                      );
                    })}
                  </ul>
                </div>
                <Tippy
                  offset={[0, 25]}
                  interactive
                  placement="bottom-end"
                  render={(attrs) => (
                    <div className="content_cart" tabIndex="-1" {...attrs}>
                        <Cart />
                    </div>
                  )}
                >
                  <div >
                    <Button className={"btn_cart"}>
                      <FontAwesomeIcon icon={faCartPlus} />
                    </Button>
                  </div>
                </Tippy>
                <div className="menu_btn">
                  <Button hrefs className={"btn_1 d-none d-sm-block"}>
                    book a tabel
                  </Button>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
