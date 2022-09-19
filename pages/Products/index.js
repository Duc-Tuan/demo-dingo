import LayoutDefault from "../../layouts/LayoutDefault";

function Products({ children, name }) {
  return <LayoutDefault other={true} name={name}>{children}</LayoutDefault>;
}

export default Products;
