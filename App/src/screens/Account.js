import React, { useContext } from 'react';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Button } from 'react-native-elements';
import { Context as AuthContext } from '../context/AuthContext';
import Spacer from '../components/Spacer';
import { FontAwesome } from '@expo/vector-icons';

const Account = () => {
	const { signout } = useContext(AuthContext);
	return (
		<SafeAreaView>
			<Text>Account Screen</Text>
			<Spacer>
				<Button title="Sign Out" onPress={signout} />
			</Spacer>
		</SafeAreaView>
	);
};
Account.navigationOptions = {
	title: 'Account',
	tabBarIcon: <FontAwesome name="gear" size={20} />,
};

const styles = StyleSheet.create({});

export default Account;
