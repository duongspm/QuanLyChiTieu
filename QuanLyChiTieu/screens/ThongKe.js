import React from 'react';
import{
    Text,
    View, 
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import Icon from "react-native-vector-icons/Entypo";


const ThongKe = ({navigation}) =>  {
        return(
            <View style={styles.container}>   
                <View style={styles.viewtop}>
                    <TouchableOpacity style={styles.menu} onPress={()=>{navigation.openDrawer()}}>
                        <Icon name="menu" color="white" size={50}/>
                        <Text style={styles.text}> Thống Kê </Text>
                    </TouchableOpacity>
                </View>    
                
                <View style={styles.view}>
                    <Text style={styles.text1}> Hôm nay: </Text>
                        <Text style={styles.text2}> Tổng thu: </Text>
                            <Text style={styles.textinput}>10000 VNĐ</Text>
                        <Text style={styles.text2}> Tổng chi: </Text>
                            <Text style={styles.textinput}>10000 VNĐ</Text>

                    <Text style={styles.text1}> Tháng này: </Text>
                        <Text style={styles.text2}> Tổng thu: </Text>
                            <Text style={styles.textinput}>10000 VNĐ</Text>
                        <Text style={styles.text2}> Tổng chi: </Text>
                            <Text style={styles.textinput}>10000 VNĐ</Text>

                    <Text style={styles.text1}> Năm này: </Text>
                        <Text style={styles.text2}> Tổng thu: </Text>
                            <Text style={styles.textinput}>10000 VNĐ</Text>
                        <Text style={styles.text2}> Tổng chi: </Text>
                            <Text style={styles.textinput}>10000 VNĐ</Text>
                </View>
            </View>
        )
    }


const styles = StyleSheet.create(
    {
        viewtop:{
            width:400,
            alignSelf:"flex-start",
            backgroundColor:'#00AFEF'
        },
        menu:{            
            height:60,
            marginTop:10,
            marginLeft:10
        },
        container:{
            flex:1
        },
        view:{
            margin:10
        },
        text:{
            marginTop:-45,
            marginLeft:60,
            fontSize:26,
            fontWeight:'bold',
            color:'white'
        },
        text1:{
            fontSize:22,
            fontWeight:'bold',
            marginTop:20
        },
        text2:{
            marginLeft:40,
            marginTop:5,
            fontSize:20
        },
        textinput:{
            marginTop:-25,
            marginLeft:150,
            fontSize:18
        }
    }
)

export default ThongKe;