import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, TouchableWithoutFeedback } from "react-native";

import firebase from "../../api/databaseConnection";

import { 
    BoxForm, 
    BoxText, 
    BoxSocial, 
    Container,
    TextInput,
    ButtonLogin ,
    ButtonChangePass,
    BoxChangePass,
    ButtonAuth,
    BoxDivisor,
    ButtonsContent,
    SetPassword,
    BoxError
} from "./style";

import logo from '../../assets/images/logo.png'
import facebookLogo from '../../assets/icons/facebook-logo.png';
import googleLogo from '../../assets/icons/google-logo.png';
import Feather from 'react-native-vector-icons/Feather';


export function Login({ navigation }){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassoword, setShowPassword] = useState(false);
    const [error, setError] = useState(false);

    const provider = new firebase.auth.GoogleAuthProvider();

    const login = () => {

        if (email === '' || password === ''){
            setError(true);
        }else{
            firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
    
            const user = userCredential.user;
            navigation.navigate("Tabs");
        })
            .catch((error) => {
                setError(true);
                const errorCode = error.code;
                const errorMessage = error.message;
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
                        <BoxError>
                            <Feather name="alert-circle" size={25} />
                            <Text style={{ color: '#363636' }}> Email ou senha estão incorretos</Text>
                        </BoxError>
                    : 
                        <View style={{ height: 40 }}/>
                }
                <ButtonLogin onPress={login}>
                    <Text style={{ color: '#fee7e7' }}>Login</Text>
                </ButtonLogin>
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

