import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import { addFavouriteItems } from '../../actions';

import './housesItem.css';

class HousesItem extends Component {
    
    addToFavourite = () => {
        const {item} = this.props;
        this.props.addItem(item);
    }
    
    render(){
        const {title, price_formatted, summary, img_url} = this.props.item;
        this.props.item.id = this.props.id;
        return(
            <li className='saleItem'>
                <div className="helpful d-flex">
                    <img src={img_url} alt="house"/>
                    <div className='info__text'>
                        <h2>{title}</h2>
                        <p className='info__price'> Price:<span>{price_formatted}</span></p>
                        <p className='info__about'>{summary}</p>
                        <Link to={{
                            pathname:`/item/${title}`,
                        }}>
                            <input type='submit' className='btn btn__more' value='More..'/>
                        </Link>    
                        <input type='submit' className='btn btn__add' onClick = {this.addToFavourite} value='Add to favourites'/>
                    </div>
                </div>
            </li>
        );
    }
};
  
  const mapDispatchToProps = dispatch => {
    return {
        addItem: (item) => dispatch(addFavouriteItems(item)),
    }
}

export default connect(null,mapDispatchToProps)(HousesItem);