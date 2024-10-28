import Cookies from "js-cookie";
import { ThreeDots } from "react-loader-spinner";
import { Component } from "react";

import ProductCard from "../ProductCard";
import "./index.css";

class AllProductsSection extends Component {
  state = { productsList: [], isLoading: true };

  getAllProducts = async () => {
    const URL = "https://apis.ccbp.in/products";
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

      this.setState({ productsList: formattedData, isLoading: false });
    }
  };

  renderLoader = () => {
    return <ThreeDots color="#ba864d" />;
  };

  renderProducts = () => {
    const { productsList } = this.state;

    return productsList.map((eachObj) => (
      <ProductCard key={eachObj.id} productInfo={eachObj} />
    ));
  };

  componentDidMount() {
    this.getAllProducts();
  }

  render() {
    const { isLoading } = this.state;

    return (
      <div>
        <h1>All Products</h1>

        <ul>{isLoading ? this.renderLoader() : this.renderProducts()}</ul>
      </div>
    );
  }
}

export default AllProductsSection;
