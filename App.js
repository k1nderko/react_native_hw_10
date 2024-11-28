import React, { useEffect } from 'react';
import { RegistrationScreen } from "./src/Screens/RegistrationScreen";
import { LoginScreen } from "./src/Screens/LoginScreen";
import { PostsScreen } from "./src/Screens/PostsScreen";
import { CreatePostScreen } from "./src/Screens/CreatePostScreen";
import { CommentsScreen } from "./src/Screens/CommentsScreen";
import { StyleSheet } from 'react-native';
import { useFonts } from "expo-font";
import { ProfileScreen } from "./src/Screens/ProfileScreen";
import { BottomTabNavigator } from "./src/navigation/BottomTabNavigator";
import { NavigationContainer } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import { createStackNavigator } from '@react-navigation/stack';

SplashScreen.preventAutoHideAsync();
const MainStack = createStackNavigator();

const App = () => {
  const [fontsLoaded] = useFonts({
    "rb-regular": require("./src/assets/fonts/Roboto-Regular.ttf"),
    "rb-bold": require("./src/assets/fonts/Roboto-Bold.ttf"),
    "rb-medium": require("./src/assets/fonts/Roboto-Medium.ttf"),
  });

  useEffect(() => {
    SplashScreen.preventAutoHideAsync();
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="BottomTabNavigator">
        <MainStack.Screen
          name="RegistrationScreen"
          component={RegistrationScreen}
          options={{ headerShown: false, title: 'Registrarion' }}
        />
        <MainStack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false, title: 'Login' }}
        />
        <MainStack.Screen
          name="BottomTabNavigator"
          component={BottomTabNavigator}
          options={{ headerShown: false}}
        />
        <MainStack.Screen
          name="CommentsScreen"
          component={CommentsScreen}
          options={{ headerShown: false, title: 'Коментарі' }}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
  },
});
