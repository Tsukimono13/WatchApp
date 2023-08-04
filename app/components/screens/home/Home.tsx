import React from 'react';
import {Pressable, Text, View} from "react-native";
import {useTypedNavigation} from "@/hooks/useTypedNavigation";

const Home = () => {
    const {navigate} = useTypedNavigation()
    return (
        <View className='text-'>
            <Text>Home</Text>
            <Pressable onPress={() => navigate('Auth')}>
                <Text style={{color: 'white'}}>Go to login</Text>
            </Pressable>
        </View>
    );
};

export default Home;