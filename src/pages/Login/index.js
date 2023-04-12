import React, { useState } from "react";
import { Text, TouchableOpacity, Image, TouchableWithoutFeedback } from "react-native";

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
    BoxError
} from "./style";

import { LoginBtn } from "../../components/buttons";

import logo from '../../assets/images/logo.png'
import facebookLogo from '../../assets/icons/facebook-logo.png';
import googleLogo from '../../assets/icons/google-logo.png';

import Feather from 'react-native-vector-icons/Feather';


export function Login({ navigation }){
    const [showPassoword, setShowPassword] = useState(false);

    return(
        <Container>
            <BoxText>
                <Image source={logo} style={{ resizeMode: 'center', height: 250 }} />
            </BoxText>
            <BoxForm>
                <TextInput placeholder="Digite seu e-mail "/>
                <SetPassword>
                    <TextInput
                        secureTextEntry={showPassoword} 
                        placeholder="Digite sua senha "
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
                <BoxError>
                    <Feather name="alert-circle" size={25} />
                    <Text style={{ color: '#363636' }}> Login ou senha estao errados</Text>
                </BoxError>
                <LoginBtn text="Fazer login no aplicativo"/>
            </BoxForm>
            <BoxSocial>
                <BoxDivisor>
                    <Text style={{ color: 'black' }}>Ou continue com</Text>
                </BoxDivisor>
                <ButtonsContent>
                    <ButtonAuth>
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

