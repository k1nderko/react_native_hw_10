import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const Link = ({ children }) => {
  return (
    <View>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "#1B4371",
    textAlign: "center",
    fontFamily: "rb-regular",
    fontSize: 16,
  },
});