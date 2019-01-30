import React, { Component } from 'react';
import { Keyboard, Text, Image, TextInput, View, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable';
import { styles } from './movies.styles';

class MovieList extends Component {
  state = {
    searchBarFocused: false,
    searchInput: null
  };

  componentDidMount() {
    this.keyboardDidShowEvent = Keyboard.addListener(
      'keyboardDidShow',
      this.keyboardDidShow
    );
    this.keyboardWillShowEvent = Keyboard.addListener(
      'keyboardWillShow',
      this.keyboardWillShow
    );
    this.keyboardWillHideEvent = Keyboard.addListener(
      'keyboardWillHide',
      this.keyboardWillHide
    );
  }

  componentWillUnmount() {
    this.keyboardWillHideEvent.remove();
    this.keyboardDidShowEvent.remove();
    this.keyboardWillShowEvent.remove();
  }

  keyboardWillHide = () => {
    this.setState({ searchBarFocused: false });
  };
  keyboardWillShow = () => {
    this.setState({ searchBarFocused: true });
  };
  keyboardDidShow = () => {
    this.setState({ searchBarFocused: true });
  };

  search = text => {
    // Search movies by name and category
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Animatable.View
            animation="slideInRight"
            duration={500}
            style={styles.searchBar}
          >
            <Animatable.View
              animation={
                this.state.searchBarFocused ? 'fadeInLeft' : 'fadeInRight'
              }
              duration={500}
            >
              <Icon
                name={
                  this.state.searchBarFocused ? 'md-arrow-back' : 'ios-search'
                }
                style={styles.searchIcon}
              />
            </Animatable.View>
            <TextInput
              ref={cmp => (this.state.searchInput = cmp)}
              style={styles.searchInput}
              onChangeText={this.search}
              placeholder="search"
              placeholderTextColor="lightblue"
            />
          </Animatable.View>
        </View>
        <FlatList
          style={{
            backgroundColor: this.state.searchBarFocused
              ? 'rgba(0,0,0,0.3)'
              : 'white'
          }}
          data={[]}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item, index }) => null}
        />
      </View>
    );
  }
}

export default MovieList;
