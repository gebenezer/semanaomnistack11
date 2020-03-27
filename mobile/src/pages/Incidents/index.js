import React from 'react';
import {View, Image, Text} from 'react-native';

//Estilos do componete
import style from './style';

//Imagens
import logoImg from '../../assets/logo.png';

export default function Incidents(){
    return (
        <View style={style.container}>
            <View style={style.header}>
                <Image source={logoImg} />
                <Text style={style.headerText}>
                    Total de <Text style={style.headerTextBold}>0 casos</Text>.
                </Text>
            </View>

            <Text style={style.title}>Bem vindo!</Text>
            <Text style={style.content}>Escolha um dos casos abaixo e salve o dia.</Text>
        </View>
    );
}