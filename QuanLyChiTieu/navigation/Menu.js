import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createDrawerNavigator} from "@react-navigation/drawer";
import {Login, KhoanThu, KhoanChi, ThongKe, ChangePassword, ThemKT,ThemKC} from "../screens"; 
const Drawer = createDrawerNavigator();

const Menu = ()=>
{
    //const user = route.params.user;
    return(
        <Drawer.Navigator initialRouteName="Khoản thu" >
            <Drawer.Screen  name ="Khoản thu" component={KhoanThu}/>
            <Drawer.Screen  name ="Khoản chi" component={KhoanChi}/>
            <Drawer.Screen  name ="Thống kê" component={ThongKe} />  
            <Drawer.Screen  name ="Đổi mật khẩu" component={ChangePassword} /*initialParams={user}*//>
            <Drawer.Screen  name ="Thoát" component={Login}/>
            <Drawer.Screen  name = "" component={ThemKC}/>
          
           
        </Drawer.Navigator>
    )
};

export default Menu;