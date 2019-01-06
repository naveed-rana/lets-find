import {Icon} from 'native-base';
import React from 'react';

import {
  createBottomTabNavigator,
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator
} from 'react-navigation';

import HomeScreen from "../screens/Home";
import LoginScreen from '../screens/login';
import ProfileScreen from '../screens/ShowProfile';
import PersonelDetailScreen from '../screens/PersonelDetails';
import SignUpScreen from '../screens/signup';
import EditProfile from '../screens/Edit-Profile';
import NotificationScreen from '../screens/notificationScreen';
import SearchScreen from '../screens/searchScreen';
import AddPersons from '../screens/AddForm';
import DrawerScreen from '../screens/Sidebar';
import EditPostScreen from '../screens/EditPost';
import ActiveCasesScreen from '../screens/ActiveCases';
import ResolvedCasedScreen from '../screens/ResolvedCases';
import ResolvedCaseDetailScreen from '../screens/ShowResolvedDetails'
import { DrawerLayoutAndroid } from 'react-native-gesture-handler';

const HomeStack = createStackNavigator({
  Homes: HomeScreen,
  PersonDetail:PersonelDetailScreen,
  Profile: ProfileScreen,
  ProfileEdit: EditProfile,
  EditPost:EditPostScreen,
  ActiveCases:ActiveCasesScreen,
  ResolvedCases: ResolvedCasedScreen,
  ResolvedCaseDetail: ResolvedCaseDetailScreen,
},
{
  headerMode: 'none',
}
);

const AddStack = createStackNavigator({
  AddPerson: AddPersons,
  Login: LoginScreen,
  SignUp: SignUpScreen
},
{
  headerMode: 'none',
}
);

const SearchStack = createStackNavigator({
  Search:SearchScreen
},
{
  headerMode: 'none',
}
);

const NotificationsStack = createStackNavigator({
  Notifications: NotificationScreen
},
{
  headerMode: 'none',
}
);

 const TabsScreens = createBottomTabNavigator(
  {
    Home: HomeStack,
    Notifications: NotificationsStack,
    Search:SearchStack,
    LetsAdd:AddStack
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
        else if (routeName === 'LetsAdd') {
          iconName = `ios-person-add`;
        }
        focused ? clr = '#05CE1D': clr = "gray"; 
        return <Icon style={{color:`${clr}`}}  type="Ionicons" name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      
      activeTintColor: '#05CE1D',
      inactiveTintColor: 'gray',
      style:{
        borderTopColor: "grey",
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,  
        elevation: 5,
      }
    },
  }
);



const MyDrawerNavigator = createDrawerNavigator({
  Tabs: {
    screen: TabsScreens,
  }
}, {
  contentComponent: props => <DrawerScreen {...props} />
});

export default createAppContainer(MyDrawerNavigator)