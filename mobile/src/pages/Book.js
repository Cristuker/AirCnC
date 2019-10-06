import React, { useState } from 'react';
import { SafeAreaView,Text,TextInput, AsyncStorage, StyleSheet, TouchableOpacity,Alert } from 'react-native';

import api from '../services/api';

export default function Book({ navigation }){

    const [date,setDate] = useState('');
    const id = navigation.getParam('id');

    async function handeSubmit(){
        const user_id = await AsyncStorage.getItem('user');

        await api.post(`/spots/${id}/bookings`,{
            date
        },{
            headers: { user_id }
        })
        Alert.alert('Solicitação de reserva enviada!');

        navigation.navigate('List');
    }
    function handleCancel(){
        navigation.navigate('List');
    }

    return (
        <SafeAreaView style={styles.container} >
            <Text style={styles.label}>DATA DE INTERESSE *</Text>
                <TextInput 
                style={styles.input}
                placeholder="Qual data você quer reservar"
                placeholderTextColor="#999"
                autoCapitalize="none"
                autoCorrect={false}
                value={date}
                onChangeText={setDate}
                />

                <TouchableOpacity onPress={handeSubmit} style={styles.button} >
                    <Text style={styles.buttonText} >Solicitar Reserva</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleCancel} style={[styles.button,styles.cancelButton]} >
                    <Text style={styles.buttonText} >Cancelar</Text>
                </TouchableOpacity>
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    input:{
        borderWidth:1,
        borderColor:'#ddd',
        paddingHorizontal:20,
        fontSize:16,
        color: '#444',
        height: 44,
        marginBottom: 20,
        borderRadius:2
    },   
    button:{
        height:42,
        backgroundColor:'#f05a5b',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,
    },
    buttonText:{
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16,
    },
    label:{
        fontWeight: 'bold',
        color: '#444',
        marginBottom:8,
        marginTop: 50,
    },
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cancelButton:{
        backgroundColor:'#ccc',
        marginTop: 10,
    },
    container:{
        margin: 30,
        

    }
})