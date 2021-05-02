import React from 'react';
import{
    Text,
    View,
    TouchableOpacity,
    StyleSheet,
    Button,
    Image, 
    ScrollView
} from 'react-native';
import Icon from "react-native-vector-icons/Entypo";
import ThemKC from './ThemKC'

const KhoanChi = ({navigation}) => {
  
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.menu} onPress={()=>{navigation.openDrawer()}}>
                    <Icon name="menu" color="black" size={50} style={{paddingTop:10}}/>
                </TouchableOpacity>
                <Text style={styles.title}>Khoản Chi</Text>
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
                    }}>Tiền ra</Text>
                    <Text style={{
                        color:'#fff',
                        fontWeight:'700',
                        fontSize:50
                    }}>1,500,000 vnđ</Text>
                </View>

                <View style={{
                        height:1000,
                        width:'100%',
                        backgroundColor:'#fff',
                        marginTop:50,
                        borderTopLeftRadius:30,
                        borderTopRightRadius:30,
                    }}>
                        <View style={{flexDirection:'row', paddingTop:20, padding:50}}>
                            <TouchableOpacity
                                style={{
                                paddingVertical:6,
                                borderBottomWidth:4,
                                }}
                                >
                                <Text style={{
                                    fontWeight:'bold',
                                    fontSize:25,
                                    //color:this.state.todaySelected ? '#00192D' : '#8e9aaf',

                                }}>HÔM NAY</Text>
                            </TouchableOpacity>

                            <TouchableOpacity 
                                
                                    style={{
                                        marginLeft:30,
                                        borderBottomWidth:4,
                                        paddingVertical:6,
                                        }}
                                    >
                                <Text style={{
                                        fontWeight:'bold',
                                        fontSize:25,
                                        opacity:0.5
                                    }}>THÁNG</Text>
                            </TouchableOpacity>

                        </View>

                        <View style={{flexDirection:'row', justifyContent:'space-between', marginHorizontal:30}}>
                            <Text style={{fontSize:30, fontWeight:'bold'}}>04/05/2021</Text>
                            <Text style={{fontSize:30, fontWeight:'bold', color:'#e76f51'}}>670</Text>
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
                                        backgroundColor:'#00192d',
                                        alignItems:'center',
                                        justifyContent:'center',
                                        }}>
                                        <Image 
                                            resizeMode='contain'
                                            style={{height:50, width:50}}
                                            source={require('../img/electricity.png')} />
                                    </View>
                                    <Text style={{
                                        fontSize:25,
                                        fontWeight:'bold',
                                        marginLeft:10,
                                        }}>Tiền phòng</Text>
                                </View>
                                <Text style={{
                                    fontSize:20,
                                    fontWeight:'bold',
                                    color:'#e76f51',
                                    }}>-1,000,000</Text>
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
                                        backgroundColor:'#00192d',
                                        alignItems:'center',
                                        justifyContent:'center',
                                        }}>
                                        <Image 
                                            resizeMode='contain'
                                            style={{height:50, width:50}}
                                            source={require('../img/taxi.png')} />
                                    </View>
                                    <Text style={{
                                        fontSize:25,
                                        fontWeight:'bold',
                                        marginLeft:10,
                                        }}>Tiền Taxi</Text>
                                </View>
                                    <Text style={{
                                        fontSize:20,
                                        fontWeight:'bold',
                                        color:'#e76f51',
                                        }}>-230,000</Text>
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
                                        backgroundColor:'#00192d',
                                        alignItems:'center',
                                        justifyContent:'center',
                                        }}>
                                        <Image 
                                            resizeMode='contain'
                                            style={{height:50, width:50}}
                                            source={require('../img/food.png')} />
                                    </View>
                                    <Text style={{
                                        fontSize:25,
                                        fontWeight:'bold',
                                        marginLeft:10,
                                        }}>Ăn & Uống</Text>
                                </View>
                                    <Text style={{
                                        fontSize:20,
                                        fontWeight:'bold',
                                        color:'#e76f51',
                                        }}>-360,000</Text>
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
                                        backgroundColor:'#00192d',
                                        alignItems:'center',
                                        justifyContent:'center',
                                        }}>
                                        <Image 
                                            resizeMode='contain'
                                            style={{height:50, width:50}}
                                            source={require('../img/train.png')} />
                                    </View>
                                    <Text style={{
                                        fontSize:25,
                                        fontWeight:'bold',
                                        marginLeft:10,
                                        }}>Tiền xăng</Text>
                                </View>
                                <Text style={{
                                    fontSize:20,
                                    fontWeight:'bold',
                                    color:'#e76f51',
                                    }}>-80,000</Text>
                            </View>
                        </ScrollView>
                    </View>
                    <TouchableOpacity
                        onPress = {() => navigation.navigate('ThemKC')}
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
        </View>
    )
}

const styles = StyleSheet.create(
    {
        menu:{
            height:60,
            alignSelf:"flex-start",
            marginLeft:10,
            marginTop:10
        },
        header:{
            width:'100%',
            justifyContent:'space-between',
            alignItems:"center",
            flexDirection:"row",
            backgroundColor:'#00AFEF'
        },
        container:{
            flex: 1,
            backgroundColor:'#00AFEF'
          },
          title:{
            fontSize:35,
            fontWeight:'bold',
            textAlign:'center',
            justifyContent:'space-between',
            marginHorizontal:30,
        },
       
    }
)

export default KhoanChi;