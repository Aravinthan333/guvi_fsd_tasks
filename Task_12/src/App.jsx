import "./App.css";
import { useState } from "react";
import propTypes from "prop-types";

const data = [
  {
    id: 1,
    productName: "Laptop",
    rating: 4.5,
    price: 899.99,
  },
  {
    id: 2,
    productName: "Smartphone",
    rating: 4.2,
    price: 499.99,
  },
  {
    id: 3,
    productName: "Headphones",
    rating: 4.8,
    price: 79.99,
  },
  {
    id: 4,
    productName: "Smartphone",
    rating: 4.2,
    price: 499.99,
  },
  {
    id: 5,
    productName: "Smartphone",
    rating: 4.2,
    price: 499.99,
  },
  {
    id: 6,
    productName: "Smartphone",
    rating: 4.2,
    price: 499.99,
  },
  {
    id: 7,
    productName: "Smartphone",
    rating: 4.2,
    price: 499.99,
  },
  {
    id: 8,
    productName: "Smartphone",
    rating: 4.2,
    price: 499.99,
  },
  {
    id: 9,
    productName: "Smartphone",
    rating: 4.2,
    price: 499.99,
  },
  {
    id: 10,
    productName: "Smartphone",
    rating: 4.2,
    price: 499.99,
  },
  {
    id: 11,
    productName: "Smartphone",
    rating: 4.2,
    price: 499.99,
  },
];

// ------------------------------------------------------------------------------------------------------

const Card = ({ productName, price }) => {
  const [inCart, setCart] = useState(false);
  const additems = () => {
    if (inCart) {
      setCart(false);
    } else {
      setCart(true);
    }
  };

  return (
    <div className="card">
      <div className="image">
        <span className="sale">sale</span>
        <p>450 X 300</p>
      </div>
      <h3 className="product">{productName}</h3>
      <i className="bx bxs-star" style={{ color: "#e0ec07" }}></i>
      <i className="bx bxs-star" style={{ color: "#e0ec07" }}></i>
      <i className="bx bxs-star" style={{ color: "#e0ec07" }}></i>
      <i className="bx bxs-star" style={{ color: "#e0ec07" }}></i>
      <i className="bx bxs-star" style={{ color: "#e0ec07" }}></i>
      <p className="price">$ {price}</p>
      <button className="button" onClick={additems}>
        {inCart ? "Remove from" : "Add to"} cart
      </button>
    </div>
  );
};

Card.propTypes = {
  productName: propTypes.string,
  price: propTypes.number,
};

const Cards = () => {
  return (
    <>
      <div className="cards">
        {data.map((e) => (
          <Card key={e.id} {...e} />
        ))}
      </div>
    </>
  );
};

// ------------------------------------------------------------------------------------------------------

let count = 0;

const Logo = () => (
  <span className="logo">
    <p>React Shopping</p>
  </span>
);
const Menu = () => (
  <span className="menu">
    <a>Home</a>
    <a>About</a>
    <select name="details">
      <option value="shop">Shop</option>
      <option value="allProducts">All Products</option>
      <option value="PoppularItems">Poppular Items</option>
      <option value="newArrivals">New Arrivals</option>
    </select>
  </span>
);

const Cart = () => {
  return (
    <>
      <div className="cart">
        <i className={`bx bxs-cart`}></i>
        <p>Cart {count}</p>
      </div>
    </>
  );
};

// ------------------------------------------------------------------------------------------------------

function App() {
  return (
    <>
      <div className="navbar">
        <Logo />
        <Menu />
        <Cart />
      </div>

      <div className="slides">
        <span>
          <h1>Shop in style</h1>
          <p>With this shop homepage template</p>
        </span>
      </div>

      <div className="shopArea">
        <Cards />
      </div>

      <div className="footer">
        <p>Copyright &copy; Your Website 2024</p>
      </div>
    </>
  );
}

export default App;
