import React, { useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { WebView } from 'react-native-webview'

export default ({ route }) => {

    return (
        <WebView startInLoadingState={true} renderLoading={() => <Text style={{ fontSize: 60, flex: 1, color: 'red' }}>Loading Halaman</Text>} source={{ uri: route.params.pesan.url }} />
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },
    author: {
        fontSize: 18,
        fontStyle: 'italic',
        color: '#4CAF50'
    },
    post: {
        marginTop: 20,
        fontSize: 16
    }
})