import React, { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import { View, Text } from "react-native";

import { TextInputMask } from "react-native-masked-text"; 

import { auth, db } from "../../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, doc, setDoc } from "firebase/firestore";

import { 
    BoxIcon, 
    BoxInput, 
    Container, 
    Form,
    TextInput
} 
from "./style";
import Icon from "react-native-vector-icons/Feather";

export function Register(){

    const [email, setEmail] = useState('');
    const [password, setPassoword] = useState('');
    const [firstname, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [userName, setUserName] = useState('');
    const [phoneNumer, setPhoneNumber] = useState('');

    const userCollectionRef = collection(db, 'users');
      
    const register = async () => {
        if(email === '' || password === '' || fisrtname === '' || lastName === '' || userName === ''){
            console.log('vazio');
        }else{
            await createUserWithEmailAndPassword(auth, email, password).then(
                async (res) => {
                    try{
                        await setDoc(doc(userCollectionRef, res.user.uid), {
                            username: userName,
                            fullName: fisrtname.concat(' ', lastName),
                            email: email,
                        });
                    } catch(err){
                        console.log(err);
                    }
                }
            )
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
                        <TextInput 
                            type="text"
                            onChangeText={(text) => setUserName(text)}
                            value={userName}
                        >

                        </TextInput>
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
                            <TextInput 
                                width
                                type="text"
                                onChangeText={(text) => setFirstName(text)}
                                value={firstname}
                            >
                            </TextInput>
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
                            <TextInput 
                                width
                                type="text"
                                onChangeText={(text) => setLastName(text)}
                                value={lastName}
                            >
                            </TextInput>
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
                        <TextInput
                        
                            type="text"
                            onChangeText={(text) => setEmail(text)}
                            value={email}
                        >
                        </TextInput>
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
                                <TextInput
                                    placeholder="Digite sua senha"
                                    type="text"
                                    onChangeText={(text) => setPassoword(text)}
                                    value={password}
                                >
                                </TextInput>
                        </BoxInput>
                    </Container>
                    <Container>
                        <View>
                            <Text>Número de telefone</Text>
                        </View>
                        <BoxInput>
                            <BoxIcon>
                                <Icon name="phone" size={20} />
                            </BoxIcon>
                            <TextInputMask
                                style={{ width: 250 }}
                                type={'cel-phone'}
                                options={{
                                    maskType: 'BRL',
                                    withDDD: true,
                                    dddMask: '(99) '
                                }}
                                onChangeText={(text) => setPhoneNumber(text)}
                                value={phoneNumer}
                            >
                            </TextInputMask>
                        </BoxInput>
                    </Container>
                <TouchableOpacity onPress={register}>
                    <Text>Criar conta</Text>
                </TouchableOpacity>
            </Form>
        </View>
    )
}