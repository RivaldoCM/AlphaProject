import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { Profile, BoxImage, BoxInfos, Button, BoxIcon, BoxText } from "./style";

import Icon from "react-native-vector-icons/Feather";

export function Settings(){
    return(
        <View>
            <View>
                <TouchableOpacity>
                    <Profile>
                        <BoxImage>

                        </BoxImage>
                        <BoxInfos>
                            <Text>Rivaldo</Text>
                        </BoxInfos>
                    </Profile>
                </TouchableOpacity>
            </View>
            <View>
                <View>
                    <Button>
                        <BoxIcon>
                            <Icon name="lock" size={20} />
                        </BoxIcon>
                        <BoxText>
                            <Text>Conta</Text>
                            <Text>Conta</Text>
                        </BoxText>
                    </Button>
                    <Button>
                        <BoxIcon>
                            <Icon name="shield" size={20} />
                        </BoxIcon>
                        <Text>Privacidade</Text>
                    </Button>
                    <Button>
                        <BoxIcon>
                            <Icon name="lock" size={20} />
                        </BoxIcon>
                        <Text>Temas</Text>
                    </Button>
                    <Button>
                        <BoxIcon>
                            <Icon name="log-out" size={20} />
                        </BoxIcon>
                        <BoxText>
                            <Text>Logout</Text>
                            <Text>Clique aqui para sair de sua conta</Text>
                        </BoxText>
                    </Button>
                </View>
            </View>
        </View>
    )
}