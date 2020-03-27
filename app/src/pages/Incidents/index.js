import React, { useState, useEffect} from 'react';
import {Feather} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import {View, FlatList, Image, Text, TouchableOpacity} from 'react-native';

//API
import api from '../../services/api';

//Estilos do Componente
import Style from './style';

//Imagens
import logoImg from '../../assets/logo.png';

export default function Incidents(){
    const [incidents, setIncidents] = useState([]);
    const [total, setTotal] = useState(0);
    const navigation = useNavigation();

    function navigateToDetail(incident){
        navigation.navigate('Detail', {incident});
    }

    async function loadIncidents(){
        const res = await api.get('incidents');
        setIncidents(res.data);
        setTotal(res.headers['x-total-count']);
    }

    useEffect(() => {
        loadIncidents();
    }, []);

    return (
        <View style={Style.container}>
            <View style={Style.header}>
                <Image source={logoImg} />
                <Text style={Style.headerTitle}>
                    Total de <Text style={Style.headerTextBold}>{total} casos</Text>.
                </Text>
            </View>

            <Text style={Style.title}>Bem Vindo!</Text>
            <Text style={Style.content}>Escolha um dos casos abaixo e salve o dia.</Text>

            <FlatList 
                data={incidents}
                style={Style.incidentList}
                keyExtractor={incident => String(incident.id)}
                showsVerticalScrollIndicator={false}
                renderItem={({item: incident}) => (
                    <View style={Style.incident}>
                        <Text style={Style.incidentProperty}>ONG:</Text>
                        <Text style={Style.incidentValue}>{incident.name}</Text>

                        <Text style={Style.incidentProperty}>CASO:</Text>
                        <Text style={Style.incidentValue}>{incident.title}</Text>

                        <Text style={Style.incidentProperty}>VALOR:</Text>
                        <Text style={Style.incidentValue}>{incident.value}</Text>

                        <TouchableOpacity
                            style={Style.detailsButton}
                            onPress={() => navigateToDetail(incident)}
                        >
                            <Text style={Style.detailsButtonText}>Ver mais detalhes</Text>
                            <Feather name="arrow-right" size={16} color="#E02041" />
                        </TouchableOpacity>
                    </View>
                )}
            />
                
        </View>
    );
}