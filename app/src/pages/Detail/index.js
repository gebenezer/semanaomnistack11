import React, { useImperativeHandle } from 'react';
import {Feather} from '@expo/vector-icons';
import {useNavigation, useRoute} from '@react-navigation/native';
import {View, Image, Text, TouchableOpacity, Linking} from 'react-native';

import * as MailComposer from 'expo-mail-composer';

//Estilos do Componente
import Style from './style';

//Imagens
import logoImg from '../../assets/logo.png';

export default function Detail(){
    const navigation = useNavigation();
    const route = useRoute();

    const message = 'Olá ADNA, estou entrando em contato pois gostaria de ajudar no caso "Cadelinha atropelada" com o valor de R$ 120,00';

    function navigationBack(){
        navigation.goBack();
    }

    function sendMail(){
        MailComposer.composeAsync({
            subject: 'Herói do caso: Cadelinha atropelada',
            recipients: ['contato.gebenezer@gmail.com'],
            body: message
        });
    }

    function sendWhatsapp(){
        Linking.openURL(`whatsapp://send?phone=5567984110772&text=${message}`);
    }

    return (
        <View style={Style.container}>
            <View style={Style.header}>
                <Image source={logoImg} />
                <TouchableOpacity onPress={navigationBack}>
                    <Feather name="arrow-left" size={28} color="#E02041" />
                </TouchableOpacity>
            </View>

            <View style={Style.incident}>
                <Text style={[Style.incidentProperty, {marginTop: 0}]}>ONG:</Text>
                <Text style={Style.incidentValue}>ADNA</Text>

                <Text style={Style.incidentProperty}>CASO:</Text>
                <Text style={Style.incidentValue}>Cadelinha atropelada</Text>

                <Text style={Style.incidentProperty}>VALOR:</Text>
                <Text style={Style.incidentValue}>R$ 120,00</Text>
            </View>

            <View style={Style.contactBox}>
                <Text style={[Style.incidentProperty, {marginTop: 0}]}>Salve o dia!</Text>
                <Text style={[Style.incidentProperty, {marginTop: 0}]}>Seja o herói desse caso.</Text>

                <Text style={Style.incidentValue}>Entre em contato: </Text>

                <View style={Style.actions}>
                    <TouchableOpacity
                        style={Style.action}
                        onPress={sendWhatsapp}
                    >
                        <Text style={Style.actionText}>WhatsApp</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={Style.action}
                        onPress={sendMail}
                    >
                        <Text style={Style.actionText}>E-mail</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}