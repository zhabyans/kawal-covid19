import React, { useState } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import { TextInput, TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import { connect } from 'react-redux';

const Login = (props) => {
    const [password, setPassword] = useState();

    const clearText = () => {
        _textInput.setNativeProps({ text: '' });
    }

    const isLogin = () => {
        if (password == 12345678) {
            props.navigation.replace('Beranda')
            props.isLogin
        } else {
            alert('password salah, cari password pada file Readme.md')
        }
    }

    return (
        <ScrollView style={styles.containerScroll}>
            <View style={styles.container}>
                <Text style={styles.title}>KAWAL <Text style={styles.titleColor}>COVID19</Text></Text>
                <Text style={styles.inputHeader}>MASUK</Text>
                <TextInput style={styles.input} onChangeText={kirim => props.nameHandle(kirim)} placeholder='Masukkan Username' />
                <TextInput ref={component => _textInput = component} style={styles.input} onChangeText={(a) => setPassword(a)} placeholder='Masukkan Password' secureTextEntry={true} />
                <TouchableOpacity style={styles.buttonInput} onPress={() => {
                    isLogin()
                    clearText()
                }
                }>
                    <Text>Masuk</Text>
                </TouchableOpacity>
                <Text style={styles.lostPassword}>Lupa Password?</Text>
            </View>
        </ScrollView>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        nameHandle: (terima) => {
            dispatch({ type: "USER_INPUT", payload: terima })
        },
        isLogin: () => {
            dispatch({ type: "LOGIN_SUCCESS" })
        }
    };
};


export default connect(null, mapDispatchToProps)(Login)

const styles = StyleSheet.create({
    containerScroll: {
        flex: 1,
        backgroundColor: 'white',
    },
    container: {
        padding: 90,
        alignItems: 'center',
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        marginBottom: 100

    },
    titleColor: {
        color: '#388E3C'
    },
    inputHeader: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    input: {
        backgroundColor: '#F6F6F6',
        borderColor: '#E8E8E8',
        borderWidth: 1,
        marginTop: 14,
        width: 300,
        borderRadius: 7
    },
    buttonInput: {
        backgroundColor: '#4CAF50',
        marginTop: 80,
        width: 300,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 45 / 2


    },
    lostPassword: {
        marginTop: 10,
        color: '#4CAF50',
        fontWeight: 'bold'
    }

})
