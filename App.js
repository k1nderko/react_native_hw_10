import React from "react";
import { RegistrationScreen } from "./src/Screens/RegistrationScreen";
import { StyleSheet } from 'react-native';
import { useFonts } from "expo-font";


const App = () => {
  const [fontsLoaded] = useFonts({
    "rb-regular": require("./src/assets/fonts/Roboto-Regular.ttf"),
    "rb-bold": require("./src/assets/fonts/Roboto-Bold.ttf"),
    "rb-medium": require("./src/assets/fonts/Roboto-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <RegistrationScreen />
  );
};

export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });