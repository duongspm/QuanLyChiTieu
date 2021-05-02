/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import {
    ActivityIndicator
 } from 'react-native';
 import {NavigationContainer} from "@react-navigation/native";
 import {createStackNavigator} from '@react-navigation/stack';
 import {KhoanThu, Login, ChangePassword, ThongKe } from './screens';
 import Menu from './navigation/Menu';


 const Stack = createStackNavigator();
 
 const App = ()=>
 {
     return (
         <NavigationContainer>
             <Stack.Navigator 
                 initialRouteName='Login'
                 screenOptions={{
                     headerShown: false,
                 }}
             >
                 <Stack.Screen name='Login' component = {Login}/>
                 <Stack.Screen name='KhoanThu' component = {Menu}/>
                 <Stack.Screen name='ChangePassword' component = {ChangePassword}/>
               

             </Stack.Navigator>
         </NavigationContainer>
     )
 }
 export default App;
