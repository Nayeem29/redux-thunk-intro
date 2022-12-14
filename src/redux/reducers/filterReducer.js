import { TOOGLE_BRAND, TOOGLE_STOCK } from "../actonTypes/actionTypes";

export const initialState = {
  filters: {
    brands: [],
    stock: false
  },
  keywords: ""
}

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOOGLE_BRAND:
      if (!state.filters.brands.includes(action.payload)) {
        return {
          ...state,
          filters: {
            ...state.filters,
            brands: [...state.filters.brands, action.payload]
          }
        }
      } else {
        return {
          ...state,
          filters: {
            ...state.filters,
            brands: state.filters.brands.filter(brand => brand !== action.payload)
          }
        }
      }
    case TOOGLE_STOCK:
      return {
        ...state,
        filters: {
          ...state.filters,
          stock: !state.filters.stock
        }
      }

    default:
      return state;
  }
}