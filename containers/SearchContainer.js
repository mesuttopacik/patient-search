import React, { Component } from "react";
import { View, Modal } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { searchPatients } from "../actions/search";
import DropdownMenu from '../components/DropdownMenu/DropdownMenu';
import SearchBox from '../components/SearchBox/SearchBox';
import Button from '../components/Button/Button';
import { hideSearchModal } from "../actions/list";

class SearchContainer extends Component {
  static propTypes = {
    searchResults: PropTypes.array,
    isSearchModalActive: PropTypes.bool
  };

  onDropdownValueChange = (value) => {
    this.searchParam = value;
  };

  onSearchBoxValueChange = (value) => {
    this.searchKeyword = value.trim();
  };

  onSearchButtonPress = () => {
    if(!this.searchParam){
      alert("Select search parameter");
    }
    else if(!this.searchKeyword){
      alert("Fill in the search box");
    }
    else if(this.searchKeyword?.length < 2){
      alert("Minimum length for search keyword is 2");
    }
    else {
      let searchParams = {};
      searchParams[this.searchParam] = this.searchKeyword;
      
      this.props.searchPatients(searchParams);
      this.props.hideSearchModal();
    }
  };

  onDismiss(){
    this.setState({modalVisible:false})
  };

  render() {
    const { rootContainerStyle, modalBackgroundStyle, modalBoxStyle, searchStyle} = styles;

    return (
      <View style={rootContainerStyle}>
        <Modal
          animationType={"fade"}
          transparent={true}
          visible={this.props.isSearchModalActive}
          >
            <View style={modalBackgroundStyle}>
              <View style={modalBoxStyle}>
                <View style={searchStyle}>
                  <DropdownMenu onValueChange={this.onDropdownValueChange}/>
                  <SearchBox onValueChange={this.onSearchBoxValueChange}/>
                </View>
                <View style={{height:45}}>
                  <Button onPress={this.onSearchButtonPress} text={'Search'}/>
                </View>
                <View style={{height:45}}>
                  <Button onPress={() => this.props.hideSearchModal()} text={'Cancel'}/>
                </View>
              </View>
            </View>
        </Modal>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    searchResults: state.search.searchResults,
    isSearchModalActive: state.list.isSearchModalActive
  };
};

const mapDispatchToProps = dispatch => {
  return {
    searchPatients: searchParams => dispatch(searchPatients(searchParams)),
    hideSearchModal: () => dispatch(hideSearchModal())
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(SearchContainer);

const styles = {
  rootContainerStyle : {
      //flex : 1
      height: 40
  },
  rowStyle : {
      paddingVertical : 10,
      paddingHorizontal : 15
  },
  inputStyle: {
      paddingRight: 5,
      paddingLeft: 5,
      flex: 2
  },
  labelStyle: {
      fontSize: 13,
      paddingLeft: 20,
      flex: 1
  },
  containerStyle: {
      height: 40,
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center'
  },
  modalBackgroundStyle : {
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
  },
  modalBoxStyle : {
      backgroundColor: '#ffffff',
      height: 500,
      width: 300,
      borderRadius: 6,
      paddingVertical: 5
  },
  searchStyle : {
      height: 40,
      borderColor: '#ccc',
      borderWidth: 1,
      marginHorizontal: 5,
      paddingHorizontal: 10,
      paddingVertical: 5,
      borderRadius: 5
  }
};