/* eslint-disable @next/next/no-img-element */
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useStateValue } from "../../hook/StateProvider";

function Cart() {
  const [{ cart }, dispatch] = useStateValue();
  return (
    <>
      {cart.length === 0 ? (
        <div className="menu_cart--no dfcenter">
          <h4>Hiện chưa có sản phẩm</h4>
        </div>
      ) : (
        <div className="menu_carts">
          <div className="menu_cart--content">
            {cart.map((data) => (
              <Link href={`/Products/${data.id}`} key={data.id}>
                <div className="menu_cart">
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
                  <div className="remove dfcenter">
                    <FontAwesomeIcon icon={faClose} />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="menu_cart--viewcart dfcenter">
            <Link href={"/ViewCart"}>All view</Link>
          </div>
        </div>
      )}
    </>
  );
}

export default Cart;
