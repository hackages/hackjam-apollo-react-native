import React from 'react';
import {
  StyleSheet,
  View,
  Button,
  Text,
  FlatList,
  TouchableHighlight
} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
const AppScreen = () => (
  <View style={styles.container}>
    <View style={styles.buttonArea}>
      <Button
        onPress={() => {
          console.log('pressed');
        }}
        title="Login with Google"
      />
    </View>
  </View>
);

const cities = [
  'Amsterdam',
  'Paris',
  'London',
  'Dublin',
  'Toronto',
  'Brussels',
  'Antwerp',
  'Amsterdam',
  'Paris',
  'London',
  'Dublin',
  'Toronto',
  'Brussels',
  'Antwerp',
  'San Francisco',
  'San Francisco',
  'Amsterdam',
  'Paris',
  'London',
  'Dublin',
  'Toronto',
  'Brussels',
  'Antwerp',
  'San Francisco'
];
const SearchScreen = () => (
  <View style={styles.container}>
    <View
      style={{
        backgroundColor: 'lightblue',
        height: 40,
        width: '100%',
        alignItems: 'center'
      }}
    >
      <Text style={{ margin: 20, fontSize: 30, fontWeight: 'bold' }}>
        Search cities
      </Text>
    </View>
    <FlatList
      style={{ width: '100%' }}
      data={cities}
      keyExtractor={(_, index) => index}
      renderItem={({ item, index }) => {
        return (
          <View
            style={{
              padding: 5,
              with: '100%',
              fontSize: 20,
              backgroundColor: index % 2 ? 'lightgrey' : 'lightblue'
            }}
          >
            <TouchableHighlight>
              <Text style={{ fontSize: 24 }}>{item}</Text>
            </TouchableHighlight>
          </View>
        );
      }}
    />
  </View>
);

const Nav = createStackNavigator(
  {
    Search: SearchScreen,
    Home: AppScreen
  },
  {
    // index: 1
    initialRouteName: 'Search',
    headerMode: 'none'
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonArea: {
    backgroundColor: 'lightblue',
    padding: 20,
    fontSize: 40,
    color: 'black',
    borderRadius: 5
  }
});

export default createAppContainer(Nav);
