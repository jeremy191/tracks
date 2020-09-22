import '../_mockLocations';
import React, { useContext, useCallback } from 'react';
import { Context as LocationContext } from '../context/LocationContext';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView, withNavigationFocus } from 'react-navigation';
import Map from '../components/Map';
import useLocation from '../hooks/useLocation';
import TrackFom from '../components/TrackForm';
import {FontAwesome} from '@expo/vector-icons';

const TrackCreate = ({ isFocused }) => {
	const {
		addLocation,
		state: { recording },
	} = useContext(LocationContext);
	const callback = useCallback(
		(location) => {
			addLocation(location, recording);
		},
		[recording]
	);
	const [err] = useLocation(isFocused || recording, callback); // isFocused tells us if it is in a specific screen
	return (
		<SafeAreaView>
			<Map />
			{err ? <Text>Please enable location services</Text> : null}
			<TrackFom />
		</SafeAreaView>
	);
};

TrackCreate.navigationOptions={
	title: 'Add Track',
	tabBarIcon:  <FontAwesome name="plus" size={20} />
}

const styles = StyleSheet.create({});

export default withNavigationFocus(TrackCreate);
