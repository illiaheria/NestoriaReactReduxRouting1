import React, {Component} from 'react'
import {connect} from 'react-redux';
import { asyncGetHouses } from '../../actions';
import {Link} from 'react-router-dom';

import './searchForm.css'

class SearchForm extends Component{
    
    onSubmitSearch = () => {
        // Тут надо объяснить
        // в этот момент я понял как работать (вроде бы понял) с dispatch
        // и начал делать эти события
        let {oldLabel, label, page} = this.props.search;
        const {resetPage, onSubmit, setOldLabel, increasePage} = this.props;

        if(label && oldLabel === label){
        // проверка на то вписано что-то в инпут или не
        // и после поиска я не збрасываю инпут а то значение остается 
        // если ещё раз кликнуть поиск с тем же инпутом то выведется вторая страница
            increasePage();
            onSubmit(label, page+1);
        }

        if(label && oldLabel !== label){
            resetPage();
            setOldLabel(label);
        // тут если интупы не совпадают,по клику на кнопку поиска записывается значение в переменную 
        // oldLabel для того чтобы сравнивать старый и новый инпуты, чтобы либо выводить дома в других городах
        // или подгружать другие, мб этот функционал лишний, но он для меня был скорее тренировочный
            onSubmit(label, page);
        }
    } 
    
    onChangeInput = (e) => {
        this.props.changeInput(e.target.value);
        // тут при каждом новом символе, значения инпута записывается в стор  
    }

    render(){
        return(
            <div className="container">
                <div className="inputBlock">
                    <div className="search d-flex">
                        <input type="text" autoFocus placeholder="Enter location" className="search__input" onChange = {this.onChangeInput}/>
                        <Link to='/houses'><input type="submit" className="search__submit btn" value = "Search" onClick = {this.onSubmitSearch}/></Link>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = store => {
    return {
      search: store.searchForm,
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
        changeInput: (label) => dispatch({type:'CHANGE_INPUT', payload:{label}}),
        onSubmit: (value, page) => dispatch(asyncGetHouses(value, page)),
        setOldLabel: (label) => dispatch({type:'CHANGE_OLD_LABEL', payload:{label}}),
        resetPage: () => dispatch({type:'RESET_PAGE'}),
        increasePage: () => dispatch({type:'INCREASE_PAGE'})
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(SearchForm)
