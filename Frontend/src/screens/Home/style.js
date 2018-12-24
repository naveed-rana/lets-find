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
  searchIcon: {
    color: "white"
  },
  // addIconView: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   // height:500
  // },
  addNewButton: {
    backgroundColor: "#05CE1D",
    alignItems: "center",
    width: 50,
    alignSelf:'center',
    position: "absolute",
    bottom: 5,
    justifyContent: "center",
    height: 50,
    borderRadius: 100,
    zIndex:1
  },
  cardContainer: {
    marginHorizontal: 10
  },
  cardInnerContainer: {
    flexDirection: "row"
  },
  cardHeader: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  top_container: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  searchContainer: {
    backgroundColor: "#05CE1D",
    paddingTop: 20,
    paddingBottom: 10
  },
  searchInput: {
    color: "#f5f5f5",
    backgroundColor: "#fff",
    flexDirection: "row",
    marginHorizontal: 10,
    paddingHorizontal: 10,
    borderRadius: 5
  },
  camIcon: {
    marginTop: 10
  },
  itemStyle: {
    borderColor: "transparent"
  },
  filterContainer: {
    marginLeft: 15,
    marginTop: 10,
    flexDirection: "row",
    flex: 1
  },
  filterImage: {
    width: 90,
    height: 90,
    borderRadius: 50
  },
  cardContainer: {
    marginHorizontal: 10,
    zIndex:-1
  },
  cardInnerContainer: {
    flexDirection: "row"
  },
  cardHeader: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  statusText: {
    color: "#05CE1D"
  },
  nameText: {
    fontSize: 10
  },
  textContainer: {
    flex: 1,
    marginLeft: 10
  },
  readMore: {
    color: "#0366d6",
    fontSize: 12,
    paddingTop: 2
  }
});
