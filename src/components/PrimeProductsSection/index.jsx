import Cookies from "js-cookie";
import { Component } from "react";

import ProductCard from "../ProductCard";
import "./index.css";

class PrimeProductsSection extends Component {
  state = { primeProducts: [] };

  getPrimeProducts = async () => {
    const URL = "https://apis.ccbp.in/prime-deals";
    const jwtToken = Cookies.get("jwt_token");

    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    };

    const response = await fetch(URL, options);

    if (response.ok) {
      const data = await response.json();

      const formattedData = data.products.map((eachObj) => {
        return {
          id: eachObj.id,
          title: eachObj.title,
          imgUrl: eachObj.image_url,
          brand: eachObj.brand,
          price: eachObj.price,
          rating: eachObj.rating,
        };
      });

      this.setState({ primeProducts: formattedData });
    }
  };

  renderPrimeProducts = () => {
    const { primeProducts } = this.state;

    return primeProducts.map((eachObj) => (
      <ProductCard key={eachObj.id} productInfo={eachObj} />
    ));
  };

  componentDidMount = () => {
    this.getPrimeProducts();
  };

  render() {
    return (
      <div>
        <h1>Prime Products</h1>

        <ul>{this.renderPrimeProducts()}</ul>
      </div>
    );
  }
}

export default PrimeProductsSection;
