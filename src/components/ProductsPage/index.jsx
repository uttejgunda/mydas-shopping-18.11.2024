import Cookies from "js-cookie";

import { Component } from "react";

import NavBar from "../NavBar";
import "./index.css";

class ProductsPage extends Component {
  state = { productsList: [] };

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

      this.setState({ productsList: formattedData });
    }
  };

  componentDidMount() {
    this.getAllProducts();
  }

  render() {
    const { productsList } = this.state;

    return (
      <div className="products-bg-con">
        <NavBar />
        <h1>All Products</h1>

        <ul>productsList.map();</ul>
      </div>
    );
  }
}

export default ProductsPage;
