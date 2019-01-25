
import { AsyncStorage } from "react-native";

 var appColor = '#05CE1D';

 _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('color');
        console.log('data res',value);
        if (value !== null) {
          // console.log('valueasdf',value);
            appColor= value;
      }

     } catch (error) {
       console.log('err',error);
       
       // Error retrieving data
     }
  }