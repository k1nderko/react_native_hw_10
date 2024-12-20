import React, { useEffect } from 'react';
// import { RegistrationScreen } from "./src/Screens/RegistrationScreen";
// import { LoginScreen } from "./src/Screens/LoginScreen";
// import { PostsScreen } from "./src/Screens/PostsScreen";
// import { CreatePostScreen } from "./src/Screens/CreatePostScreen";
// import { CommentsScreen } from "./src/Screens/CommentsScreen";
import { StyleSheet } from 'react-native';
import { useFonts } from "expo-font";
// import { ProfileScreen } from "./src/Screens/ProfileScreen";
// import { BottomTabNavigator } from "./src/navigation/BottomTabNavigator";
import { NavigationContainer } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, View, } from "react-native";
import { PersistGate } from "redux-persist/integration/react";
import { Provider, useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import store from "./src/redux/store.js";
import { auth } from "./config";
import { loginUser, logoutUser } from "./src/redux/authSlice.js";
import StackNavigator from './src/navigation/StackNavigator.jsx';


SplashScreen.preventAutoHideAsync();
const MainStack = createStackNavigator();

const AuthListener = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log("user", user);
      if (user) {
        const uid = user.uid;
        const email = user.email;
        const displayName = user.displayName;
        dispatch(loginUser({ uid, email, displayName }));
      } else {
        dispatch(logoutUser());
      }
    });
  }, [dispatch]);

  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default function App () {
  const [fontsLoaded] = useFonts({
    "rb-regular": require("./src/assets/fonts/Roboto-Regular.ttf"),
    "rb-bold": require("./src/assets/fonts/Roboto-Bold.ttf"),
    "rb-medium": require("./src/assets/fonts/Roboto-Medium.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1 }}>
        <Text>Loading...</Text>
      </View>
    );
  }
  
  return (
    <Provider store={store.store}>
      <PersistGate
        loading={<Text>Loading...</Text>}
        persistor={store.persistor}
      >
        <AuthListener />
      </PersistGate>
    </Provider>
  );
};


const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
  },
});
