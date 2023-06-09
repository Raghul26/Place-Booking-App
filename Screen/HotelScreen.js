import { StyleSheet, Text, View, Image, FlatList } from 'react-native'
import React, { useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Pressable } from 'react-native'
import HorizontalDatepicker from '@awrminkhodaei/react-native-horizontal-datepicker';
import Hotel from "../data/Hotel"

const HotelScreen = () => {
    const navigation = useNavigation();
    const route = useRoute()
    const [SelectedDate, setSelectedDate] = useState("");
    const Hoteldata = Hotel;
    const [Hotels, setHotels] = useState([])
    const [seatno, setseatno] = useState([])
    const [desname, setdesname] = useState("");
    console.log(Hotels);
    return (
        <View style={styles.container}>
            <View style={styles.Header}>
                <Pressable onPress={() => navigation.navigate("Home")}>
                    <Image source={require('../assets/images/icons8-left-100.png')} style={{
                        width: 38,
                        height: 45,
                    }} />
                </Pressable>
                <View style={{
                    paddingLeft: 12,
                }}>
                    <Text style={{
                        color: '#fff',
                        fontSize: 19,
                        fontWeight: '900'
                    }}> {route.params.name}</Text>
                </View>
            </View>
            <HorizontalDatepicker
                mode="date"
                startDate={new Date('2023-02-8')}
                endDate={new Date('2023-04-30')}
                initialSelectedDate={new Date('2020-08-22')}
                onSelectedDateChange={(date) => setSelectedDate(date)}
                selectedItemWidth={170}
                unselectedItemWidth={45}
                itemHeight={45}
                itemRadius={10}
                selectedItemTextStyle={styles.selectedItemTextStyle}
                unselectedItemTextStyle={styles.selectedItemTextStyle}
                selectedItemBackgroundColor="#3A4C26"
                unselectedItemBackgroundColor="#000"
                flatListContainerStyle={styles.flatListContainerStyle}
            />

            {Hoteldata.map((item, index) => (
                <View style={styles.Headertext}>
                    <Pressable style={{
                        flexDirection: "row",
                        alignItems: 'center',
                        justifyContent: 'space-around',
                    }} onPress={() => {
                        setHotels(item.name)
                        setseatno(item.seatno)
                        setdesname(item.desname)
                    }}>
                        <View key={index}>
                            <Text style={{
                                color: '#fff',
                                fontSize: 19,
                                fontWeight: '500'
                            }}>
                                {item.name}
                            </Text>
                        </View>
                        <View>
                            <Image source={require("../assets/images/icons8-expand-arrow-100.png")} style={{
                                width: 29,
                                height: 29,
                            }} />
                        </View>
                    </Pressable>
                    <View style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        alignContent: 'center',
                        marginTop: 19
                    }}>
                        {Hotels.includes(item.name) ? (
                            <FlatList numColumns='3' data={item.movietime} renderItem={({ item }) =>
                                <Pressable style={{
                                    backgroundColor: "#000",
                                    width: 90,
                                    height: 45,
                                    margin: 9,
                                    borderRadius: 9,
                                    alignItems: "center",
                                    justifyContent: 'center'
                                }} onPress={() => navigation.navigate("HotelBooking", {
                                    Hotels: Hotels,
                                    name: route.params.name,
                                    timeselected: item,
                                    seatno: seatno,
                                    desname: desname,
                                    image: route.params.image,
                                    SelectedDate: SelectedDate
                                })}>
                                    <Text style={{
                                        color: "#fff",
                                        padding: 0,
                                        fontSize: 19
                                    }}>{item}</Text>
                                </Pressable>} />
                        ) : (
                            null
                        )}
                    </View>

                </View>
            ))}
        </View >
    )
}

export default HotelScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#283618',
        width: '100%',
    },
    Header: {
        margin: 9,
        marginTop: 29,
        flexDirection: 'row',
        alignItems: 'center',
    },
    selectedItemTextStyle: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 19
    },
    flatListContainerStyle: {
        backgroundColor: '#283618',
        paddingLeft: 19,
        marginBottom: 190
    },
    Headertext: {
        height: "85%",
        paddingTop: 10
    }
})