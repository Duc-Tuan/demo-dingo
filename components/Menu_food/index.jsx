/* eslint-disable react-hooks/exhaustive-deps */
import Link from "next/link";
import { useEffect, useState } from "react";
import * as productsService from "../../services/productsService";

/* eslint-disable @next/next/no-img-element */

function Menu_food() {
  const [dataFeedBack, setDataFeedBack] = useState([]);
  const [category, dataCategory] = useState();
  const [isMenu, setIsMenu] = useState();

  useEffect(() => {
    const fetchApi = async () => {
      const resultProducts = await productsService.product();
      productsService.categores().then((category) => dataCategory(category));
      setDataFeedBack(resultProducts);
    };
    fetchApi();
  }, []);

  useEffect(() => {
    {
      const menuBtn = document.querySelectorAll("#menu_food");

      function setMenuAcitve() {
        menuBtn.forEach((n) => n.classList.remove("active"));
        this.classList.add("active");
      }

      menuBtn.forEach((n) => n.addEventListener("click", setMenuAcitve));
    }
  }, [isMenu]);

  const setData = (category) => {
    setIsMenu(dataFeedBack.filter((item) => item.category === category));
  };

  return (
    <>
      <section className="food_menu gray_bg">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5">
              <div className="section_tittle">
                <p>Popular Menu</p>
                <h2>Delicious Food Menu</h2>
              </div>
            </div>

            <div className="col-lg-6">
              <div
                className="nav nav-tabs food_menu_nav"
                id="myTab"
                role="tablist"
              >
                {category &&
                  category.map((data) => {
                    return (
                      <a
                        className={data.name === "Special" ? "active" : ""}
                        key={data.id}
                        onClick={() => {
                          setData(data.name);
                        }}
                        id="menu_food"
                      >
                        {data.name} <img src={data.imgSrc} alt="play" />
                      </a>
                    );
                  })}
              </div>
            </div>

            <div className="col-lg-12">
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active single-member"
                  id="Special"
                  role="tabpanel"
                  aria-labelledby="Special-tab"
                >
                  <div className="food_menu--content">
                    {isMenu &&
                      isMenu.map((data) => {
                        return (
                          <Link href={`/Products/${data.id}`} key={data.id}>
                            <div className="single_food_item">
                              <div className="mr-3" style={{ width: "200px" }}>
                                <img width="100%" src={data.imgSrc} alt="..." />
                              </div>
                              <div className="media-body align-self-center">
                                <h3>{data.name}</h3>
                                <p>{data.describe}</p>
                                <h5>${data.price}</h5>
                              </div>
                            </div>
                          </Link>
                        );
                      })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Menu_food;
