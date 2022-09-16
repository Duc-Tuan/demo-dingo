/* eslint-disable @next/next/no-img-element */
import { faLeftLong, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LayoutDefault from "../../layouts/LayoutDefault";
import {
  data_food_post,
  data_food_recent_post,
  data_food_singlw_blog,
} from "../../public/data";

function Blog() {
  return (
    <LayoutDefault other={true} name="Our Blog">
      <section className="blog_area section_padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mb-5 mb-lg-0">
              <div className="blog_left_sidebar">
                {data_food_singlw_blog.map((data) => {
                  return (
                    <article className="blog_item" key={data.id}>
                      <div className="blog_item_img">
                        <img
                          className="card-img rounded-0"
                          src={data.imgSrc}
                          alt="..."
                        />
                        <a href="#" className="blog_item_date">
                          <h3>{data.day}</h3>
                          <p>{data.month}</p>
                        </a>
                      </div>

                      <div className="blog_details">
                        <a className="d-inline-block" href="single-blog.html">
                          <h2>{data.title}</h2>
                        </a>
                        <p>{data.content}</p>
                        <ul className="blog-info-link">
                          <li>
                            <a href="#">
                              <i className="far fa-user"></i> {data.info}
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="far fa-comments"></i>{" "}
                              {data.numberComment} Comments
                            </a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  );
                })}

                <nav className="blog-pagination justify-content-center d-flex">
                  <ul className="pagination">
                    <li className="page-item">
                      <a href="#" className="page-link" aria-label="Previous">
                        <i className="ti-angle-left"></i>
                        <FontAwesomeIcon icon={faLeftLong} />
                      </a>
                    </li>
                    <li className="page-item">
                      <a href="#" className="page-link">
                        1
                      </a>
                    </li>
                    <li className="page-item active">
                      <a href="#" className="page-link">
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a href="#" className="page-link" aria-label="Next">
                        <i className="ti-angle-right"></i>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="blog_right_sidebar">
                <aside className="single_sidebar_widget search_widget">
                  <form action="#">
                    <div className="form-group">
                      <div className="input-group mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Search Keyword"
                        />
                        <div className="input-group-append">
                          <button className="btn" type="button">
                            <FontAwesomeIcon icon={faSearch} />
                          </button>
                        </div>
                      </div>
                    </div>
                    <button
                      className="button rounded-0 primary-bg text-white w-100 btn_4"
                      type="submit"
                    >
                      Search
                    </button>
                  </form>
                </aside>

                <aside className="single_sidebar_widget post_category_widget">
                  <h4 className="widget_title">Category</h4>
                  <ul className="list cat-list">
                    <li>
                      <a href="#" className="d-flex">
                        <p>Resaurant food</p>
                        <p>(37)</p>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="d-flex">
                        <p>Travel news</p>
                        <p>(10)</p>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="d-flex">
                        <p>Modern technology</p>
                        <p>(03)</p>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="d-flex">
                        <p>Product</p>
                        <p>(11)</p>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="d-flex">
                        <p>Inspiration</p>
                        <p>21</p>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="d-flex">
                        <p>Health Care (21)</p>
                        <p>09</p>
                      </a>
                    </li>
                  </ul>
                </aside>

                <aside className="single_sidebar_widget popular_post_widget">
                  <h3 className="widget_title">Recent Post</h3>
                  {data_food_recent_post.map((data) => {
                    return (
                      <div className="media post_item" key={data.id}>
                        <img src={data.imgSrc} alt="post" />
                        <div className="media-body">
                          <a href="single-blog.html">
                            <h3>{data.describe}</h3>
                          </a>
                          <p>{data.date}</p>
                        </div>
                      </div>
                    );
                  })}
                </aside>

                <aside className="single_sidebar_widget tag_cloud_widget">
                  <h4 className="widget_title">Tag Clouds</h4>
                  <ul className="list">
                    <li>
                      <a href="#">project</a>
                    </li>
                    <li>
                      <a href="#">love</a>
                    </li>
                    <li>
                      <a href="#">technology</a>
                    </li>
                    <li>
                      <a href="#">travel</a>
                    </li>
                    <li>
                      <a href="#">restaurant</a>
                    </li>
                    <li>
                      <a href="#">life style</a>
                    </li>
                    <li>
                      <a href="#">design</a>
                    </li>
                    <li>
                      <a href="#">illustration</a>
                    </li>
                  </ul>
                </aside>

                <aside className="single_sidebar_widget instagram_feeds">
                  <h4 className="widget_title">Instagram Feeds</h4>
                  <ul className="instagram_row flex-wrap">
                    {data_food_post.map((data) => {
                      return (
                        <li key={data.id}>
                          <a href="#">
                            <img
                              width="100%"
                              className="img-fluid"
                              src={data.imgSrc}
                              alt="..."
                            />
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </aside>

                <aside className="single_sidebar_widget newsletter_widget">
                  <h4 className="widget_title">Newsletter</h4>

                  <form action="#">
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                        required
                      />
                    </div>
                    <button
                      className="button rounded-0 primary-bg text-white w-100 btn_4"
                      type="submit"
                    >
                      Subscribe
                    </button>
                  </form>
                </aside>
              </div>
            </div>
          </div>
        </div>
      </section>
    </LayoutDefault>
  );
}

export default Blog;
