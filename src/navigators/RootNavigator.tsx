import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/VideoHomeScreen';
import DetailsScreen from '../screens/VideoDetailScreen';
import {SCREEN_KEYS} from '../constants/screens';
import {ScreenParamsList} from '../types/screen';

const Stack = createNativeStackNavigator<ScreenParamsList>();

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={SCREEN_KEYS.VIDEO_HOME_SCREEN}
        screenOptions={{
          headerShown: false,
          animation: 'fade_from_bottom',
        }}>
        <Stack.Screen name="VideoHomeScreen" component={HomeScreen} />
        <Stack.Screen name="VideoDetailScreen" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
