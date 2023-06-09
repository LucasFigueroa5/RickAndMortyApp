import { ADD_FAV, REMOVE_FAV } from "./action-types.js";
import axios from 'axios'

export const addFav = (character) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    return async (dispatch) => {
      try {
        const response = await axios.post(endpoint, character);
        const { data } = response;
  
        return dispatch({
          type: ADD_FAV,
          payload: data,
        });
      } catch (error) {
        console.error(error);
      }
    };
  };
  export const removeFav = (id) => {
    const endpoint = `http://localhost:3001/rickandmorty/fav/${id}`;
    return async (dispatch) => {
      try {
        const response = await axios.delete(endpoint);
        const { data } = response;
  
        return dispatch({
          type: REMOVE_FAV,
          payload: data,
        });
      } catch (error) {
        console.error(error);
      }
    };
  };
  
  
  
  
  
  