
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, PLANTS } from "./CartSlice";

export default function ProductList() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const categories = [...new Set(
    PLANTS.map((plant) => plant.category)
  )];

  return (
    <main className="page-container">
      <h1 className="page-title">Explore Our Houseplants</h1>

      <p className="page-title">
        Discover the perfect plant for every corner of your home.
      </p>

      {categories.map((category) => (
        <section className="plant-category" key={category}>
          <h2>{category}</h2>

          <div className="plant-grid">
            {PLANTS.filter(
              (plant) => plant.category === category
            ).map((plant) => {
              const added = cartItems.some(
                (item) => item.id === plant.id
              );

              return (
                <article className="plant-card" key={plant.id}>
                  <img
                    src={plant.image}
                    alt={plant.name}
                    loading="lazy"
                  />

                  <h3>{plant.name}</h3>

                  <p className="plant-price">
                    ${plant.price.toFixed(2)}
                  </p>

                  <button
                    className="add-button"
                    disabled={added}
                    onClick={() => dispatch(addToCart(plant))}
                  >
                    {added ? "Added to Cart" : "Add to Cart"}
                  </button>
                </article>
              );
            })}
          </div>
        </section>
      ))}
    </main>
  );
}
