import React, { useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { auth } from '../../config/firebase';

export function SplashScreen({ navigation }) {
  useEffect(() => {
    const checkUser = async () => {
      const user = await AsyncStorage.getItem('user'); // verifica se as informações do usuário estão armazenadas no AsyncStorage
      if (user) {
        const userData = JSON.parse(user);
        auth.signInWithEmailAndPassword(userData.email, userData.password) // faz login automaticamente com as informações armazenadas
          .then(() => {
            navigation.replace('Tabs');
          })
          .catch(() => {
            navigation.replace('Login');
          });
      } else {
        navigation.replace('Login');
      }
    };
    checkUser();
  }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ActivityIndicator />
    </View>
  );
}
