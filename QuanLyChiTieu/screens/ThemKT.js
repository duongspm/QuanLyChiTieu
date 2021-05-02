import React from "react";
import {
    Text,
    View,
    TouchableOpacity,
    StyleSheet,
    Button,
    Image, 
    ScrollView
} from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import ThemKT from './ThemKT'

const KhoanThu = ({navigation}) => {
    
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.menu} onPress={()=>{navigation.openDrawer()}}>
                    <Icon name="menu" color="black" size={50} style={{paddingTop:10}}/>
                </TouchableOpacity>
                <Text style={styles.title}>Khoản Thu</Text>
            </View>
            <View style={{flexDirection:'row', marginHorizontal:30, justifyContent:'space-between'}}>
                <Text style={{color:'#fff',
                        fontWeight:'600',
                        fontSize:25}}>
                    Trần Văn Dương
                </Text>
                <Image 
                    style={{
                    height:60, 
                    width:60, 
                    borderRadius:100,
                    borderWidth:5,
                    borderColor:'#00192D'
                    }}
                    source={require('../img/profile.jpg')}
                />
            </View>
            <View>
                
                <View style={{padding:30}}>
                    <Text style={{
                        color:'#fff',
                        fontSize:30,
                        fontWeight:'700',
                    }}>Tiền Vào</Text>
                    <Text style={{
                        color:'#fff',
                        fontWeight:'700',
                        fontSize:45
                    }}>1,400,000 vnđ</Text>
                </View>

                <View style={{
                        height:1000,
                        width:'100%',
                        backgroundColor:'#fff',
                        marginTop:50,
                        borderTopLeftRadius:30,
                        borderTopRightRadius:30,
                    }}>
                       
                        <View style={{flexDirection:'row', justifyContent:'space-between', marginHorizontal:30}}>
                            
                            <Text style={{fontSize:30, fontWeight:'bold', color:'#00AFEF'}}>+1,400,000</Text>
                        </View>
                        <View style={{borderBottomWidth:2, width:'85%', marginLeft:30, marginTop:20, opacity:0.3}}></View>
                        <View style={{width:'100%', height:'30%'}}>
                            <ScrollView>
                                {/* first Item */}
                                <View style={{flexDirection:'row', 
                                    justifyContent:'space-between',
                                    alignItems:'center',
                                    marginHorizontal:30,
                                    paddingTop:30,
                                    }}>
                                    <View style={{flexDirection:'row', alignItems:'center'}}>
                                        <View style={{
                                            height:70,
                                            width:70,
                                            borderRadius:100,
                                            alignItems:'center',
                                            justifyContent:'center',
                                            }}>
                                            <Image 
                                                resizeMode='contain'
                                                style={{height:50, width:50}}
                                                source={require('../img/money.png')} />
                                        </View>
                                        <Text style={{
                                            fontSize:25,
                                            fontWeight:'bold',
                                            marginLeft:10,
                                            }}>Tiền trợ cấp</Text>
                                    </View>
                                    <Text style={{
                                        fontSize:20,
                                        fontWeight:'bold',
                                        color:'#00AFEF',
                                        }}>+1,000,000</Text>
                                </View>

                                {/* second Item */}
                                <View style={{flexDirection:'row', 
                                    justifyContent:'space-between',
                                    alignItems:'center',
                                    marginHorizontal:30,
                                    paddingTop:30,
                                    }}>
                                    <View style={{flexDirection:'row', alignItems:'center'}}>
                                        <View style={{
                                            height:70,
                                            width:70,
                                            borderRadius:100,
                                            alignItems:'center',
                                            justifyContent:'center',
                                            }}>
                                            <Image 
                                                resizeMode='contain'
                                                style={{height:50, width:50}}
                                                source={require('../img/moneybag.png')} />
                                        </View>
                                        <Text style={{
                                            fontSize:25,
                                            fontWeight:'bold',
                                            marginLeft:10,
                                            }}>Tiền Lương</Text>
                                    </View>
                                        <Text style={{
                                            fontSize:20,
                                            fontWeight:'bold',
                                            color:'#00AFEF',
                                            }}>+230,000</Text>
                                </View>

                                {/* third Item */}
                                <View style={{flexDirection:'row', 
                                    justifyContent:'space-between',
                                    alignItems:'center',
                                    marginHorizontal:30,
                                    paddingTop:30,
                                    }}>
                                    <View style={{flexDirection:'row', alignItems:'center'}}>
                                        <View style={{
                                            height:70,
                                            width:70,
                                            borderRadius:100,
                                            alignItems:'center',
                                            justifyContent:'center',
                                            }}>
                                            <Image 
                                                resizeMode='contain'
                                                style={{height:50, width:50}}
                                                source={require('../img/cards.png')} />
                                        </View>
                                        <Text style={{
                                            fontSize:25,
                                            fontWeight:'bold',
                                            marginLeft:10,
                                            }}>Tiến lên</Text>
                                    </View>
                                        <Text style={{
                                            fontSize:20,
                                            fontWeight:'bold',
                                            color:'#00AFEF',
                                            }}>+36,000</Text>
                                </View>

                                {/* Fourth Item */}
                                <View style={{flexDirection:'row', 
                                    justifyContent:'space-between',
                                    alignItems:'center',
                                    marginHorizontal:30,
                                    paddingTop:30,
                                    }}>
                                    <View style={{flexDirection:'row', alignItems:'center'}}>
                                        <View style={{
                                            height:70,
                                            width:70,
                                            borderRadius:100,
                                            alignItems:'center',
                                            justifyContent:'center',
                                            }}>
                                            <Image 
                                                resizeMode='contain'
                                                style={{height:50, width:50}}
                                                source={require('../img/clubs.png')} />
                                        </View>
                                        <Text style={{
                                            fontSize:25,
                                            fontWeight:'bold',
                                            marginLeft:10,
                                            }}>Porn</Text>
                                    </View>
                                    <Text style={{
                                        fontSize:20,
                                        fontWeight:'bold',
                                        color:'#00AFEF',
                                        }}>+20,000</Text>
                                </View>
                        </ScrollView>
                        
                    </View>
                    <TouchableOpacity
                        onPress = {() => navigation.navigate('ThongKe')}
                        style={{
                            height:80,
                            width:80,
                            backgroundColor:'#00192d',
                            borderRadius:100,
                            alignSelf:'center',
                            alignItems:'center',
                            justifyContent:'center',
                        }}
                        >
                            <Image 
                            style={{height:50, width:50, borderRadius:100}}
                            source={require('../img/add.png')} />

                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.container}>
                <View style={{flexDirection: "row",alignSelf: "center",}}>
                    <Text style={{fontFamily: "RobotoBold",color: "#4b3ca7",fontSize: 20,}}>Lãnh lương</Text>
                    <Text style={{fontSize: 20,color: "#a2a2db",paddingHorizontal: 14,}}>{" "}- - - - - - - - - -</Text>
                    <Text style={{fontFamily: "RobotoBold",color: "#4b3ca7",fontSize: 20,}}>Tháng 04</Text>
                </View>

                <View style={{flexDirection: "row",marginTop: -5,alignItems: "center",}}>
                    <Text style={{fontFamily: "RobotoRegular",color: "#a2a2db",fontSize: 11,}}>New York</Text>
                    <Text style={{fontSize: 11,fontFamily: "RobotoRegular",color: "#a2a2db",paddingLeft: 112,}}>Indonesia</Text>
                </View>

                <View style={{flexDirection: "row",marginTop: 10,alignItems: "center",}}>
                    <Text style={{fontFamily: "RobotoRegular",color: "#522289",fontSize: 16,}}>09:00 AM</Text>
                    <Text style={{fontFamily: "RobotoRegular",color: "#522289",paddingLeft: 70,fontSize: 16,}}>21:00 PM</Text>
                </View>

                    <Text style={{fontFamily: "RobotoRegular",color: "#a2a2db",fontSize: 12,}}>20JUNe, 2021</Text>
                    
                    <Text style={{fontSize: 17,marginRight: -5,marginVertical: 8,color: "#a2a2db",}}>- - - - - - - - - - - - - - - - - - - - - - -</Text>

                <View style={{flexDirection: "row",marginTop: -8,alignItems: "center",}}>
                    <Text style={{fontFamily: "RobotoRegular",color: "#522289",fontSize: 16,}}>Mức lương</Text>
                    <Text style={{fontFamily: "RobotoBold",color: "#4b3ca7",paddingLeft: 75,fontSize: 16,}}>$400</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        menu:{
            height:60,
            alignSelf:"flex-start",
            marginLeft:10,
            
        },
        container:{
            flex:1,
            backgroundColor:'#00AFEF'
        },
        title:{
            fontSize:35,
            fontWeight:'bold',
            textAlign:'center',
            marginHorizontal:30,
            justifyContent:'space-between',
        },
        header:{
            width:'100%',
            justifyContent:'space-between',
            alignItems:"center",
            flexDirection:"row",
            backgroundColor:'#00AFEF'
        }

    }
)

export default KhoanThu;