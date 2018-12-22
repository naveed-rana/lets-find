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

  addIconView: {
    borderRadius: 100,
    justifyContent:center
  },
  addNewButton: {
    backgroundColor: "#05CE1D",
    alignItems: "center",
    width: 60,

    // color: "#05CE1D",
    position: "absolute",
    bottom: 10,
    justifyContent: "center",
    height: 60,
    borderRadius: 100
  },
  cardContainer: {
    marginHorizontal: 10
},
cardInnerContainer: {
    flexDirection: 'row',
},
cardHeader: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
},
});
