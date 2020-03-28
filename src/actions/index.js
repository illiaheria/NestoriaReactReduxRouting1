
export const asyncGetHouses = (label,page) => dispatch => {
    fetch(`https://cors-anywhere.herokuapp.com/https://api.nestoria.co.uk/api?encoding=json&pretty=1&page=${page}&action=search_listings&number_of_results=5&country=uk&listing_type=buy&place_name=${label}`)
    .then(res => res.json())
    .then(data => data.response.listings) // обрабатываем данные после запроса 
    .then(arr => dispatch({type: 'HOUSES_LOAD_SUCCESS',payload: arr})); 
}

export const addFavouriteItems = (house) => dispatch => {
    localStorage.setItem(house.id,JSON.stringify(house));
    
    dispatch({type: 'ADD_TO_FAVOURITE', payload: house});
}