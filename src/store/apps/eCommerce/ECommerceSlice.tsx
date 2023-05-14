import axios from "../../../utils/axios";
import { filter, map } from "lodash";
import { createSlice } from "@reduxjs/toolkit";
import { AppDispatch } from "../../Store";

const API_URL = "/api/data/eCommerce/ProductsData";

interface StateType {
  products: any[];
  productSearch: string;
  sortBy: string;
  cart: any[];
  total: number;
  filters: {
    category: string;
    color: string;
    gender: string;
    price: string;
    rating: string;
  };
  error: string;
}

const initialState = {
  products: [],
  productSearch: "",
  sortBy: "newest",
  cart: [],
  total: 0,
  filters: {
    category: "All",
    color: "All",
    gender: "All",
    price: "All",
    rating: "",
  },
  error: "",
};

export const EcommerceSlice = createSlice({
  name: "ecommerce",
  initialState,
  reducers: {
    // HAS ERROR

    hasError(state: StateType, action) {
      state.error = action.payload;
    },

    // GET PRODUCTS
    getProducts: (state, action) => {
      state.products = action.payload;
    },

    SearchProduct: (state, action) => {
      state.productSearch = action.payload;
    },

    //  SORT  PRODUCTS
    sortByProducts(state, action) {
      state.sortBy = action.payload;
    },

    //  SORT  PRODUCTS
    sortByGender(state, action) {
      state.filters.gender = action.payload.gender;
    },

    //  SORT  By Color
    sortByColor(state, action) {
      state.filters.color = action.payload.color;
    },

    //  SORT  By Color
    sortByPrice(state, action) {
      state.filters.price = action.payload.price;
    },

    //  FILTER PRODUCTS
    filterProducts(state, action) {
      state.filters.category = action.payload.category;
    },

    //  FILTER Reset
    filterReset(state) {
      state.filters.category = "All";
      state.filters.color = "All";
      state.filters.gender = "All";
      state.filters.price = "All";
      state.sortBy = "newest";
    },

    // ADD TO CART
    addToCart(state: StateType, action) {
      const product = action.payload;
      state.cart = [...state.cart, product];
    },

    // qty increment
    increment(state: StateType, action) {
      const productId = action.payload;
      const updateCart = map(state.cart, (product) => {
        if (product.id === productId) {
          return {
            ...product,
            qty: product.qty + 1,
          };
        }

        return product;
      });

      state.cart = updateCart;
    },

    // qty decrement
    decrement(state: StateType, action) {
      const productId = action.payload;
      const updateCart = map(state.cart, (product) => {
        if (product.id === productId) {
          return {
            ...product,
            qty: product.qty - 1,
          };
        }

        return product;
      });

      state.cart = updateCart;
    },

    // delete Cart
    deleteCart(state: StateType, action) {
      const updateCart = filter(
        state.cart,
        (item) => item.id !== action.payload
      );
      state.cart = updateCart;
    },
  },
});
export const {
  hasError,
  getProducts,
  SearchProduct,
  sortByProducts,
  filterProducts,
  sortByGender,
  increment,
  deleteCart,
  decrement,
  addToCart,
  sortByPrice,
  filterReset,
  sortByColor,
} = EcommerceSlice.actions;

export const fetchProducts = () => async (dispatch: AppDispatch) => {
  try {
    const response = await axios.get(`${API_URL}`);
    dispatch(getProducts(response.data));
  } catch (error) {
    dispatch(hasError(error));
  }
};

export default EcommerceSlice.reducer;
