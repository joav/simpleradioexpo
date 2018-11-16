import React from 'react';
import { StyleSheet, Text, View, Button, AsyncStorage} from 'react-native';

export default class StationScreen extends React.Component {
	static navigationOptions = {
		title: 'Emisora',
	};
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			disabled: true,
			info: {}
		};
	}
	_getStation = async ()=>{
		try{
			let station = await AsyncStorage.getItem('selectedStation');
			station = JSON.parse(station);
			this.setState({
				name: station.text,
				disabled: false,
				info: station
			});
		}catch(e){
			console.log(e);
		}
		
	}
	componentDidMount() {
		this._getStation();
	}
	render(){
		return (
			<View style={styles.container}>
				<Text>Reproductor de la emisora {this.state.name}</Text>
				<Button title="Reproducir" disabled={this.state.disabled} onPress={()=>{console.log('hola')}} />
			</View>
		);
	}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});