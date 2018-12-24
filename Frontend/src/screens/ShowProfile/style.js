import { StyleSheet } from 'react-native';
import { Row } from 'native-base';
import { Fonts } from '../../utils/Fonts';
export default styles = StyleSheet.create({
  topcontent: {
    backgroundColor: "#05CE1D",
    flexDirection: "row",
    padding: 6,
    justifyContent: "space-between"
  },
  privacyText: {
    color: 'white',
    fontSize: 12,
    marginLeft: 14
  },
  topText: {
    color: '#fff',

  },
  topCross: {
    color: '#fff'
  },
  topsave: {
    color: "#fff"
  },

  bodyContent: {
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 10,
  },
  profileHead: {
    flexDirection: "row",
    padding: 12,
    justifyContent: "space-between",
    textAlign: "center",
  },
  profileImage:{
    // width: 80,
    // height: "auto",
    // borderRadius: 50,
  },
  mrgTop: {
    marginTop: 20,
  },
  total: {
    fontSize: 20,
    textAlign: "center",
  },
  history: {
    color: "gray",
    fontSize: 14,
    textAlign: "center",
  },

  description: {
    marginTop: 20,
  },
  description_prag: {
    color: "gray",
    fontFamily: "Raleway-Regular",

  },

  contactUs: {
    // marginTop:20,
  },

  contactInfo: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  contactInfo_detail: {
    color: "#05CE1D",
  },
  editBtn: {
    marginTop: 50,
    backgroundColor: "#05CE1D",
    borderRadius: 5,
  },


})