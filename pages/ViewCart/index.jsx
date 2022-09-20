import LayoutDefault from "../../layouts/LayoutDefault";

function ViewCarts({Children}) {
    return ( <LayoutDefault other={true} name="Carts">{Children}</LayoutDefault> );
}

export default ViewCarts;