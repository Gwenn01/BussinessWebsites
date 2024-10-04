import React, { useState, useEffect } from "react";
import Select from "react-select";
import "./Products.css";
import assets from "../assets/assets";

const Product = () => {
  // Variables
  const [selectedOption, setSelectedOption] = useState("all");
  const [products, setProducts] = useState([]);

  // Fetch data from the backend
  useEffect(() => {
    fetch("http://localhost:5000/display")
      .then((res) => res.json())
      .then((data) => setProducts(data.data)) // Accessing the data object
      .catch((err) => console.log(err));
  }, []);

  // Options for the select dropdown
  const options = [
    { value: "all", label: "All" },
    { value: "bouquet", label: "Bouquet" },
    { value: "keychain", label: "Keychain" },
    { value: "clothes", label: "Clothes" },
  ];

  // Handling the selection change
  const handleSelectChange = (selectedOption) => {
    setSelectedOption(selectedOption.value);
  };

  // Filtering the products based on the selected option
  const filteredProducts =
    selectedOption === "all"
      ? products
      : products.filter((product) => product.category === selectedOption);

  return (
    <div className="container">
      <div className="select-wrapper">
        <Select
          options={options}
          className="select"
          onChange={handleSelectChange}
        />
      </div>
      <div className="product">
        {filteredProducts.map((product) => (
          <div className="cards" key={product.product_id}>
            <div className="image">
              <img
                src={assets[product.product_image]} // Dynamically setting the image path
                alt={product.product_name}
              />
            </div>
            <div className="details">
              <h3>{product.product_name}</h3>
              <p>{product.product_description}</p>
              <p>₱ {product.product_price}</p>
              <button>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
