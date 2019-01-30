import React from 'react';
import NavigationBar from 'react-native-navbar';
import { styles } from './navbar.style';

export const NavBar = ({ title }) => (
  <NavigationBar style={styles.navbar} title={{ title }} />
);
