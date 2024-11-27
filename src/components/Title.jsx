import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const Title = ({ title }) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 33,
  },
  title: {
    color: "#212121",
    textAlign: "center",
    fontFamily: "rb-medium",
    fontSize: 30,
    letterSpacing: 0.3,
  },
});