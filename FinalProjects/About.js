import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.gambar} />
                <Text style={styles.nama}>M. Zhafran Zhabyans</Text>
                <Text style={styles.bio}>Programmer</Text>
                <Text style={styles.domisili}>Lumajang</Text>
            </View>
            <View style={styles.content}>
                <Text style={styles.kontak}>Kontak</Text>
                <View style={styles.row}>
                    <View style={styles.column}>
                        <Image style={{ width: 80, height: 80 }} source={{ uri: 'https://img.icons8.com/cute-clipart/512/000000/facebook.png' }} />
                        <Text style={styles.link}>Zhafran Zhabyans</Text>
                    </View>
                    <View style={styles.column}>
                        <Image style={{ width: 80, height: 80 }} source={{ uri: 'https://img.icons8.com/cute-clipart/512/000000/twitter.png' }} />
                        <Text style={styles.link}>@zhabyans</Text>
                    </View>
                    <View style={styles.column}>
                        <Image style={{ width: 80, height: 80 }} source={{ uri: 'https://img.icons8.com/cute-clipart/512/000000/facebook-messenger.png' }} />
                        <Text style={styles.link}>@zhabyans</Text>
                    </View>
                    <View style={styles.column}>
                        <Image style={{ width: 80, height: 80 }} source={{ uri: 'https://img.icons8.com/cute-clipart/512/000000/instagram-new.png' }} />
                        <Text style={styles.link}>@zhabyans</Text>
                    </View>

                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 70
    },
    gambar: {
        width: 157,
        height: 157,
        borderRadius: 157 / 2,
        backgroundColor: 'grey',
    },
    header: {
        alignItems: 'center',
        margin: 25
    },
    nama: {
        fontSize: 26,
        fontWeight: 'bold',
        letterSpacing: 1,
        textTransform: 'uppercase',
        marginVertical: 10
    },
    bio: {
        fontWeight: 'bold',
        fontSize: 16,
        marginVertical: 5
    },
    domisili: {
        color: '#388E3C'
    },
    content: {
        padding: 20
    },

    kontak: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 20
    },
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    column: {
        alignItems: 'center',
        flex: 1,
        flexBasis: '40%',
        margin: 10
    },
    link: {
        fontWeight: 'bold'
    }

})