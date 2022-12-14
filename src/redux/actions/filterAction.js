import { TOOGLE_BRAND, TOOGLE_STOCK } from "../actonTypes/actionTypes"

export const toggleBrand = (brand) => {
  return {
    type: TOOGLE_BRAND,
    payload: brand
  }
}
export const toggleStock = () => {
  return {
    type: TOOGLE_STOCK
  }
}