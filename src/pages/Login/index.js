import React, { useEffect, useState } from "react";
import { Text } from "react-native";

import db from "../../api/databaseConnection";

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
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    useEffect(() => {

    }, []);

    const login = () => {
        db.auth().signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {

        const user = userCredential.user;
            console.log(user);
    })
        .catch((error) => {
            setError(true);
            const errorCode = error.code;
            const errorMessage = error.message;
        });
    }


    const entrar = () => {
        navigation.navigate("Tabs");
    }

    return(
        <Container>
            <BoxText>

            </BoxText>
            <BoxForm>
                <TextInput
                    placeholder="Email: "
                    type="text"
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                 />
                <TextInput 
                    placeholder="Senha: "
                    secureTextEntry={true}
                    type="text"
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                />
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
                        <Text style={{ color: '#1877f2' }}>Registre-se</Text>
                    </TouchableOpacity>
                </BoxDivisor>
            </BoxSocial>
        </Container>
    )
}

