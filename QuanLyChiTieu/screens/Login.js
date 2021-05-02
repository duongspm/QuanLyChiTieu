import React from 'react';
import {
   Text,
   View,
   TouchableOpacity,
   TextInput,
   StyleSheet,
   Alert,
   Button,
   ImageBackground
} from 'react-native';
import database, { firebase } from '@react-native-firebase/database';

import * as Animatable from 'react-native-animatable';
/*import LinearGradient from 'react-native-linear-gradient';*/
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

const Login = ({navigation})=>
{
    /*const [users, setUsers ] = React.useState("")
    database()
    .ref('/users')
    .once('value')
    .then(snapshot => {
        setUsers(snapshot.val());
    });
    
    const [Username, setUsername] =  React.useState("");
    const [Password, setPassword] = React.useState("");
    function dangNhap()
    {
        let user=  users.find(user=>(user.u==Username&& user.p==Password));
        if(user!=null)
            navigation.navigate('KhoanThu', {user});
        else
            alert("Sai username va mat khau");
    }*/
   
   
    let background = require("../img/bg.png");
    return(
       
            <View style={styles.container}>
                <Text style={styles.header}>{`Hello again \nWelcome back!`}</Text>
                <Animatable.View
                    animation="fadeInUpBig"
                    style={styles.footer}>
                    <Text style={styles.text_footer}>
                        Email  <FontAwesome
                            name="user-o"
                            color="#05375a"
                            size={20}/>
                    </Text>
        
                    <TextInput  placeholder=" Your Email"  style = {styles.textinput}
                            /*onChangeText = {text=> setUsername(text)}
                            autoCapitalize="none"
                            onChangeText={email =>this.setState({email})}
                            value={this.state.email}*//>
        
                    <Text style={[styles.text_footer,{marginTop:10}]}>
                            Password  <Feather
                                name="lock"
                                color="#05375a"
                                size={20}/>
                    </Text>
                    <TextInput  placeholder=" Your Password" secureTextEntry={true} style = {styles.textinput}
                        /*onChangeText = {text=>setPassword(text)}
                        secureTextEntry
                        autoCapitalize="none"
                        onChangeText={password =>this.setState({password})}
                        value={this.state.password}*//>
                    
                    <TouchableOpacity style={styles.button} onPress = {() => navigation.navigate('KhoanThu')} >
                        <Text style ={styles.textbutton}> Login </Text>
                    </TouchableOpacity>
                
                    <TouchableOpacity style={{alignSelf:"center",marginTop:32}} onPress = {() => navigation.navigate('ChangePassword')}>
                        <Text style={styles.text}> 
                            Have you an Account! <Text style={{fontWeight:"500",color:"#00AFEF"}}>Create One</Text>
                        </Text>
                    </TouchableOpacity>
                    
                </Animatable.View>
            </View>
       
    )
}
 const styles = StyleSheet.create(
   {
    container:{
        flex:1,
        backgroundColor:'#00AFEF',
    },
        containerview:{
            flex:3,
            backgroundColor:'#fff',
            borderTopLeftRadius:30,
            borderBottomRightRadius:30,
            paddingHorizontal:20,
            paddingVertical:30,
        },
        textinput:{
            height:50,
            fontSize: 20,
            borderRadius: 10,
            borderWidth:1,
            margin:10,
            borderColor:'black'
        },
        button:{
            backgroundColor:'#00AFEF',
            height: 50,
            borderRadius:10,
            justifyContent:"center",
            alignItems: 'center',
            margin:10,
            marginTop:15,
        },
        textbutton:{
            color:'white',
            fontSize: 24,
            fontWeight: 'bold'
        },        
        text:{
            color: '#333',
            fontSize: 20,
            alignSelf: 'center',
            marginTop:20
        },

        /** */
        title:{
            fontSize:25,
            textAlign:'center',
            justifyContent:'center',
            margin:40
        },
        greeting:{
            fontWeight: 'bold',
            fontSize: 28,
            fontWeight:"400",
            textAlign:'center',
            fontStyle:'bold'
        },
    
        error:{
            color:'#E9446A',
            fontSize:13,
            fontWeight:"600",
            textAlign:"center"
        },
        text_header:{
            fontWeight:'bold',
            fontSize:30,
            color:'#fff'
        },
        header:{
            flex:1,
            justifyContent:'flex-end',
            paddingHorizontal:10,
            paddingTop:70,
            paddingBottom:0,
            backfaceVisibility:'#00AFEF',
            fontWeight:'bold',
            fontSize:30,
            color:'#fff'
        },
        footer:{
            flex:3,
            backgroundColor:'#fff',
            borderTopLeftRadius:30,
            borderBottomRightRadius:30,
            paddingHorizontal:20,
            paddingVertical:30,
        },
        action:{
            flexDirection:'row',
            marginTop:20,
            borderBottomWidth:1,
            borderBottomColor:'#f2f2f2',
            paddingBottom:5,
        },
        text_footer:{
            color:'#05375a',
            fontSize:24,
        },
    }
 )
 
 export default Login;
