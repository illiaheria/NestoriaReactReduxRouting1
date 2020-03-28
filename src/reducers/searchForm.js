const initialState = {
    page : 1,
    label: '',
    oldLabel: '',
    houses: [],
}

export function searchFormReducer(state = initialState, action) {
    switch(action.type){
        case 'CHANGE_INPUT':
            return {...state, label:action.payload.label}

        case 'CHANGE_OLD_LABEL':
            return {...state, oldLabel:action.payload.label}

        case 'RESET_PAGE': 
            return {...state, page:1, houses:[]}   
            
        case 'INCREASE_PAGE':
            return {...state, page: ++state.page}

        case 'HOUSES_LOAD_SUCCESS':
            let newItems = action.payload 
            return {...state, houses:[...state.houses, ...newItems]};
    
        default:
            return state;
    }
}