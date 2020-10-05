import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Account from './src/screens/Account';
import Signin from './src/screens/Signin';
import Signup from './src/screens/Signup';
import TrackCreate from './src/screens/TrackCreate';
import TrackDetail from './src/screens/TrackDetail';
import TrackList from './src/screens/TrackList';
import Start from './src/screens/Start';
import { Provider as AuthProvider } from './src/context/AuthContext';
import { Provider as LocationProvider } from './src/context/LocationContext';
import { Provider as TrackProvider } from './src/context/TrackContext';
import { setNavigator } from './src/navigationRef';
import { FontAwesome } from '@expo/vector-icons';

const trackListFlow = createStackNavigator({
	TrackList,
	TrackDetail,
});

trackListFlow.navigationOptions = {
	title: 'Tracks',
	tabBarIcon: <FontAwesome name="th-list" size={20} />,
};

const switchNavigator = createSwitchNavigator({
	Start,
	loginFlow: createStackNavigator({
		Signin,
		Signup,
	}),
	mainFlow: createBottomTabNavigator({
		trackListFlow,
		TrackCreate,
		Account,
	}),
});

const App = createAppContainer(switchNavigator);

export default () => {
	return (
		<TrackProvider>
			<LocationProvider>
				<AuthProvider>
					<App
						ref={(navigator) => {
							setNavigator(navigator);
						}}
					/>
				</AuthProvider>
			</LocationProvider>
		</TrackProvider>
	);
};
