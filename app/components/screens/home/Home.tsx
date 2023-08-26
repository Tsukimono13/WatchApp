import React from 'react';
import { Pressable, SafeAreaView, Text } from 'react-native';
import { useTypedNavigation } from '@/hooks/useTypedNavigation';

const Home = () => {
	const { navigate } = useTypedNavigation();
	return (
		<SafeAreaView>
			<Text>Home</Text>
			<Pressable onPress={() => navigate('Auth')}>
				<Text style={{ color: 'white', marginTop: 60 }}>Go to login</Text>
			</Pressable>
		</SafeAreaView>
	);
};

export default Home;