import React, { Component } from 'react';
import { Keyboard, Text, Image, TextInput, View, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
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
    const movies = this.props.data.getMovies.filter(movie =>
      movie.title.toLowerCase().includes(text.toLowerCase())
    );
    this.setState({ movies });
  };

  render() {
    const movies = this.state.movies || this.props.data.getMovies;
    console.log(movies);
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
        {movies ? (
          <FlatList
            style={{
              backgroundColor: this.state.searchBarFocused
                ? 'rgba(0,0,0,0.3)'
                : 'white'
            }}
            data={movies}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item: movie, index }) => (
              <View
                style={{
                  height: 120,
                  padding: 4,
                  flex: 1,
                  backgroundColor: index % 2 ? 'white' : 'lightblue',
                  flexDirection: 'row'
                }}
              >
                <Image
                  style={{ height: 100, width: 80 }}
                  source={{ uri: movie.poster_path }}
                />
                <Animatable.Text
                  animation="flipInY"
                  style={{
                    fontSize: 16,
                    marginLeft: 5,
                    fontWeight: 'bold',
                    alignSelf: 'center'
                  }}
                >
                  {movie.title}
                </Animatable.Text>
              </View>
            )}
          />
        ) : (
          <View>
            <Text>Loading...</Text>
          </View>
        )}
      </View>
    );
  }
}

export default graphql(gql`
  query {
    getMovies {
      title
      poster_path
    }
  }
`)(MovieList);
