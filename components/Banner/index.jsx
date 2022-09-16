/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
function Banner({ other, name }) {
  return other ? (
    <section className="breadcrumb breadcrumb_bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="breadcrumb_iner text-center">
              <div className="breadcrumb_iner_item">
                <h2>{name}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  ) : (
    <section className="banner_part">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <div className="banner_text">
                        <div className="banner_text_iner">
                            <h5>Expensive but the best</h5>
                            <h1>Deliciousness jumping into the mouth</h1>
                            <p>Together creeping heaven upon third dominion be upon wont darkness rule land
                                behold it created good saw after shed Our set living. Signs midst dominion
                                creepeth morning</p>
                            <div className="banner_btn">
                                <div className="banner_btn_iner">
                                    <a href="#" className="btn_2">Reservation <img src="https://raw.githubusercontent.com/Duc-Tuan/img_dingo/411ba9369dc9b5cce3f5609c712534f2107aabfe/icon/left_1.svg" alt="..."/></a>
                                </div>
                                <a href="https://www.youtube.com/watch?v=pBFQdxA-apI" className="popup-youtube video_popup">
                                    <span><img src="https://raw.githubusercontent.com/Duc-Tuan/img_dingo/411ba9369dc9b5cce3f5609c712534f2107aabfe/icon/play.svg" alt="..."/></span> Watch our story</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Banner;
