import { ADD_FAV, REMOVE_FAV } from "./action-types";

const initialState = {
    myFavorites: [], //* [ {rick}, {morty, id: 2}, {beth} ]
    user: ""
}

export default function reducer( state = initialState, {type, payload}) {
    //* action = { type, payload }
    // console.log(typeof payload)
    switch (type) {
        case ADD_FAV:
            return {
                ...state,
                myFavorites: [...state.myFavorites, payload]
            }
        case REMOVE_FAV:
            const filteredFavs = state.myFavorites.filter(fav => fav.id !== Number(payload))
            return {
                ...state,
                myFavorites: filteredFavs
            }    
        default:
            return {...state}
    }
}