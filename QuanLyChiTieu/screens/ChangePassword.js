import React from 'react';
import {
   Text,
   View,
   TouchableOpacity,
   TextInput,
   StyleSheet,
   Alert,
   Button
} from 'react-native';
import database from '@react-native-firebase/database';

import * as Animatable from 'react-native-animatable';
/*import LinearGradient from 'react-native-linear-gradient';*/
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';


const ChangePassword=({navigation})=>
{
    const [data,setData] = React.useState({
        email: '',
        password:'',
        confirm_password:'',
        check_textInputChange:false,
        secureTextEntry:true,
        confirm_secureTextEntry:true,
    });
    const textInputChange = (val) =>{
        if(val.length !=0 ){
            setData({
                ...data,
                email:val,
                check_textInputChange:true
            });
            
        }else{
            setData({
                ...data,
                email:val,
                check_textInputChange:false
            });
            
        }
    }
    const handlePasswordChange = (val) =>{
        setData({
            ...data,
            password:val
        });
    }
    const handleConfirmPasswordChange = (val) =>{
        setData({
            ...data,
            confirm_password:val
        });
    }
    const updateSecureTextEntry = () =>{
        setData({
            ...data,
            secureTextEntry:!data.secureTextEntry
        });
    }

    const updateConfirmSecureTextEntry = () =>{
        setData({
            ...data,
            confirm_secureTextEntry:!data.confirm_secureTextEntry
        });
    }

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
    }

    return(
        <View style={styles.container}>
            <Text style={styles.text}> ĐĂNG NHẬP </Text>
            <TextInput  placeholder="Username"  style = {styles.textinput}
                onChangeText = {text=> setUsername(text)}/>
            <TextInput  placeholder="Password" secureTextEntry={true} style = {styles.textinput}
                onChangeText = {text=>setPassword(text)}/>
            <TouchableOpacity style={styles.button} onPress={dangNhap} >
                <Text style ={styles.textbutton}> Login </Text>
            </TouchableOpacity>
        </View>
    )*/
    return(
        /*<View style={styles.container}>
            
            <View style={styles.container}>
                <Text style={styles.text}> ĐĂNG KÝ </Text>
                <TextInput  placeholder="Username"  style = {styles.textinput}
                   />
                <TextInput  placeholder="Password" secureTextEntry={true} style = {styles.textinput}
                    />
            
               <Button
                    style = {styles.button}
                    title = "Login"
                    onPress = {() => navigation.navigate('Login')}
                />
            </View>
        </View>*/
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.text_header}>Register Now!</Text>
            </View>
            <Animatable.View
                animation="fadeInUpBig"
                style={styles.footer}>

                <Text style={styles.text_footer}>Email</Text>
                <View style={styles.action}>
                    <FontAwesome
                        name="user-o"
                        color="#05375a"
                        size={20}/>
                    <TextInput
                        placeholder="Your Email"  
                        style={styles.textInput}
                        autoCapitalize="none"
                        onChangeText={(val)=>textInputChange(val)}/>
                    {data.check_textInputChange ?
                    <Animatable.View
                        animation="bounceIn">
                        <Feather name="check-circle"
                        color="green"
                        size={2}/>
                    </Animatable.View>
                    :null}
                </View>

                <Text style={[styles.text_footer,{marginTop:35}]}>Password</Text>
                <View style={styles.action}>
                    <Feather
                        name="lock"
                        color="#05375a"
                        size={20}/>
                    <TextInput
                        placeholder="Your Password"  
                        secureTextEntry={data.secureTextEntry?true :false}
                        style={styles.textInput}
                        autoCapitalize="none"
                        onChangeText={(val)=>handlePasswordChange(val)}/>
                    <TouchableOpacity
                        onPress={updateSecureTextEntry}>
                        {data.secureTextEntry?
                        <Feather 
                            name="eye-off"
                            color="grey"
                            size={20}/>
                            :
                        <Feather 
                            name="eye"
                            color="grey"
                            size={20}/>
                        }
                    </TouchableOpacity>
                </View>

                <Text style={[styles.text_footer,{marginTop:35}]}>
                    Confirm Password
                </Text>
                <View style={styles.action}>
                    <Feather
                        name="lock"
                        color="#05375a"
                        size={20}/>
                    <TextInput
                        placeholder="Confirm Your Password"  
                        secureTextEntry={data.secureTextEntry?true :false}
                        style={styles.textInput}
                        autoCapitalize="none"
                        onChangeText={(val)=>handleConfirmPasswordChange(val)}/>
                    <TouchableOpacity
                        onPress={updateConfirmSecureTextEntry}>
                        {data.secureTextEntry?
                        <Feather 
                            name="eye-off"
                            color="grey"
                            size={20}/>
                            :
                        <Feather 
                            name="eye"
                            color="grey"
                            size={20}/>
                        }
                    </TouchableOpacity>
                    
                </View>

                <View >
                    <TouchableOpacity
                        onPress = {() => navigation.navigate('Login')}
                        style={[styles.signIn,{
                            borderColor:'#00AFEF',
                            borderWidth:1,
                            marginTop:15
                        }]}>
                        <Text style={[styles.textSign,{
                            color:'#00AFEF'
                        }]}>Sign In</Text>
                    </TouchableOpacity>
                </View>
            </Animatable.View>
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
    
    text:{
           color: '#00AFEF',
           fontWeight: 'bold',
           fontSize: 30,
           alignSelf: 'center',
           padding: 50,
       },
       textinput:{
           height:50,
           fontWeight:"bold",
           fontSize: 20,
           borderRadius: 5,
           borderWidth:1,
           margin:10,
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
           color:'blue',
           fontSize: 24,
           fontWeight: 'bold'
       },
       /** */
       textSign:{
           fontSize:18,
           fontWeight:'bold'
       },
       signIn:{
           width:'100%',
           height: 50,
           justifyContent:"center",
           alignItems:'center',
           borderRadius:10,
       },
       button:{
           alignItems:'center',
           marginTop:50
       },
       textInput:{
           flex:1,
           paddingLeft:10,
           color:'#05375a',
       },
       action:{
           flexDirection:'row',
           marginTop:10,
           borderBottomWidth:1,
           borderBottomColor:'#f2f2f2',
           paddingBottom:5,
       },
       text_footer:{
           color:'#05375a',
           fontSize:18,
       },
       text_header:{
           color:'#fff',
           fontWeight:'bold',
           fontSize:30,
       },
       footer:{
           flex:3,
           backgroundColor:'#fff',
           borderTopLeftRadius:30,
           borderBottomRightRadius:30,
           paddingHorizontal:20,
           paddingVertical:30,
       },
       header:{
           flex:1,
           justifyContent:'flex-end',
           paddingHorizontal:20,
           paddingBottom:50,
           backfaceVisibility:'#00AFEF'
       },
       container:{
           flex:1,
           backgroundColor:'#00AFEF',
       },
    }
 );
 
 export default ChangePassword;
