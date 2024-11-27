import { StyleSheet, Text, TouchableOpacity } from "react-native";

export const ShowPassword = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>Показати</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 16,
    right: 16,
  },
  text: {
    color: "#1B4371",
    fontFamily: "rb-regular",
    fontSize: 16,
  },
});