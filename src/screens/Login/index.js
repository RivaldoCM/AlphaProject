import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, Text, TouchableOpacity, Image, TouchableWithoutFeedback } from "react-native";

import { auth, db } from "../../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { collection, doc, getDocs } from "firebase/firestore";

import { 
    Form, 
    BoxImage, 
    BoxSocial, 
    Container,
    TextInput,
    ButtonChangePass,
    BoxChangePass,
    ButtonAuth,
    Wrapper,
    ButtonsContent,
    SetPassword,
} from "./style";

import { LoginBtn } from "../../components/buttons";
import { ErrorLogin } from "../../components/errors/ErrorLogin";

import logo from '../../assets/images/logo.png'
import facebookLogo from '../../assets/icons/facebook-logo.png';
import googleLogo from '../../assets/icons/google-logo.png';
import Feather from 'react-native-vector-icons/Feather';

import { useError } from '../../hooks/useError';
import { useAuth } from "../../hooks/useAuth";

export function Login({ navigation }){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassoword, setShowPassword] = useState(false);
    
    const { error, errorMessage, handleError } = useError();
    const { user, setUser } = useAuth();

    const userCollectionRef = collection(db, 'users');

    useEffect(() => {

        const checkUser = async () => {
          const user = await AsyncStorage.getItem('user');
          if (user) {
            navigation.replace('Tabs');
          }
        };
        checkUser();

    }, []);

    const login = () => {
        if (email === '' || password === '') {
          const err = 'Campo vazio';
          handleError(err);
        } else {
          signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              //const user = userCredential.user; userData
                navigation.replace("Tabs");
                AsyncStorage.setItem('user', JSON.stringify(userCredential.user));
              
                const getUserProfileData = async (userId) => {
                    const profileDataSnapshot = await getDocs(collection(doc(userCollectionRef, userId), 'data'));
                    
                    if (!profileDataSnapshot.empty) {
                        const profileDataDoc = profileDataSnapshot.docs[0];
                        const profileData = profileDataDoc.data();
                        return profileData;
                    }  else {
                        console.log("Dados do perfil não encontrados");
                    }
                };
      
                const userProfileDataPromise = getUserProfileData(userCredential.user.uid);
                userProfileDataPromise
                    .then((profileData) => {
                        if (profileData) {
                            setUser({
                                id: userCredential.user.uid,
                                email: userCredential.user.email,
                                emailVerified: userCredential.user.emailVerified,
                                username: profileData.username,
                                phoneNumber: profileData.phoneNumber,
                                firstName: profileData.firstName
                            })
                        } else {
                            console.log("Dados do perfil não encontrados");
                        }
                    })
                    .catch((error) => {
                        console.log("Erro ao obter dados do perfil:", error);
                });
            })
            .catch((err) => {
                const errorMessage = err.code;
                handleError(errorMessage);
            });
        }
    };

    const googleLogin = async () => {
        const provider = new auth;

        auth.signInWithPopup(provider).then((result) => {
            console.log(result);
        }).catch((error) => {
            console.log(error);
        });
    }

    return(
        <Container>
            <BoxImage>
                <Image source={logo} style={{ resizeMode: 'center', height: 250 }} />
            </BoxImage>
            <Form>
                <TextInput 
                    placeholder="Digite seu E-mail"
                    type="text"
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                />
                <SetPassword>
                    <TextInput
                        placeholder="Digite sua senha "
                        secureTextEntry={showPassoword} 
                        type="text"
                        onChangeText={(text) => setPassword(text)}
                        value={password}
                    />
                    <TouchableWithoutFeedback onPress={() => setShowPassword(!showPassoword)}>
                        {   
                            showPassoword === true
                            ? <Feather name="eye" size={20}/> 
                            : <Feather name="eye-off" size={20}/>
                        }
                    </TouchableWithoutFeedback>
                </SetPassword>
                <BoxChangePass>
                    <ButtonChangePass>
                        <Text>Esqueceu sua senha?</Text>
                    </ButtonChangePass>
                </BoxChangePass>
                {
                    error === true
                    ? <ErrorLogin text={errorMessage}/>
                    : <View style={{ height: 40 }}/>
                }
                <BoxChangePass>
                    <LoginBtn text='Fazer login' onPress={login}/>
                </BoxChangePass>
            </Form>
            <BoxSocial>
                <Wrapper>
                    <Text style={{ color: 'black' }}>Ou continue com</Text>
                </Wrapper>
                <ButtonsContent>
                    <ButtonAuth onPress={googleLogin}>
                        <Image source={googleLogo}/>
                    </ButtonAuth>
                    <ButtonAuth>
                        <Image source={facebookLogo}/>
                    </ButtonAuth>
                </ButtonsContent>
                <Wrapper>
                    <Text style={{ color: 'black' }}>Ainda nao é membro? </Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Register")}>
                        <Text style={{ color: '#6091cf' }}>Registre-se</Text>
                    </TouchableOpacity>
                </Wrapper>
            </BoxSocial>
        </Container>
    )
}
