import "./index.css";

const NavBar = () => (
  <nav>
    <img
      src="https://res.cloudinary.com/dkoqbt4pc/image/upload/v1726574131/mydas-shopping-logo.png"
      alt="mydas-logo"
    />

    <div>
      <ul>
        <li>
          <button>Home</button>
        </li>
        <li>
          <button>Products</button>
        </li>
        <li>
          <button>Cart</button>
        </li>
      </ul>

      <button>Log-out</button>
    </div>
  </nav>
);

export default NavBar;
