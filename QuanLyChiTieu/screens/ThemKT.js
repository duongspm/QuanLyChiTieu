import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, TextInput} from 'react-native';

export default function ThemKT ({navigation,route }){
  return(
    <View style={styles.container}>
    <View style={{
      height:1000,
      width:'100%',
      backgroundColor:'#fff',
      marginTop:100,
      borderTopLeftRadius:40,
      borderTopRightRadius:40,
    }}>
      <View style={{flexDirection:'row', padding:20, alignItems:'center'}}>
        <TouchableOpacity onPress={()=>navigation.goBack()}>
          <Image 
          resizeMode='contain'
          style={{height:40, width:40}}
          source={require('../img/exit.png')} />
        </TouchableOpacity>
        <Text style={{
          fontSize:25,
          fontWeight:'700',
          marginLeft:50,
        }}>Thêm khoản thu</Text>
      </View>

      <View style={{flexDirection:'row', padding:30}}>
        <View style={{
          height:50, 
          width:100,
          backgroundColor: '#22ce99',
          borderRadius:30,
          alignItems:'center',
          justifyContent:'center',
        }}>
          <Text style={{
            color:'#fff',
            fontSize:25,
            fontWeight:'700',
          }}>VNĐ</Text>
        </View>
        <TextInput
        placeholder='Số tiền'
        keyboardType='numeric'
        style={{
          fontSize:30,
          marginLeft:10,
          padding:10,
          borderBottomWidth:2,
          borderBottomColor:'#000'
        }}
        >
        </TextInput>
      </View>

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
            <View>
            <Text style={{
              fontSize:25,
              fontWeight:'bold',
              marginLeft:10,
            }}>Trợ cấp</Text>
            <View style={{
              borderBottomWidth:2, 
              width:'120%', 
              marginTop:20,
              marginLeft:20,
              opacity:0.4,
              }}></View>
            </View>
            
            </View>
            <Image 
            resizeMode='contain'
            style={{height:25, width:25}}
            source={require('../img/arrow.png')} />
          </View>

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
              style={{height:40, width:40}}
              source={require('../img/note.png')} />
            </View>
            <View>
            <TextInput
        placeholder='Ghi chú'
        keyboardType='numeric'
        style={{
          fontSize:30,
          marginLeft:10,
          padding:10,
          borderBottomWidth:2,
          borderBottomColor:'#000'
        }}
        >
        </TextInput>
            </View>
            </View>
          </View>


          <View style={{
              height:'30%',
              width:'90%',
              backgroundColor:'#fff',
              marginHorizontal:20,
              borderRadius:30,
              marginTop:30,

              shadowColor:'#000',
              shadowOffset:{
                width:0,
                height:6,
              },
              shadowOpacity:0.37,
              shadowRadius:8,
            }}>

              <Text style={{padding:20, fontSize:25, fontWeight:'500'}}>Khoản Thu gần đây</Text>
              <View style={{borderBottomWidth:2, width:'90%', opacity:0.5, marginLeft:20}}></View>

              <View style={{flexDirection:'row', 
          justifyContent:'space-between',
          alignItems:'center',
          marginHorizontal:30,
          paddingTop:30,
          }}>
            <View style={{flexDirection:'row', alignItems:'center'}}>
            <View style={{
              height:40,
              width:40,
              borderRadius:100,
             
              alignItems:'center',
              justifyContent:'center',
            }}>
              <Image 
              resizeMode='contain'
              style={{height:30, width:30}}
              source={require('../img/moneybag.png')} />
            </View>
            <Text style={{
              fontSize:25,
              fontWeight:'bold',
              marginLeft:10,
            }}>Lãnh Lương</Text>
            </View>
            <Text style={{
              fontSize:20,
              fontWeight:'bold',
              color:'#e76f51',
            }}>+1,000,000</Text>
          </View>
          
          <View style={{borderBottomWidth:2, width:'85%', opacity:0.3, marginLeft:20, marginTop:20}}></View>

            </View>

      
    </View>
  </View>
  ); 
}


const styles = StyleSheet.create({
 container:{
  flex: 1,
  backgroundColor:'#22ce99'
 }
})