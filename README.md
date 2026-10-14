# Paradise Nursery

Paradise Nursery is an online houseplant shopping application built with React and Redux Toolkit. It allows users to explore indoor plants, browse different categories, add plants to a shopping cart, update quantities, remove products, and view the total cost.

## Features

- Responsive landing page with a botanical background.
- Company information section.
- Three houseplant categories with six plants per category.
- Product thumbnails, names, and prices.
- Add-to-cart buttons with disabled states after adding.
- Dynamic cart item count.
- Increase and decrease product quantities.
- Remove products from the shopping cart.
- Automatic calculation of item totals and cart total.
- Checkout message indicating that checkout is coming soon.

## Technologies

- React
- React Router
- Redux Toolkit
- React Redux
- CSS

## Installation

Install the project dependencies:

```bash
npm install
npm install @reduxjs/toolkit react-redux react-router-dom
```

Start the development server:

```bash
npm run dev
```

## Project Structure

- `src/App.jsx` — Application routes, landing page, and navigation.
- `src/App.css` — Application styling and landing-page background.
- `src/AboutUs.jsx` — Company information.
- `src/CartSlice.jsx` — Redux cart state and actions.
- `src/ProductList.jsx` — Houseplant catalog.
- `src/CartItem.jsx` — Shopping cart page.

## License

This project is intended for educational purposes.
