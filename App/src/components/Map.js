import React, { useContext } from 'react';
import { ActivityIndicator, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { Context as LocationContext } from '../context/LocationContext';
import Spacer from '../components/Spacer';
import MapView, { Circle, Polyline } from 'react-native-maps';

const Map = () => {
	const {
		state: { currentLocation, locations },
	} = useContext(LocationContext);

	if (!currentLocation) {
		return <ActivityIndicator size="large" style={{ marginTop: 200 }} />;
	}
	return (
		<MapView
			style={styles.map}
			initialRegion={{
				...currentLocation.coords,
				latitudeDelta: 0.001,
				longitudeDelta: 0.001,
			}}
		>
			<Circle
				center={currentLocation.coords}
				radius={15}
				strokeColor="rgba(158,158,255,1.0)"
				fillColor="rgba(158,158,255,0.3)"
			/>
			<Polyline coordinates={locations.map((loc) => loc.coords)} strokeColor="black" fillColor="black"  />
		</MapView>
	);
};

const styles = StyleSheet.create({
	map: {
		height: 300,
	},
});

export default Map;
