import { StyleSheet, Text, View, Image, ImageBackground, Pressable } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import moment from 'moment'
import { LinearGradient } from 'expo-linear-gradient';

const TicketScreen = () => {
    const route = useRoute()
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={{ marginTop: 19 }}>
                <View style={{ flexDirection: 'column', alignItems: "center", }}>
                    <Text style={{ color: '#fff', fontSize: 20, fontWeight: '600', marginTop: 19, marginBottom: 4 }}>{route.params.name}</Text>
                    <Text style={{ color: '#fff', fontSize: 19 }}>{route.params.timmeselected}</Text>
                </View>


                <View style={{ justifyContent: "center", alignItems: "center", position: 'relative', marginTop: 29 }}>
                    <ImageBackground imageStyle={{ borderRadius: 9 }} style={{ width: 290, height: 390, borderRadius: 0 }} source={{ uri: route.params.image }}>
                        <LinearGradient colors={['transparent', 'transparent', '#000']} locations={[0, 0.1, 9]} start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }} style={{ width: '100%', height: "100%", borderRadius: 9 }}>
                            <Text style={{ color: '#fff', fontSize: 20, fontWeight: '500', textAlign: 'center', position: 'relative', top: '50%' }}>{route.params.name}</Text>

                            <View style={{ flexDirection: 'column', position: 'relative', top: '79%', marginLeft: 9 }}>
                                <View style={{ flexDirection: 'row', paddingBottom: 4 }}>
                                    <Text style={{ color: '#fff' }}>Selected Data : </Text>
                                    <Text style={{ color: '#fff' }}>{moment(route.params.SelectedDate).utc().format("MM/DD/YYYY")}</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ color: '#fff' }}>CheckIn Day's : </Text>
                                    <Text style={{ color: '#fff' }}>{route.params.seats}</Text>
                                </View>
                            </View>


                        </LinearGradient>
                    </ImageBackground>
                </View>
                <Pressable style={{ justifyContent: 'center', alignItems: 'center', marginVertical: 29 }} onPress={() => navigation.navigate("Home")}>
                    <Text style={{ backgroundColor: '#000', color: "#fff", paddingVertical: 9, paddingHorizontal: 29, fontSize: 19, borderRadius: 4 }}>Home</Text>
                </Pressable>


            </View>
        </View>
    )
}

export default TicketScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#283618',
        width: '100%',
        height: '100%'
    },
})