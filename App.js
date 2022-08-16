import React , {useState, useEffect, useMemo, useReducer} from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import GerTecnicosScreen from './screens/GerTecnicosScreen';
import MenuScreen from './screens/MenuScreen';
import TestScreen from './screens/TestScreen';
import TecMenuScreen from './screens/TecMenuScreen';
import { ActivityIndicator } from 'react-native-paper';

import { AuthContext } from './components/context';
import ContextHomeScreen from './screens/ContextHomeScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();

const App = () => {

  initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
    userType: 1
  };

  const loginReducer = (prevState, action) => {
    switch( action.type ) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false
        };
      case 'LOGIN':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false
        };
      case 'LOGOUT':
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false
        };
      case 'REGISTER':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false
        };
    }
  }

  const [loginState, dispatch] = useReducer(loginReducer, initialLoginState);

  const authContext = useMemo(() => ({

    signIn:  async (foundUser) => {
      const userToken = String(foundUser[0].userToken);
      const userName = foundUser[0].userName;
      if(userName == foundUser.userName && password == foundUser.password) {
        userToken = 'first';
        try {
          await AsyncStorage.setItem('userToken', userToken)
        }
        catch(e) {
          console.log(e);
        }
      }
      console.log('user token: ', userToken);
      dispatch({ type: 'LOGIN', id: userName, token: userToken});
    },
    signOut: async() => {
      try {
        await AsyncStorage.removeItem('userToken');
      }
      catch (e) {
        console.log(e);
      }
      dispatch({ type: 'LOGOUT'});
    },
    signUp: () => {
      setUserToken(null);
      setIsLoading(false);
    }
  }), []);

  useEffect(() => {
    setTimeout(async() => {
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem('userToken');
      }
      catch (e) {
        console.log(e);
      }
      dispatch({ type: 'RETRIEVE_TOKEN', token: userToken});
    }, 1000);
  }, []);

  if(loginState.isLoading) {
    return(
      <View style = {styles.activity}>
        <ActivityIndicator size = "large"/>
      </View>
    );
  }

  return (
    <AuthContext.Provider value = {authContext}>
      <NavigationContainer>
        { loginState.userToken !== null ? (
          loginState.userToken === 'token1' ? (
            <Stack.Navigator>
              <Stack.Screen name="Menu" component={MenuScreen} />
              <Stack.Screen name="Test" component={TestScreen} />
              <Stack.Screen name="ContextHome" component={ContextHomeScreen} />
              <Stack.Screen name="GerTecnicos" component={GerTecnicosScreen} />
            </Stack.Navigator>
          )
          :
          (
              <Stack.Navigator>
                <Stack.Screen name="TecMenu" component={TecMenuScreen} />
                <Stack.Screen name="Test" component={TestScreen} />
                <Stack.Screen name="ContextHome" component={ContextHomeScreen} />
                <Stack.Screen name="GerTecnicos" component={GerTecnicosScreen} />
              </Stack.Navigator>
          )
        ) 
        : 
        (
          <Stack.Navigator>
            <Stack.Screen name="LogIn" component={LoginScreen} />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
          </Stack.Navigator> 
        )
        }
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  activity: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
