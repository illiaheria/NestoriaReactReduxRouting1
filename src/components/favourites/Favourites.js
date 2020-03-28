import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import './favourites.css'

class Favourites extends Component{
    // Это компонент кнопка которая рендерит страницу выбранных нами избранных домов
    // Функция при клику на кнопку все элементы с локала загружаются туда обратно 
    load = () =>{
        let newArr = [];
        for(let i = 0; i<localStorage.length;i++){
            newArr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
        this.props.loadFromLocal(newArr);
    }
    
    render(){
        return(
            <div className="selected container">
                <Link to='/favourites' className="favourites d-flex" onClick = {this.load}>
                    <span className="blackStar">
                        &#9733;
                    </span>
                    <p className="favourites__text">Favourite properties</p>
                </Link>
            </div>
        )
    }
}

const mapStateToProps = store => {
    return {
        search: store.searchForm,
        favourites: store.favourites
    }
}

const mapDispatchToState = dispatch => {
  return {
      loadFromLocal: (newArr) => dispatch({type:'LOAD_FROM_LOCAL', payload:newArr})
  }
}

export default connect(mapStateToProps,mapDispatchToState)(Favourites);