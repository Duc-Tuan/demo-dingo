/* eslint-disable @next/next/no-img-element */
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Products from ".";
import Button from "../../components/Button";
import { data_food_menus, data_food_comment } from "../../public/data";

function Product() {
  var itemId = 0;
  data.map((n) => {
    return (itemId = n.id);
  });
  const router = useRouter();
  const { _product } = router.query;
  const [data, setData] = useState(
    data_food_menus.filter((item) => item.id === parseInt(_product))
  );
  const [comment, setComment] = useState(
    data_food_comment.filter((comment) => comment.itemId === itemId)
  );
  
  useEffect(() => {
    setComment(
      data_food_comment.filter((comment) => comment.itemId === itemId)
    );
    setData(data_food_menus.filter((item) => item.id === parseInt(_product)));
  }, [_product]);

  return (
    <Products
      name={`Name of food: ${data.map((n) => {
        return n.name;
      })}`}
    >
      <>
        {data &&
          data.map((data) => {
            return (
              <div className="container" key={data.id}>
                <div className="row product__id">
                  <div className="image col-xl-4 col-lg-4 col-md-4 col-sm-5 col-12">
                    <img src={data.imgSrc} alt={data.name} />
                  </div>
                  <div className="col-xl-8 col-lg-8 col-md-8 col-sm-7 col-12">
                    <div className="info">
                      <div className="category">
                        <p>Category: {data.category}</p>
                      </div>
                      <div className="author">
                        <p>Author: {data.author}</p>
                      </div>
                      <div className="content">
                        <p>Content: {data.content}</p>
                      </div>
                      <div className="quantity">
                        <div className="remove">
                          <FontAwesomeIcon icon={faMinus} />
                        </div>
                        <div className="qty">
                          <input
                            type="number"
                            name="qty"
                            placeholder="1"
                            min={1}
                          />
                        </div>
                        <div className="add">
                          <FontAwesomeIcon icon={faPlus} />
                        </div>
                      </div>
                      <div className="price">
                        <p>
                          Price: <span>$ {data.price}</span>
                        </p>
                      </div>
                      <Button className={"btn_card"}>Add card</Button>
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
        </div>
      </>
    </Products>
  );
}

export default Product;
