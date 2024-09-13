import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, TextInput, Alert } from 'react-native';
import Principal from "./principal";
import Home from "./home";
 
export default function Sobre() {
    const [page, setPage] = useState('sobre');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        Alert.alert('Login', `Usuário: ${username}\nSenha: ${password}`);
    };
 
    if (page === 'sobre') {
        return (
            <View style={styles.container}>
                <Image style={styles.usuario} source={require("../img/Vector.png")} />
                <Text style={styles.title}>Faça seu <Text style={styles.spam}>Login</Text></Text>
                <Text style={styles.label}>Usuário:</Text>
                <TextInput
                    style={styles.input}
                    value={username}
                    onChangeText={(text) => setUsername(text)}
                    placeholder="Digite seu usuário"
                />
                <Text style={styles.label}>Senha:</Text>
                <TextInput
                    style={styles.input}
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    placeholder="Digite sua senha"
                    secureTextEntry={true}
                />
                <View style={styles.lado}>
                    <TouchableOpacity style={styles.button2} onPress={() => setPage('home')}>
                        <Text style={styles.buttonText}>Voltar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => setPage('principal')}>
                        <Text style={styles.buttonText2}>Concluir</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    } else if (page === 'home') {
        return <Home/>;
    } else if (page === 'principal') {
        return <Principal/>;
    }
}
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 150,

    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#2c140a',
        marginBottom: 16,
        textAlign: 'center',
    },
    button: {
        backgroundColor: '#2c140a',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#003818',
        marginBottom: 20,
        marginHorizontal: 10,
    },
    button2: {
        backgroundColor: '#fff', 
        borderWidth: 1.5,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 4,
        marginBottom: 20,
        marginHorizontal: 10,
    },
    buttonText: {
        color: '#2c140a',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
 
    },
    buttonText2: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
   
    usuario: {
        width: 200,
        height: 200,
        marginTop: -90,
        marginBottom: 20,
 
    },
    label: {
        marginBottom: 8,
        fontSize: 18,
        color: '#2c140a',
        marginLeft: 10,
        
    },
    input: {
        width: '100%',
        height: '5%',
        borderColor: '#2c140a',
        borderWidth: 1.5,
        marginBottom: 50,
        paddingHorizontal: 8,
        borderRadius: 5,
        color: 'gray',
    },
    lado: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    spam: {
        color: '#2c140a',
    },
});