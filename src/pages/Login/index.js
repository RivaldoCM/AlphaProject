import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, TouchableWithoutFeedback } from "react-native";

import { auth } from "../../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

import { 
    BoxForm, 
    BoxText, 
    BoxSocial, 
    Container,
    TextInput,
    ButtonChangePass,
    BoxChangePass,
    ButtonAuth,
    BoxDivisor,
    ButtonsContent,
    SetPassword,
} from "./style";

import { LoginBtn } from "../../components/buttons";
import { ErrorLogin } from "../../components/errors/ErrorLogin";

import logo from '../../assets/images/logo.png'
import facebookLogo from '../../assets/icons/facebook-logo.png';
import googleLogo from '../../assets/icons/google-logo.png';
import Feather from 'react-native-vector-icons/Feather';

export function Login({ navigation }){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassoword, setShowPassword] = useState(false);
    const [error, setError] = useState(false);

    //component will unmount in 5 seg
    useEffect(()=> {
        setTimeout(() => {
            setError(false);
        }, 5000);
    }, [error]);

    const login = () => {

        if (email === '' || password === ''){
            setError(true);
            console.log(error)
        }else{
            signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
    
            const user = userCredential.user; //userData
            navigation.navigate("Tabs");
        })
            .catch((err) => {
                setError(true);
                const errorCode = err.code;
                const errorMessage = err.message;
            });
        }
    }

    const googleLogin = () => {
        firebase.auth().signInWithPopup(provider).then((result) => {
            console.log(result);
        }).catch((error) => {
            console.log(error);
        });
    }
    return(
        <Container>
            <BoxText>
                <Image source={logo} style={{ resizeMode: 'center', height: 250 }} />
            </BoxText>
            <BoxForm>
                <TextInput 
                    placeholder="Digite seu E-mail "
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
                    ?  
                        <ErrorLogin text=' E-mail ou senha estão incorretos'/>
                    : 
                        <View style={{ height: 40 }}/>
                }
                <LoginBtn text='Fazer login' onPress={login}/>
            </BoxForm>
            <BoxSocial>
                <BoxDivisor>
                    <Text style={{ color: 'black' }}>Ou continue com</Text>
                </BoxDivisor>
                <ButtonsContent>
                    <ButtonAuth onPress={googleLogin}>
                        <Image source={googleLogo}/>
                    </ButtonAuth>
                    <ButtonAuth>
                        <Image source={facebookLogo}/>
                    </ButtonAuth>
                </ButtonsContent>
                <BoxDivisor>
                    <Text style={{ color: 'black' }}>Ainda nao é membro? </Text>
                    <TouchableOpacity>
                        <Text style={{ color: '#6091cf' }}>Registre-se</Text>
                    </TouchableOpacity>
                </BoxDivisor>
            </BoxSocial>
        </Container>
    )
}

