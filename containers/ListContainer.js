import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";
import { Divider } from 'react-native-elements';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ListItem from "../components/ListItem/ListItem";
import Button from "../components/Button/Button";
import { showSearchModal } from "../actions/list";

class ListContainer extends Component {
  static propTypes = {
    searchResults: PropTypes.array,
  };

  render() {
    return (
      <ScrollView>
        {this.props.searchResults == null || this.props.searchResults.length == 0 ?
        (
          <View style={{alignItems: 'center'}}>
            <Text>There are no patients to show...</Text>
          </View>   
        ) :
        this.props.searchResults.map(item => {
          return (
            <View style={{alignItems: 'center'}}>
              <Divider />
              <ListItem item={item}/>
              <Divider />
            </View>
          )
        })}
        <Button onPress={() => this.props.showSearchModal()} text={"New Search"}/>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  return {
    searchResults: state.search.searchResults
  };
};

const mapDispatchToProps = dispatch => {
  return {
    showSearchModal: () => dispatch(showSearchModal())
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(ListContainer);