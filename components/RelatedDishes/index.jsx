/* eslint-disable @next/next/no-img-element */
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Slider from "react-slick";
import Button from "../Button";

function RelatedDishes({ category, allData, onClick }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <div className="Related_dishes">
      <div className="title">
        <h1>
          Related dishes: <span>{category}</span>
        </h1>
      </div>
      <Slider {...settings}>
        {allData.map((data) => {
          return (
            <Link href={`/Products/${data.id}`} key={data.id}>
              <div className="related_dishe">
                <div className="dfcenter image">
                  <div className="img">
                    <img
                      width="100%"
                      height="100%"
                      src={data.imgSrc}
                      alt="..."
                    />
                  </div>
                </div>
                <div className="info">
                  <h5 className="name">{data.name}</h5>
                  <p>{data.content}</p>
                  <div className="price-add">
                    <h5 className="price">$ {data.price}</h5>
                    <Button className={"btn_card cart"} onClick={onClick}>
                      <FontAwesomeIcon icon={faCartArrowDown} />
                    </Button>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </Slider>
    </div>
  );
}

export default RelatedDishes;
