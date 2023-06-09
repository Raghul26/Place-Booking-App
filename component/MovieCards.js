import { StyleSheet, Text, View, FlatList, Pressable, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import movies from '../data/movies'
import Header from './Header';
import { useNavigation } from '@react-navigation/native';

const MovieCards = () => {
    const data = movies;
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <FlatList
                ListHeaderComponent={Header}
                numColumns={2}
                data={data}
                renderItem={({ item }) => (
                    <Pressable style={{
                        margin: 10,
                        marginTop: 19
                    }}>
                        <Image source={{ uri: item.image }} style={{
                            width: 177, height: 239, borderRadius: 4
                        }} />
                        <Text style={{
                            color: '#fff',
                        }}>{item.name}</Text>
                        {/* <Text style={{
                            color: '#fff'
                        }}>{item.num}</Text> */}
                        <Text style={{
                            color: '#fff',
                            paddingRight: 9
                        }}>{item.Price} <Image source={require("../assets/images/star.png")} style={{
                            width: 9,
                            height: 9,
                        }} /></Text>
                        <TouchableOpacity activeOpacity={0.4} onPress={() => navigation.navigate("Hotel", {
                            name: item.name,
                            image: item.image
                        })} style={{
                            backgroundColor: '#000',
                            width: 80,
                            height: 29,
                            marginTop: 12,
                            borderRadius: 4,
                        }}>
                            <Text style={{
                                color: '#fff',
                                fontSize: 19,
                                textAlign: 'center'
                            }}>Book</Text>
                        </TouchableOpacity>
                    </Pressable>
                )}
            />
        </View>
    )
}

export default MovieCards

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#283618',
        width: '100%'
    },
})