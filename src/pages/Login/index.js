import React from "react";
import { Text, TouchableOpacity, Image } from "react-native";

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
    ButtonsContent
} from "./style";

import logo from '../../assets/images/logo.png'
import facebookLogo from '../../assets/icons/facebook-logo.png';
import googleLogo from '../../assets/icons/google-logo.png';


export function Login({ navigation }){

    const entrar = () => {
        navigation.navigate("Tabs");
    }

    return(
        <Container>
            <BoxText>
                <Image source={logo} style={{ resizeMode: 'center', height: 250 }}/>
            </BoxText>
            <BoxForm>
                <TextInput placeholder="Digite seu Email "/>
                <TextInput placeholder="Digite sua senha "/>
                <BoxChangePass>
                    <ButtonChangePass>
                        <Text>Esqueceu sua senha?</Text>
                    </ButtonChangePass>
                </BoxChangePass>
                <ButtonLogin onPress={entrar}>
                    <Text style={{ color: '#fee7e7' }} >Login</Text>
                </ButtonLogin>
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

