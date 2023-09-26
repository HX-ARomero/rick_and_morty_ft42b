import axios from "axios";
import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from "./action-types";
const endpoint = `http://localhost:3001/rickandmorty/faverror`

export const addFav = (character) => {
   return async (dispatch) => {
      try {
         const { data } = await axios.post(endpoint, character);
         return dispatch({
            type: ADD_FAV,
            payload: data,
         });
      } catch (error) {
         return dispatch({
            type: "ERROR",
            payload: error.message
         })
      }
   }
 };

 export const removeFav = (id) => {
   return async (dispatch) => {
      try {
         const { data } = await axios.delete(`${endpoint}/${id}`);
         return dispatch({
            type: 'REMOVE_FAV',
            payload: data,
      });
      } catch (error) {
         return dispatch({
            type: "ERROR",
            payload: data
         })
      }
   }
 };
export function filterCards(gender) {
    return {
        type: FILTER,
        payload: gender
    }
}
export function orderCards(order) {
    return {
        type: ORDER,
        payload: order
    }
}

