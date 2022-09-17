/* eslint-disable @next/next/no-img-element */
import { Fragment } from "react";
import Slider from "react-slick";
import { data_food_comment } from "../../public/data";

function Feedback() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <section className="review_part gray_bg section_padding">
      <div className="container">
        <div className="row">
          <div className="col-xl-5">
            <div className="section_tittle">
              <p>Testimonials</p>
              <h2>Customers Feedback</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-11">
            <div className="client_review_part owl-carousel">
              <Slider {...settings}>
                {data_food_comment.map((data) => {
                  return (
                    <Fragment key={data.id}>
                      <div className="row">
                        <div className="col-xl-2 col-lg-2 col-sm-2 dfcenter">
                            <img width="80%" src={data.imgSrc} alt="..." />
                        </div>
                        <div className="col-xl-10">
                          <p>{data.content}</p>
                          <h4>
                            {data.name}, <span>{data.career}</span>
                          </h4>
                        </div>
                      </div>
                    </Fragment>
                  );
                })}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Feedback;
