import React, {Component} from 'react';
import {connect} from 'react-redux';
import {asyncGetHouses} from '../../actions';


import './buttonPagination.css';

class ButtonPagination extends Component {
    onLoadMore = () => {
        this.props.increasePage();
        this.props.onSubmit(this.props.search.label, this.props.search.page+1);
    }

    render(){
        return(
            <input className="load__more btn" value="Load more.." onClick = {this.onLoadMore} type="submit"></input> 
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
        onSubmit: (value, page) => dispatch(asyncGetHouses(value, page)),
        increasePage: () => dispatch({type:'INCREASE_PAGE'})
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(ButtonPagination);