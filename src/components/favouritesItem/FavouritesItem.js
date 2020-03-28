import React,{Component} from 'react';
import {connect} from 'react-redux';
import './FavouritesItem.css';

class FavouritesItem extends Component {
    
    deleteItemFromFavourite = () => {
        this.props.deleteItemFrom(this.props.item);
    }

    render(){
        const {item} = this.props;
        return(
            <div className='container'>   
                <div className='modal__incontent d-flex'>
                <span className="close close__favourite_item"  onClick={this.deleteItemFromFavourite}>&times;</span>
                    <img src={item.img_url} alt="house"></img>
                    <div className='info__text info__model_text'>
                        <h2>{item.title}</h2>
                        <p className='info__price info__modal'> Price:<span>{item.price_formatted}</span></p>
                        <p className='info__about info__modal'>Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
                            since the 1500s, when an unknown printer took a galley of type and scrambled it to 
                            make a type specimen book. It has survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially unchanged. It was popularised in the
                            1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                            with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = store => {
    return{}
}

const mapDispatchToProps = dispatch => {
    return {
        deleteItemFrom: (item) => dispatch({type:'DELETE_FROM_FAVOURITE', payload:item.id})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(FavouritesItem);