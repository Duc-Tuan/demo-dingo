/* eslint-disable @next/next/no-img-element */
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { actions, useStore } from "../../Store";

function Cart() {
  const [state, dispatch] = useStore();
  const { carts } = state;

  const handleDelete = (id) => {
    console.log(id);
    dispatch(actions.deleteCart(id));
  }
  return (
    <>
      {carts.length === 0 ? (
        <div className="menu_cart--no dfcenter">
          <h4>Hiện chưa có sản phẩm</h4>
        </div>
      ) : (
        <div className="menu_carts">
          <div className="menu_cart--content">
            {carts.map((data, index) => (
              <div className="menu_cart" key={index}>
                <Link href={`/Products/${data.id}`}>
                  <div className="menu_cart--info dfcenter">
                    <div className="menu_car--img dfcenter">
                      <img src={data.imgSrc} alt="..." />
                    </div>
                    <div className="menu_car--info">
                      <h4>{data.name}</h4>
                      <div className="describe">
                        <p>{data.describe}</p>
                      </div>
                      <h5 className="price">
                        <span>${data.price}</span> x 1
                      </h5>
                    </div>
                  </div>
                </Link>
                <div
                  className="remove dfcenter"
                  onClick={() => handleDelete(index)}
                >
                  <FontAwesomeIcon icon={faClose} />
                </div>
              </div>
            ))}
          </div>

          <div className="menu_cart--viewcart dfcenter">
            <Link href={"/ViewCart"}>View cart</Link>
          </div>
        </div>
      )}
    </>
  );
}

export default Cart;
