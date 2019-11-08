import React, {Component} from 'react';
import { connect } from 'react-redux';
import HousesItem from '../houseItem/HousesItem';
import ButtonPagination from '../buttonPagination/ButtonPagination';

import './housesList.css'

class HousesList extends Component{
    render(){
        let {houses} = this.props.search;
        return(
            <div>
                <ul className='container'>
                    { houses.length ?
                    <div> {houses.map((house,index) => (
                                <HousesItem 
                                    item= {house}
                                    id = {index*2}
                                    key = {Date.now() + index}
                                />
                            ))}
                        <ButtonPagination/>
                    </div>
                        :
                        // Вот тут интресная ситуация, мб можно придумать условие чтобы выводились элементы а если их нет
                        // чтобы не было пустых элементов, но мне не дошло как это сделать 
                        <div />
                    }
                </ul>
            </div>
        );
    };
};

const mapStateToProps = store => {
    return {
        search: store.searchForm
    }
}

export default connect(mapStateToProps)(HousesList);