import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from "./action-types";

const initialState = {
    myFavorites: [], //* [ {rick}, {morty, id: 2}, {beth} ]
    allCharacters: [],
    user: "",
    errors: false
}

export default function reducer( state = initialState, {type, payload}) {
    //* action = { type, payload }
    // console.log(typeof payload)
    switch (type) {
        case 'ADD_FAV':
            return { ...state, myFavorites: payload, allCharacters: payload };
        case 'REMOVE_FAV':
                return { ...state, myFavorites: payload, allCharacters: payload };
        case FILTER:
            if(payload === "All") return {
                ...state,
                myFavorites: state.allCharacters
            }
            const filteredCharacters = state.allCharacters.filter(
                char => char.gender === payload
            )
            return {
                ...state,
                myFavorites: filteredCharacters
            }
        case ORDER:
            let orderCopy = [...state.allCharacters];
            if(payload === "A") {
                orderCopy.sort(
                    (a, b) => {
                        if (a.name > b.name) return 1;
                        else return -1;
                    }
                )
            } else if (payload === "D") {
                orderCopy.sort(
                    (a, b) => {
                        if (a.name < b.name) return 1;
                        else return -1;
                    }
                )
            }
            return {
                ...state,
                myFavorites: orderCopy
            }
        case "ERROR":
            console.log(payload);
            return {
                ...state,
                errors: payload
            }

        default:
            return {...state}
    }
}