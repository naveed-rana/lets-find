import {Icon} from 'native-base';
import React from 'react';

import {
  createBottomTabNavigator,
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';

import HomeScreen from "../screens/Home";
import LoginScreen from '../screens/login';
import ProfileScreen from '../screens/ShowProfile';
import PersonelDetailScreen from '../screens/PersonelDetails';


const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Login: LoginScreen,
},
{
  headerMode: 'none',
}
);

const ProfileStack = createStackNavigator({
  Settings: ProfileScreen,
  Details: PersonelDetailScreen,
},
{
  headerMode: 'none',
}
);

const SearchStack = createStackNavigator({
  Settings: ProfileScreen,
  Details: PersonelDetailScreen,
},
{
  headerMode: 'none',
}
);

const NotificationsStack = createStackNavigator({
  Settings: ProfileScreen,
  Details: PersonelDetailScreen,
},
{
  headerMode: 'none',
}
);

export default createAppContainer(createBottomTabNavigator(
  {
    Home: HomeStack,
    Notifications: NotificationsStack,
    Search:SearchStack,
    Profile:ProfileStack
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        let clr;
        if (routeName === 'Home') {
          iconName = `home`;
        } else if (routeName === 'Notifications') {
          iconName = `notifications-outline`;
        }
        else if (routeName === 'Search') {
          iconName = `search`;
        }
        else if (routeName === 'Profile') {
          iconName = `contact`;
        }
        focused ? clr = '#05CE1D': clr = "gray"; 
        return <Icon style={{color:`${clr}`}}  type="Ionicons" name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      
      activeTintColor: '#05CE1D',
      inactiveTintColor: 'gray',
      style:{
        borderTopColor: "transparent",
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,  
        elevation: 5
      }
    },
  }
));

// const MyDrawerNavigator = createDrawerNavigator({
//   Tabs: {
//     screen: TabsScreens,
//   }
// });

// export default createAppContainer(MyDrawerNavigator)