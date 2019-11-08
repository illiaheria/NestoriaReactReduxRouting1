import React, {Component} from 'react';
import { connect } from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from '../header/Header';
import SearchForm from '../searchForm/SearchForm';
import Favourites from '../favourites/Favourites';
import HousesList from '../housesList/HousesList';
import OpenFavourites from '../openFavourites/OpenFavourites';
import OpenMore from '../openMore/OpenMore'

import './App.css';

class App extends Component {

    render(){
        return(
            <BrowserRouter>
                <div>
                    <Header />
                    <SearchForm />
                    <Favourites />
                    <Route path='/houses' component = {HousesList}/>
                    <Route path='/favourites' component = {
                        () => <OpenFavourites 
                                items = {this.props.favourites.favouritesHouses}
                              />} 
                    />
                    <Route path='/item/:title' component = {({match}) => {
                            const {title} = match.params;
                            const {houses} = this.props.search;
                            return <OpenMore item = {
                                houses[houses.findIndex((item) => item.title === title)]
                            }/>
                        }} 
                    />
                </div>
            </BrowserRouter>
        );
    };
  }

  const mapStateToProps = store => {
      return {
          search: store.searchForm,
          favourites: store.favourites
      }
  }

export default connect(mapStateToProps)(App);