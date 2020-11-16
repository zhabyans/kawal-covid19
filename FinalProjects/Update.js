import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Axios from 'axios';


export default () => {
    const [isLoadingIndo, setLoadingIndo] = useState(true);
    const [isLoadingProv, setLoadingProv] = useState(true);
    const [dataIndo, setDataIndo] = useState([]);
    const [dataProv, setDataProv] = useState([]);

    useEffect(() => {
        getDataIndo();
        getDataProv();
    }, []);

    const getDataProv = async () => {
        try {
            let response = await Axios.get('https://api.kawalcorona.com/indonesia/provinsi/');
            setDataProv(response.data)
            setLoadingProv(false)
        } catch (error) {
            console.log(error)
        }
    }

    const getDataIndo = async () => {
        try {
            const response = await Axios.get('https://api.kawalcorona.com/indonesia');
            setDataIndo(response.data)
            setLoadingIndo(false)
        } catch (error) {
            console.log(error)
        }
    }

    const ListItemRender = ({ isi }) => (
        <View style={styles.list}>
            <Text style={styles.listProvinsi}>{isi.Provinsi}</Text>
            <Text style={styles.listPositif}>Positif : {isi.Kasus_Posi}</Text>
            <Text style={styles.listMati}>Meninggal : {isi.Kasus_Meni}</Text>
        </View>
    )

    return (
        <View style={styles.container}>


            <FlatList
                ListHeaderComponent={<>
                    <Text style={styles.title}>Covid19 di Indonesia</Text>
                    <View style={styles.row}>
                        <View style={styles.card}>
                            <Text style={styles.cardTitle}>Total Positif</Text>
                            <Text style={styles.cardValue}>{isLoadingIndo ? <Text style={{ fontSize: 14, color: 'red' }}>Sedang Memuat</Text> : dataIndo[0].positif}</Text>
                        </View>
                        <View style={styles.card}>
                            <Text style={styles.cardTitle}>Total Sembuh</Text>
                            <Text style={styles.cardValue}>{isLoadingIndo ? <Text style={{ fontSize: 14, color: 'red' }}>Sedang Memuat</Text> : dataIndo[0].sembuh}</Text>
                        </View>
                        <View style={styles.card}>
                            <Text style={styles.cardTitle}>Total Meninggal</Text>
                            <Text style={styles.cardValue}>{isLoadingIndo ? <Text style={{ fontSize: 14, color: 'red' }}>Sedang Memuat</Text> : dataIndo[0].meninggal}</Text>
                        </View>
                        <View style={styles.card}>
                            <Text style={styles.cardTitle}>Total Dirawat</Text>
                            <Text style={styles.cardValue}>{isLoadingIndo ? <Text style={{ fontSize: 14, color: 'red' }}>Sedang Memuat</Text> : dataIndo[0].dirawat}</Text>
                        </View>
                    </View>
                    <Text style={styles.title}>Covid19 di Tiap Provinsi</Text>
                </>
                }
                data={dataProv}
                keyExtractor={item => item.attributes.FID.toString()}
                renderItem={({ item }) => (
                    <ListItemRender isi={item.attributes} />
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5F5F5'
    },
    title: {
        fontSize: 18,
        margin: 15
    },
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
    },
    card: {
        borderWidth: 1,
        borderColor: '#ddd',
        backgroundColor: 'white',
        padding: 15,
        flexGrow: 1,
        flexBasis: '45%',
        margin: 10,
        alignItems: 'center'

    },
    cardTitle: {
        fontSize: 16,
        paddingHorizontal: 10
    },
    cardValue: {
        fontSize: 28,
        paddingHorizontal: 10
    },
    list: {
        backgroundColor: 'white',
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        borderBottomStartRadius: 20,
        borderBottomEndRadius: 20
    },
    listProvinsi: {
        letterSpacing: 2,
        textTransform: 'uppercase',
        marginBottom: 10

    },
    listPositif: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 10
    },
    listMati: {
        fontStyle: 'italic',
        marginLeft: 10
    }

})