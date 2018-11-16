import React from 'react';
import { StyleSheet, Text, View, Button, AsyncStorage} from 'react-native';

import { createBottomTabNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen';
import ListScreen from './ListScreen';
import StationScreen from './StationScreen';


export default class App extends React.Component {
	render() {
		return (
			<TabNavigator />
		);
	}
}
const TabNavigator =  createBottomTabNavigator({
	Home: HomeScreen,
	List: ListScreen,
	Station: StationScreen
});
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
