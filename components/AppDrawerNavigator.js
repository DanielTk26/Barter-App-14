import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import { AppTabNavigator } from './AppTabNavigator'
import CustomSideBarMenu  from './CustomSideBarMenu';
import MyExchangeScreen from '../screens/MyExchangeScreen';
import NotificationScreen from '../screens/NotificationScreen';
import SettingScreen from '../screens/SettingScreen';
import MyRecievedItemsScreen from '../screens/MyRecievedItemsScreen'; 

export const AppDrawerNavigator = createDrawerNavigator({
  Home : {
    screen : AppTabNavigator,
    navigationOptions:{
      drawerIcon : <Icon name="home" type="fontawesome5" />
    }
    },
  MyExchanges : {
    screen : MyExchangeScreen,
    navigationOptions:{
      drawerIcon: <Icon name="gift" type="font-awesome" />,
      drawerLabel:"My Exchanges"
    }
  },
  Notification : {
    screen : NotificationScreen,
     navigationOptions:{
       drawerIcon: <Icon name="bell" type="font-awesome" />,
       drawerLabel: "Notifications"
     }  
  },
  MyRecievedItems : {
    screen: MyRecievedItemsScreen,
    navigationOptions:{
      drawerIcon: <Icon name="gift" type="font-awesome" />,
      drawerLabel: "My Recieved Items"
    }
  },
  Setting : {
    screen : SettingScreen,
    navigationOptions:{
      drawerIcon: <Icon name="settings" type="fontawesome5" />,
      drawerLabel: "Settings"
    }
  }
},
  {
    contentComponent:CustomSideBarMenu
  },
  {
    initialRouteName : 'Home'
  })