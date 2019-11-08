const initialState = {
    favouritesHouses: []
}

export function favouritesReducer(state = initialState, action) {
    switch(action.type){
        case 'ADD_TO_FAVOURITE': 
            return {...state, favouritesHouses:[...state.favouritesHouses, action.payload]};
        
        case 'LOAD_FROM_LOCAL': 
        return {...state, favouritesHouses: action.payload};

        case 'DELETE_FROM_FAVOURITE':
            let mustDelete = state.favouritesHouses.findIndex((item)=> item.id === action.payload); 
            localStorage.removeItem(action.payload)
        return {...state, favouritesHouses:[...state.favouritesHouses.slice(0,mustDelete), ...state.favouritesHouses.slice(mustDelete+1)]};

        default:
            return state;
    }
}