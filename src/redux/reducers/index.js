import { combineReducers } from "redux";
import { ADD_PRODUCT } from "../actions/index";

const initialState = {
  name: "Product",
  products: [
    {
      id: 1,
      name: "Exforge 10mg",
      prices: [
        {
          id: 1,
          price: 10.99,
          date: "2019-01-01T17:16:32+00:00"
        },
        {
          id: 2,
          price: 9.2,
          date: "2018-11-01T17:16:32+00:00"
        }
      ]
    },
    {
      id: 2,
      name: "Exforge 20mg",
      prices: [
        {
          id: 3,
          price: 12.0,
          date: "2019-01-01T17:16:32+00:00"
        },
        {
          id: 4,
          price: 13.2,
          date: "2018-11-01T17:16:32+00:00"
        }
      ]
    },
    {
      id: 3,
      name: "Paracetamol 20MG",
      prices: [
        {
          id: 5,
          price: 5.0,
          date: "2017-01-01T17:16:32+00:00"
        },
        {
          id: 6,
          price: 13.2,
          date: "2018-11-01T17:16:32+00:00"
        }
      ]
    }
  ]
};

function products(state = initialState, action) {
  console.log(action)
  switch (action.type) {
    case ADD_PRODUCT:
      return [
        ...state,
        {
          id: 4,
          name: action.name,
          prices: [action.price]
        }
      ];
    default:
      return state;
  }
}

const todoApp = combineReducers({
  products
  // visibilityFilter,
  // product
});

export default todoApp;
