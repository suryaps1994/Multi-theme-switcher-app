import React, { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Axios is used for simple JSON handling (Auto json() parsing in axios) and better error handling and timeout support. therefore we used axios for API call instead of fetch Api
    axios
      .get("https://dummyjson.com/products/category/smartphones")

      .then((response) => setProducts(response.data.products))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="mb-3">Welcome to the Theme Switcher App</h1>
      <p className="lead">
        This is a sample React app showing multiple themes with persistent
        selection, routing, and API integration.
      </p>
      <button className="btn btn-outline-primary mb-4">Explore More</button>

      <h2 className="mb-3">Product List</h2>
      <div className="row">
        {products.map((product) => (
          <div className="col-md-4 mb-4" key={product.id}>
            <div className="card h-100 shadow-sm">
              <img
                src={product.thumbnail}
                className="card-img-top p-3"
                alt={product.title}
                style={{ height: "200px", objectFit: "contain" }}
              />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">${product.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
