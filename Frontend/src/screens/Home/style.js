import { StyleSheet, Dimensions } from "react-native";
import { Left } from "native-base";
const { height, width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  header: {
    // height: 175,
    // alignItems: "flex-start",
    backgroundColor: "rgba(5, 205, 29, 0.1)",
    justifyContent: "space-between",
    flexDirection: "row",
    aspectRatio: 1.8
  },

  BackgroundImage: {
    aspectRatio: 1.8
  },

  searchIcon: {
    color: "white"
  },
  addButton: {
    marginTop: 100
  },
  addButton: {
    backgroundColor: "#05CE1D",
    color: "white",
    marginLeft: 20,
    justifyContent: "space-around"
    // position: "absolute"
  },
  addIcon: {
    //   padding: 5,
  }
});
