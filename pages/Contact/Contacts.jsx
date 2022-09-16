import {
  faEnvelope,
  faHome,
  faTablet,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Contacts() {
  return (
    <>
      <section className="contact-section section_padding">
        <div className="container">
          <iframe
            className="gmap_iframe"
            frameBorder="0"
            scrolling="no"
            src="https://maps.google.com/maps?width=652&amp;height=551&amp;hl=en&amp;q=cao đẳng bách khoa, khu văn hóa nghệ thuật&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
          <div className="row mt-5">
            <div className="col-12">
              <h2 className="contact-title">Get in Touch</h2>
            </div>
            <div className="col-lg-8">
              <form
                className="form-contact contact_form"
                action="contact_process.php"
                method="post"
                id="contactForm"
              >
                <div className="row">
                  <div className="col-12">
                    <div className="form-group">
                      <textarea
                        className="form-control w-100"
                        name="message"
                        id="message"
                        cols="30"
                        rows="9"
                        placeholder="Enter Message"
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <input
                        className="form-control"
                        name="name"
                        id="name"
                        type="text"
                        placeholder="Enter your name"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <input
                        className="form-control"
                        name="email"
                        id="email"
                        type="email"
                        placeholder="Enter email address"
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <input
                        className="form-control"
                        name="subject"
                        id="subject"
                        type="text"
                        placeholder="Enter Subject"
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group mt-3">
                  <button
                    type="submit"
                    className="button button-contactForm btn_4"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
            <div className="col-lg-4">
              <div className="media contact-info dfcenter">
                <span className="contact-info__icon">
                  <FontAwesomeIcon icon={faHome} />
                </span>
                <div className="media-body">
                  <h3>Buttonwood, California.</h3>
                  <p>Rosemead, CA 91770</p>
                </div>
              </div>
              <div className="media contact-info dfcenter">
                <span className="contact-info__icon">
                  <FontAwesomeIcon icon={faTablet} />
                </span>
                <div className="media-body">
                  <h3>00 (440) 9865 562</h3>
                  <p>Mon to Fri 9am to 6pm</p>
                </div>
              </div>
              <div className="media contact-info dfcenter">
                <span className="contact-info__icon">
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
                <div className="media-body">
                  <h3>support@colorlib.com</h3>
                  <p>Send us your query anytime!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contacts;
