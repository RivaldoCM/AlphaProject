import React from "react";
import { Text, StyleSheet } from "react-native";

import { 
    BoxForm, 
    BoxText, 
    BoxSocial, 
    Container,
    TextInput,
    ButtonLogin ,
    ButtonChangePass,
    BoxChangePass,
    ButtonAuth
} from "./style";

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
                <ButtonAuth>

                </ButtonAuth>
                <ButtonAuth>
                    
                </ButtonAuth>
                <ButtonAuth>
                    
                </ButtonAuth>
            </BoxSocial>
        </Container>
    )
}

