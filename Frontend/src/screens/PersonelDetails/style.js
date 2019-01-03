import { Dimensions } from "react-native";
const dimensions = Dimensions.get("window");
const imageHeight = Math.round((dimensions.width * 9) / 16);
const imageWidth = dimensions.width;

export default (styles = {
  btnBorder: {
    borderRadius: 5,
    paddingLeft: 15,
    paddingRight: 15
  },
  descripionText: {
    fontSize: 14
  },
  ShortLocataionText: {
    fontSize: 15,

    color: "#05ce1d"
  },
  bottomStyleView: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    width: "100%"
  },
  topLeftAboutDetail: {
    fontSize: 14,
    fontWeight: "bold"
  },
  topLeftAbout: {
    fontSize: 15,
    color: "#05ce1d"
  },
  PersonalDetailView: {
    flexDirection: "row",
    width: "100%",
    marginBottom: 5
  },
  missingPersonTitle: {
    textAlign: "left",
    fontSize: 17,
    fontWeight: "bold",
    marginBottom: 10
  },
  topDetails: {
    paddingHorizontal: 10,
    paddingVertical: 20
  },
  imageStyle: {
    // borderRadius:5 ,
    // resizeMode : 'contain',
    // height: imageHeight,
    // width: imageWidth,
    height: 300,
    flex: 1,
    width: null
  },
  imagePadding: {
    // padding: 20 ,
    height: 190,
    width: "100%",
    backgroundColor: "red"
  },
  modalClose: {
    position: "absolute",
    right: 0,
    padding: 20,
    color: "white"
  },
  modalOverlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0,0,0,.9)"
  },
  modalImage: {
    width: "100%",
    alignSelf: "center",
    height: 300,
    justifyContent: "center"
  }
});
