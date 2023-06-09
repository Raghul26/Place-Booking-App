import { StyleSheet, Text, Image, View, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';

const Header = () => {

    const types = [
        {
            id: "0",
            name: "Place"
        },
        {
            id: "1",
            name: "Hotel"
        },
        {
            id: "2",
            name: "Travel"
        },
        {
            id: "3",
            name: "Temple"
        },
    ];


    return (
        <View style={styles.Header}>
            <Image source={require('../assets/images/raimond-klavins-nXViEd5Qji8-unsplash.jpg')} style={{
                width: 390,
                height: 215
            }} />
            <LinearGradient colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.69)']} style={{
                position: 'absolute',
                width: '100%',
                height: 215,
                alignItems: "center",
                justifyContent: 'center',
                alignContent: 'center'
            }}>
                <Text style={styles.HeaderText}>
                    Let’s make your dream vacation.
                </Text>
            </LinearGradient>
            <View style={{ marginTop: 9, }} />
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{
                paddingLeft: 9
            }}>
                {types.map((item, index) => (
                    <TouchableOpacity activeOpacity={0.4} key={index} style={{ margin: 4, padding: 4, marginLeft: 19, width: 106, height: 45, backgroundColor: '#000', justifyContent: 'center', alignItems: 'center', borderRadius: 9 }}>
                        <Text style={{
                            color: "#fff",
                            fontSize: 19,
                            fontWeight: '400'
                        }}>{item.name}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View >
    )
}

export default Header

const styles = StyleSheet.create({
    Header: {
        //height: '100%',
        width: '100%'
    },
    HeaderText: {
        fontSize: 32,
        fontWeight: 'bold',
        fontSize: 32,
        textAlign: 'center',
        color: '#fff',
    }
})