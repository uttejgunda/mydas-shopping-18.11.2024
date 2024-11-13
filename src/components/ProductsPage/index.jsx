import NavBar from "../NavBar";
import PrimeProductsSection from "../PrimeProductsSection";
import AllProductsSection from "../AllProductsSection";

import "./index.css";

const ProductsPage = () => (
  <div className="products-bg-con">
    <NavBar />
    <div>
      <PrimeProductsSection />
      <AllProductsSection />
    </div>
  </div>
);

export default ProductsPage;
