import { StyleSheet } from 'react-native';



export const styles =StyleSheet.create({
    header: {
        backgroundColor: "#05CE1D",
        paddingVertical: 12,
        paddingHorizontal: 15,
        justifyContent: "space-between",
        flexDirection: "row"
      },
      heading: {
        color: "white",
        marginTop: 5
      },
      headerIcon: { fontSize: 30, color: "white" },
      aboutusContentView: {
          backgroundColor: "rgba(175,198,185,.75)",
          paddingHorizontal: 15,
          justifyContent: "space-evenly",
          paddingVertical: 10,
      },
      aboutusContent: {
          color: "white",
          paddingVertical: 30,
      }
});