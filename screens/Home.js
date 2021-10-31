import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, StatusBar } from 'react-native';
import ListContainer from '../containers/ListContainer.js';
import SearchContainer from '../containers/SearchContainer.js';

class Home extends Component {
  render() { 
    return (
      <View>
        <StatusBar barStyle="dark-content" />
        <ListContainer />
        <SearchContainer />
      </View>
    );
  }
}

export default connect()(Home);