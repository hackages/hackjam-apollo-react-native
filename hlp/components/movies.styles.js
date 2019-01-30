import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  header: {
    backgroundColor: 'lightblue',
    height: 80,
    justifyContent: 'center'
  },
  searchBar: {
    height: 50,
    margin: 5,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    backgroundColor: 'white'
  },
  searchIcon: {
    fontSize: 24,
    marginLeft: 5
  },
  searchInput: {
    fontSize: 24,
    marginLeft: 10,
    flex: 1
  },
  item: {
    padding: 20,
    fontSize: 20
  }
});
