// <LayoutDefault other={true} name="About Us">

/* eslint-disable @next/next/no-img-element */
import { Fragment } from "react";
import Banner from "../../components/Banner";
import Feedback from "../../components/Feedback";
import Teams from "../../components/Teams";
import { data_food_history } from "../../public/data";

function Abouts() {
  return (
    <>
      <Banner other={true} name="About Us"/>

      <section className="about_part about_bg">
        <div className="container-fluid">
          {data_food_history.map((data) => {
            return (
              <Fragment key={data.id}>
                <div className="row align-items-center">
                  <div className="col-sm-4 col-lg-5 offset-lg-1">
                    <div className="about_img">
                      <img src={data.imgSrc} alt="..." />
                    </div>
                  </div>
                  <div className="col-sm-8 col-lg-4">
                    <div className="about_text">
                      <h5>{data.title}</h5>
                      <h2>{data.describe}</h2>
                      <h4>{data.suggestions}</h4>
                      <p>{data.content} </p>
                      <a href="#" className="btn_3">
                        Read More{" "}
                        <img
                          src="https://raw.githubusercontent.com/Duc-Tuan/img_dingo/411ba9369dc9b5cce3f5609c712534f2107aabfe/icon/left_1.svg"
                          alt="..."
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </Fragment>
            );
          })}
        </div>
      </section>

      <Feedback />

      <Teams />
    </>
  );
}

export default Abouts;
