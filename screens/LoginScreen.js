import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity, Dimensions, TextInput, Alert} from 'react-native';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../components/context';

import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as Animatable from 'react-native-animatable'

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import SignUpScreen from './SignUpScreen';

import users from '../model/users';

const LoginScreen = ({navigation}) => {

    const [data, setData ] = useState(
        {
            userName: '',
            password:'',
            confirm_password: '',
            check_textInputChange: false,
            secureTextEntry: true,
            confirm_secureTextEntry: true,
            isValidUser: true,
            isValidPassword: true
        }
    );

    const { signIn } = useContext(AuthContext);

    const textInputChange = (val) => {
        if(val.trim().length >= 4) {
            setData({
                ...data,
                userName: val,
                check_textInputChange: true,
                isValidUser: true
            });
        }
        else {
            setData({
                ...data,
                userName: val,
                check_textInputChange: false,
                isValidUser: false
            });
        }

    }

    const handlePasswordChange = (val) => {
        if (val.trim().length >= 8) {
            setData({
                ...data,
                password: val,
                isValidPassword: true
            });
        }
        else {
            setData({
                ...data,
                password: val,
                isValidPassword: false
            });
        }
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        })
    }

    const loginHandle = (userName, password) => {

        const foundUser = users.filter( item => {
            return userName == item.userName && password == item.password;
        })

        if( data.userName.length == 0 || data.password.length == 0) {
            Alert.alert('Dados Incorretos!', 'Usuário e Senha não podem estar com campos vazios!.', [{text: 'OK'}] );
            return;
        }

        if (foundUser.length == 0) {
            Alert.alert('Usuário Inválido!', 'Usuário ou senha está incorreta.', [{ text: 'OK' }]);
            return;
        }

        signIn(foundUser);
    }

    const handleValidUser = (val) => {
        if(val.trim().length >= 4) {
            setData({
                ...data,
                isValidUser: true
            });
        }
        else {
            setData({
                ...data,
                isValidUser: false
            });
        }
    }
    


    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.text_header}>Bem Vindo!</Text>
            </View>
            <View style={styles.footer}>
                <Text style={styles.text_footer}>Usuário</Text>
                <View style = {styles.action}>
                    <FontAwesome
                        name="user-o"
                        color="#1290a3"
                        size = {20}
                    />
                    <TextInput 
                        placeholder= "Digite o nome do usuário"
                        style = {styles.textInput}
                        autoCapitalize = "none"
                        onChangeText = {(value) => textInputChange(value)}
                        onEndEditing = {(e) => handleValidUser(e.nativeEvent.text)}
                    />
                    { data.check_textInputChange ? 
                        <Feather
                            name="check-circle"
                            color = "blue"
                            size = {20}
                        />
                        : null
                    }
                </View>
                {data.isValidUser ? null : 
                    <Animatable.View animation="fadeInLeft" duration={500}>
                        <Text style={styles.errorMsg}>
                            Nome do usuário deve ter 4 caracteres!
                        </Text>
                    </Animatable.View>
                }


                <Text style={[styles.text_footer, {marginTop: 10}]}>Senha</Text>
                <View style={styles.action}>
                    <FontAwesome
                        name="user-o"
                        color="#1290a3"
                        size={20}
                    />
                    <TextInput
                        placeholder="Digite sua senha"
                        secureTextEntry = {data.secureTextEntry ? true : false}
                        style={styles.textInput}
                        autoCapitalize="none"
                        onChangeText = {(value) => handlePasswordChange(value)}
                    />
                    <TouchableOpacity
                        onPress = {updateSecureTextEntry}
                    >
                        {data.secureTextEntry ? 
                            <Feather
                                name="eye-off"
                                color="gray"
                                size={20}
                            />
                        : 
                            <Feather
                                name="eye"
                                color="gray"
                                size={20}
                            />
                        }

                    </TouchableOpacity>
                </View>
                {data.isValidPassword ? null :
                    <Animatable.View animation="fadeInLeft" duration={500}>
                        <Text style={styles.errorMsg}>
                            A senha deve ter no mínimo 8 caracteres!
                        </Text>
                    </Animatable.View>
                }
                
                <View style = {styles.button}>

                    <TouchableOpacity
                        onPress={() => {loginHandle(data.userName, data.password)}}
                        style={[styles.signIn, {
                            backgroundColor: '#026ebd',
                            marginTop: 15 
                    }]}>
                        <Text style = {[styles.textSign, {color: "#fff"}]}>
                            Sign In
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress = {() => navigation.navigate('SignUp')}
                        style = {[styles.signIn, {
                            borderColor: '#026ebd',
                            borderWidth: 2,
                            marginTop: 15
                        }]}
                    >
                        <Text style={[styles.textSign, { color: "#1290a3" }]} >
                            Sign Up
                        </Text>
                    </TouchableOpacity>
                </View>        

            </View>
        </View>
    );
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#026ebd'
    },
    header: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#026ebd',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#026ebd',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: 12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: 300,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});