import React from 'react';
import FavouritesItems from '../favouritesItem/FavouritesItem'
import './OpenFavourites.css'

const OpenFavourites = ({items}) => {
       return(
            items.map((item,index) => {
                return(
                    <FavouritesItems 
                    item = {item}
                    key = {Date.now() + index}
                    />
                );
            })
       )
}
export default OpenFavourites;