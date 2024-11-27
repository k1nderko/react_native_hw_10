import { AntDesign } from "@expo/vector-icons";
import { Image, View, StyleSheet, Dimensions } from "react-native";


const { width, height } = Dimensions.get("window");

export const AddPhoto = () => {
  return (
    <View style={styles.wrapper}>
      <Image style={styles.image} />
      <AntDesign name="pluscircleo" size={24} style={styles.icon} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    top: height * -0.07,
    right: width * 0.35,
    zIndex: 1,

    width: 132,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    position: "relative",
    top: -12,
    left: 117,
    color: "#FF6C00",
  },
  image: {
    flex: 1,
    borderRadius: 16,
  },
});