/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useState } from "react";
import Feedback from "../components/Feedback";
import Intro_video_bg from "../components/Intro_video_bg";
import Menu_food from "../components/Menu_food";
import Teams from "../components/Teams";
import { data_food_menus } from "../public/data";
import Banner from "../components/Banner";

function Homes() {
  const [outstanding, setOutstanding] = useState(
    data_food_menus.filter((item) => item.outstanding === "yes")
    );
    
  return (
    <>
      <Banner />

      <section className="exclusive_item_part blog_item_section">
        <div className="container">
          <div className="row">
            <div className="col-xl-5">
              <div className="section_tittle">
                <p>Popular Dishes</p>
                <h2>Our Exclusive Items</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {outstanding.map((data) => {
              return (
                <div className="col-sm-6 col-lg-4" key={data.id}>
                  <Link href={`/Products/${data.id}`}>
                    <div className="single_blog_item">
                      <div className="single_blog_img">
                        <img src={data.imgSrc} alt="..." />
                      </div>
                      <div className="single_blog_text">
                        <h3>{data.name}</h3>
                        <p>{data.describe}</p>
                        <a href="#" className="btn_3">
                          Read More{" "}
                          <img src="/images/icon/left_2.svg" alt="..." />
                        </a>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="about_part">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-sm-4 col-lg-5 offset-lg-1">
              <div className="about_img">
                <img src="/images/about.png" alt="..." />
              </div>
            </div>
            <div className="col-sm-8 col-lg-4">
              <div className="about_text">
                <h5>Our History</h5>
                <h2>Where The Food’s As Good As The Root Beer.</h2>
                <h4>Satisfying people hunger for simple pleasures</h4>
                <p>
                  May over was. Be signs two. Spirit. Brought said dry own
                  firmament lesser best sixth deep abundantly bearing, him,
                  gathering you blessed bearing he our position best ticket in
                  month hole deep{" "}
                </p>
                <a href="#" className="btn_3">
                  Read More <img src="/images/icon/left_2.svg" alt="..." />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Intro_video_bg />

      <Menu_food />

      <Teams />

      <section className="regervation_part section_padding">
        <div className="container">
          <div className="row">
            <div className="col-xl-5">
              <div className="section_tittle">
                <p>Reservation</p>
                <h2>Book A Table</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="regervation_part_iner">
                <form>
                  <div className="form-row row">
                    <div className="form-group col-xl-6 col-md-6">
                      <input
                        type="email"
                        className="form-control"
                        id="inputEmail"
                        placeholder="Name *"
                      />
                    </div>
                    <div className="form-group col-xl-6 col-md-6">
                      <input
                        type="password"
                        className="form-control"
                        id="inputPassword"
                        placeholder="Email address *"
                      />
                    </div>
                    {/*<div className="form-group col-xl-6 col-md-6">
                       <select className="form-control" id="Select">
                          <option value="1" selected>
                            Persons *
                          </option>
                          <option value="2">Number of guests 1</option>
                          <option value="3">Number of guests 2</option>
                          <option value="4">Number of guests 3</option>
                          <option value="5">Number of guests 4</option>
                        </select>
                    </div>*/}
                    <div className="form-group col-xl-6 col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        id="pnone"
                        placeholder="Phone number *"
                      />
                    </div>
                    <div className="form-group col-xl-6 col-md-6">
                      <div className="input-group date">
                        <input
                          id="datepicker"
                          type="text"
                          className="form-control"
                          placeholder="Date *"
                        />
                      </div>
                    </div>
                    {/*<div className="form-group col-xl-6 col-md-6">
                       <select className="form-control" id="Select2">
                          <option value="" selected>
                            Time *
                          </option>
                          <option value="1">8 AM TO 10AM</option>
                          <option value="1">10 AM TO 12PM</option>
                          <option value="1">12PM TO 2PM</option>
                          <option value="1">2PM TO 4PM</option>
                          <option value="1">4PM TO 6PM</option>
                          <option value="1">6PM TO 8PM</option>
                          <option value="1">4PM TO 10PM</option>
                          <option value="1">10PM TO 12PM</option>
                        </select>
                    </div>*/}
                  </div>

                  <div className="form-group col-md-12">
                    <textarea
                      className="form-control"
                      id="Textarea"
                      rows="4"
                      placeholder="Your Note *"
                    ></textarea>
                  </div>

                  <div className="regerv_btn">
                    <a href="#" className="btn_4">
                      Book A Table
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Feedback />

      <section className="blog_item_section blog_section section_padding">
        <div className="container">
          <div className="row">
            <div className="col-xl-5">
              <div className="section_tittle">
                <p>Recent News</p>
                <h2>Latest From Blog</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 col-lg-4">
              <div className="single_blog_item">
                <div className="single_blog_img">
                  <img src="/images/blog/blog_1.png" alt="..." />
                </div>
                <div className="single_blog_text">
                  <div className="date">
                    <a href="#" className="date_item">
                      Apr 06, 2019{" "}
                    </a>
                    <a href="#" className="date_item">
                      {" "}
                      <span>#</span> Food News{" "}
                    </a>
                  </div>
                  <h3>
                    <a href="blog.html">
                      Adama kind deep gatherin first over fter his great
                    </a>
                  </h3>
                  <a href="#" className="btn_3">
                    Read More <img src="/images/icon/left_1.svg" alt="..." />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="single_blog_item">
                <div className="single_blog_img">
                  <img src="/images/blog/blog_2.png" alt="..." />
                </div>
                <div className="single_blog_text">
                  <div className="date">
                    <a href="#" className="date_item">
                      Apr 06, 2019{" "}
                    </a>
                    <a href="#" className="date_item">
                      {" "}
                      <span>#</span> Food News{" "}
                    </a>
                  </div>
                  <h3>
                    <a href="blog.html">
                      Adama kind deep gatherin first over fter his great
                    </a>
                  </h3>
                  <a href="#" className="btn_3">
                    Read More <img src="/images/icon/left_1.svg" alt="..." />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="single_blog_item">
                <div className="single_blog_img">
                  <img src="/images/blog/blog_3.png" alt="..." />
                </div>
                <div className="single_blog_text">
                  <div className="date">
                    <a href="#" className="date_item">
                      Apr 06, 2019{" "}
                    </a>
                    <a href="#" className="date_item">
                      {" "}
                      <span>#</span> Food News{" "}
                    </a>
                  </div>
                  <h3>
                    <a href="blog.html">
                      Adama kind deep gatherin first over fter his great
                    </a>
                  </h3>
                  <a href="#" className="btn_3">
                    Read More <img src="/images/icon/left_1.svg" alt="..." />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 d-none d-sm-block d-lg-none">
              <div className="single_blog_item">
                <div className="single_blog_img">
                  <img src="/images/blog/blog_1.png" alt="..." />
                </div>
                <div className="single_blog_text">
                  <div className="date">
                    <a href="#" className="date_item">
                      Apr 06, 2019{" "}
                    </a>
                    <a href="#" className="date_item">
                      {" "}
                      <span>#</span> Food News{" "}
                    </a>
                  </div>
                  <h3>
                    <a href="blog.html">
                      Adama kind deep gatherin first over fter his great
                    </a>
                  </h3>
                  <a href="#" className="btn_3">
                    Read More <img src="/images/icon/left_1.svg" alt="..." />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Homes;
