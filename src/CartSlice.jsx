
import { createSlice } from "@reduxjs/toolkit";

export const PLANTS = [
  {
    id: 1,
    name: "Snake Plant",
    category: "Air-Purifying Plants",
    price: 18,
    image: "https://images.unsplash.com/photo-1593482892290-f54927ae2b7a?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    name: "Peace Lily",
    category: "Air-Purifying Plants",
    price: 22,
    image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    name: "Spider Plant",
    category: "Air-Purifying Plants",
    price: 15,
    image: "https://images.unsplash.com/photo-1572688484438-313a6e50c333?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    name: "Areca Palm",
    category: "Air-Purifying Plants",
    price: 28,
    image: "https://images.unsplash.com/photo-1512428813834-c702c7702b78?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 5,
    name: "Rubber Plant",
    category: "Air-Purifying Plants",
    price: 25,
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 6,
    name: "Aloe Vera",
    category: "Air-Purifying Plants",
    price: 12,
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 7,
    name: "Monstera Deliciosa",
    category: "Decorative Plants",
    price: 30,
    image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 8,
    name: "Calathea",
    category: "Decorative Plants",
    price: 24,
    image: "https://images.unsplash.com/photo-1604762524889-3e2fcc145683?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 9,
    name: "Croton",
    category: "Decorative Plants",
    price: 19,
    image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 10,
    name: "Chinese Evergreen",
    category: "Decorative Plants",
    price: 21,
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 11,
    name: "Fiddle Leaf Fig",
    category: "Decorative Plants",
    price: 35,
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 12,
    name: "Bird of Paradise",
    category: "Decorative Plants",
    price: 40,
    image: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 13,
    name: "Jade Plant",
    category: "Succulents and Cacti",
    price: 14,
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 14,
    name: "Echeveria",
    category: "Succulents and Cacti",
    price: 10,
    image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 15,
    name: "String of Pearls",
    category: "Succulents and Cacti",
    price: 16,
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 16,
    name: "Golden Barrel Cactus",
    category: "Succulents and Cacti",
    price: 13,
    image: "https://images.unsplash.com/photo-1509937528035-ad76254b0356?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 17,
    name: "Haworthia",
    category: "Succulents and Cacti",
    price: 11,
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 18,
    name: "Christmas Cactus",
    category: "Succulents and Cacti",
    price: 17,
    image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?auto=format&fit=crop&w=600&q=80",
  },
];

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addToCart(state, action) {
      const plant = action.payload;
      const existing = state.items.find(
        (item) => item.id === plant.id
      );

      if (!existing) {
        state.items.push({ ...plant, quantity: 1 });
      }
    },

    increaseQuantity(state, action) {
      const item = state.items.find(
        (plant) => plant.id === action.payload
      );

      if (item) item.quantity += 1;
    },

    decreaseQuantity(state, action) {
      const item = state.items.find(
        (plant) => plant.id === action.payload
      );

      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },

    removeFromCart(state, action) {
      state.items = state.items.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} = cartSlice.actions;

export default cartSlice.reducer;
