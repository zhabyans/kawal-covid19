import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';

const Profile = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.nama}>Username : {props.username}</Text>
            </View>
        </View>
    )
}
const mapStateToProps = (nilai) => {
    return {
        username: nilai.nama
    };
};

export default connect(mapStateToProps)(Profile)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    card: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'tomato',
        padding: 30
    },
    nama: {
        fontSize: 28
    }
})