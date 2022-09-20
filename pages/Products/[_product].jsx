/* eslint-disable @next/next/no-img-element */
import {
  faFacebook,
  faGoogle,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Products from ".";
import Button from "../../components/Button";
import Cart from "../../components/Carts";
import RelatedDishes from "../../components/RelatedDishes";
import { actionType } from "../../hook/Reducer";
import { useStateValue } from "../../hook/StateProvider";
import {
  data_food_menus,
  data_food_comment,
  data_food_commit,
} from "../../public/data";

function Product() {
  const router = useRouter();
  const { _product } = router.query;
  const [quty, setQuty] = useState(1);
  const [datas, setDatas] = useState(
    data_food_menus.filter((item) => item.id === parseInt(_product))
  );
  const [priceCart, setPriceCart] = useState(datas.map((n) => n.price));
  const [{ cart }, dispatch] = useStateValue();
  const [isCart, setIsCart] = useState(null);
  var itemId = 0;
  datas.map((n) => {
    return (itemId = n.id);
  });
  var category = "";
  datas.map((data) => {
    return (category = data.category);
  });
  const [allData, setAllData] = useState(
    data_food_menus.filter((item) => item.category === category)
  );
  const [comment, setComment] = useState(
    data_food_comment.filter((comment) => comment.itemId === itemId)
  );
  useEffect(() => {
    setComment(
      data_food_comment.filter((comment) => comment.itemId === itemId)
    );
    setDatas(data_food_menus.filter((item) => item.id === parseInt(_product)));
    setAllData(data_food_menus.filter((item) => item.category === category));
    setPriceCart(datas.map((n) => n.price) * quty);
  }, [_product, itemId, category, quty]);

  useEffect(() => {
    if (isCart != null) {
      dispatch({
        type: actionType.SET_CART,
        cart: isCart,
      });
    }
  }, [isCart]);
  return (
    <Products
      name={`Name of food: ${datas.map((n) => {
        return n.name;
      })}`}
    >
      <>
        {datas &&
          datas.map((data) => {
            return (
              <div className="container" key={data.id}>
                <div className="row product__id">
                  <div className="images col-xl-5 col-lg-5 col-md-5 col-sm-5 col-12">
                    <div className="image">
                      <img src={data.imgSrc} alt={data.name} />
                    </div>
                  </div>
                  <div className="col-xl-7 col-lg-7 col-md-7 col-sm-7 col-12">
                    <div className="info">
                      <h1 className="name">{data.name}</h1>
                      <div className="author">
                        <p>Author: {data.author}</p>
                      </div>
                      <div className="content">
                        <p>Content: {data.content}</p>
                      </div>
                      <div className="price">
                        <p>
                          Price: <span>$ {priceCart}</span>
                        </p>
                      </div>
                      <div className="quantitys">
                        <div className="quantity">
                          <div
                            className="remove"
                            onClick={() => {
                              quty <= 1 ? setQuty(1) : setQuty(quty - 1);
                            }}
                          >
                            <FontAwesomeIcon icon={faMinus} />
                          </div>
                          <div className="qty">
                            <input
                              type="number"
                              name="qty"
                              value={quty}
                              min={1}
                              readOnly
                            />
                          </div>
                          <div
                            className="add"
                            onClick={() => setQuty(quty + 1)}
                          >
                            <FontAwesomeIcon icon={faPlus} />
                          </div>
                        </div>
                        <Button
                          className={"btn_card"}
                          onClick={() =>
                            setIsCart(datas.find((n) => n.id === data.id))
                          }
                        >
                          Add card
                        </Button>
                      </div>
                    </div>

                    <div className="info mt-6">
                      <div className="category">
                        <p>Category: {data.category}</p>
                      </div>
                      <div className="share">
                        <span className="title">Share:</span>
                        <span className="quantitys">
                          <div className="faceboook">
                            <a href="#">
                              <FontAwesomeIcon icon={faFacebook} />
                            </a>
                          </div>
                          <div className="gg">
                            <a href="#">
                              <FontAwesomeIcon icon={faGoogle} />
                            </a>
                          </div>
                          <div className="twitter">
                            <a href="#">
                              <FontAwesomeIcon icon={faTwitter} />
                            </a>
                          </div>
                        </span>
                      </div>
                    </div>

                    <div className="info mt-6">
                      <ul className="commits">
                        {data_food_commit.map((data) => (
                          <li className="commit" key={data.id}>
                            {data.content}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

        <div className="container">
          <div className="comments-area">
            <h4>
              {comment.length < 10 ? `0${comment.length}` : `${comment.length}`}{" "}
              Comments
            </h4>
            {comment &&
              comment.map((data) => {
                return (
                  <div className="comment-list" key={data.id}>
                    <div className="single-comment justify-content-between d-flex">
                      <div className="user justify-content-between d-flex">
                        <div className="thumb">
                          <img src={data.imgSrc} alt="..." />
                        </div>
                        <div className="desc">
                          <p className="comment">{data.content}</p>
                          <div className="d-flex justify-content-between">
                            <div className="d-flex align-items-center">
                              <h5>
                                <a href="#">{data.name}</a>
                              </h5>
                              <p className="date">{data.date}</p>
                            </div>
                            <div className="reply-btn">
                              <a href="#" className="btn-reply text-uppercase">
                                reply
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>

          <RelatedDishes allData={allData} category={category} />
        </div>
      </>
    </Products>
  );
}

export default Product;
