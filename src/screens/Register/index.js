import React, { useState } from "react";
import { TextInput, TouchableOpacity } from "react-native";
import { View, Text } from "react-native";


import { 
    BoxIcon, 
    BoxInput, 
    Container, 
    Form 
} 
from "./style";

import Icon from "react-native-vector-icons/Feather";

export function Register(){

    const [email, setEmail] = useState('');
    const [password, setPassoword] = useState('');
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [userName, setUserName] = useState('');

    const register = () => {
        if(email === '' || password === '' || name === '' || lastName === '' || userName === ''){
            console.log('vazio');
        }else{
            
        }
    }

    return(
        <View>
            <Form>
                <Container>
                    <View>
                        <Text>Nome de usuario</Text>
                    </View>
                    <BoxInput>
                        <BoxIcon>
                            <Icon name="user" size={20} />
                        </BoxIcon>
                        <View>
                            <TextInput 
                                type="text"
                                onChangeText={(text) => setUserName(text)}
                                value={userName}
                            >

                            </TextInput>
                        </View>
                    </BoxInput>
                </Container>
                <Container flexDirection>
                    <Container>
                        <View>
                            <Text>Nome</Text>
                        </View>
                        <BoxInput>
                            <BoxIcon width>
                                <Icon name="user" size={20} />
                            </BoxIcon>
                            <View>
                                <TextInput
                                    type="text"
                                    onChangeText={(text) => setName(text)}
                                    value={name}
                                >

                                </TextInput>
                            </View>
                        </BoxInput>
                    </Container>
                    <Container>
                        <View>
                            <Text>Sobrenome</Text>
                        </View>
                        <BoxInput>
                            <BoxIcon width>
                                <Icon name="user" size={20} />
                            </BoxIcon>
                            <View>
                                <TextInput
                                    type="text"
                                    onChangeText={(text) => setLastName(text)}
                                    value={lastName}
                                >

                                </TextInput>
                            </View>
                        </BoxInput>
                    </Container>
                </Container>
                <Container>
                        <View>
                            <Text>Email</Text>
                        </View>
                        <BoxInput>
                            <BoxIcon>
                                <Icon name="mail" size={20} />
                            </BoxIcon>
                            <View>
                                <TextInput
                                    type="text"
                                    onChangeText={(text) => setEmail(text)}
                                    value={email}
                                >

                                </TextInput>
                            </View>
                        </BoxInput>
                    </Container>
                <Container>
                        <View>
                            <Text>Senha</Text>
                        </View>
                        <BoxInput>
                            <BoxIcon>
                                <Icon name="lock" size={20} />
                            </BoxIcon>
                            <View>
                                <TextInput
                                    type="text"
                                    onChangeText={(text) => setPassoword(text)}
                                    value={password}
                                >

                                </TextInput>
                            </View>
                        </BoxInput>
                    </Container>
                <TouchableOpacity onPress={register}>
                    <Text>Registrar-se</Text>
                </TouchableOpacity>
            </Form>
        </View>
    )
}