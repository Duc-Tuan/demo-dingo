import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { data_food_menus } from "../../public/data";

/* eslint-disable @next/next/no-img-element */
const menuName = [
  {
    id: 1,
    name: "Special",
    imgSrc:
      "https://raw.githubusercontent.com/Duc-Tuan/img_dingo/411ba9369dc9b5cce3f5609c712534f2107aabfe/icon/play.svg",
  },
  {
    id: 2,
    name: "Breakfast",
    imgSrc:
      "https://raw.githubusercontent.com/Duc-Tuan/img_dingo/411ba9369dc9b5cce3f5609c712534f2107aabfe/icon/play.svg",
  },
  {
    id: 3,
    name: "Launch",
    imgSrc:
      "https://raw.githubusercontent.com/Duc-Tuan/img_dingo/411ba9369dc9b5cce3f5609c712534f2107aabfe/icon/play.svg",
  },
  {
    id: 4,
    name: "Dinner",
    imgSrc:
      "https://raw.githubusercontent.com/Duc-Tuan/img_dingo/411ba9369dc9b5cce3f5609c712534f2107aabfe/icon/play.svg",
  },
  {
    id: 5,
    name: "Sneaks",
    imgSrc:
      "https://raw.githubusercontent.com/Duc-Tuan/img_dingo/411ba9369dc9b5cce3f5609c712534f2107aabfe/icon/play.svg",
  },
];

function Menu_food() {
  const [isMenu, setIsMenu] = useState(
    data_food_menus.filter((item) => item.category === "Special")
  );

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
    setIsMenu(data_food_menus.filter((item) => item.category === category));
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
                {menuName.map((data) => {
                  return (
                    <a
                      className={data.name === "Special" ? "active" : ""}
                      key={data.id}
                      onClick={(e) => {
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
                    {isMenu.map((data) => {
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
