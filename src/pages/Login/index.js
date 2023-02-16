import React from "react";
import { Text } from "react-native";

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

import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from "react-native";


export function Login({ navigation }){

    const entrar = () => {
        navigation.navigate("Tabs");
    }

    return(
        <Container>
            <BoxText>

            </BoxText>
            <BoxForm>
                <TextInput placeholder="Email: "/>
                <TextInput placeholder="Senha: "/>
                <BoxChangePass>
                    <ButtonChangePass>
                        <Text>Esqueceu sua senha?</Text>
                    </ButtonChangePass>
                </BoxChangePass>
                <ButtonLogin onPress={entrar}>
                    <Text>Login</Text>
                </ButtonLogin>
            </BoxForm>
            <BoxSocial>
                <BoxDivisor>
                    <Text style={{ color: 'black' }}>Ou continue com</Text>
                </BoxDivisor>
                <ButtonsContent>
                    <ButtonAuth>
                        <Icon name="logo-facebook" size={35} color='#1a78f1' borderRadius={5} />
                    </ButtonAuth>
                    <ButtonAuth>
                        <Icon name="logo-apple" size={35} color='#38393b'/>
                    </ButtonAuth>
                    <ButtonAuth>
                        <Icon name="logo-google" size={35} color='#e24136'/>
                    </ButtonAuth>
                </ButtonsContent>
                <BoxDivisor>
                    <Text style={{ color: 'black' }}>Ainda nao é membro? </Text>
                    <TouchableOpacity>
                        <Text style={{ color: 'black' }}>Registre-se</Text>
                    </TouchableOpacity>
                </BoxDivisor>
            </BoxSocial>
        </Container>
    )
}

