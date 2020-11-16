import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ActivityIndicator, FlatList } from 'react-native';
import Axios from 'axios';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default ({ navigation }) => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        try {
            let response = await Axios.get('http://newsapi.org/v2/top-headlines?country=id&category=health&apiKey=3ffbf975d6294d1b94264b6b921f6fc0');
            setData(response.data.articles)
            setLoading(false)
        } catch (error) {
            console.log(error)
        }
    }

    const ListItemRender = ({ isi }) => {

        let time = isi.publishedAt.substring(11, 19);

        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => navigation.push('detail', { pesan: isi })}>
                    <View style={styles.containerRow}>
                        <Image style={styles.image} source={isi.urlToImage ? { uri: isi.urlToImage } : null} />
                        <View style={styles.containerColumn}>
                            <View style={styles.containerRowTitle}>
                                <Text style={styles.judulBerita} numberOfLines={2}>{isi.title}</Text>
                                <Text style={styles.waktu}>{time}</Text>
                            </View>
                            <Text numberOfLines={3} style={styles.isiBerita}>{isi.description}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <View>
            {isLoading ? <Text style={{ fontSize: 60 }}>Sedang Memuat</Text> : (
                <FlatList
                    data={data}
                    keyExtractor={item => item.url}
                    renderItem={({ item }) => (
                        <ListItemRender isi={item} />
                    )}
                />
            )
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
    },
    containerRow: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#DDD',
        borderBottomStartRadius: 20,
        borderBottomEndRadius: 20,
        paddingVertical: 15,
    },
    image: {
        width: 75,
        height: 75,
        backgroundColor: 'grey',
        margin: 10,
        borderRadius: 10
    },
    containerColumn: {
        flex: 1,
        justifyContent: 'center'
    },
    judulBerita: {
        flex: 1,
        fontSize: 18,
        fontWeight: 'bold'
    },
    isiBerita: {
        paddingRight: 10
    },
    waktu: {
        paddingRight: 15,
        color: '#999'
    },
    containerRowTitle: {
        marginBottom: 5,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }


})