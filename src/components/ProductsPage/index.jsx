import NavBar from "../NavBar";
import PrimeProductsSection from "../PrimeProductsSection";
import AllProductsSection from "../AllProductsSection";

import "./index.css";

const ProductsPage = () => (
  <div className="products-bg-con">
    <NavBar />
    <PrimeProductsSection />
    <AllProductsSection />
  </div>
);

export default ProductsPage;
